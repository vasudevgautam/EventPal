import React from "react";
import { motion } from "framer-motion";

const ScrollSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        backgroundColor: "#d2d5fc",
        borderRadius: "8px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        color: "black",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
