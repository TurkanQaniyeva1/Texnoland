"use client";
import React, { useState } from "react";
import SubMenu from "./SubMenu";

const DropdownItem = ({ item }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.label}

      {item.subItems && (
        <>
          <span>›</span>
          {hover && <SubMenu items={item.subItems} />}
        </>
      )}
    </div>
  );
};

export default DropdownItem;