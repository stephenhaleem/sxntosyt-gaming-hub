
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
    // Create parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    
    parallaxElements.forEach((element) => {
      const depthAttr = element.getAttribute('data-depth');
      // Convert the attribute to a number or use default
      const depth = depthAttr ? parseFloat(depthAttr) : 0.2;
      
      gsap.to(element, {
        y: `${depth * 100}%`,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
    
    // Smoother scrolling for page navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Check if targetId is not just "#" before trying to query for it
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjusted for navbar height
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Initialize a timeline for page load animations
    const tl = gsap.timeline();
    
    // Animate the navbar from top
    tl.fromTo(
      "nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Add some subtle movement to hero elements for a dynamic feel
    gsap.to(".hero-element", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
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
