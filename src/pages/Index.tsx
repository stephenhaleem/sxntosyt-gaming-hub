
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import CodPoints from "../components/CodPoints";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize page-level GSAP animations
    
    // Smoother scrolling for page navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjusted for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      // Clean up GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <CodPoints />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
