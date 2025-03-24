"use client";
import { gameData } from "@config/common.ts";
import { GameColumn } from "./GameColumn";
import { GameCard } from "./GameCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GamesSection = () => {
  const mobileColumn1Games = [...gameData.slice(0, 3), ...gameData.slice(3, 6)]; // Column 1 + Column 3
  const mobileColumn2Games = [
    ...gameData.slice(6, 9),
    ...gameData.slice(9, 12),
  ];

  const { t } = useTranslation();

  return (
    <section className="overflow-hidden px-20 pt-3 pb-0.5 w-full max-md:px-5 max-md:max-w-full">
      {/* Desktop View */}
      <div className="flex gap-5 max-md:hidden">
        <div className="w-[76%]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col self-end max-w-full text-center w-[838px]">
              <h2 className="self-center text-6xl font-black leading-none text-black tracking-[3.6px]">
                <Link to="/*" className="hover:underline">
                  {t("game.ourGames")}
                </Link>
              </h2>
              <p className="mt-7 text-sm leading-5 text-neutral-500">
                {" "}
                {t("game.content")}
              </p>
            </div>

            <div className="mt-20">
              <div className="flex gap-5">
                <GameColumn games={gameData.slice(0, 3)} className="w-[33%]" />

                <GameColumn
                  games={gameData.slice(3, 6)}
                  className="ml-5 w-[33%]"
                  startWithMargin={true}
                />

                <GameColumn
                  games={gameData.slice(6, 9)}
                  className="ml-5 w-[33%]"
                />
              </div>
            </div>
          </div>
        </div>

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
              <Link to="/*" className="hover:underline">
                {t("game.ourGames")}
              </Link>
            </h2>
            <p className="mt-7 text-sm leading-5 text-neutral-500 max-md:max-w-full">
              {t("game.content")}
            </p>
          </div>

          <div className="mt-10 flex gap-4 justify-between">
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
