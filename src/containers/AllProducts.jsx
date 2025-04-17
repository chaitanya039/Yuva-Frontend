import React, { useEffect, useState } from "react";
import api from "../utils/api";
import MainLayout from "../components/MainLayout";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = async () => {
    try {
      const res = await api.get("/products/with-badges");
      if (res.data?.statusCode === 200) {
        setProducts(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold">
              All <span className="text-[#F7B614]">Products</span>
            </h1>
            <p className="text-neutral-500 mt-3 max-w-2xl mx-auto">
              Browse our entire collection of premium-grade tarpaulins and plastic solutions.
            </p>
            <div className="w-16 h-1 bg-[#F7B614] mx-auto mt-4 rounded-full" />
          </div>

          {/* Product Grid */}
          {loading ? (
            <p className="text-center text-neutral-400">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-center text-neutral-400">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default AllProducts;
