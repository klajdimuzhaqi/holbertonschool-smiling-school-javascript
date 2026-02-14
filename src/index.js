import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index.jsx";
import PricingPage from "./pages/Pricing/index.jsx";
import CoursesPage from "./pages/Courses/index.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Pricing" element={<PricingPage />} />
            <Route path="/Courses" element={<CoursesPage />} />
            {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
    </BrowserRouter>

);