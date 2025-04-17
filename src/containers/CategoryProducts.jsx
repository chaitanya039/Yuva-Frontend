import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import ProductCard from "../components/ProductCard";
import MainLayout from "../components/MainLayout";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategoryProducts = async () => {
    try {
      const res = await api.get(`/products/category/${categoryId}/products`);
      if (res.data && res.data.data) {
        setProducts(res.data.data);
        setCategoryName(res.data.data[0]?.category?.name || "Category");
      }
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryId]);

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {categoryName}
            </h1>
            <div className="w-20 h-1 mx-auto bg-[#F7B614] rounded-full" />
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-lg">
              Browse premium quality products under <span className="text-[#F7B614]">{categoryName}</span>.
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="text-center text-neutral-400 text-sm mt-20">
              Fetching products...
            </div>
          ) : products.length === 0 ? (
            <div className="text-center text-neutral-500 text-lg mt-20">
              No products found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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

export default CategoryProducts;
