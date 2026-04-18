"use client";
import React, { useState } from "react";
import DropdownItem from "./DroopDownItem";

const DropdownMenu = ({ title, items }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {title}

      {open && (
        <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md border py-2 z-50">
          {items.map((item: any, i: number) => (
            <DropdownItem key={i} item={item} />
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;