import MainNavbar from "../components/NavBar/MainNavbar";
import Pricing from "../components/Pricing/pricing";
import Testimonial from "../components/Testimonial/testimonial";
import Footer from "../components/Footer";
import FaqSection from "../components/Pricing/faq";

const PricingPage = () => {
    return (
        <>
            <div className="bg-pricing text-white">
                <MainNavbar />
                <Pricing />
            </div>
            <Testimonial />
            <FaqSection />
            <Footer />
        </>
    );
};

export default PricingPage;