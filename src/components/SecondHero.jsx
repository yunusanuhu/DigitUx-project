import React from "react";
import Button from "../components/Button";
import featherMessage from "../assets/images/feather_message-square.png";
import featherArrow from "../assets/images/feather_arrow-right.png";

const SecondHero = ({ title, header, content }) => {
  return (
    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[768px] lg:mx-auto">
      <h2 className="font-bold text-blue-600 text-lg lg:text-[22px] capitalize">
        {title}
      </h2>
      <h1 className="font-bold text-black text-3xl lg:text-[40px] lg:text-center p-0 mt-3 mb-3">
        {header}
      </h1>
      <p className="mt-6 text-gray-600 lg:text-center lg:text-[22px]">
        {content}
      </p>
      <div className="flex flex-col justify-center items-center gap-6 mt-12 lg:flex-row lg:justify-start ">
        <Button label="Lets talk" imgUrl={featherMessage} />
        <div className="flex items-center ml-5">
          <p className="font-medium mr-2">Check our services</p>
          <img src={featherArrow} alt="feather arrow" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
