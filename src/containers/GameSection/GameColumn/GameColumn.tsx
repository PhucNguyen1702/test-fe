import * as React from "react";
import { GameCard } from "../GameCard";

const GameColumn: React.FC<Props> = ({
  games,
  className = "",
  startWithMargin = false,
  largeMargin = false,
}) => {
  const marginClass = largeMargin ? "mt-80" : "mt-28";

  return (
    <div className={className}>
      <div
        className={`${startWithMargin ? marginClass : ""} text-white max-md:mt-10`}
      >
        {games.map((game, index) => (
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
  );
};

type Props = {
  games: Array<{
    imageSrc: string;
    title: string;
    description: string;
  }>;
  className?: string;
  startWithMargin?: boolean;
  largeMargin?: boolean;
};

export default GameColumn;
