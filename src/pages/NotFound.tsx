import { CakeSlice, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-yellow-50 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8">
        
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
            <CakeSlice className="w-10 h-10 text-pink-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Oops! This page didn’t rise properly in the oven 🍰  
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Brand */}
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Cake Junction
        </p>
      </div>
    </section>
  );
};

export default NotFound;
