import Image from "next/image"
import MoonexLogo from "@/public/fcawfrfwq 2.svg"
import telegramLogo from "@/public/telegram.svg"
import twitterLogo from "@/public/twitter.svg"
import redditLogo from "@/public/Reddit.svg"

const Footer = () => {
  return <div className="flex bottom-0 left-0 right-0 flex-col w-full items-center py-10 md:py-20 bg-[#041523] z-50">
    <div className="w-full flex flex-col">
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex">
          <Image src={MoonexLogo} height={500} width={500} alt="logo" style={{ width: "150px", height: "150px" }} />
        </div>
        <div className="font-neue-ultrabold">
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-20">
            <li className="hover:underline hover:transition hover:text-yellow-400 duration-500 ease-in-out cursor-pointer">About Us</li>
            <li className="hover:underline hover:transition hover:text-yellow-400 duration-500 ease-in-out cursor-pointer">Roadmap</li>
            <li className="hover:underline hover:transition hover:text-yellow-400 duration-500 ease-in-out cursor-pointer">FAQs</li>
            <li className="hover:underline hover:transition hover:text-yellow-400 duration-500 ease-in-out cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start md:mb-12 gap-3">
          <div className="hidden sm:flex flex-row md:text-2xl font-neue-ultrabold">
            <span>Contact</span><span className="text-yellow-500">&nbsp;Us</span>
          </div>
          <ul className="hidden sm:flex flex-row md:gap-8">
            <Image src={telegramLogo} height={500} width={500} style={{ width: "30px", height: "30px" }} alt="telegram"></Image>
            <Image src={redditLogo} height={500} width={500} style={{ width: "30px", height: "30px" }} alt="telegram"></Image>
            <Image src={twitterLogo} height={500} width={500} style={{ width: "30px", height: "30px" }} alt="telegram"></Image>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Footer