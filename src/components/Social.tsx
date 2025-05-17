
import React from "react";
import { Youtube, Twitch, Instagram, Discord, Telegram, Whatsapp, Link } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@sxntosyt",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      description: "Gaming videos & highlights"
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/sxntosyt",
      icon: Twitch,
      color: "from-purple-500 to-purple-700",
      description: "Live streams"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@sxntosyt",
      icon: Link,
      color: "from-black to-gray-800",
      description: "Short gaming clips"
    },
    {
      name: "Discord",
      url: "https://discord.gg/sxntosyt",
      icon: Discord,
      color: "from-indigo-500 to-indigo-700",
      description: "Join my gaming community"
    },
    {
      name: "Telegram",
      url: "https://t.me/sxntosyt",
      icon: Telegram,
      color: "from-blue-400 to-blue-600",
      description: "News & updates"
    },
    {
      name: "WhatsApp",
      url: "https://whatsapp.com/channel/sxntosyt",
      icon: Whatsapp,
      color: "from-green-500 to-green-700",
      description: "Fan group"
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-gaming-dark to-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Connect With Me</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gaming p-6 flex flex-col items-center hover:transform hover:scale-105 transition-all"
            >
              <div className={`social-icon mb-4 bg-gradient-to-br ${social.color}`}>
                <social.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
              <p className="text-gray-400 text-center">{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
