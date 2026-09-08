"use client";
import React, { useState } from "react";

type MobileMenuItem = {
  label: string;
};

type MobileMenuData = Record<string, MobileMenuItem[]>;

const MobileMenu = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: MobileMenuData;
}) => {
  const [open, setOpen] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-4">
        <button onClick={onClose}>X</button>

        {Object.entries(data).map(([key, items]) => (
          <div key={key}>
            <div
              onClick={() => setOpen(open === key ? null : key)}
              className="py-2 font-semibold"
            >
              {key}
            </div>

            {open === key
              ? items.map((item, i) => (
                  <div key={`${item.label}-${i}`} className="py-1 pl-4 text-sm">
                    {item.label}
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;