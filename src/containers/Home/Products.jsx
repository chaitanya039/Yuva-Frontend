import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

const badgeColors = {
  "Premium": "bg-purple-500",
  "Best Value": "bg-green-500",
  "Low Stock": "bg-red-500",
  "New": "bg-blue-500",
  "General": "bg-gray-400",
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products/with-badges");
      if (res.data?.statusCode === 200) {
        setProducts(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch products:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-24 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="text-black">Featured </span>
            <span className="text-[#F7B614]">Products</span>
          </h2>
          <div className="w-16 h-1 bg-[#F7B614] mx-auto rounded-full mt-2" />
          <p className="text-neutral-600 max-w-2xl mx-auto mt-3">
            Discover our most popular and innovative plastic solutions.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-neutral-400">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((prod) => (
              <div
                key={prod._id}
                className="relative bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group flex flex-col"
              >
                {/* Badge */}
                {prod.badge && (
                  <div
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                      badgeColors[prod.badge] || "bg-[#F7B614]"
                    } text-white`}
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F7B614] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    {prod.description}
                  </p>

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
                      <p className="text-[#F7B614] font-bold">
                        ₹{prod.priceRetail}/unit
                      </p>
                      <p>Wholesale: ₹{prod.priceWholesale}/unit</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={`/product/${prod._id}`} className="mt-auto bg-neutral-800 hover:bg-[#F7B614] hover:text-black text-center text-white py-2 px-4 rounded-md transition-all duration-300 font-medium">
                    Place Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        {!loading && (
          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-8 py-3 rounded-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
