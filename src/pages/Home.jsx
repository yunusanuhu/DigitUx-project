import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { clients } from "../constants";
import Card from "../components/Card";
import teamPicture from "../assets/images/team-picture.png";
import arrowFeatherLeft from "../assets/images/feather_arrow-left.png";
import arrowFeatherRight from "../assets/images/feather_arrow-right1.png";
import RoundButton from "../components/RoundButton";
import titik from "../assets/images/Titik-titik.png";
import gridPic1 from "../assets/images/grid_pic1.png";
import GridPicture from "../components/GridPicture";
import gridPic2 from "../assets/images/grid_pic2.png";
import gridPic3 from "../assets/images/grid_pic3.png";
import gridPic4 from "../assets/images/grid_pic4.png";
import gridPic5 from "../assets/images/grid_pic5.png";
import PlainButton from "../components/PlainButton";
import featherRight from "../assets/images/feather_chevron-right.png";
import testimonialMale from "../assets/images/testimonial_male.png";
import testimonialFemale from "../assets/images/testimonial_female.png";
import Testimonial from "../components/Testimonial";
import headerLogo from "../assets/images/headerLogo.png";
import featherSend from "../assets/images/feather_send.png";

const Home = () => {
  return (
    <main className="">
      <header className="lg:w-[80%] lg:mx-auto lg:min-h-screen">
        <Nav />
        <section className="lg:mt-20">
          <Hero />
        </section>
      </header>
      <section className="p-5 lg:w-[80%] lg:mx-auto">
        <h2 className="font-bold capitalize my-4 text-center lg:text-start">
          Clients we helped
        </h2>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:mt-10">
          {clients.map((client) => (
            <div key={client.imgUrl}>
              <img src={client.imgUrl} alt="microsoft logo" />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10 p-6 lg:w-[80%] lg:mx-auto">
        <h2 className="font-bold text-blue-600 text-xl capitalize">
          The services we offer
        </h2>
        <div className="mt-6 mb-20 grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h1 className="text-black text-4xl font-bold">
              We offer a variety of services to help you to grow and build your
              brand and help you with developing your products
            </h1>
          </div>
          <div>
            <Card
              heading="UI/UX Design, Web Design"
              content="Making your products clean and easy to use it the important thing for us"
            />
          </div>
          <div>
            <Card
              heading="Web App Development"
              content="Our Team will use the top technologies to develope your product"
            />
          </div>
          <div>
            <Card
              heading="Marketing Digital, Social Media"
              content="Grow your communty with our inbound marketing and social media merketing"
            />
          </div>
          <div>
            <Card
              heading="Brand Stratgey &Art Diractiont"
              content="Help you to create an unique brand that stay in Clients Head"
            />
          </div>
          <div>
            <Card
              heading="Visual Identity Logo Brand"
              content="A logo Can make a big diffrance our team will Help you with that"
            />
          </div>
          <div>
            <Card
              heading="Video / Ads Production"
              content="What better way to reach user then with a good video to win their trust"
            />
          </div>
        </div>
      </section>
      <section className=" mb-20 p-6 lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5">
        <div className="max-width:[500px]">
          <h2 className="font-bold text-blue-600 text-xl capitalize ">
            The Team behind DigitUX
          </h2>
          <h1 className="text-black text-4xl font-bold mt-6 mb-10 lg:max-w-[500px]">
            A team of creative Who Excited to help you with your Idea
          </h1>
          <p className="text-xl leading-8 text-slate-600 lg:max-w-[500px]">
            Our team of digital product creators and Tch Bring Skilled will take
            your idea to the next level and help you with your product
          </p>
        </div>
        <div className="relative">
          <img
            src={teamPicture}
            alt="team picture"
            className="mr-32 mt-10 w-[350px]"
          />
          <p className="text-black text-xl font-bold my-5">Jamila Smail</p>
          <p className="text-slate-600 font-semibold mb-5">Co-Founder</p>
          <div className="flex gap-10 justify-end m-8 mr-32">
            <RoundButton imgUrl={arrowFeatherLeft} />
            <RoundButton imgUrl={arrowFeatherRight} />
          </div>
          <img
            className="absolute top-0 right-0 -z-10 h-auto w-[267px]"
            src={titik}
            alt="tikitak"
          />
        </div>
      </section>
      <section className="mb-36 p-6 lg:w-[80%] lg:mx-auto">
        <h2 className="font-bold text-blue-600 text-xl capitalize ">
          The work we realised
        </h2>
        <h1 className="text-black text-4xl font-bold mt-6 mb-10 max-width-[540px]">
          The work we did that made our Client happy and satisfied
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <GridPicture
              imgUrl={gridPic1}
              heading="UI/UX"
              content="Delex Relay"
            />
          </div>
          <div>
            <GridPicture
              imgUrl={gridPic2}
              heading="Web App/Development"
              content="Cook Me"
            />
          </div>
          <div className="lg:row-span-2">
            <GridPicture
              imgUrl={gridPic3}
              heading="UI/UX Design"
              content="ADOC"
            />
          </div>
          <div>
            <GridPicture
              imgUrl={gridPic4}
              heading="UI/UX"
              content="Delex Relay"
            />
          </div>
          <div>
            <GridPicture
              imgUrl={gridPic5}
              heading="UI/UX"
              content="Delex Relay"
            />
          </div>
        </div>
        <div className="my-12 flex flex-row justify-center items-center">
          <PlainButton label="Explore More Projects" imgUrl={featherRight} />
        </div>
      </section>
      <section className="bg-slate-100 py-10">
        <div className="p-6 lg:w-[80%] mx-auto">
          <h2 className="font-bold text-blue-600 text-xl capitalize ">
            Testmonial
          </h2>
          <h1 className="text-black text-2xl lg:text-4xl font-bold mt-6 mb-10 leading-normal">
            You still hesitate about working with Us ?
            <br className="hidden lg:block" />
            Check what They say about Us
          </h1>
          <div className="flex flex-row justify-evenly items-center">
            <div>
              <Testimonial
                paragraph="Our team of digital product creators and Tch Bring Skilled will take
        your idea to the next level and help you with your product"
                imgUrl={testimonialMale}
                name="Smail yefsssah"
                rank="CEO Innova"
              />
            </div>
            <div className="hidden lg:block">
              <Testimonial
                paragraph="Our team of digital product creators and Tch Bring Skilled will take
        your idea to the next level and help you with your product"
                imgUrl={testimonialFemale}
                name="Djamila Malak"
                rank="Co-Founder RobaKabyle"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-20 my-10">
            <RoundButton imgUrl={arrowFeatherLeft} />
            <RoundButton imgUrl={arrowFeatherRight} />
          </div>
        </div>
      </section>
      <section className="bg-slate-100 mt-24 ">
        <footer className="p-6 pb-24 grid grid-cols-2">
          <div>
            <img src={headerLogo} alt="" />
            <p className="mt-5 text-gray-600 text-2xl pr-3">
              DigitUx is a Digital agencay that create User centred Product that
              help her client to evolve
            </p>
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
      <div className="bg-sky-950">
        <p className="text-white text-center p-10 font-semibold text-lg">
          Designed By Hmimi Chioukh 2022
        </p>
      </div>
    </main>
  );
};

export default Home;
