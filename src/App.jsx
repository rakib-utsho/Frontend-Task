import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Menus from "./components/Menus/Manus";
import Banners from "./components/Banners/Banners";
import Banner2 from "./components/Banners/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blogs/BlogSection";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Menus />
        <Banners />
        <Banner2/>
        <Testimonial/>
        <Blog/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
