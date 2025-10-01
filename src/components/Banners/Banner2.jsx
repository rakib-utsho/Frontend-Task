import React, { useEffect, useState, useRef } from "react";
import Banner2Png from "../../assets/offer.png";

const Banner2 = () => {
  // FIX: store the target date in a ref so it never changes on re-render
  const targetDateRef = useRef(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDateRef.current - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-14 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg">
        {/* Info Section */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div>
            <p className="bg-yellow-600 w-1/3 rounded-md text-white font-bold text-sm px-3 py-1 mb-4">
              Special Offer
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 sm:text-4xl xl:text-5xl font-sans">
              Seasonal Fruit Bundle
            </h2>
            <p className="text-2xl font-bold font-mono text-gray-700 mb-6">
              Discount up to{" "}
              <span className="font-semibold text-orange-500">80% OFF</span>
            </p>

            {/* Dynamic Countdown */}
            <div className="flex space-x-4 mb-6 font-bold">
              <div className="flex flex-col items-center border p-2 rounded-xl bg-white">
                <span className="text-2xl font-semibold text-gray-800">
                  {timeLeft.days}
                </span>
                <span className="text-sm text-gray-600">Days</span>
              </div>
              <div className="flex flex-col items-center border p-2 rounded-xl bg-white">
                <span className="text-2xl font-semibold text-gray-800">
                  {timeLeft.hours}
                </span>
                <span className="text-sm text-gray-600">Hour</span>
              </div>
              <div className="flex flex-col items-center border p-2 rounded-xl bg-white">
                <span className="text-2xl font-semibold text-gray-800">
                  {timeLeft.minutes}
                </span>
                <span className="text-sm text-gray-600">Min</span>
              </div>
              <div className="flex flex-col items-center border p-2 rounded-xl bg-white">
                <span className="text-2xl font-semibold text-gray-800">
                  {timeLeft.seconds}
                </span>
                <span className="text-sm text-gray-600">Second</span>
              </div>
            </div>

            {/* Code */}
            <div className="bg-green-800 text-white px-6 py-2 rounded-2xl w-1/3 font-bold">
              CODE: <span className="text-yellow-500 font-bold">FRUIT28</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={Banner2Png}
            alt="offer"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
