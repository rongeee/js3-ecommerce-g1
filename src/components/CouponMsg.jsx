import React from "react";
import { motion } from "framer-motion";

export const CouponMsg = ({ couponMsg }) => {
  return (
    <motion.div
      animate={{ x: 100, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ x: 100, opacity: 1 }}
    >
      <p>{couponMsg}</p>
    </motion.div>
  );
};
