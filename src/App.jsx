import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./index.scss";
import Banner from "./assets/components/Banner";
import About from "./assets/components/About";
import GetStartedCards from "./assets/components/GetStartedCards";
import OurFeatures from "./assets/components/OurFeatures";
import ReSellCases from "./assets/components/ReSellCases";
import Testimonials from "./assets/components/Testimonials";
import Faq from "./assets/components/Faq";
import SignUp from "./assets/components/SignUp";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <div className="sticky-top">
        <Banner />
        <About />
        <GetStartedCards />
        <OurFeatures />
        <ReSellCases />
        <Testimonials />
        <Faq />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
