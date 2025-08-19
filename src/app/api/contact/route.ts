import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  phone: string;
  postalCode: string;
  message: string;
}

// Konfiguracja nodemailer (używamy Roundcube/Cyberfolks SMTP)
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT || '587'); // domyślnie port 587 (częściej otwarty)
  const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;
  
  // Alternatywne hosty SMTP dla Cyberfolks (na podstawie informacji serwera)
  const possibleHosts = [
    process.env.SMTP_HOST,
    's148.cyber-folks.pl',   // prawdziwy serwer poczty z panelu
    'mail.roletmix.vot.pl',  // MX rekord (może przekierować)
    'smtp.s148.cyber-folks.pl', // możliwy dedykowany SMTP
    '195.78.67.16'           // bezpośrednie IP serwera
  ].filter(Boolean);
  
  const host = possibleHosts[0] || 's148.cyber-folks.pl';
  
  console.log(`🔧 Próbuję połączenie SMTP: ${host}:${port} (secure: ${isSecure})`);
  
  return nodemailer.createTransport({
    host: host,
    port: port,
    secure: isSecure, // true dla portu 465 (SSL), false dla innych
    auth: {
      user: process.env.EMAIL_USER, // pełny adres email: biuro@roletmix.pl
      pass: process.env.EMAIL_PASSWORD || process.env.EMAIL_APP_TOKEN, // hasło lub token 2FA
    },
    tls: {
      // Mniej restrykcyjne ustawienia TLS dla Cyberfolks
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    connectionTimeout: 15000, // 15 sekund timeout
    greetingTimeout: 10000, // 10 sekund na greeting  
    socketTimeout: 15000, // 15 sekund na socket
    debug: process.env.NODE_ENV === 'development', // debug w dev mode
    logger: process.env.NODE_ENV === 'development' // logowanie w dev mode
  });
};

// Walidacja danych formularza
const validateFormData = (data: ContactFormData) => {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Imię i nazwisko musi mieć co najmniej 2 znaki');
  }

  if (!data.phone || !/^[\+]?[0-9\s\-\(\)]{9,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.push('Nieprawidłowy numer telefonu');
  }

  if (!data.postalCode || !/^[0-9]{2}-[0-9]{3}$/.test(data.postalCode)) {
    errors.push('Nieprawidłowy kod pocztowy (format: 00-000)');
  }

  return errors;
};

export async function POST(req: NextRequest) {
  try {
    const formData: ContactFormData = await req.json();

    // Walidacja danych
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Błędy walidacji', 
          details: validationErrors 
        },
        { status: 400 }
      );
    }

    // Sprawdzenie czy zmienne środowiskowe są ustawione
    if (!process.env.EMAIL_USER || (!process.env.EMAIL_PASSWORD && !process.env.EMAIL_APP_TOKEN)) {
      console.error('Brak konfiguracji email w zmiennych środowiskowych');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Błąd konfiguracji serwera. Skontaktuj się z administratorem.' 
        },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Wiadomość dla firmy
    const companyMailOptions = {
      from: `"Formularz Rolet-Mix" <${process.env.EMAIL_USER}>`,
      to: 'biuro@roletmix.pl', // adres docelowy
      replyTo: `"${formData.name}" <noreply@roletmix.pl>`, // adres odpowiedzi
      subject: `🏠 Nowe zapytanie z formularza kontaktowego - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #a21622; margin: 0; font-size: 24px;">🏠 Nowe Zapytanie</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Formularz kontaktowy ze strony internetowej</p>
            </div>
            
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">📋 Dane kontaktowe</h2>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #555;">👤 Imię i nazwisko:</strong>
                <span style="margin-left: 10px; color: #333;">${formData.name}</span>
              </div>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #555;">📞 Telefon:</strong>
                <span style="margin-left: 10px; color: #333;">${formData.phone}</span>
              </div>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #555;">📍 Kod pocztowy:</strong>
                <span style="margin-left: 10px; color: #333;">${formData.postalCode}</span>
              </div>
            </div>
            
            ${formData.message ? `
              <div style="background-color: #e3f2fd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #1976d2; margin: 0 0 15px 0; font-size: 16px;">💬 Wiadomość</h3>
                <p style="color: #333; margin: 0; line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}
            
            <div style="background-color: #fff3cd; border-radius: 8px; padding: 15px; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404;">
                <strong>⏰ Następne kroki:</strong> Skontaktuj się z klientem w ciągu 24 godzin aby umówić bezpłatny pomiar.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                Wiadomość wysłana automatycznie z formularza na <strong>roletmix.pl</strong>
              </p>
              <p style="color: #999; margin: 5px 0 0 0; font-size: 12px;">
                ${new Date().toLocaleString('pl-PL')}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Wiadomość potwierdzająca dla klienta - WYŁĄCZONA z powodu problemów z SPF/DKIM
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: undefined, // Tymczasowo wyłączone - tylko wewnętrzne emaile działają stabilnie
      subject: '✅ Potwierdzenie otrzymania zapytania - Rolet-Mix',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #a21622; margin: 0; font-size: 24px;">✅ Dziękujemy za kontakt!</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Rolet-Mix - Twój partner w świecie rolet</p>
            </div>
            
            <div style="background-color: #d4edda; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #28a745;">
              <h2 style="color: #155724; margin: 0 0 15px 0; font-size: 18px;">🎉 Twoje zapytanie zostało przyjęte</h2>
              <p style="color: #155724; margin: 0; line-height: 1.6;">
                Dziękujemy <strong>${formData.name}</strong> za skontaktowanie się z nami! 
                Otrzymaliśmy Twoje zapytanie i wkrótce się z Tobą skontaktujemy.
              </p>
            </div>
            
            <div style="background-color: #fff3cd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 16px;">⏰ Co dalej?</h3>
              <ul style="color: #856404; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Skontaktujemy się z Tobą <strong>w ciągu 24 godzin</strong></li>
                <li>Umówimy się na <strong>bezpłatny pomiar i wycenę</strong></li>
                <li>Doradzimy najlepsze rozwiązanie dla Twojego domu</li>
                <li>Przedstawimy ofertę dostosowaną do Twoich potrzeb</li>
              </ul>
            </div>
            
            <div style="background-color: #e3f2fd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #1976d2; margin: 0 0 15px 0; font-size: 16px;">📞 Pilny kontakt?</h3>
              <p style="color: #1976d2; margin: 0 0 10px 0;">Jeśli Twoja sprawa jest pilna, zadzwoń do nas:</p>
              <p style="color: #333; margin: 0; font-weight: bold;">📱 +48 721 986 278</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                <strong>Rolet-Mix</strong> - Kłyż 89, 33-250 Otfinów
              </p>
              <p style="color: #999; margin: 5px 0 0 0; font-size: 12px;">
                www.roletmix.pl | biuro@roletmix.pl
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Test połączenia SMTP
    try {
      await transporter.verify();
      console.log('✅ Połączenie SMTP zostało zweryfikowane');
    } catch (verifyError) {
      console.error('❌ Błąd weryfikacji SMTP:', verifyError);
      // Kontynuuj mimo błędu weryfikacji - czasem weryfikacja nie działa ale wysyłanie tak
    }

    // Wysyłanie emaili
    const result = await transporter.sendMail(companyMailOptions);
    console.log('✅ Email do firmy został wysłany. MessageId:', result.messageId);
    console.log('📧 Response:', result.response);
    
    // Test email na dodatkowy adres - WYŁĄCZONY z powodu SPF/DKIM
    if (process.env.TEST_EMAIL && process.env.TEST_EMAIL.includes('@roletmix.')) {
      try {
        const testEmail = {
          ...companyMailOptions,
          to: process.env.TEST_EMAIL,
          subject: `[TEST] ${companyMailOptions.subject}`
        };
        await transporter.sendMail(testEmail);
        console.log('✅ Test email wysłany na:', process.env.TEST_EMAIL);
      } catch (testError) {
        console.log('⚠️ Test email failed:', testError);
      }
    } else if (process.env.TEST_EMAIL) {
      console.log('⚠️ Test email pomijany - tylko adresy @roletmix.pl działają stabilnie');
    }
    
    // Wysyłanie potwierdzenia do klienta tylko jeśli podał email
    if (clientMailOptions.to) {
      await transporter.sendMail(clientMailOptions);
      console.log('✅ Email potwierdzający został wysłany');
    }

    return NextResponse.json({
      success: true,
      message: 'Wiadomość została wysłana pomyślnie'
    });

  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.' 
      },
      { status: 500 }
    );
  }
}
