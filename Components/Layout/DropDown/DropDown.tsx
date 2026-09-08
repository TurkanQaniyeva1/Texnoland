"use client";
import React from "react";

type DropdownItem = {
  name: string;
};

type Props = {
  title: string;
  data: DropdownItem[];
};

const Dropdown = ({ title, data }: Props) => {
  return (
    <li className="group relative cursor-pointer">
      {title}

      <div className="absolute left-0 top-full z-50 hidden min-w-[200px] rounded-md bg-white shadow-xl group-hover:block">
        {data.map((item, i) => (
          <div key={`${item.name}-${i}`} className="px-4 py-2 hover:bg-gray-100">
            {item.name}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Dropdown;