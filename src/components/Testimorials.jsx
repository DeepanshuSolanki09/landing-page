import React from 'react'
import { easeInOut, motion, scale, spring } from "motion/react";

const Testimorials = () => {
  return (
    <div className="max-h-screen w-full flex flex-col items-center py-10 px-6 gap-6 justify-evenly">
            <motion.h1
              className="text-4xl font-bold"
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
              ✨Testimonials
            </motion.h1>
            <div className="h-full w-full flex p-6 justify-center gap-6 md:flex-row flex-col items-center">
              <motion.div
                className="md:w-1/5  md:min-h-3/5 w-4/5 h-4/5  rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 shadow flex flex-col gap-4"
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
                <h1 className="text-xl font-medium">👩‍💼 Priya Sharma</h1>
                <p className="text-sm font-normal">
                  Loved the shopping experience! Got my package in 2 days!
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/5  md:min-h-3/5 w-4/5 h-4/5  rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 shadow flex flex-col gap-4"
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
                <h1 className="text-xl font-medium">👨‍💻 Amit Verma</h1>
                <p className="text-sm font-normal">
                  Support team is amazing. Great product quality too.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/5  md:min-h-3/5 w-4/5 h-4/5  rounded-xl shadow-[0px_0px_9px_5px_rgba(0,0,0,0.2)] p-6 shadow flex flex-col gap-4"
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
                <h1 className="text-xl font-medium">👩‍🎓 Sneha Gupta</h1>
                <p className="text-sm font-normal">
                  Exactly as shown. Packaging was top notch.
                </p>
              </motion.div>
            </div>
          </div>
  )
}

export default Testimorials
