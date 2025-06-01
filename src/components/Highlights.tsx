
import React, { useEffect, useRef } from "react";
import { Play, Trophy, Star, Users, Eye, Zap, Target, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const highlights = [
    {
      id: 1,
      title: "Pure Aggression",
      game: "Call of Duty Mobile",
      image: "/images/pureag.png",
      videoLink: "https://vm.tiktok.com/ZMSrfwU8G/",
      views: "227.2K",
      likes: "24.8K",
      date: "4-2",
      featured: true,
    },
    {
      id: 2,
      title: "The Return",
      game: "Call of Duty Mobile",
      image: "/images/breaks.png",
      videoLink: "https://www.instagram.com/reel/DJkGmkwo8ye/?igsh=MWJheWVjZGQwZHhsZA==",
      views: "18.7K",
      likes: "249",
      date: "May 12",
      featured: false,
    },
    {
      id: 3,
      title: "Winning 1 Million Naira Content Creator Tournament",
      game: "Call of Duty Mobile",
      image: "/images/hqdefault.png",
      videoLink: "https://youtu.be/-jsSRM_bHnE?si=ucSjzro4ZsYZ8Vzh",
      views: "16.3K",
      likes: "895",
      date: "Dec 27",
      featured: true,
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    tl.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,92,246,0.05)_30%,rgba(139,92,246,0.05)_70%,transparent_70%)] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="relative mb-20 text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="inline-block px-8 py-3 border-2 border-purple-400/40 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-md mb-6 hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Zap className="text-purple-400" size={20} />
                <span className="text-purple-300 font-futuristic tracking-widest text-sm font-bold">
                  GAMEPLAY SHOWCASE
                </span>
                <Target className="text-purple-400" size={20} />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-futuristic font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Epic Highlights
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Witness legendary gameplay moments that define excellence
            </p>
          </div>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative transform hover:scale-105 transition-all duration-500 ${
                highlight.featured ? 'lg:scale-110' : ''
              }`}
            >
              {/* Featured Badge */}
              {highlight.featured && (
                <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Award size={12} />
                  FEATURED
                </div>
              )}

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-black/70 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30">
                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-64 lg:h-72 object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Enhanced Play Button */}
                  <a
                    href={highlight.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-70"></div>
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                    </div>
                  </a>

                  {/* Enhanced Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                          <Eye size={14} className="text-purple-400" />
                          <span className="text-white font-semibold">{highlight.views}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                          <Star size={14} className="text-yellow-400" />
                          <span className="text-white font-semibold">{highlight.likes}</span>
                        </div>
                      </div>
                      <div className="bg-purple-600/80 px-3 py-1 rounded-full text-white text-xs font-bold">
                        {highlight.date}
                      </div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-purple-400/60"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-400/60"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-purple-400/60"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-purple-400/60"></div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 bg-gradient-to-b from-transparent to-black/30">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Trophy size={16} />
                      <span className="font-semibold">{highlight.game}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users size={14} />
                      <span>Battle Royale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-30"></div>
            <a
              href="https://www.tiktok.com/@sxntosyt?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-futuristic font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span>Watch More Epic Content</span>
                <Zap size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
