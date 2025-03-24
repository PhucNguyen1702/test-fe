"use client";
import { gameData } from "@config/common.ts";
import { GameColumn } from "./GameColumn";
import { GameCard } from "./GameCard";
// import { useTranslation } from "react-i18next";

const GamesSection = () => {
  // Create combined arrays for mobile view
  const mobileColumn1Games = [...gameData.slice(0, 3), ...gameData.slice(3, 6)]; // Column 1 + Column 3
  const mobileColumn2Games = [
    ...gameData.slice(6, 9),
    ...gameData.slice(9, 12),
  ]; // Column 2 + Column 4

  return (
    <section className="overflow-hidden px-20 pt-3 pb-0.5 w-full max-md:px-5 max-md:max-w-full">
      {/* Desktop View */}
      <div className="flex gap-5 max-md:hidden">
        <div className="w-[76%]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col self-end max-w-full text-center w-[838px]">
              <h2 className="self-center text-6xl font-black leading-none text-black tracking-[3.6px]">
                Our Games
              </h2>
              <p className="mt-7 text-sm leading-5 text-neutral-500">
                As a pioneer of mobile app gamification, we take pride in
                originality and individuality, providing global players with
                state-of-the-art games that feature splendid storylines,
                sensational sound effects and magnificent animation that never
                cease to impress.
              </p>
            </div>

            <div className="mt-20">
              <div className="flex gap-5">
                {/* Column 1 */}
                <GameColumn games={gameData.slice(0, 3)} className="w-[33%]" />

                {/* Column 2 */}
                <GameColumn
                  games={gameData.slice(3, 6)}
                  className="ml-5 w-[33%]"
                  startWithMargin={true}
                />

                {/* Column 3 */}
                <GameColumn
                  games={gameData.slice(6, 9)}
                  className="ml-5 w-[33%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <GameColumn
          games={gameData.slice(9, 12)}
          className="ml-5 w-[24%]"
          startWithMargin={true}
          largeMargin={true}
        />
      </div>

      {/* Mobile View */}
      <div className="hidden max-md:block">
        <div className="flex flex-col w-full mt-10 max-w-full">
          <div className="flex flex-col max-w-full text-center">
            <h2 className="self-center text-6xl font-black leading-none text-black tracking-[3.6px] max-md:text-4xl">
              Our Games
            </h2>
            <p className="mt-7 text-sm leading-5 text-neutral-500 max-md:max-w-full">
              As a pioneer of mobile app gamification, we take pride in
              originality and individuality, providing global players with
              state-of-the-art games that feature splendid storylines,
              sensational sound effects and magnificent animation that never
              cease to impress.
            </p>
          </div>

          <div className="mt-10 flex gap-4 justify-between">
            {/* Mobile Column 1 (Original Column 1 + Column 3) */}
            <div className="w-[48%]">
              {mobileColumn1Games.map((game, index) => (
                <div key={index} className={index > 0 ? "mt-10" : ""}>
                  <GameCard
                    imageSrc={game.imageSrc}
                    title={game.title}
                    description={game.description}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Column 2 (Original Column 2 + Column 4) */}
            <div className="w-[48%]">
              {mobileColumn2Games.map((game, index) => (
                <div key={index} className={index > 0 ? "mt-10" : ""}>
                  <GameCard
                    imageSrc={game.imageSrc}
                    title={game.title}
                    description={game.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GamesSection;
