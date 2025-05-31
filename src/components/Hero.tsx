import React, { useEffect, useRef } from "react";
import { ArrowRight, Target, ShieldAlert, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Parallax effect on scroll
    gsap.to(overlayRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 150,
      opacity: 0.5,
      ease: "none",
    });

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-24 overflow-hidden"
    >
      {/* COD-Inspired Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-gaming-dark/80 to-transparent" />
        <div ref={overlayRef} className="absolute inset-0">
          {/* Military pattern overlay */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561059510-7c9f89a13337')] bg-cover opacity-10 parallax-layer"
            data-depth="0.2"
          ></div>
        </div>

        {/* Tactical HUD elements */}
        <div className="absolute top-0 left-0 w-full h-16 border-b border-gaming-purple/20 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 border-l border-b border-gaming-purple/30 opacity-30"></div>
        <div className="absolute top-40 right-10 w-40 h-40 border-r border-t border-gaming-purple/30 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 border-t border-gaming-purple/20 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated title */}
          <div ref={titleRef} className="relative">
            <h1 className="text-5xl md:text-7xl font-futuristic font-bold mb-2 tracking-wider relative">
              <span className="absolute -inset-1 blur-xl bg-gaming-purple/20 rounded-full"></span>
              <span className="glow-text">SxntosYT</span>
            </h1>

            <div className="flex justify-center gap-3 mb-4">
              <div className="px-3 py-1 bg-gaming-purple/20 backdrop-blur-sm rounded border border-gaming-purple/30 flex items-center gap-1">
                <Target size={14} className="text-gaming-purple" />
                <span className="text-sm">PRO PLAYER</span>
              </div>
              <div className="px-3 py-1 bg-gaming-blue/20 backdrop-blur-sm rounded border border-gaming-blue/30 flex items-center gap-1">
                <ShieldAlert size={14} className="text-gaming-blue" />
                <span className="text-sm">CALL OF DUTY MOBILE</span>
              </div>
            </div>
          </div>

          <div ref={subtitleRef} className="mb-10">
            <p className="text-xl md:text-2xl mb-2 text-gray-300">
              Gamer • Streamer • Content Creator
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <Trophy size={18} className="text-yellow-500" />
              <p className="text-sm text-gray-400">
                Ranked in Top 1% Regionally
              </p>
            </div>
          </div>

          <div
            ref={ctaRef}
            className="max-w-2xl mx-auto mb-10 backdrop-blur-sm bg-black/40 p-6 rounded-lg border border-gaming-purple/20 electric-border"
          >
            <p className="text-gray-200 mb-4">
              Welcome to my official gaming headquarters! Check out my gameplay
              highlights, join my community, and level up with me on this gaming
              journey.
            </p>

            <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10">
              <div className="w-full h-full border-l-2 border-b-2 border-gaming-purple/50 rotate-45"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#highlights"
              className="btn-gaming flex items-center justify-center gap-2 group overflow-hidden"
            >
              <span>Watch Highlights</span>
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* HUD-style decorative elements */}
      <div className="absolute bottom-10 left-10 w-40 h-20 border border-gaming-purple/20 bg-black/20 backdrop-blur-sm rounded-lg opacity-50 hidden md:block"></div>
      <div className="absolute top-40 right-10 w-20 h-40 border border-gaming-blue/20 bg-black/20 backdrop-blur-sm rounded-lg opacity-50 hidden md:block"></div>
    </section>
  );
};

export default Hero;
