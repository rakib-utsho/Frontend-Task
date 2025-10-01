import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Shop",
      link: "#",
    },
    {
      id: 3,
      title: "About Us",
      link: "#",
    },
    {
      id: 4,
      title: "Blog",
      link: "#",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex flex-col md:flex-row items-center justify-around p-4 md:pt-4 mx-auto"
        >
          {/* Logo Section */}
          <div className="text-xl flex items-center gap-2 font-bold">
            <FaLeaf className="text-green-600" />
            <p className="text-sky-800">Fresh Harvests</p>
          </div>
          {/* menu section */}
          <div className="hidden md:block ">
            <div className="flex gap-8">
              <ul className="flex items-center gap-6 text-black">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-0.5">
                <CiHeart />
                <p>Favorites</p>
              </div>
              <button className="flex items-center gap-0.5 hover:bg-primary hover:text-white rounded-2xl font-semibold">
                <CiShoppingCart /> Cart
              </button>
              <button class="px-4 py-2 border border-[--color-primary] text-[--color-primary] rounded-lg hover:bg-[--color-primary]">
                Sign in
              </button>
            </div>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div
            className="flex gap-3 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <button className="flex items-center gap-0.5 hover:bg-primary hover:text-white rounded-2xl p-px font-semibold">
              <CiShoppingCart /> Cart
            </button>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
