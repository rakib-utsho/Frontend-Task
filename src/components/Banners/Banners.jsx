import React from "react";
import BannerPng from "../../assets/mid-banner.png";

const Banners = () => {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-14 px-4 md:px-6 lg:px-8">
        {/* Banner IMG  */}
        <div className="flex justify-center items-center">
          <img
            src={BannerPng}
            alt="middle-banner"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover"
          />
        </div>
        {/* Banner Info  */}
        <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 pr-4 md:pr-8 lg:pr-12">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              About Fresh Harvest
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to Fresh Harvest, your premier destination for
              high-quality and fresh produce. We are passionate about providing
              you with the finest fruits, vegetables, and salad ingredients to
              nourish your body and delight your taste buds. With a commitment
              to excellence, sustainability, and customer satisfaction, Fresh
              Harvest is here to revolutionize your grocery shopping experience.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
