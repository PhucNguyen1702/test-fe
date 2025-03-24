"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-extrabold text-gray-800"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 mt-4"
      >
        Oops! Trang bạn tìm không tồn tại.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <button
          onClick={() => navigate("/Home")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Quay về trang chủ
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
