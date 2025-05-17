import React, { useEffect, useRef } from "react";
import { Play, Trophy, Star, Users, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const highlights = [
    {
      id: 1,
      title: "20 Kill Victory Royale",
      game: "Call of Duty Mobile",
      image: "Screenshot 2025-05-17 200406.png",
      videoLink:
        "https://www.tiktok.com/@sxntosyt/video/7486923733001686327?is_from_webapp=1&sender_device=pc",
      views: "97.5K",
      likes: "15.3K",
      date: "3-28-2025",
    },
    {
      id: 2,
      title: "Insane Clutch Play",
      game: "Call of Duty Mobile",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      videoLink: "#",
      views: "18.7K",
      likes: "956",
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Epic Sniper Montage",
      game: "Call of Duty Mobile",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      videoLink: "#",
      views: "32.2K",
      likes: "2.4K",
      date: "2 weeks ago",
    },
  ];

  useEffect(() => {
    // Improve GSAP animations performance
    const cards = cardsRef.current;

    // Use a single timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true, // Only trigger once to prevent lag on scroll
      },
    });

    // Add animations to the timeline
    tl.fromTo(
      cards,
      {
        y: 50, // Reduced amount of movement for better performance
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7, // Faster animation
        stagger: 0.15, // Reduced stagger time
        ease: "power2.out", // Simpler easing function
      }
    );

    return () => {
      // Kill scroll triggers when component unmounts
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="py-20 relative overflow-hidden"
    >
      {/* COD-style background */}
      <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(139,92,246,0.1)_40%,rgba(139,92,246,0.1)_60%,transparent_60%)] bg-[length:200px_200px]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b')] bg-cover opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with military-style design */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-1/2 h-px w-16 bg-gaming-purple/50 hidden md:block"></div>
          <div className="absolute right-0 top-1/2 h-px w-16 bg-gaming-purple/50 hidden md:block"></div>

          <div className="text-center">
            <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
              <span className="text-gaming-purple font-futuristic tracking-widest text-sm">
                GAMEPLAY SHOWCASE
              </span>
            </div>
            <h2 className="section-title">Top Highlights</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-gaming overflow-hidden group transform hover:translate-y-[-5px] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                {/* Video thumbnail */}
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="highlight-image"
                  loading="lazy" // Add lazy loading for better performance
                />

                {/* Play overlay */}
                <a
                  href={highlight.videoLink}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-gaming-purple/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white" />
                  </div>
                </a>

                {/* Video stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 flex justify-between text-xs">
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1 text-gaming-purple" />
                    <span>{highlight.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={12} className="mr-1 text-gaming-purple" />
                    <span>{highlight.likes}</span>
                  </div>
                  <span className="text-gray-400">{highlight.date}</span>
                </div>

                {/* Tactical corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gaming-purple/50"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gaming-purple/50"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gaming-purple/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gaming-purple/50"></div>
              </div>

              <div className="p-6 bg-gradient-to-b from-gaming-dark/90 to-black">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gaming-purple transition-colors">
                  {highlight.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gaming-purple flex items-center">
                    <Trophy size={14} className="mr-1" />
                    {highlight.game}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <Users size={12} className="mr-1" />
                    <span>Squad Match</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block relative">
            <a
              href="https://www.tiktok.com/@sxntosyt?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-futuristic font-bold uppercase tracking-wider transition-all hover:-translate-y-1"
            >
              View More on TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
