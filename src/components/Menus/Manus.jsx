/* eslint-disable no-unused-vars */
import { img, title } from "framer-motion/client";
import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
const Manus = () => {
  const MenusData = [
    {
      id: 1,
      title: "Apples",
      price: "$3.99",
      img: Fruit1,
    },
    {
      id: 2,
      title: "Oranges",
      price: "$4.99",
      img: Fruit2,
    },
    {
      id: 3,
      title: "Avocado",
      price: "$5.99",
      img: Fruit3,
    },
    {
      id: 4,
      title: "Cherries",
      price: "$2.99",
      img: Fruit4,
    },
  ];

  const categories = ["All", "Fruits", "Vegetables", "Salad"];

  return (
    <section>
      <div className="container max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Our Fresh Products
        </h1>
        <p className="text-center text-gray-600 mt-2">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          {categories.map((category) => (
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              {category}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {MenusData.map((menu) => (
            <div
              key={menu.id}
              className="border rounded-lg p-4 shadow-lg text-center"
            >
              <img
                src={menu.img}
                alt=""
                className="w-24 h-24 mx-auto object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {menu.title}
              </h2>
              <p className="text-gray-600 mb-2">{menu.price}/kg</p>
              <a href="#"className="mt-5 px-4 py-2 rounded-lg bg-gray-100 w-full">
                  Add to Cart
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="primary-btn">See All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Manus;
