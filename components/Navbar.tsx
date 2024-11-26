"use client"
import Image from "next/image";
import moonexLogo from "@/public/Moonexlogo.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.3,
      },
    }),
  };

  const menuItems = ["Home", "About Us", "Roadmap", "FAQs", "ContactUs"];

  return (
    <div className="flex flex-col bg-transparent w-full font-neue-bold justify-center items-center z-30">
      <div className="w-full max-w-7xl flex flex-row py-8 px-4 justify-between items-center">
        <div className="sm:hidden">
          <Image src={moonexLogo} width={110} height={110} alt="logo" />
        </div>
        <div className="hidden sm:flex">
          <Image src={moonexLogo} width={500} height={500} style={{ height: "75px", width: "200px" }} alt="logo" />
        </div>
        <div className="hidden sm:flex w-full max-w-5xl px-12">
          <ul className="w-full flex flex-row justify-evenly font-extrabold">
            <li className="hover:underline hover:text-navbarsecondary hover:transition cursor-pointer hover:duration-500 ease-in-out">Home</li>
            <li className="hover:underline hover:text-navbarsecondary hover:transition cursor-pointer hover:duration-500 ease-in-out">About Us</li>
            <li className="hover:underline hover:text-navbarsecondary hover:transition cursor-pointer hover:duration-500 ease-in-out">Roadmap</li>
            <li className="hover:underline hover:text-navbarsecondary hover:transition cursor-pointer hover:duration-500 ease-in-out">FAQs</li>
            <li className="hover:underline hover:text-navbarsecondary hover:transition cursor-pointer hover:duration-500 ease-in-out">ContactUs</li>
          </ul>
        </div>
        <div>
          <Button size="sm" className="text-[#111111] bg-gradient-to-tl from-amber-200 to-yellow-400 opacity-95 font-neue-bold rounded-3xl">Connect wallet</Button>
        </div>
        <motion.div className="sm:hidden" whileTap={{ scale: 0.95 }}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            <div className="space-y-2">
              <span className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-yellow-200 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="sm:hidden w-full absolute top-24 bg-white/5 rounded-2xl backdrop-blur-sm" variants={menuVariants} initial="initial" animate="animate" exit="exit">
            <ul className="flex flex-col items-center py-4 space-y-4 font-neue-bold">
              {menuItems.map((item, index) => (
                <motion.li key={item} variants={listItemVariants} initial="initial" animate="animate" custom={index} whileHover={{ scale: 1.1 }} className={item === "Home" ? "text-navbarsecondary" : ""}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarComponent;