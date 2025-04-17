import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useState([]);

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

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Your <span className="text-[#F7B614]">Cart</span>
          </h1>

          {cart.length === 0 ? (
            <div className="text-center text-neutral-400">
              Your cart is empty.{" "}
              <Link to="/products" className="text-[#F7B614] underline">
                Browse products
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product}
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
                      <p className="text-neutral-400 text-sm">₹{item.price} × {item.quantity}</p>
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
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-end text-xl font-bold pt-6 border-t border-white/10">
                Total: <span className="text-[#F7B614] ml-2">₹{total}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
