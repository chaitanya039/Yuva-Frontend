import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../utils/api";
import { motion } from "framer-motion";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const removeItem = (productId) => {
    const updated = cart.filter((item) => item.product !== productId);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId, increment) => {
    const updated = cart.map((item) => {
      if (item.product === productId) {
        const newQty = item.quantity + increment;
        if (newQty < 1) return item;
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    const payload = {
      items: cart.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
      customerNote: "",
    };

    try {
      const res = await api.post("/order-requests", payload);
      if (res.data?.statusCode === 201) {
        toast.success("Order placed successfully!");
        localStorage.removeItem("cart");
        setTimeout(() => navigate("/order-success"), 1000);
      } else {
        toast.error("Failed to place order.");
      }
    } catch (err) {
      toast.error("Something went wrong during checkout.");
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Your <span className="text-[#F7B614]">Cart</span>
          </h1>

          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-neutral-400"
            >
              Your cart is empty. {" "}
              <Link to="/products" className="text-[#F7B614] underline">
                Browse products
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {cart.map((item, index) => (
                <motion.div
                  key={item.product}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "https://placehold.co/100x100"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md border border-white/10"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-neutral-400 text-sm">₹{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product, -1)}
                          className="px-2 py-1 text-lg bg-neutral-700 hover:bg-neutral-600 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product, 1)}
                          className="px-2 py-1 text-lg bg-neutral-700 hover:bg-neutral-600 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-6">
                    <p className="text-[#F7B614] font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.product)}
                      className="text-red-400 hover:text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Total + Checkout */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 mt-8"
              >
                <h2 className="text-xl font-bold">
                  Total: <span className="text-[#F7B614]">₹{total}</span>
                </h2>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={handleCheckout}
                    className="bg-[#F7B614] hover:bg-[#e5a912] text-black px-6 py-2 rounded font-bold text-sm"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Cart;
