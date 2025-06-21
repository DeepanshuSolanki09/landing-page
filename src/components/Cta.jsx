import React from "react";
import { easeInOut, motion, scale, spring } from "motion/react";

const Cta = () => {
  return (
    <motion.div
      className="max-h-screen w-full flex flex-col md:flex-row items-center py-10 px-6 gap-6 justify-evenly bg-orange-500"
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: easeInOut,
        type: "spring",
        duration: 1,
        stiffness: 120,
        damping: 10,
        delay: 0.8,
      }}
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Subscribe for exclusive offers!
        </h1>
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <input
          type="email"
          className="text-base md:text-lg px-6 py-3 rounded-lg"
          placeholder="Enter Your Email"
        />
        <button className="font-medium text-base md:text-lg px-6 py-3 rounded-lg bg-black text-white hover:scale-105 duration-300">
          Subscribe Now
        </button>
      </div>
    </motion.div>
  );
};

export default Cta;
