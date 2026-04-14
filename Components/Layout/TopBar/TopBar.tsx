"use client";

import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const TopBar = () => {
  return (
    <div>
  <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-xs py-1">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
        
        {/* LEFT */}
        <div className="flex gap-3 cursor-pointer">
          <FaFacebookF className="hover:text-cyan-400 transition" />
          <FaInstagram className="hover:text-cyan-400 transition" />
          <FaTwitter className="hover:text-cyan-400 transition" />
          <FaLinkedinIn className="hover:text-cyan-400 transition" />
        </div>

        {/* RIGHT */}
        <div className="font-medium">
          +994 50 123 45 67
        </div>

      </div>
    </div>
    </div>
  )
}

export default TopBar
