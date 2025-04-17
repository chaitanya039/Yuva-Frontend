import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group bg-[#171717] text-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:-translate-y-2  duration-300 border border-[#2a2a2a] backdrop-blur-sm">
      {/* Image */}
      <div className="h-48 bg-neutral-900 flex items-center justify-center overflow-hidden border-b border-neutral-700">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-neutral-400 text-sm">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 relative">
        {/* Category Badge */}
        {product.category?.name && (
          <div className="absolute -top-5 left-5 bg-[#F7B614] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
            {product.category.name}
          </div>
        )}

        {/* Name */}
        <h3 className="text-xl font-semibold group-hover:text-[#F7B614] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-300">{product.description}</p>

        {/* GSM */}
        <div className="text-sm text-neutral-400">
          <span className="text-neutral-500">GSM:</span> {product.gsm}
        </div>

        {/* Prices */}
        <div className="flex justify-between text-sm text-neutral-300 pt-1">
          <div>
            <span className="text-neutral-500">Retail:</span>{" "}
            <span className="text-white font-semibold">
              ₹{product.priceRetail?.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-neutral-500">Wholesale:</span>{" "}
            <span className="text-white font-semibold">
              ₹{product.priceWholesale?.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm pt-2">
          <span className="text-neutral-300">Stock:</span>
          <span
            className={`font-bold ${
              product.stock > 0 ? "text-green-400" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
          </span>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link
            to={`/product/${product._id}`}
            className="inline-block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
