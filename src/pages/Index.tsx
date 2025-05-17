
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
