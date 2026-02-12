import Footer from "../components/Footer";
import Header from "../components/Header/header";
import MainNavbar from "../components/NavBar/MainNavbar";
import LatestVideos from "../components/LatestVideos";
import Membership from "../components/Membership/membership";
import PopularTutorials from "../components/Popular/popular_tutorial";
import Testimonial from "../components/Testimonial/testimonial";


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
            <LatestVideos />
            <Footer />
        </>
    )
}

export default HomePage;