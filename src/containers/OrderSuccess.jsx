import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const OrderSuccess = () => {
  return (
    <MainLayout>
      <section className="py-32 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-xl px-4"
        >
          {/* Status Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className="flex justify-center"
          >
            <FaRegCheckCircle className="w-20 h-20 text-[#F7B614]" />
          </motion.div>

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
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default OrderSuccess;
