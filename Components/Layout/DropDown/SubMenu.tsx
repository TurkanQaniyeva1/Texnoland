"use client";
import React from "react";

const SubMenu = ({ items }: { items: string[] }) => {
  return (
    <div className="absolute left-full top-0 ml-1 w-48 bg-white shadow-lg rounded-md border py-1">
      {items.map((item, i) => (
        <div key={i} className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;