import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionDivider from "../../components/SectionDivider";
import api from "../../utils/api"; // ✅ using your actual API instance

const badgeColorMap = {
  "New": "bg-amber-400",
  "Top": "bg-rose-600",
  "UV": "bg-blue-600",
  "Eco": "bg-green-500",
  "Custom": "bg-neutral-800",
  "Heavy": "bg-orange-700",
  "General": "bg-gray-500",
};

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories/with-badges");
      if (res.data && res.data.success) {
        const enriched = res.data.data.map((cat) => ({
          ...cat,
          badgeColor: badgeColorMap[cat.badge] || "bg-gray-500",
        }));
        setCategories(enriched);
      }
    } catch (err) {
      console.error("Failed to load categories", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <SectionDivider type="diagonal" solidFill="#0c0c0c" flipY={false} flipX />
      <section
        id="categories"
        className="bg-gradient-to-b from-[#0c0c0c] to-[#171717] text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-[#F7B614]">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Discover our versatile range of durable, innovative, and
              sustainable plastic product categories.
            </p>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="text-center text-neutral-400">Loading categories...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className="category-card relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-105 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="h-48 bg-neutral-200/20 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-500 text-center px-4">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="p-6 relative">
                    {cat.badge && (
                      <div
                        className={`absolute -top-10 right-6 ${cat.badgeColor} text-white text-xs uppercase font-bold rounded-full w-16 h-16 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                      >
                        {cat.badge}
                      </div>
                    )}
                    <p className="text-neutral-300 text-sm mb-4">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-400">
                        {cat.productCount}{" "}
                        {typeof cat.productCount === "number" ? "Products" : ""}
                      </span>
                      <Link
                        to={`/category/${cat._id}/products`}
                        className="bg-[#F7B614] hover:bg-[#e5a912] text-black py-2 px-4 rounded-md text-sm font-medium inline-flex items-center group-hover:shadow-md transition-all duration-300"
                      >
                        Explore
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <SectionDivider type="wave" flip solidFill="#171717" />
    </>
  );
};

export default Category;
