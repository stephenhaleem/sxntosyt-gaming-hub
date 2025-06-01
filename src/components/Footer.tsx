
import React from "react";
import {
  ArrowUp,
  Twitch,
  Youtube,
  Send,
  MessageSquare,
  Phone,
  Gamepad,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const Footer = () => {
  const { soundEnabled } = useSoundContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (soundEnabled) {
      const audio = new Audio("/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play();
    }
  };

  const playHoverSound = () => {
    if (soundEnabled) {
      const audio = new Audio("/sounds/hover.mp3");
      audio.volume = 0.2;
      audio.play();
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-black via-slate-900 to-purple-900/20">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(139,92,246,0.1)_49%,rgba(139,92,246,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Enhanced Logo Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50"></div>
                <img
                  src="/lovable-uploads/137cdb32-069d-4cda-99c0-5f6dbda372a7.png"
                  alt="Santos"
                  className="relative h-14 w-14 rounded-full border-2 border-purple-400/50"
                />
              </div>
              <div>
                <h3 className="text-3xl font-futuristic font-black">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    SxntosYT
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-purple-300">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">Elite Gaming Content</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Gamepad size={16} className="text-purple-400" />
                <span>Pro Gamer</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-pink-400" />
                <span>Content Creator</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-blue-400" />
                <span>Streamer</span>
              </div>
            </div>
          </div>

          {/* Enhanced Back to Top */}
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="group relative mb-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 hover:border-purple-400/60 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <ArrowUp size={20} className="group-hover:text-purple-300" />
              </div>
            </button>
            <span className="text-xs text-gray-500 font-medium">Back to top</span>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4">
            <SocialButton
              icon={Youtube}
              href="https://youtube.com/@sxntosyt?si=bWM6h2qaszpqDdb2"
              onHover={playHoverSound}
              color="from-red-500 to-red-600"
            />
            <SocialButton
              icon={Twitch}
              href="https://www.twitch.tv/sxntosyt"
              onHover={playHoverSound}
              color="from-purple-500 to-purple-600"
            />
            <SocialButton
              icon={MessageSquare}
              href="https://discord.gg/sb89VQVX"
              onHover={playHoverSound}
              color="from-indigo-500 to-indigo-600"
            />
            <SocialButton
              icon={Send}
              href="https://t.me/sxntostoriaba"
              onHover={playHoverSound}
              color="from-blue-500 to-blue-600"
            />
            <SocialButton
              icon={Phone}
              href="https://whatsapp.com/channel/sxntosyt"
              onHover={playHoverSound}
              color="from-green-500 to-green-600"
            />
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SxntosYT. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>Built for Gaming Excellence</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Powered by Passion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

const SocialButton = ({ icon: Icon, href, onHover, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    onMouseEnter={onHover}
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
    <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${color}/20 border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 text-gray-300 hover:text-white hover:scale-110`}>
      <Icon size={18} />
    </div>
  </a>
);

export default Footer;
