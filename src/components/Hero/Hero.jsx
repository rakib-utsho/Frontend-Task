import React from "react";
import HeroPng from "../../assets/front.png";
import LeafPng from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
import AppStore from "../../assets/appstore.png";
import PlayStore from "../../assets/googleplay.png";

export const Hero = () => {
  return (
    <section className="flex justify-center items-center px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[650px] relative max-w-screen-xl">
        {/* Brand Info  */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left py-10 md:py-0 relative z-10 pl-10 md:pl-16">
          <div className="space-y-6 w-full max-w-lg">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold leading-relaxed xl:leading-loose font-rubik"
            >
              Fresh Fruits and Vegetables
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 tracking-wide"
            >
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables.
            </motion.p>
            {/* Button Section  */}
            <motion.div
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Shop Now</button>
            </motion.div>
            {/* Special Offer Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-6 bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
            >
              <img
                src="https://via.placeholder.com/80" // Replace with the actual offer image
                alt="Special Offer"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <p className="text-green-600 font-semibold">Special Offer</p>
                <h3 className="text-xl font-bold">Fresh Salad</h3>
                <p className="text-gray-500">
                  Up to <span className="text-green-600 font-bold">70%</span>{" "}
                  off
                </p>
                <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm mt-1 inline-block">
                  CODE: FRESH25
                </span>
              </div>
            </motion.div>
            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="mt-6 flex justify-center md:justify-start gap-4"
            >
              <a href="#">
                <img
                  src={AppStore}
                  alt="Download on App Store"
                  className="w-32"
                />
              </a>
              <a href="#">
                <img
                  src={PlayStore}
                  alt="Get it on Google Play"
                  className="w-32"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt="fruit-img"
            className="w-full max-w-xs md:max-w-lg drop-shadow"
          />
        </div>

        {/* Leaf Image */}
        <div className="absolute top-14 md:top-0 right-1/3 md:right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={LeafPng}
            alt="leaf-image-bg"
            className="w-32 md:w-64"
          />
        </div>
      </div>
    </section>
  );
};
