import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const OrderSuccess = () => {
  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-neutral-800 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F7B614]">Order Placed Successfully</h1>
          <p className="text-neutral-300 text-lg">
            Thank you! Your order request has been submitted and is now pending approval by our team.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default OrderSuccess;
