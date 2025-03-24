import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const { t } = useTranslation();

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex justify-center items-center bg-[#F6F6F6] rounded-xl shadow-lg
             lg:w-[756px] lg:h-[150px]
             max-md:w-[343px] max-md:h-[118px] max-md:mx-auto"
    >
      {Object.entries(timeLeft).map(([unit, value], index, arr) => (
        <div
          key={unit}
          className="flex items-center gap-x-[3.5rem] max-md:gap-x-2 max-md:mx-auto"
        >
          <div className="text-center mx-3 max-md:mx-2">
            <span className="max-md:text-3xl font-bold font-playfair text-black text-6xl">
              {value}
            </span>
            <p className="text-[15] max-md:text-sm font-bold capitalize mt-4 font-playfair text-black">
              {t(`countdown.${unit}`)}
            </p>
          </div>
          {index < arr.length - 1 && (
            <span className="text-6xl max-md:text-2xl font-playfair text-black mr-10 mb-4 text-left max-md:mx-auto">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
