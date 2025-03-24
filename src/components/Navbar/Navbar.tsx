import { Menu } from "lucide-react";
import { navItems } from "@config/common.ts";
import logo from "@assets/icon/logo.svg";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../LangSwitcher";

interface NavbarProps {
  toggleNavbar: () => void;
}

const Navbar = ({ toggleNavbar }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 py-3">
      <div className="lg:text-sm">
        <div className="flex justify-between items-center mx-20 max-md:mx-auto">
          <div className="flex items-center flex-shrink-0">
            <img
              className="w-[108px] h-[64px] max-md:w-[68px] max-md:h-[40px] max-md:mx-2 mr-2 transition-all duration-300"
              src={logo}
              alt="Logo"
            />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="font-bold text-sm">
                <a href={item.href}>{t(item.label)}</a>
              </li>
            ))}
            <LangSwitcher />
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end absolute right-2">
            <button onClick={toggleNavbar}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
