"use client";
import React, { useState } from "react";
import DropdownItem from "./DroopDownItem";

type DropdownItemData = {
  label: string;
  subItems?: string[];
};

const DropdownMenu = ({ title, items }: { title: string; items: DropdownItemData[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {title}

      {open ? (
        <div className="absolute left-0 top-full z-50 w-56 rounded-md border bg-white py-2 shadow-lg">
          {items.map((item, i) => (
            <DropdownItem key={`${item.label}-${i}`} item={item} />
          ))}
        </div>
      ) : null}
    </li>
  );
};

export default DropdownMenu;