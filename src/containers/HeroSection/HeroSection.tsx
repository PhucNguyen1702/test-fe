import { useState } from "react";
import { IMAGES } from "@config/images.ts";
import { MobileMenu } from "../../components/MobileMenu";
import { Navbar } from "../../components/Navbar";
import { Content } from "./Content";

const HeroSection = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <MobileMenu isOpen={mobileDrawerOpen} toggleNavbar={toggleNavbar} />
      <div
        className="h-[72%] md:h-[75%] lg:h-screen bg-cover bg-no-repeat
                   bg-[left_calc(53%)_top-full] lg:bg-[left_calc(55%)_top-full] xl:bg-[left_calc(70%)_top-full] max-md:h-[100%]"
        style={{
          backgroundImage: `url(${IMAGES.background})`,
          clipPath: "ellipse(80% 100% at 50% 0)",
        }}
      >
        <Navbar toggleNavbar={toggleNavbar} />
        <Content />
      </div>

      <img
        src={IMAGES.hero}
        alt="hero"
        className="absolute left-[11%] bottom-0 translate-y-[6%] scale-[77%]
                   md:scale-[40%] lg:left-[-12%] lg:translate-y-[17%] lg:scale-75 lg:pb-8
                   xl:left-0 xl:translate-y-[6%] xl:scale-100"
      />
    </div>
  );
};

export default HeroSection;
