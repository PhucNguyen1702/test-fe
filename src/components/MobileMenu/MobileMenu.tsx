import { X } from "lucide-react";
import { navItems } from "@config/common.ts";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../LangSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const MobileMenu = ({ isOpen, toggleNavbar }: MobileMenuProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-white flex flex-col justify-center items-center lg:hidden">
      <button
        onClick={toggleNavbar}
        className="absolute top-8 right-2 text-black"
      >
        <X size={32} />
      </button>
      <ul className="w-full px-6">
        {navItems.map((item, index) => (
          <li key={index} className="w-full border-b border-gray-200">
            <a
              href={item.href}
              className="block py-4 text-center font-bold text-lg text-black"
            >
              {t(item.label)}
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute top-6 left-6 border bg-[#F6F6F6] rounded-lg">
        <LangSwitcher />
      </div>
    </div>
  );
};

export default MobileMenu;
