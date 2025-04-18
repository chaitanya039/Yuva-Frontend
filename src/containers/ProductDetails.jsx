import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import MainLayout from "../components/MainLayout";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      if (res.data?.statusCode === 200) {
        setProduct(res.data.data);
      }
    } catch (err) {
      toast.error("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product || !product._id) {
      toast.error("Invalid product");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item.product === product._id);
    if (exists) {
      toast("Already in cart", { icon: "🛒" });
      return;
    }

    cart.push({
      product: product._id,
      name: product.name,
      price: product.priceRetail,
      quantity: 1,
      image: product.image,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart!");
  };

  const handlePlaceOrder = async () => {
    if (!product || !product._id) {
      toast.error("Product not available for order.");
      return;
    }

    try {
      const payload = {
        items: [{ product: product._id, quantity: 1 }],
        customerNote: "",
      };
      const res = await api.post("/order-requests", payload);

      if (res.data?.statusCode === 201) {
        toast.success("Order placed!");
        setTimeout(() => {
          navigate("/order-success");
        }, 1000);
      } else {
        toast.error("Order failed.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-center text-neutral-400">Loading product...</div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-center text-red-500">Product not found.</div>
      </MainLayout>
    );
  }

  const createdAt = new Date(product.createdAt).toLocaleDateString();
  const updatedAt = new Date(product.updatedAt).toLocaleDateString();

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute top-10 left-10 bg-[#F7B614] text-black font-bold text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wide"
          >
            {product.category?.name || "Uncategorized"}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[450px] bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-xl flex items-center justify-center"
          >
            <img
              src={product.image || "https://placehold.co/600x400"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-neutral-400 text-sm leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-6 text-sm mt-6">
              <div>
                <p className="text-neutral-500">Retail Price</p>
                <p className="text-[#F7B614] font-bold text-lg">₹{product.priceRetail}</p>
              </div>
              <div>
                <p className="text-neutral-500">Wholesale Price</p>
                <p className="text-[#F7B614] font-bold text-lg">₹{product.priceWholesale}</p>
              </div>
              <div>
                <p className="text-neutral-500">Stock</p>
                <p
                  className={`font-semibold ${
                    product.stock > 0 ? "text-green-400" : "text-red-500"
                  }`}
                >
                  {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
                </p>
              </div>
              <div>
                <p className="text-neutral-500">Unit</p>
                <p className="text-neutral-200 font-medium capitalize">{product.unit}</p>
              </div>
              <div>
                <p className="text-neutral-500">GSM</p>
                <p className="text-neutral-200 font-medium">{product.gsm}</p>
              </div>
              <div>
                <p className="text-neutral-500">SKU</p>
                <p className="text-neutral-200 font-medium">{product.sku}</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap pt-4">
              <span className="bg-white/10 text-xs text-neutral-300 px-4 py-1 rounded-full">
                Added On: <span className="text-white">{createdAt}</span>
              </span>
              <span className="bg-white/10 text-xs text-neutral-300 px-4 py-1 rounded-full">
                Last Updated: <span className="text-white">{updatedAt}</span>
              </span>
            </div>

            <div className="pt-8 flex flex-col md:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-1/2 bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg font-semibold text-sm transition"
              >
                Add to Cart
              </button>

              <button
                onClick={handlePlaceOrder}
                className="w-full md:w-1/2 bg-[#F7B614] hover:bg-[#e5a912] text-black py-3 rounded-lg font-bold text-sm shadow-md transition"
              >
                Place Order
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;