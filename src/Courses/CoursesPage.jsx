import MainNavbar from "../components/NavBar/MainNavbar";
import CoursesP from "../components/Courses/courses";
import Footer from "../components/Footer";
import VideoPart from "../components/Courses/videos";
import VideoFilter from "../components/Courses/sortby";


const CoursesPage = () => {
    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoFilter />
            <VideoPart />
            <Footer />
        </>
    );
};

export default CoursesPage;