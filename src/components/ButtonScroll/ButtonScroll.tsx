import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-6 right-6 w-[80px] h-[80px] flex items-center justify-center
    bg-white rounded-full shadow-lg transition-transform duration-300 z-20 max-md:w-[40px] max-md:h-[40px]"
      style={{ transform: isScrolled ? "rotate(180deg)" : "rotate(0deg)" }}
      onClick={scrollToTop}
    >
      <ChevronDown size={40} color={"black"} />
    </button>
  );
};

export default ScrollButton;
