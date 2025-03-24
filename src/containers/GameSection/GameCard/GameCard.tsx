"use client";
import { motion } from "framer-motion";
import * as React from "react";

interface GameCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <motion.div
      className="shadow-lg cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <article className="w-full rounded-3xl">
        <div className="flex relative flex-col items-start pt-96 pr-10 pb-10 pl-8 w-full rounded-none aspect-[0.732] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:pt-[60%] max-md:px-5 max-md:pb-6">
          <img
            src={imageSrc}
            alt={`${title} game`}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <h3 className="relative z-10 text-5xl font-bold tracking-tighter leading-none text-white max-md:text-3xl text-left">
            {title}
          </h3>
          <p className="relative z-10 mt-6 text-sm leading-5 text-white max-md:mt-3 text-left">
            {description}
          </p>
        </div>
      </article>
    </motion.div>
  );
};

export default GameCard;
