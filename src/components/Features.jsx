import React from 'react'
import { easeInOut, motion, scale, spring } from "motion/react";

const Features = () => {
  return (
    <motion.div className="max-h-screen w-full flex flex-col items-center py-10 px-6 gap-6 justify-evenly">
            <motion.h1
              className="text-3xl font-bold md:text-4xl"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                ease: easeInOut,
                type: "spring",
                duration: 1,
                stiffness: 120,
                damping: 10,
              }}
            >
              ✨ Why Shop With Us?
            </motion.h1>
            <motion.div className="max-h-screen w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
              <motion.div
                className="w-full sm:w-[45%] md:w-[22%] min-h-[200px] rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  ease: easeInOut,
                  type: "spring",
                  duration: 1,
                  stiffness: 120,
                  damping: 10,
                  delay: 0.2,
                }}
              >
                <h1>🚚 </h1>
                <h1 className="text-xl font-medium">Free Shipping</h1>
                <p className="text-sm font-normal">
                  Enjoy fast and free delivery on all orders over Rs.499.
                </p>
              </motion.div>
              <motion.div
                className="w-full sm:w-[45%] md:w-[22%] min-h-[200px] rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  ease: easeInOut,
                  type: "spring",
                  duration: 1,
                  stiffness: 120,
                  damping: 10,
                  delay: 0.4,
                }}
              >
                <h1>🔐 </h1>
                <h1 className="text-xl font-medium">Secure Payments</h1>
                <p className="text-sm font-normal">
                  {" "}
                  100% secure and encrypted payment methods.
                </p>
              </motion.div>
              <motion.div
                className="w-full sm:w-[45%] md:w-[22%] min-h-[200px] rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  ease: easeInOut,
                  type: "spring",
                  duration: 1,
                  stiffness: 120,
                  damping: 10,
                  delay: 0.6,
                }}
              >
                <h1>🔄 </h1>
                <h1 className="text-xl font-medium"> Easy Returns</h1>
                <p className="text-sm font-normal">
                  Hassle-free 7-day return policy
                </p>
              </motion.div>
              <motion.div
                className="w-full sm:w-[45%] md:w-[22%] min-h-[200px] rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 flex flex-col gap-4"
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
                <h1>✅ </h1>
                <h1 className="text-xl font-medium">Premium Quality</h1>
                <p className="text-sm font-normal">
                  All products are handpicked and quality checked.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
  )
}

export default Features
