"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import dollarLogo from "@/public/Dollar.svg"
import phoneOffLogo from "@/public/Phone_Off.svg"
import shieldLogo from "@/public/Shield_Check.svg"
import settingsLogo from "@/public/Options_3.svg"

const Features = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.div className="flex flex-col w-full items-center h-full my-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      <div className="flex flex-col w-full max-w-7xl justify-center gap-8">
        <motion.div className="flex w-full font-neue-ultrabold text-4xl justify-center" variants={titleVariants}>
          <span>Our</span><span className="text-yellow-500">&nbsp;Features</span>
        </motion.div>
        <div className="flex flex-col items-center md:items-stretch justify-center lg:flex-row w-full md:justify-evenly px-4 gap-4 md:gap-8">
          {[
            { icon: dollarLogo, title: "Cheapest TXs", description: "Exchange popular digital currencies at the cheapest possible transaction price" },
            { icon: shieldLogo, title: "CerTIK", description: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to" },
            { icon: phoneOffLogo, title: "No Contract Sells", description: "No contract sells to fund the marketing wallets" },
            { icon: settingsLogo, title: "Cross Dex Support", description: "Exchange popular digital currencies at the cheapest possible transaction price" }
          ].map((feature, index) => (
            <motion.div key={index} className="p-8 bg-[#0e1c29] rounded-xl w-full lg:max-w-80" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col gap-8">
                <motion.div className="h-16 w-16 bg-[#D9D9D9]/10 rounded-full flex justify-center items-center" variants={iconVariants}>
                  <Image src={feature.icon} height={500} width={500} alt={`${feature.title} icon`} style={{ height: "40px", width: "40px" }} />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <div className="font-neue-bold">
                    {feature.title}
                  </div>
                  <div className="text-[#B6B6B6]">
                    {feature.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Features;