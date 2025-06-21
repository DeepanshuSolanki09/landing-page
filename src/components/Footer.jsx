import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { easeInOut, motion, scale, spring } from "motion/react";

const Footer = () => {
  return (
    <motion.div
  className="min-h-60 w-full flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center py-10 px-6 gap-10 justify-evenly bg-black text-white text-center md:text-left"
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
  <div className="w-full md:w-1/6">
    <h1 className="text-4xl font-bold text-white">LOGO</h1>
  </div>

  <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 md:gap-10 justify-center md:justify-between">
    <div className="flex flex-col gap-2">
      <h1 className="font-medium">support@shopx.com</h1>
      <h1 className="font-medium">📞 +91 98765 43210</h1>
    </div>
    <div className="flex flex-col gap-2">
      <h1 className="font-medium">Timings: Mon–Sat, 9 AM to 6 PM</h1>
    </div>
    <div className="flex flex-col gap-2 items-center md:items-start">
      <h1 className="flex gap-2 items-center font-medium">
        <FiInstagram /> shopx.in
      </h1>
      <h1 className="flex gap-2 items-center font-medium">
        <FaTwitter /> shopx_online
      </h1>
      <h1 className="flex gap-2 items-center font-medium">
        <FaYoutube /> ShopX
      </h1>
    </div>
  </div>
</motion.div>

  )
}

export default Footer
