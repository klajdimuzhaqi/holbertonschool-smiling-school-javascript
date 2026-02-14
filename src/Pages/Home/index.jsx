import Footer from "../../Components/Footer/footer";
import Header from "../../Components/header/header";
import LVideo from "../../Components/LatestVideos/LVideo";
import Membership from "../../Components/Membership/membership";
import PopularTutorial from "../../Components/Popular/popular_tutorial";
import MainNavbar from "../../Components/NavBar/MainNavbar";
import Testimonial from "../../Components/Testimonial/testimonial";





const HomePage = () => {
    return (
        <>
            <div className="bg-image text-white">
                <MainNavbar />
                <Header />
            </div>
            <Testimonial />
            <PopularTutorials />
            <Membership />
            <LVideo />
            <Footer />
        </>
    )
}

export default HomePage;