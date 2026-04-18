"use client";
import React from "react";

type Props = {
  title: string;
  data: any[];
};

const Dropdown = ({ title, data }: Props) => {
  return (
    <li className="relative group cursor-pointer">
      {title}

      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md min-w-[200px] z-50">
        {data.map((item, i) => (
          <div key={i} className="px-4 py-2 hover:bg-gray-100">
            {item.name}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Dropdown;