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
    <div className="w-full mt-32 flex justify-between gap-28">
      <div className="w-1/2 relative">
        <h2 className="text-blue-600 font-bold mt-5">Hello,</h2>
        <h1 className="capitalize mt-4 font-bold text-4xl leading-normal">
          We Help People to
          <br />
          bring their ideas
          <br />
          Alive
        </h1>
        <p className="font-normal mt-3">
          A talented team to help you in your journey on creating useful and
          easy to use product
        </p>
        <div className="flex items-center mt-12">
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
        <div className="absolute top-28 -m-20">
          <img src={vectorArrow} alt="vector arrow" className="h-80" />
        </div>
      </div>
      <div className="relative mr-10 -mt-10">
        <img src={heroStar} alt="hero star" className="relative w-96" />
        <img
          src={heroPicture}
          alt="hero picture"
          className="absolute top-8 w-96"
        />
        <div className="absolute top-20 -ml-10">
          <Group iconUrl={searchVector} label="UI/UX Designer" />
        </div>
        <div className="absolute top-80 -ml-10">
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
