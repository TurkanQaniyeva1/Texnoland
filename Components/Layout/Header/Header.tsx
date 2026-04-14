"use client";

import React from 'react'
import TopBar from '../TopBar/TopBar';

const Header = () => {
  return (
<div className="bg-white/70 backdrop-blur-lg border-b sticky top-0 z-50">
    <TopBar/>

      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
<div className="text-xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text cursor-pointer">
  Texnoland.az
</div>
        {/* MENU */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
 <li className="relative cursor-pointer group">
  Əsas səhifə
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Xidmətlər</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Layihələr</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Şirkətimiz</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Məlumatlar</li>

<li className="relative px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer overflow-hidden group">
  <span className="relative z-10">Təklif Alın</span>

  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></span>
</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Əlaqə</li>
        </ul>

        {/* LANGUAGE */}
        <div className="hidden md:block">
          <select className="outline-none text-sm cursor-pointer">
            <option>AZ</option>
            <option>RU</option>
            <option>EN</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Header
