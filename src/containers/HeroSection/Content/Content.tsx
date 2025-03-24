import CountdownTimer from "../../../components/CountDownTimer/CountDownTimer.tsx";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-[22%] w-full h-screen flex items-center justify-center text-center px-4 max-md:top-20">
      <div className="pointer-events-none absolute inset-0 z-10 hidden xl:flex">
        <div className="h-full w-full bg-[radial-gradient(ellipse_50%_30%_at_40%_60%,_#210544_0%,_rgba(23,_5,_68,_0.71)_50%,_rgba(23,_5,_68,_0)_90%)] backdrop-blur-[1px] z-1" />
      </div>

      <div className="max-w-[800px] absolute top-0 z-20">
        <div className="flex flex-col text-center">
          <p className="text-[80px] font-extrabold text-white mb-2 font-playfair max-md:hidden">
            {t("heroSection.we")} {t("heroSection.ready")}
          </p>

          <div className="hidden max-md:flex flex-col">
            <p className="text-[40px] font-extrabold text-white mb-1 font-playfair">
              {t("heroSection.we")}
            </p>
            <p className="text-[40px] font-extrabold text-white font-playfair">
              {t("heroSection.ready")}
            </p>
          </div>
        </div>

        <CountdownTimer targetDate="2025-04-01T00:00:00" />

        <div className="mx-[5rem] mt-10 flex flex-col items-center text-center max-md:mx-[1rem]">
          <p className="text-white  text-[18px] max-md:text-[12px] max-md:w-[85%]">
            {t("heroSection.content")}
          </p>
          <input
            type="text"
            placeholder="Label"
            className="mt-4 px-4 py-2 rounded-md text-black w-full lg:max-w-[400px] h-[56px] bg-white max-md:w-[340px] max-md:h-[56px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
