import { navLinks } from "../constants";
import headerLogo from "../assets/images/headerLogo.png";
import Button from "./Button";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center mt-8">
      <a href="#">
        <img src={headerLogo} alt="logo" width={120} height={48} />
      </a>
      <ul className="flex items-center gap-6 max-lg:hidden">
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
      <Button label="Get a quote" />
    </nav>
  );
};

export default Nav;
