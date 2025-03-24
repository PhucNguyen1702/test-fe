"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { logoItem } from "@config/common.ts";
import { IMAGES } from "@config/images.ts";
import { useTranslation } from "react-i18next";

const PartnersSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const duplicatedLogos = [...logoItem, ...logoItem];

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3,
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex >= logoItem.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setActiveIndex(0);
        }
      }, 500);
    }
  }, [activeIndex]);

  // Next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.8s ease-in-out";
    }
  }, []);

  // Prev slide
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? logoItem.length - 1 : prev - 1));
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  return (
    <section className="w-full max-md:max-w-full lg:mt-[130px] max-md:mt-[60px]">
      <div className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-100 max-md:px-5 max-md:py-24">
        <div className="flex flex-col w-full max-w-[1460px]">
          <h2 className="self-center text-6xl font-black text-center text-black tracking-[3.6px] max-md:text-4xl font-playfair">
            {t("partner")}
          </h2>

          {/* Carousel Container */}
          <div className="mt-20 max-md:mt-10 relative flex items-center overflow-hidden">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous partners"
              className="absolute left-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0F0F3] shadow transition-all duration-200"
            >
              <img src={IMAGES.arrowLeft} alt="Prev" />
            </button>

            {/* Carousel Track */}
            <div
              className="overflow-hidden w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={trackRef}
                className="flex transition-transform duration-800 ease-in-out min-h-[100px]"
                style={{
                  transform: `translateX(-${(100 / itemsToShow) * activeIndex}%)`,
                  width: `${(100 / itemsToShow) * duplicatedLogos.length}%`,
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center px-4"
                    style={{ width: `${100 / duplicatedLogos.length}%` }}
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="object-contain max-h-24 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next partners"
              className="absolute right-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0F0F3] shadow transition-all duration-200"
            >
              <img src={IMAGES.arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
