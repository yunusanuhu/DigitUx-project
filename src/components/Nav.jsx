import { navLinks } from "../constants";
import headerLogo from "../assets/images/headerLogo.png";
import Button from "./Button";
import hamburger from "../assets/images/feather_menu.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [isPreset, setIsPresent] = useState(true);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center m-5 lg:justify-between ">
      <a href="#">
        <img src={headerLogo} alt="logo" width={120} height={48} />
      </a>

      <ul className="hidden lg:flex items-center lg:gap-6">
        {navLinks.map((item) => (
          <li key={item.label} className="p-1">
            <a
              href={item.href}
              className="font-poppins font-semibold text-slate-500 "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Button label="Get a quote" />
      </div>

      <div className="lg:hidden">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Nav;
