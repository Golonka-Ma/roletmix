# Konfiguracja Email dla Formularza Kontaktowego

## Wymagane zmienne środowiskowe

Utwórz plik `.env.local` w głównym katalogu projektu z następującymi zmiennymi:

```bash
# Podstawowe ustawienia email
EMAIL_USER=biuro@roletmix.pl

# Opcja 1: Używanie tokena 2FA (ZALECANE dla bezpieczeństwa)
EMAIL_APP_TOKEN=wygenerowany_token_2fa_z_cyberfolks

# Opcja 2: Zwykłe hasło (mniej bezpieczne)
# EMAIL_PASSWORD=twoje_haslo_do_skrzynki

# Ustawienia SMTP serwera - ZAKTUALIZOWANE dla VOT.PL
SMTP_HOST=mail.vot.pl
SMTP_PORT=465
SMTP_SECURE=true
SMTP_REJECT_UNAUTHORIZED=false
```

## Konfiguracja Roundcube/Cyberfolks

### 1. **Wygeneruj token 2FA (ZALECANE)**
   - Zaloguj się do panelu hostingu Cyberfolks
   - Przejdź do sekcji "Poczta" lub "Email"
   - Znajdź opcję "Tokeny aplikacji" lub "2FA" lub "App Passwords"
   - Wygeneruj nowy token dla aplikacji
   - Skopiuj wygenerowany token

### 2. **Uzyskaj dane SMTP**
   - W panelu Cyberfolks znajdź ustawienia SMTP
   - Sprawdź serwer SMTP dla swojej domeny

### 3. **Zalecane ustawienia dla Cyberfolks:**
   
   **Opcja 1 - SSL (ZALECANE dla VOT.PL):**
   ```bash
   SMTP_HOST=mail.vot.pl
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_REJECT_UNAUTHORIZED=false
   ```

   **Opcja 2 - STARTTLS:**
   ```bash
   SMTP_HOST=mail.vot.pl
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_REJECT_UNAUTHORIZED=false
   ```

   **Opcja 3 - Port standardowy:**
   ```bash
   SMTP_HOST=mail.vot.pl
   SMTP_PORT=25
   SMTP_SECURE=false
   SMTP_REJECT_UNAUTHORIZED=false
   ```

   **Opcja 4 - Alternatywne hosty:**
   ```bash
   SMTP_HOST=smtp.vot.pl
   # lub
   SMTP_HOST=roletmix.vot.pl
   ```

### 4. **Zaktualizuj zmienne środowiskowe**
   
   **Z tokenem 2FA (bezpieczniejsze):**
   ```bash
   EMAIL_USER=biuro@roletmix.pl
   EMAIL_APP_TOKEN=abc123xyz789token_z_cyberfolks
   ```
   
   **Lub ze zwykłym hasłem:**
   ```bash
   EMAIL_USER=biuro@roletmix.pl
   EMAIL_PASSWORD=twoje_prawdziwe_haslo_do_skrzynki
   ```

## Rozwiązywanie problemów z Cyberfolks

### Częste problemy:

1. **Błąd uwierzytelniania**
   - Sprawdź czy token 2FA lub hasło do skrzynki jest poprawne
   - Upewnij się, że używasz pełnego adresu email jako EMAIL_USER
   - Jeśli używasz tokena 2FA, sprawdź czy jest aktywny w panelu Cyberfolks

2. **Błąd połączenia SMTP (ETIMEDOUT)**
   - **Najczęstszy problem z Cyberfolks** - port 587 często nie działa
   - **Rozwiązanie**: Zmień na port 465 z SSL:
     ```bash
     SMTP_PORT=465
     SMTP_SECURE=true
     SMTP_REJECT_UNAUTHORIZED=false
     ```
   - Jeśli nadal nie działa, spróbuj port 25:
     ```bash
     SMTP_PORT=25
     SMTP_SECURE=false
     ```
   - Sprawdź w panelu Cyberfolks jakie porty SMTP są dostępne

3. **Certyfikaty SSL**
   - Jeśli masz problemy z certyfikatami, ustaw:
   ```bash
   SMTP_REJECT_UNAUTHORIZED=false
   ```

4. **Przykład konfiguracji dla problemów z SSL:**
   
   **Z tokenem 2FA:**
   ```bash
   EMAIL_USER=biuro@roletmix.pl
   EMAIL_APP_TOKEN=twoj_token_2fa
   SMTP_HOST=mail.roletmix.pl
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_REJECT_UNAUTHORIZED=false
   ```
   
   **Lub ze zwykłym hasłem:**
   ```bash
   EMAIL_USER=biuro@roletmix.pl
   EMAIL_PASSWORD=twoje_haslo
   SMTP_HOST=mail.roletmix.pl
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_REJECT_UNAUTHORIZED=false
   ```

## Alternatywne dostawcy email

Jeśli Cyberfolks sprawia problemy, możesz przejść na dedykowane usługi:

### SendGrid
```bash
# W .env.local
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Mailgun  
```bash
# W .env.local
MAILGUN_USER=postmaster@mg.twoja-domena.com
MAILGUN_PASSWORD=your_mailgun_password
```

## Testowanie

Po skonfigurowaniu zmiennych środowiskowych:

1. Uruchom serwer deweloperski: `npm run dev`
2. Przejdź do sekcji kontakt na stronie
3. Wypełnij formularz i wyślij
4. Sprawdź czy email dotarł na adres `biuro@roletmix.pl`

## Produkcja

W środowisku produkcyjnym (Vercel, Netlify itp.):

1. Dodaj zmienne środowiskowe w panelu administracyjnym
2. Upewnij się, że używasz bezpiecznych haseł aplikacji
3. Rozważ użycie dedykowanych usług email dla lepszej dostarczalności

## Rozwiązywanie problemów

- **Błąd uwierzytelniania**: Sprawdź czy hasło aplikacji jest poprawne
- **Emails nie dochodzą**: Sprawdź folder spam
- **Błąd połączenia**: Sprawdź ustawienia firewall
- **Rate limiting**: Gmail ma limity wysyłania - rozważ inne dostawcy dla dużego ruchu
