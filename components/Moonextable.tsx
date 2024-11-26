"use client"

import { Separator } from "./ui/separator";
import Image from "next/image";
import moonexLogo from "@/public/Moonexlogo.svg"
import unisawpLogo from "@/public/2560px-Uniswap_Logo_and_Wordmark 1.svg"
import tickLogo from "@/public/check_bold.svg"
import closeLogo from "@/public/close_small.svg"
import { motion } from "framer-motion";

const Mooenextable = () => {
  const points = ["1. Point no one", "1. Point no one", "1. Point no one", "1. Point no one", "1. Point no one"];

  return <div className="w-full flex flex-col items-center h-full text-primarytext relative">
    <div className="w-full max-w-7xl px-4 flex flex-col gap-6">
      <div className="hidden md:flex absolute  z-20 h-[410px] w-[575px] top-[50%] left-[25%] blur-3xl bg-[#EDD955]/80 opacity-10 rounded-[50%]">
      </div>
      <div className="text-2xl md:text-4xl font-neue-ultrabold z-50">
        Why <span className="text-[#E4B40D]">MoonEx </span>?
      </div>
      <motion.div className="flex relative flex-row justify-between bg-[#0e1c29] rounded-xl p-3 md:p-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }}>
        <div className="flex flex-row w-full justify-center opacity-100">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full justify-center">
              <div>
                <div className="flex justify-center flex-row text-yellow-500 font-neue-bold text-lg md:text-3xl md:py-5 py-6">
                  Comparision
                </div>
                <Separator className="bg-[#D9D9D9]/10" />
              </div>
              {points.map((point, index) => (
                <motion.div key={index} className="flex flex-col text-[#F0F0F0]/70 font-neue-regular text-lg text-nowrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className="py-6 md:px-10 p-2 flex flex-col">
                    <div>{point}</div>
                  </div>
                  <Separator className="bg-[#D9D9D9]/10" />
                </motion.div>
              ))}
            </div>
            <Separator orientation="vertical" className="bg-[#D9D9D9]/10" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full justify-center">
              <div  >
                <div className="flex justify-center flex-row py-2">
                  <Image src={moonexLogo} width={500} height={500} style={{ height: "60px", width: "150px" }} alt="logo" />
                </div>
                <Separator className="bg-[#D9D9D9]/10" />
              </div>
              <div className="flex flex-col w-full">
                {Array(5).fill(null).map((_, index) => (
                  <motion.div key={index} className="flex flex-col text-[#F0F0F0]/70 font-neue-regular text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }} viewport={{ once: true }} >
                    <div className="flex py-6 md:py-6 w-full justify-center">
                      <Image src={tickLogo} width={500} height={500} style={{ height: "28px", width: "40px" }} alt="logo" />
                    </div>
                    <Separator className="bg-[#D9D9D9]/10" />
                  </motion.div>
                ))}
              </div>
            </div>
            <Separator orientation="vertical" className="bg-[#D9D9D9]/10" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full justify-center">
              <div className="flex flex-col">
                <div className="flex justify-center flex-row py-2">
                  <Image src={unisawpLogo} width={500} height={500} style={{ height: "60px", width: "150px" }} alt="logo" />
                </div>
                <Separator className="bg-[#D9D9D9]/10" />
              </div>
              <div className="flex flex-col w-full">
                {Array(5).fill(null).map((_, index) => (
                  <motion.div key={index} className="flex flex-col text-[#F0F0F0]/70 font-neue-regular text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }} viewport={{ once: true }}>
                    <div className="flex py-6 w-full justify-center">
                      <Image src={closeLogo} width={500} height={500} style={{ height: "28px", width: "40px", scale: 1.75 }} alt="logo" />
                    </div>
                    <Separator className="bg-[#D9D9D9]/10" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
}

export default Mooenextable;