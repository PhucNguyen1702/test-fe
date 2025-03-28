import { benefitItems } from "@config/common.ts";
import { BenefitItem } from "./BenefitItem";
import { useTranslation } from "react-i18next";
import { AnimatedNumber } from "../../components/AnimatedNumber";
import { IMAGES } from "@config/images.ts";
import "./index.scss";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1160px]">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow items-start font-bold max-md:mt-10 max-md:max-w-full">
                <h2 className="text-6xl font-black leading-none text-black tracking-[3.6px] max-md:text-4xl">
                  <Link to="/*" className="hover:underline">
                    {t("aboutUs.title")}
                  </Link>
                </h2>
                <p className="self-stretch mt-12 text-sm leading-5 text-neutral-500 max-md:mt-10 max-md:max-w-full text-left">
                  {t("aboutUs.content")}
                </p>

                <div className="mt-20 max-md:mt-10">
                  <div className="flex flex-col">
                    <h2 className="text-7xl tracking-tighter text-sky-500 max-md:text-4xl">
                      <AnimatedNumber value={600} />
                      <span className="text-4xl">M</span>+
                    </h2>
                    <span className="text-2xl text-black text-left">
                      {t("aboutUs.user")}
                    </span>
                  </div>
                </div>

                <div className="mt-10 whitespace-nowrap">
                  <div className="flex flex-col">
                    <h2 className="text-7xl tracking-tighter text-sky-500 max-md:text-4xl">
                      <AnimatedNumber value={135} />+
                    </h2>
                    <span className="text-2xl text-black text-left">
                      {t("aboutUs.games")}
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-20 py-28 w-full bg-zinc-100 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <div className="w-full min-h-[394px]">
                  {benefitItems.map((benefit, index) => (
                    <BenefitItem
                      key={index}
                      icon={benefit.icon}
                      title={benefit.title}
                      description={benefit.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[800px] mx-auto">
          <img
            src={IMAGES.witch}
            alt="Gaming illustration"
            className="absolute top-0 left-[40%] translate-x-[-50%] z-10 w-[35%] max-w-[533px] aspect-[1.22] mt-16 max-md:mt-10 witch-animation"
          />
          <img
            src={IMAGES.map}
            alt="Gaming banner"
            className="w-full block object-contain aspect-[2.71] max-md:max-w-full mt-[13rem] max-md:mt-[8rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
