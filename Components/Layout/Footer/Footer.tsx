"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  // 🔥 gələcəkdə bunu Firebase-dən çəkə bilərsən
  const contactData = {
    about:
      "Bizim ixtisaslaşmış komanda müasir bazar tələblərinə uyğun olaraq müştərilərimizin məqsədlərinə çatması üçün inteqrasiya edilmiş, müstəqil xidmətlər və innovativ həll yolları təklif edir.",
    phones: ["+994512506565", "+994512506565", "+994125117895"],
    email: "example@gmail.com",
    workHours: [
      { day: "Bazar ertəsi - Cümə", time: "09:00 - 18:00" },
      { day: "Şənbə", time: "10:00 - 14:00" },
    ],
  };

  return (
    <footer className="bg-[#2c2c2c] text-gray-300 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ABOUT */}
        <div>
          <h2 className="text-xl text-red-400 mb-4 border-b border-red-400 inline-block pb-1">
            Haqqımızda
          </h2>
          <p className="text-sm leading-6 mt-4">{contactData.about}</p>

          <div className="mt-8 space-y-4">
            {contactData.workHours.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-[2px] h-10 bg-red-400"></div>
                <div>
                  <p className="text-sm">{item.day}</p>
                  <p className="font-semibold">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl text-red-400 mb-4 border-b border-red-400 inline-block pb-1">
            Bizə zəng edin
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400 text-xl" />
              <span>{contactData.phones[0]}</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-red-400 text-xl" />
              <span>{contactData.phones[1]}</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-red-400 text-xl" />
              <span>{contactData.phones[2]}</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-400 text-xl" />
              <span>{contactData.email}</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div>
          <h2 className="text-xl text-red-400 mb-4 border-b border-red-400 inline-block pb-1">
            Bizə yazın
          </h2>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-500 rounded outline-none focus:border-red-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-500 rounded outline-none focus:border-red-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-transparent border border-gray-500 rounded outline-none focus:border-red-400"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 bg-transparent border border-gray-500 rounded outline-none focus:border-red-400"
            ></textarea>

            <button
              type="submit"
              className="border border-gray-400 px-6 py-2 hover:bg-red-400 hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;