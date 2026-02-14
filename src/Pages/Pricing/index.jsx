import MainNavbar from "../../Components/NavBar/MainNavbar";
import Testimonial from "../../Components/Testimonial/testimonial";
import Footer from "../../Components/Footer/footer";



const PricingPage = () => {
    return (
        <>
            <div className="bg-pricing text-white">
                <MainNavbar />
                <PricingComponent />
            </div>
            <Testimonial />
            <FaqSection />
            <Footer />
        </>
    );
};

export default PricingPage;