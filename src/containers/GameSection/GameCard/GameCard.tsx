"use client";
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
  );
};

export default GameCard;
