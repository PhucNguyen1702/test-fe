import { useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@config/common.ts";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IMAGES } from "@config/images.ts";

const LanguageSwitcher: React.FC<Props> = ({ mobileDrawerOpen }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-transparent "
      >
        <img src={currentLanguage.flag} />
        {!isOpen ? (
          <MdArrowDropUp
            size={24}
            color={mobileDrawerOpen ? "black" : "white"}
          />
        ) : (
          <MdArrowDropDown
            size={24}
            color={mobileDrawerOpen ? "black" : "white"}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-2 mt-2 w-40 bg-white border shadow-lg rounded-md z-50 max-md:left-0">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-200 rounded-md z-50"
            >
              <img
                src={IMAGES.tickIcon}
                className={`w-5 h-5 mr-3 ${i18n.language !== lang.code ? "invisible" : ""}`}
              />
              <img src={lang.flag} />
              <span className={"text-black font-bold text-[10px] ml-2"}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

type Props = {
  mobileDrawerOpen?: boolean;
};

export default LanguageSwitcher;
