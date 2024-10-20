import React from "react";
import featherSend from "../assets/images/feather_send.png";
import { footerNavLinks, social } from "../constants";
import headerLogo from "../assets/images/headerLogo.png";
const Footer = () => {
  return (
    <div>
      <section className="bg-slate-100 mt-24 ">
        <footer className="p-6 pb-24 grid grid-cols-2 lg:grid-cols-4 lg:w-[80%] mx-auto">
          <div>
            <img src={headerLogo} alt="" />
            <p className="mt-5 text-gray-600 text-2xl pr-3">
              DigitUx is a Digital agencay that create User centred Product that
              help her client to evolve
            </p>
          </div>
          <div className="hidden lg:block">
            <h2 className="font-bold text-lg">About</h2>
            <ul className="mt-5">
              {footerNavLinks.map((item) => (
                <li className="py-3" key={item.label}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h2 className="font-bold text-lg">Follow Us</h2>
            <ul className="mt-5">
              {social.map((item) => (
                <li key={item.id} className="flex gap-2 items-center py-3">
                  <img src={item.imgUrl} alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-black font-bold text-2xl">
              Get In touch with Us
            </h2>
            <p className="mt-5 text-gray-600 text-xl">
              Need Answers? Need help ? Just email us
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email"
                className="w-full border-2 p-5 pr-14 outline-none text-xl mt-5 border-gray-600 rounded-lg"
              />
              <img
                src={featherSend}
                alt="feather send"
                width={30}
                className="absolute top-11 right-5"
              />
            </div>
          </div>
        </footer>
      </section>
      <div className="bg-sky-950 ">
        <p className="text-white text-center p-10 font-semibold text-lg lg:text-left lg:w-[80%] mx-auto">
          Designed By Hmimi Chioukh 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
