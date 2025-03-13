import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1663050944052-de070c1402ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvbWUlMjBmYXJtaW5nfGVufDB8fDB8fHww",
      link: "#",
    },
    {
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      date: "May 23, 2024",
      image:
        "https://images.unsplash.com/photo-1568623970736-27bea63b4489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      link: "#",
    },
    {
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      date: "May 23, 2024",
      image:
        "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHZhZ2F0YWJsZSUyMGZhcm18ZW58MHx8MHx8fDA%3D",
      link: "#",
    },
  ];
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Increased top padding to py-20 */}
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          Our Blog
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Fresh Harvest Blog
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
