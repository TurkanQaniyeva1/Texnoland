"use client";
import { useState } from "react";

const SolarCalculator = () => {
  const [monthlyEnergy, setMonthlyEnergy] = useState<number>(0);
  const [sunHours, setSunHours] = useState<number>(4);
  const [coverage, setCoverage] = useState<number>(100);

  const calculatePower = () => {
    if (!monthlyEnergy || !sunHours || !coverage) return 0;

    const dailyEnergy = monthlyEnergy / 30;
    const requiredEnergy = (dailyEnergy * coverage) / 100;
    const power = requiredEnergy / sunHours;

    return power.toFixed(1);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-3">
          <span className="text-red-500">Faydalı</span> məlumatlar
          <span className="ml-3 border border-gray-300 px-3 py-1 rounded-lg text-red-500 text-lg">
            24/7
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Günəş kalkulyatorundan istifadə etməklə evinizin elektrik enerjisi
          tələbatına uyğun olaraq günəş elektrik stansiyanızın gücünü müəyyən edin.
        </p>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">

          {/* Input 1 */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              İl ərzində istifadə olunan elektrik enerjisinin miqdarı - kVt·st
            </label>
            <div className="relative">
              <input
                type="number"
                value={monthlyEnergy}
                onChange={(e) => setMonthlyEnergy(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                kVt·st
              </span>
            </div>
          </div>

          {/* Input 2 */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Gün ərzində günəşin pik olduğu saatların miqdarı (Bakı üçün 4 saat)
            </label>
            <div className="relative">
              <input
                type="number"
                value={sunHours}
                onChange={(e) => setSunHours(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                saat
              </span>
            </div>
          </div>

          {/* Input 3 */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Əvəz edilməli olan elektrik enerjisinin miqdarının %-i
            </label>
            <div className="relative">
              <input
                type="number"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                %
              </span>
            </div>
          </div>

          {/* Result */}
          <div className="border-t pt-6 text-center">
            <p className="text-gray-500 text-sm mb-2">
              Günəş Elektrik Stansiyasının layihə gücü
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              {calculatePower()} kVt
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;