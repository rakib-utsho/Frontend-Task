import { footer } from "framer-motion/client";
import AppStore from "../../assets/appstore.png";
import PlayStore from "../../assets/googleplay.png";
import Visa from "../../assets/Visa.png";
import Paypal from "../../assets/Paypal.png";
import ApplePay from "../../assets/ApplePay.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and App Download */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="text-xl flex items-center gap-2 font-bold">
              <FaLeaf className="text-green-600" />
              <p className="text-sky-800">Fresh Harvests</p>
            </div>
            <div className="mb-4 mt-14">
              <span className="text-sm  font-semibold text-gray-800">
                Download App:
              </span>
              <div className="flex mt-6 justify-center md:justify-start gap-4">
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
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick links 1
            </h3>
            <ul className="text-gray-600">
              {["Home", "Shop", "About us", "Blog", "Detail Blog"].map(
                (link) => (
                  <li key={link} className="mb-2">
                    <a href="#" className="hover:text-gray-800">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick links 2
            </h3>
            <ul className="text-gray-600">
              {["Favorites", "Cart", "Sign in", "Register"].map((link) => (
                <li key={link} className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact us
            </h3>
            <ul className="text-gray-600 mb-4">
              <li className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" /> 1234.5678.90
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> Freshharvests@gmail.com
              </li>
              <li className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Tanjung Sari Street,
                Pontianak, Indonesia
              </li>
            </ul>
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-800">
                Accepted Payment Methods:
              </span>
              <div className="flex mt-6 justify-center md:justify-start gap-4">
                <a href="#">
                  <img
                    src={Visa}
                    alt="Get it on Google Play"
                    className="w-14"
                  />
                </a>
                <a href="#">
                  <img
                    src={Paypal}
                    alt="Get it on Google Play"
                    className="w-14"
                  />
                </a>
                <a href="#">
                  <img
                    src={ApplePay}
                    alt="Get it on Google Play"
                    className="w-14"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-600">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>
          <div className="flex justify-center mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-600 hover:text-gray-800 mx-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
