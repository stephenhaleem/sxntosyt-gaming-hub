
import React, { useEffect, useRef } from "react";
import { ArrowRight, Target, ShieldAlert, Trophy, Zap, Crosshair } from "lucide-react";
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
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
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

    // Continuous floating animation for elements
    gsap.to(".floating-element", {
      y: "10px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center py-20 pt-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e')] bg-cover bg-center opacity-30" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900/90 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/40" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced HUD Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-purple-500/30 rounded-lg backdrop-blur-sm bg-black/10 opacity-50 floating-element"></div>
        <div className="absolute top-40 right-10 w-32 h-32 border-2 border-blue-500/30 rounded-full backdrop-blur-sm bg-black/10 opacity-50 floating-element"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-pink-500/30 backdrop-blur-sm bg-black/10 opacity-50 floating-element"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Main Title */}
          <div ref={titleRef} className="relative mb-8">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 rounded-full"></div>
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-futuristic font-black mb-4 tracking-wider">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                SxntosYT
              </span>
            </h1>

            {/* Enhanced Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="group px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-full border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-purple-400 group-hover:text-purple-300" />
                  <span className="text-sm font-bold text-purple-300 group-hover:text-white">PRO PLAYER</span>
                  <Crosshair size={14} className="text-purple-400 opacity-60" />
                </div>
              </div>
              <div className="group px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <ShieldAlert size={16} className="text-blue-400 group-hover:text-blue-300" />
                  <span className="text-sm font-bold text-blue-300 group-hover:text-white">COD MOBILE</span>
                  <Zap size={14} className="text-blue-400 opacity-60" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Subtitle Section */}
          <div ref={subtitleRef} className="mb-12 floating-element">
            <div className="bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Elite Gamer • Content Creator • Streamer
              </p>
              <div className="flex justify-center items-center gap-3 mb-6">
                <Trophy size={24} className="text-yellow-400" />
                <p className="text-lg text-purple-200 font-semibold">
                  Top 1% Regional Ranked Player
                </p>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-black text-purple-400 group-hover:text-purple-300 transition-colors">227K+</div>
                  <div className="text-sm text-gray-300">Views</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-black text-pink-400 group-hover:text-pink-300 transition-colors">25K+</div>
                  <div className="text-sm text-gray-300">Followers</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl md:text-3xl font-black text-blue-400 group-hover:text-blue-300 transition-colors">50+</div>
                  <div className="text-sm text-gray-300">Wins</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Description */}
          <div ref={ctaRef} className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-purple-900/30 via-black/50 to-purple-900/30 backdrop-blur-xl p-6 rounded-xl border border-purple-400/20 floating-element">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Welcome to my gaming universe! Experience epic gameplay highlights, 
                join our growing community, and witness legendary moments in Call of Duty Mobile. 
                Ready to level up together?
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a
              href="#highlights"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-lg">Watch Epic Highlights</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <a
              href="#social"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-lg">Join Community</span>
                <Target size={20} className="transform group-hover:rotate-90 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-60 h-32 border border-purple-400/20 bg-gradient-to-r from-purple-900/20 to-transparent backdrop-blur-sm rounded-lg opacity-60 hidden lg:block floating-element"></div>
      <div className="absolute top-1/3 right-10 w-32 h-60 border border-blue-400/20 bg-gradient-to-b from-blue-900/20 to-transparent backdrop-blur-sm rounded-lg opacity-60 hidden lg:block floating-element"></div>
    </section>
  );
};

export default Hero;
