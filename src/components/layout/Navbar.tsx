"use client";

import { useState } from "react";
import MenuTrigger from "@/components/ui/MenuTrigger";
import FullscreenMenu from "@/components/layout/FullscreenMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
      <FullscreenMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar; 