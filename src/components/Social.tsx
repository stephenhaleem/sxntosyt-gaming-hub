import React, { useEffect, useRef } from "react";
import {
  Youtube,
  Twitch,
  MessageSquare,
  Send,
  Phone,
  Link,
  Users,
  Award,
  Download,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram } from "lucide-react"; // Add this to your imports at the top

gsap.registerPlugin(ScrollTrigger);

const Social = () => {
  const sectionRef = useRef(null);
  const socialCardsRef = useRef([]);

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@sxntosyt?si=bWM6h2qaszpqDdb2",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      description: "Gaming videos & highlights",
      followers: "3.94K",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/sxntosislive",
      icon: Twitch,
      color: "from-purple-500 to-purple-700",
      description: "Live streams every weekdays and weekends",
      followers: "100+",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@sxntosyt",
      icon: Link,
      color: "from-black to-gray-800",
      description: "Short gaming clips",
      followers: "105.9K",
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/baG2NQcS",
      icon: MessageSquare,
      color: "from-indigo-500 to-indigo-700",
      description: "Join my gaming community",
      followers: "",
    },
    {
      name: "Telegram",
      url: "https://t.me/sxntostoriaba",
      icon: Send,
      color: "from-blue-400 to-blue-600",
      description: "News & updates",
      followers: "500+",
    },
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/KbnI1XQ4NHKGBi4H0dwFmV",
      icon: Phone,
      color: "from-green-500 to-green-700",
      description: "Fan group",
      followers: "500+",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/santosfiyin?igsh=eG1hZDljcXdyeDl5&utm_source=qr",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      description: "Behind the scenes & updates",
      followers: "6.9k",
    },
  ];

  useEffect(() => {
    const cards = socialCardsRef.current;

    // Create a staggered animation for social cards
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-20 relative overflow-hidden"
    >
      {/* Background with military/tactical theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gaming-dark/90 to-black"></div>

      {/* Tactical grid pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553949345-eb786bb3f7ba')] bg-cover opacity-5"></div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_46%,rgba(139,92,246,0.1)_46%,rgba(139,92,246,0.1)_54%,transparent_54%)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with military-style elements */}
        <div className="relative mb-16">
          <div className="flex justify-center">
            <div className="text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gaming-purple/50"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gaming-purple/50"></div>

              <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
                <span className="text-gaming-purple font-futuristic tracking-widest text-sm">
                  SQUAD UP
                </span>
              </div>
              <h2 className="section-title">Connect With Me</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => {
            // Center the last card if it's Instagram and it's the last in the array
            const isLast = index === socialLinks.length - 1;
            const isInstagram = social.name === "Instagram";
            return (
              <a
                key={social.name}
                ref={(el) => (socialCardsRef.current[index] = el)}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-gaming p-6 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all sound-hover relative overflow-hidden group
          ${isLast && isInstagram ? "xl:col-start-2" : ""}
        `}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark/50 to-black"></div>

                {/* Military corner marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gaming-purple/40"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gaming-purple/40"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gaming-purple/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gaming-purple/40"></div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div
                    className={`social-icon w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${social.color}`}
                  >
                    <social.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 mb-3">{social.description}</p>

                  <div className="flex items-center justify-center gap-1 text-sm text-gray-300 bg-black/30 px-3 py-1 rounded-full">
                    <Users size={12} />
                    <span>
                      {["WhatsApp", "Telegram"].includes(social.name)
                        ? `${social.followers} members`
                        : `${social.followers} followers`}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/10 to-gaming-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/50 border border-gaming-purple/30 rounded-full mb-4">
            <Award size={16} className="text-gaming-purple" />
            <span className="text-sm text-gray-300">
              Join a community of over 500 gamers
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/sb89VQVX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gaming flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              <span>Join Discord</span>
            </a>
            <a
              href="https://www.twitch.tv/sxntosyt"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gaming-purple text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gaming-purple/20 hover:-translate-y-1"
            >
              <Download size={18} />
              <span>Follow on Twitch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
