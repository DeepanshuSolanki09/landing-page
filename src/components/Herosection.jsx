import React from "react";
import { easeInOut, motion, scale, spring } from "motion/react";

const Herosection = () => {
  return (
    <motion.div
      className="h-auto w-full flex flex-col-reverse md:flex-row items-center justify-evenly my-24 py-10 px-6 gap-10 md:gap-0 overflow-hidden"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: easeInOut,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
    >
      <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Style Meets Comfort
        </h1>
        <p className="text-base sm:text-lg font-normal">
          Discover the latest fashion trends, handpicked for you.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="text-base sm:text-lg font-medium text-white px-6 py-3 rounded-xl bg-[#F8B400] hover:bg-orange-500 hover:scale-105 duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center">
        <div className="bg-[#F8B400]/50 rounded-full p-3 scale-100 md:scale-125">
          <img
            className="w-64 sm:w-80 md:w-96 scale-125"
            src="src/assets/Ecommerce checkout laptop.gif"
            alt="Ecommerce Laptop"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Herosection;
