import React from "react";
import CustomerPng from "../../assets/Rectangle 3.png";

const CustomerTestimonial = () => {
  return (
    <div className="bg-white hover:ease-out rounded-lg shadow-xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-12 px-8 md:px-12 my-20">
      {/* Banner IMG */}
      <div className="flex justify-center items-center">
        <img
          src={CustomerPng}
          alt="customer"
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-cover"
        />
      </div>

      {/* Testimonial Content */}
      <div className="flex items-center justify-center">
        <div className="max-w-3xl text-center md:text-left md:pr-12">
          {/* Added right padding for desktop */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Don't just take our word for it - here's what some of our customers
            have to say about their experience with Fresh Harvest.
          </p>

          <div className="bg-gray-600 rounded-lg p-6">
            {/* Added background color to testimonial box */}
            <p className="text-lg text-white italic mb-4">
              "I absolutely love Fresh Harvest! The quality of their produce is
              outstanding. It's always fresh, flavorful, and delicious. The
              convenience of ordering online and having it delivered to my
              doorstep saves me so much time. Fresh Harvest has become my go-to
              for all my fruit and vegetable needs."
            </p>
            <p className="text-sm font-semibold text-white italic opacity-55">
              Jane Doe - Professional Chef
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
