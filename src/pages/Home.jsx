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
import Footer from "../components/Footer";
import TeamPicture from "../components/TeamPicture";
import TestimonialContainer from "../components/TestimonialContainer";
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
          <TeamPicture
            imgUrl={teamPicture}
            picName={"Jamila Smail"}
            picPortfolio={"Co-Founder"}
          />
          <div className="flex gap-10 justify-end m-8 mr-32">
            <RoundButton imgUrl={arrowFeatherLeft} />
            <RoundButton imgUrl={arrowFeatherRight} />
          </div>
          <img
            className="hidden lg:block absolute top-0 right-0 -z-10 h-auto w-[267px]"
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
      <TestimonialContainer />
      <Footer />
    </main>
  );
};

export default Home;
