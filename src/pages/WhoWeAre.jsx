import Nav from "../components/Nav";
import Button from "../components/Button";
import featherMessage from "../assets/images/feather_message-square.png";
import featherArrow from "../assets/images/feather_arrow-right.png";
import TeamPicture from "../components/TeamPicture";
import teamPicture from "../assets/images/team-picture.png";
import teamPicture2 from "../assets/images/team_picture2.png";
import teamPicture3 from "../assets/images/team_picture3.png";
import teamPicture4 from "../assets/images/team_picture4.png";
import arrowFeatherLeft from "../assets/images/feather_arrow-left.png";
import arrowFeatherRight from "../assets/images/feather_arrow-right1.png";
import RoundButton from "../components/RoundButton";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";

const WhoWeAre = () => {
  return (
    <main>
      <header className="lg:w-[80%] lg:mx-auto">
        <Nav />
      </header>
      <section className="p-5 lg:w-[80%] lg:mx-auto">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[768px] lg:mx-auto">
          <h2 className="font-bold text-blue-600 text-lg lg:text-[22px] capitalize">
            About Us
          </h2>
          <h1 className="font-bold text-black text-3xl lg:text-[40px] lg:text-center p-0 mt-3 mb-3">
            What we do is what make us Who we are
          </h1>
          <p className="mt-6 text-gray-600 lg:text-center lg:text-[22px]">
            DigitUx is a Digital agencay founded 2022, that create User Centred
            Product that help her client to evolve ,our core idealogy is
            Perfection , our goal is to make usefull and easy to use products
            And help people to grow their business,
          </p>
          <div className="flex flex-col justify-center items-center gap-6 mt-12 lg:flex-row lg:justify-start ">
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
        </div>
      </section>
      <section className="p-5 mb-20 lg:w-[80%] lg:mx-auto">
        <div>
          <h2 className="font-bold text-blue-600 text-lg lg:text-[22px] capitalize">
            The Team
          </h2>
          <div className="lg:flex lg:flex-row justify-between items-start">
            <h1 className="font-bold text-black text-3xl lg:text-[40px]  p-0 pr-4 mt-3 mb-3">
              Meet The Awesome and Creative members of Our Team
            </h1>
            <div className="grid grid-cols-2 gap-4 lg:inline-flex p-0 m-0">
              <div className="p-0 m-0">
                <TeamPicture
                  imgUrl={teamPicture}
                  picName={"Jamila Smail"}
                  picPortfolio={"Co-Founder"}
                />
              </div>
              <div>
                <TeamPicture
                  imgUrl={teamPicture2}
                  picName={"Jamila Smail"}
                  picPortfolio={"Full Stack Developer"}
                />
              </div>
              <div className="hidden lg:block">
                <TeamPicture
                  imgUrl={teamPicture3}
                  picName={"Aksel Juba"}
                  picPortfolio={"Graphic Designer"}
                />
              </div>
              <div className="hidden lg:block">
                <TeamPicture
                  imgUrl={teamPicture4}
                  picName={"Dihia Numida"}
                  picPortfolio={"UI/UX Designer"}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-10 mt-8 lg:hidden">
            <RoundButton imgUrl={arrowFeatherLeft} />
            <RoundButton imgUrl={arrowFeatherRight} />
          </div>
        </div>
      </section>
      <TestimonialContainer />
      <Footer />
    </main>
  );
};

export default WhoWeAre;
