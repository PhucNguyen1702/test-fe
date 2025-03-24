import * as React from "react";
import { useTranslation } from "react-i18next";

const BenefitItem: React.FC<Props> = ({ icon, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-6 py-px mt-10 max-w-full w-[410px] first:mt-0">
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 self-start aspect-[0.98] w-[50px] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <h3 className="self-start text-2xl font-bold leading-none text-black text-left">
          {t(title)}
        </h3>
        <p className="mt-5 text-sm leading-5 text-neutral-500 text-left">
          {t(description)}
        </p>
      </div>
    </div>
  );
};

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default BenefitItem;
