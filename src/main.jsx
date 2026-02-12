import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PricingPage from "./PricingPage/PricingPage";
import CoursesPage from "./Courses/CoursesPage";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Pricing" element={<PricingPage />} />
                <Route path="/Courses" element={<CoursesPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
