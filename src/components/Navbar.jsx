import React from "react";
import { easeInOut, motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      className="h-auto w-full flex flex-col md:flex-row justify-around items-center bg-white py-6 px-4 gap-4 md:gap-0"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1,
        stiffness: 500,
        damping: 10,
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold">LOGO</h1>

      <div className="flex flex-col md:flex-row justify-around items-center gap-3 md:gap-6 text-base md:text-lg font-medium">
        <h1>Home</h1>
        <h1>Shop</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>

      <button className="text-base md:text-lg font-medium text-white px-6 py-3 rounded-xl bg-[#F8B400] hover:bg-orange-500 hover:scale-105 duration-300">
        Login/Signup
      </button>
    </motion.div>
  );
};

export default Navbar;
