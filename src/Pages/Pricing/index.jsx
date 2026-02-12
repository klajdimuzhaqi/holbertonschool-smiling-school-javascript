import MainNavbar from "../components/NavBar/MainNavbar.js";
import Pricing from "../components/Pricing/pricing.js";
import Testimonial from "../components/Testimonial/testimonial.js";
import Footer from "../components/Footer/footer.js";
import FaqSection from "../components/Pricing/faq.js";

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