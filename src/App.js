import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LandingPage />
      <Footer />
      <Terms />
    </>
  );
}

export default App;
