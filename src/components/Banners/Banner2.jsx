import React from "react";
import Banner2Png from "../../assets/offer.png";

const Banner2 = () => {
  return (
    <section>
      {/* 1 */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-14 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Banner Info */}
          <p className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 rounded-full mb-4">
            Special Offer
          </p>
          {/* Main Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2 sm:text-4xl">
            Seasonal Fruit Bundle
          </h2>
          {/* Discount */}
          <p className="text-lg text-gray-700 mb-6">
            Discount up to{" "}
            <span className="font-semibold text-red-600">80% OFF</span>
          </p>
          {/* Countdown Timer */}
          <div className="flex space-x-4 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-gray-800">03</span>
              <span className="text-sm text-gray-600">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-gray-800">18</span>
              <span className="text-sm text-gray-600">Hour</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-gray-800">54</span>
              <span className="text-sm text-gray-600">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-gray-800">21</span>
              <span className="text-sm text-gray-600">Second</span>
            </div>
          </div>
          {/* Code */}
          <div className="bg-green-200 text-green-800 px-6 py-2 rounded-full font-semibold">
            CODE: FRUIT28
          </div>
        </div>
        {/* img */}
        <div className="flex justify-center items-center">
            <img
              src={Banner2Png}
              alt="offer"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    </section>
  );
};

export default Banner2;
