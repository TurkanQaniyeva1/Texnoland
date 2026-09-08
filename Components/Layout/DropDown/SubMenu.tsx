"use client";
import React from "react";

const SubMenu = ({ items }: { items?: string[] }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-full top-0 ml-1 w-48 rounded-md border bg-white py-1 shadow-lg">
      {items.map((item, i) => (
        <div key={`${item}-${i}`} className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;