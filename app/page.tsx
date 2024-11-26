import NavbarComponent from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Mooenextable from "@/components/Moonextable";
import Features from "@/components/Features";
import FrequentQuestions from "@/components/FrequentQuestions";
import Footer from "@/components/Footer";
import ForeGround from "@/components/foreground";


export default function Home() {
  return (
    <div className="flex relative h-full w-full">
      <ForeGround />
      <div className="bg-primarybackground relative overflow-hidden h-full w-full flex flex-col text-primarytext">
        <NavbarComponent />
        <HeroSection />
        <Mooenextable />
        <Features />
        <FrequentQuestions />
        <Footer />
      </div>
    </div>
  );
}
