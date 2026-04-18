"use client";
import React, { useState } from "react";

import { serviceItems, companyItems, infoItems } from "../../../Constants/data";
import DropdownMenu from "../DropDown/DropDownMenu";
import MobileMenu from "../MobilMenu/MobilMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-lg border-b sticky top-0 z-50">

      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4">

        {/* LOGO */}
        <div className="font-bold text-lg">Texnoland</div>

        {/* DESKTOP */}
        <ul className="hidden lg:flex gap-6 text-sm">
          <li>Əsas səhifə</li>

          <DropdownMenu title="Xidmətlər" items={serviceItems} />
          <DropdownMenu title="Şirkətimiz" items={companyItems} />
          <DropdownMenu title="Məlumatlar" items={infoItems} />

          <li>Əlaqə</li>
        </ul>

        {/* MOBILE BTN */}
        <button onClick={() => setMobileOpen(true)} className="lg:hidden">
          ☰
        </button>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        data={{
          services: serviceItems,
          company: companyItems,
          info: infoItems,
        }}
      />
    </div>
  );
};

export default Header;