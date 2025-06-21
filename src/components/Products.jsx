import React from 'react'
import { easeInOut, motion, scale, spring } from "motion/react";

const Products = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px-6 gap-6 justify-evenly">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: easeInOut,
          type: "spring",
          duration: 1,
          stiffness: 120,
          damping: 10,
          delay: 1,
        }}
      >
        ✨ Why Shop With Us?
      </motion.h1>

      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        <motion.div
          className="w-full sm:w-1/2 md:w-1/4 h-auto rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            ease: easeInOut,
            type: "spring",
            duration: 1,
            stiffness: 120,
            damping: 10,
            delay: 0.4,
          }}
        >
          <div className="min-h-60 rounded-full">
            <img className="bg-transparent" src="src/assets/Smartwatch.gif" />
          </div>
          <h1 className="text-xl font-medium">SmartWatch X100</h1>
          <h1 className="text-xl font-medium">Rs.1999</h1>
          <p className="text-sm font-normal">Sleek and durable.</p>
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2 md:w-1/4 h-auto sm:mt-48 md:mt-48 rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            ease: easeInOut,
            type: "spring",
            duration: 1,
            stiffness: 120,
            damping: 10,
            delay: 0.4,
          }}
        >
          <div className="min-h-60 rounded-full">
            <img className="bg-transparent" src="src/assets/Smartwatch.gif" />
          </div>
          <h1 className="text-xl font-medium">Watch</h1>
          <h1 className="text-xl font-medium">Rs.1800</h1>
          <p className="text-sm font-normal">durable.</p>
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2 md:w-1/4 h-auto sm:mt-96 md:mt-96 rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            ease: easeInOut,
            type: "spring",
            duration: 1,
            stiffness: 120,
            damping: 10,
            delay: 0.4,
          }}
        >
          <div className="min-h-60 rounded-full">
            <img className="bg-transparent" src="src/assets/Shopping bag.gif" />
          </div>
          <h1 className="text-xl font-medium">Bag</h1>
          <h1 className="text-xl font-medium">Rs.999</h1>
          <p className="text-sm font-normal">Eco-friendly and roomy</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
