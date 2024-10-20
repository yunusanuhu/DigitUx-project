import Button from "./Button";
import featherArrow from "../assets/images/feather_arrow-right.png";
import featherMessage from "../assets/images/feather_message-square.png";
import heroPicture from "../assets/images/hero_picture.png";
import heroStar from "../assets/images/Star 1.png";
import vectorArrow from "../assets/images/Vector 1.png";
import Group from "./Group";
import searchVector from "../assets/images/searchVector.png";
import bellVector from "../assets/images/bellVector.png";
import flowVector from "../assets/images/flowVector.png";
import uiKit from "../assets/images/uiKitVector.png";
import titik from "../assets/images/Titik-titik.png";
const Hero = () => {
  return (
    <div className="m-5 lg:flex lg:justify-between lg:flex-row md:flex-col">
      <div className="lg:pt-10 lg:max-w-[540px] ">
        <h2 className="text-blue-600 font-bold mt-5">Hello,</h2>
        <h1 className="capitalize mt-4 font-bold text-4xl lg:text-6xl leading-normal">
          We Help People to <br className="hidden lg:block" />
          bring their ideas <br className="hidden lg:block" />
          Alive
        </h1>
        <p className="font-normal text-lg lg:text-2xl text-gray-600 my-6 lg:leading-10">
          A talented team to help you in your journey on creating useful and
          easy to use product
        </p>
        <div className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-start">
          <Button label="Lets talk" imgUrl={featherMessage} />
          <div className="flex items-center ml-5">
            <p className="font-medium mr-2">Check our services</p>
            <img
              src={featherArrow}
              alt="feather arrow"
              width={14}
              height={14}
            />
          </div>
        </div>
        <div className="hidden lg:block absolute top-[300px] -m-20">
          <img src={vectorArrow} alt="vector arrow" className="max-h-[360px]" />
        </div>
      </div>
      <div className="hidden lg:block relative lg:mr-10">
        <img
          src={heroStar}
          alt="hero star"
          className="relative lg:h-auto max-w-[450px] "
        />
        <img
          src={heroPicture}
          alt="hero picture"
          className="absolute top-8 lg:h-auto max-w-[450px] "
        />
        <div className="absolute top-28 -ml-10">
          <Group iconUrl={searchVector} label="UI/UX Designer" />
        </div>
        <div className="absolute top-96 -ml-10">
          <Group iconUrl={bellVector} label="Icons" />
        </div>
        <div className="absolute top-44 right-0 -mr-20">
          <Group iconUrl={flowVector} label="Flow charts" />
        </div>
        <div className="absolute top-80 right-0 -mr-2">
          <Group iconUrl={uiKit} label="UI Kit" />
        </div>
        <div className="absolute right-0 -z-10 -mr-36 top-40">
          <img src={titik} alt="Titik" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
