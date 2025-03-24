"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { logoItem as initialLogos } from "@config/common.ts";
import { IMAGES } from "@config/images.ts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PartnersSection = () => {
  const { t } = useTranslation();
  const [logos, setLogos] = useState(initialLogos);
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.6s ease-in-out";
      trackRef.current.style.transform = `translateX(-${100 / visibleItems}%)`;
    }

    setTimeout(() => {
      setLogos((prev) => [...prev.slice(1), prev[0]]);
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = "translateX(0)";
      }
      isTransitioning.current = false;
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${100 / visibleItems}%)`;
    }

    setLogos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);

    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.6s ease-in-out";
        trackRef.current.style.transform = "translateX(0)";
      }
      isTransitioning.current = false;
    }, 50);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [logos]);

  return (
    <section className="w-full max-md:max-w-full lg:mt-[130px] max-md:mt-[60px]">
      <div className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-100 max-md:px-5 max-md:py-24">
        <div className="flex flex-col w-full max-w-[1460px]">
          <h2 className="self-center text-6xl font-black text-center text-black tracking-[3.6px] max-md:text-4xl font-playfair">
            <Link to="/*" className="hover:underline">
              {t("partner")}
            </Link>
          </h2>

          {/* Carousel Container */}
          <div className="mt-20 max-md:mt-10 relative flex items-center overflow-hidden">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous partners"
              className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0F0F3] shadow hover:scale-105 transition-all duration-200"
            >
              <img src={IMAGES.arrowLeft} alt="Prev" className="w-4 h-4" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden w-full">
              <div
                ref={trackRef}
                className="flex transition-transform duration-600 ease-in-out min-h-[100px] transform-gpu"
                style={{ width: `${(logos.length / visibleItems) * 100}%` }}
              >
                {logos.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-center items-center px-4"
                    style={{ width: `${100 / visibleItems}%` }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="object-contain max-h-24 w-auto transition-opacity hover:opacity-100 opacity-90"
                      loading="lazy"
                      whileHover={{
                        scale: 1.2,
                        rotate: -3,
                        transition: { duration: 0.3 },
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next partners"
              className="absolute right-0 z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0F0F3] shadow hover:scale-105 transition-all duration-200"
            >
              <img src={IMAGES.arrowRight} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
