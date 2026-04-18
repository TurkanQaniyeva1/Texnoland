"use client";
import React from "react";

type Props = {
  data: any[];
};

const MegaMenu = ({ data }: Props) => {
  return (
    <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md min-w-[220px] z-50">
      {data.map((item, index) => (
        <div key={index} className="relative group/item">
          
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
            {item.name}
          </div>

          {/* SUBMENU (ilk 5 üçün) */}
          {index < 5 && item.children && (
            <div className="absolute top-0 left-full hidden group-hover/item:block bg-white shadow-xl rounded-md min-w-[200px]">
              {item.children.map((sub: string, i: number) => (
                <div key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {sub}
                </div>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default MegaMenu;