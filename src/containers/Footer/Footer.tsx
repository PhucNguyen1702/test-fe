"use client";
import * as React from "react";
import { IMAGES } from "@config/images.ts";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full min-h-[526px] max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-16 py-24 w-full min-h-[446px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            src={IMAGES.footerBackground}
            alt="Footer background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-wrap gap-[17.5rem] max-md:gap-[4rem]  w-full max-w-[1460px] max-md:max-w-full max-md:justify-center">
            <div className="self-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0de42286640dc3f3c7be121b855e904af8769e?placeholderIfAbsent=true&apiKey=fbbeefc2cd8b44bdae546cf2f4d3698a"
                alt="Etech logo"
                className="object-contain aspect-[1.7] w-[163px] max-md:mr-1.5"
              />
              <div className="flex overflow-hidden gap-6 items-center mt-10 min-h-10">
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/89ad9aab05d0af7f11a028e8fba1bae27e7a6749?placeholderIfAbsent=true&apiKey=fbbeefc2cd8b44bdae546cf2f4d3698a"
                  alt="Social media icon 1"
                />
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c375ae645208224fa6fbabd4599f82032543a488?placeholderIfAbsent=true&apiKey=fbbeefc2cd8b44bdae546cf2f4d3698a"
                  alt="Social media icon 2"
                />
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7adfcccdc698c0aad325718ebc459343efe0ff21?placeholderIfAbsent=true&apiKey=fbbeefc2cd8b44bdae546cf2f4d3698a"
                  alt="Social media icon 3"
                />
              </div>
            </div>
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full text-sm max-md:mt-10">
                    <h3 className="text-2xl font-bold leading-none text-white text-left">
                      {t("footer.address")}
                    </h3>
                    <div className="flex gap-2 items-start mt-10 max-w-full leading-5 text-white w-[410px]">
                      <div className="flex shrink-0 w-10 h-10">
                        <img src={IMAGES.location} alt={"Location"} />
                      </div>
                      <address className="min-w-60 w-[362px] not-italic text-left">
                        <p> {t("footer.usLocation")}</p>
                        <p className="mt-3 text-left">
                          {t("footer.vnLocation")}
                        </p>
                      </address>
                    </div>
                    <div className="flex overflow-hidden gap-2 items-center self-start mt-10 leading-snug text-white">
                      <div className="flex shrink-0 self-stretch my-auto w-10 h-10">
                        <img src={IMAGES.mobile} alt={"Mobile"} />
                      </div>
                      <p className="self-stretch my-auto">(+1) 555-0108-000</p>
                      <p className="self-stretch my-auto">{t("footer.or")}</p>
                      <p className="self-stretch my-auto">(+236) 555-0108</p>
                    </div>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-white max-md:mt-10">
                    <h3 className="self-start text-2xl font-bold leading-none">
                      {t("footer.subscribe")}
                    </h3>
                    <p className="mt-10 text-sm leading-5 text-left">
                      {t("footer.registerInfo")}
                    </p>
                    <div className="mt-3 text-base leading-none text-black whitespace-nowrap">
                      <input className="overflow-hidden flex-1 shrink gap-0.5 self-stretch py-5  w-full basis-0 min-w-60 bg-white text-white rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-lg leading-none text-center text-white max-md:max-w-full">
        <div className="px-16 py-7 w-full bg-black max-md:px-5 max-md:max-w-full">
          2017 Copyright. Policy.
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <a href="#" aria-label={alt}>
    <img
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
    />
  </a>
);

export default Footer;
