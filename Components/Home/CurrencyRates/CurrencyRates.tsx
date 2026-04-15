"use client";
import { useState } from "react";

type Currency = {
  code: string;
  name: string;
  rate: number;
  flag: string;
};

const CurrencyRates = () => {
  const currencies: Currency[] = [
    { code: "USD", name: "Dollar ABŞ", rate: 1, flag: "🇺🇸" },
    { code: "AZN", name: "Azərbaycan manatı", rate: 1.7, flag: "🇦🇿" },
    { code: "TRY", name: "Türk lirəsi", rate: 44.69, flag: "🇹🇷" },
    { code: "RUB", name: "Rusiya rublu", rate: 76.16, flag: "🇷🇺" },
  ];

  const [base, setBase] = useState("USD");
  const [amount, setAmount] = useState(1);

  const baseRate = currencies.find((c) => c.code === base)?.rate || 1;

  const convert = (targetRate: number) => {
    return ((amount * targetRate) / baseRate).toFixed(2);
  };

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md border">

        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-3 font-semibold text-lg">
          Valyuta məzənnələri
        </div>

        {/* Converter */}
        <div className="bg-white p-5">

          {/* Base input */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>

          {/* Rates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {currencies.map((c) => (
              <div
                key={c.code}
                className="border rounded-lg p-3 flex items-center justify-between hover:shadow-sm transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.flag}</span>
                  <div>
                    <p className="text-sm font-medium">{c.code}</p>
                    <p className="text-xs text-gray-500">{c.name}</p>
                  </div>
                </div>

                <span className="font-semibold text-blue-600">
                  {convert(c.rate)}
                </span>
              </div>
            ))}
          </div>

          {/* Date */}
          <p className="text-xs text-gray-400 mt-5">
            14 aprel 2026
          </p>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-center text-gray-400 italic mt-8 text-sm max-w-xl mx-auto">
        Valyuta məzənnəsini Azərbaycan Respublikası Mərkəzi Bankının məlumatlarına əsasən təqdim edirik
      </p>

      <div className="w-16 h-[2px] bg-red-500 mx-auto mt-4"></div>
    </section>
  );
};

export default CurrencyRates;