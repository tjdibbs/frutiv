import React from "react";
import Layout from "./components/layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import OurHub from "./pages/OurHub";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/portfolio"} element={<Portfolio />} />
          <Route path={"/our-hub"} element={<OurHub />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
