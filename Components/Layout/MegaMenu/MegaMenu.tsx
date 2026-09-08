"use client";
import React from "react";

type MegaMenuItem = {
  name: string;
  children?: string[];
};

type Props = {
  data: MegaMenuItem[];
};

const MegaMenu = ({ data }: Props) => {
  return (
    <div className="absolute left-0 top-full z-50 hidden min-w-[220px] rounded-md bg-white shadow-xl group-hover:block">
      {data.map((item, index) => (
        <div key={`${item.name}-${index}`} className="group/item relative">
          <div className="cursor-pointer whitespace-nowrap px-4 py-2 hover:bg-gray-100">
            {item.name}
          </div>

          {index < 5 && item.children ? (
            <div className="absolute left-full top-0 hidden min-w-[200px] rounded-md bg-white shadow-xl group-hover/item:block">
              {item.children.map((sub, i) => (
                <div key={`${sub}-${i}`} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  {sub}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;