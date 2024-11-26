"use client"
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div className="flex flex-col w-full justify-start items-center h-full my-56 lg:my-72 z-30" variants={containerVariants}  initial="hidden" animate="visible">
      <div className="flex flex-col justify-center h-full w-full max-w-7xl px-4">
        <div className="flex flex-col">
          <motion.div className="text-4xl md:text-7xl font-neue-ultrabold flex flex-col max-w-4xl"variants={textVariants}>
            <motion.h1 variants={textVariants}>Trusted Multi-Chain</motion.h1>
            <motion.h1 className="flex" variants={textVariants}>
              <span className="text-[#F9D423]">DEX</span>
              <span>&nbsp;Platform</span>
            </motion.h1>
          </motion.div>
          <motion.div className="text-sm md:text-lg font-neue-regular text-[#9E9E9E] text-wrap py-2" variants={textVariants}>
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </motion.div>
        </div>
        <motion.div className="flex flex-row gap-4 mt-6" variants={textVariants}>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button size="sm" className="text-[#111111] bg-gradient-to-tl from-amber-200 to-yellow-400 opacity-95 font-neue-bold rounded-3xl">
              Connect wallet
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button size="sm" className="bg-transparent border border-yellow-500 text-yellow-500 rounded-3xl">
              Trade Crypto
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroSection;