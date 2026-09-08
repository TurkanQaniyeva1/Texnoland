"use client";
import React, { useState } from "react";
import SubMenu from "./SubMenu";

type DropdownItemData = {
  label: string;
  subItems?: string[];
};

const DropdownItem = ({ item }: { item: DropdownItemData }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex cursor-pointer items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.label}

      {item.subItems ? (
        <>
          <span>›</span>
          {hover ? <SubMenu items={item.subItems} /> : null}
        </>
      ) : null}
    </div>
  );
};

export default DropdownItem;