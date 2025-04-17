import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import MainLayout from "../components/MainLayout";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch product details
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

  // 🛒 Add to Cart Logic
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

  // ✅ Place Order Logic
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
        <div className="py-32 text-center text-neutral-400">Loading product...</div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-red-500">Product not found.</div>
      </MainLayout>
    );
  }

  const createdAt = new Date(product.createdAt).toLocaleDateString();
  const updatedAt = new Date(product.updatedAt).toLocaleDateString();

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
          {/* Category Badge */}
          <div className="absolute top-10 left-10 bg-[#F7B614] text-black font-bold text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
            {product.category?.name || "Uncategorized"}
          </div>

          {/* Image */}
          <div className="w-full h-[450px] bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
            <img
              src={product.image || "https://placehold.co/600x400"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
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

            {/* Date Badges */}
            <div className="flex gap-4 flex-wrap pt-4">
              <span className="bg-white/10 text-xs text-neutral-300 px-4 py-1 rounded-full">
                Added On: <span className="text-white">{createdAt}</span>
              </span>
              <span className="bg-white/10 text-xs text-neutral-300 px-4 py-1 rounded-full">
                Last Updated: <span className="text-white">{updatedAt}</span>
              </span>
            </div>

            {/* Actions */}
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
