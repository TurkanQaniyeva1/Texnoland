"use client";
import React, { useState } from "react";

const MobileMenu = ({ isOpen, onClose, data }: any) => {
  const [open, setOpen] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed right-0 top-0 w-80 h-full bg-white z-50 p-4">
        <button onClick={onClose}>X</button>

        {Object.entries(data).map(([key, items]: any) => (
          <div key={key}>
            <div
              onClick={() => setOpen(open === key ? null : key)}
              className="py-2 font-semibold"
            >
              {key}
            </div>

            {open === key &&
              items.map((item: any, i: number) => (
                <div key={i} className="pl-4 text-sm py-1">
                  {item.label}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;