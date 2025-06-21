import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { easeInOut, motion, scale, spring } from "motion/react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Features from "./components/Features";
import Products from "./components/Products";
import Testimorials from "./components/Testimorials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setloader(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loader ? (
        <motion.div
          className="h-screen flex justify-center items-center bg-white text-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2,delay:1.5 }}
        >
          <div className="w-1/5 h-1/2 rounded-full p-3 scale-125">
            <motion.img
              className="w-96 scale-150 "
              src="src/assets/Welcome.gif"
              initial={{ y: -50, opacity: 1, scale: 2,rotate:0 }}
              animate={{ y: 0, opacity: 0, scale: 10,rotate:15 }}
              transition={{ duration: 1.5, ease: easeInOut,delay:1 }}
            ></motion.img>
          </div>
        </motion.div>
      ) : (
        <div className="min-h-screen">
          {/* navbar */}
          <Navbar />
          {/* HeroSection  */}
          <Herosection />
          {/* Features Section  */}
          <Features />
          {/* Featured Products */}
          <Products />
          {/* Testimonials */}
          <Testimorials />
          {/* CTA */}
          <Cta />
          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
