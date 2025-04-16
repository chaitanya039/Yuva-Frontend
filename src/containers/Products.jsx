import React, { useEffect, useState } from "react";

const dummyProducts = [
  {
    _id: "p1",
    name: "Premium Industrial Tarpaulin",
    description: "Heavy-duty plastic tarp designed for durability and strength.",
    gsm: 250,
    stock: 25,
    priceRetail: 450,
    priceWholesale: 380,
    image: "",
    badge: "BESTSELLER",
    badgeColor: "bg-amber-400",
  },
  {
    _id: "p2",
    name: "Eco-Friendly Clear Sheets",
    description: "Transparent plastic sheets made from 100% recycled material.",
    gsm: 150,
    stock: 8,
    priceRetail: 320,
    priceWholesale: 280,
    image: "",
    badge: "ECO",
    badgeColor: "bg-green-500",
  },
  {
    _id: "p3",
    name: "High-Performance Film",
    description: "Industrial strength plastic film with excellent clarity.",
    gsm: 200,
    stock: 40,
    priceRetail: 550,
    priceWholesale: 490,
    image: "https://res.cloudinary.com/djshoycxp/image/upload/v1742824463/Products/ucx0gdzddse0pnd0bckm.webp",
    badge: "NEW",
    badgeColor: "bg-blue-500",
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-[#f9f9f9] via-[#f3f3f3] to-white text-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="text-black">Featured </span>
            <span className="text-[#F7B614]">Products</span>
          </h2>
          <div className="w-16 h-1 bg-[#F7B614] mx-auto rounded-full mt-2" />
          <p className="text-neutral-600 max-w-2xl mx-auto mt-3">
            Discover our most popular and innovative plastic solutions
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((prod) => (
            <div
              key={prod._id}
              className="relative bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Badge */}
              {prod.badge && (
                <div
                  className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${prod.badgeColor}`}
                >
                  {prod.badge}
                </div>
              )}

              {/* Image */}
              <img
                src={prod.image || "https://placehold.co/600x400"}
                alt={prod.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#F7B614] transition-colors">
                  {prod.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-3">{prod.description}</p>

                <div className="flex justify-between text-sm text-neutral-500 mb-4">
                  <div>
                    <p>GSM: {prod.gsm}</p>
                    <p>
                      Stock:{" "}
                      <span
                        className={`font-semibold ${
                          prod.stock > 10 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {prod.stock > 0 ? prod.stock : "Out of Stock"}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#F7B614] font-bold">₹{prod.priceRetail}/unit</p>
                    <p>Wholesale: ₹{prod.priceWholesale}/unit</p>
                  </div>
                </div>

                <button className="w-full bg-neutral-800 hover:bg-[#F7B614] hover:text-black text-white py-2 px-4 rounded-md transition-all duration-300">
                  Place Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="/products"
            className="inline-block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-8 py-3 rounded-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
