import Nav from "../components/Nav";
import SecondHero from "../components/SecondHero";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";
import ThirdHero from "../components/ThirdHero";
import teamPicture5 from "../assets/images/team_picture5.png";
import HeadedArticle from "../components/HeadedArticle";
const OurServices = () => {
  return (
    <main>
      <header className="lg:w-[80%] lg:mx-auto">
        <Nav />
      </header>
      <section className="p-5 lg:w-[80%] lg:mx-auto">
        <SecondHero
          title={"Our Services"}
          header={"Services We Offer"}
          content={
            "With  Our Awesome team we offres a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product"
          }
        />
      </section>
      <section className="p-5 lg:w-[80%] lg:mx-auto">
        <HeadedArticle
          title={"Our Process"}
          header={
            "Our Working Process help you to get the best from our team skill "
          }
          content={
            "With Our team knowloadg of different process We Choose the perfect process to suit the Development of your Product "
          }
        />
      </section>

      <ThirdHero
        title={"The Team behind DigitUX"}
        header={"A team of creative Who Excited to help you with your Idea"}
        content={
          "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product"
        }
        pictureUrl={teamPicture5}
        pictureName={""}
        picturePortforlio={""}
      />

      <TestimonialContainer />
      <Footer />
    </main>
  );
};

export default OurServices;
