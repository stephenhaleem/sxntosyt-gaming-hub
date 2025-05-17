
import React from "react";
import { Shield, ShieldCheck, CreditCard, PhoneCall } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSoundContext } from "@/contexts/SoundContext";
import { useToast } from "@/hooks/use-toast";

const COD_POINTS = [
  { amount: 420, price: 4.99, popular: false },
  { amount: 880, price: 9.99, popular: false },
  { amount: 2400, price: 24.99, popular: true },
  { amount: 5000, price: 49.99, popular: false },
  { amount: 10000, price: 99.99, popular: false },
];

const CodPoints = () => {
  const { toast } = useToast();
  const { soundEnabled } = useSoundContext();
  
  const handlePurchase = (amount: number, price: number) => {
    // Play sound if enabled
    if (soundEnabled) {
      const audio = new Audio("/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play();
    }
    
    // Redirect to WhatsApp
    const message = `Hi! I want to purchase ${amount} COD Points for $${price}`;
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to vendor",
      description: `You're being redirected to purchase ${amount} COD Points`,
    });
  };

  return (
    <section id="cod-points" className="py-20 relative overflow-hidden">
      {/* Military pattern background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576269601403-75f48622a84c?q=80&w=2080')] bg-cover opacity-5"></div>
      
      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(139,92,246,0.1)_45%,rgba(139,92,246,0.1)_55%,transparent_55%)] bg-[length:10px_10px]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
              <span className="text-gaming-purple font-futuristic tracking-widest text-sm">PREMIUM CURRENCY</span>
            </div>
            <h2 className="section-title text-center">COD Points</h2>
            <p className="text-gray-300 text-center max-w-2xl">
              Power up your game with COD Points. Purchase weapon blueprints, operators, and battle passes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COD_POINTS.map((pack) => (
              <Card 
                key={pack.amount}
                className={`bg-gradient-to-b from-gray-900 to-black border border-gaming-purple/20 hover:border-gaming-purple/60 transition-all duration-300 overflow-hidden relative sound-hover ${
                  pack.popular ? "ring-2 ring-gaming-purple ring-offset-2 ring-offset-black" : ""
                }`}
              >
                {pack.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gaming-purple text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-futuristic">{pack.amount}</CardTitle>
                  <CardDescription className="text-gray-400">COD Points</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-4">
                    ${pack.price} <span className="text-sm text-gray-400">USD</span>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <ShieldCheck size={16} className="text-gaming-purple" />
                      <span>Safe & Secure Transaction</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Shield size={16} className="text-gaming-purple" />
                      <span>Instant Delivery</span>
                    </li>
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={() => handlePurchase(pack.amount, pack.price)}
                    className="w-full bg-gradient-to-r from-gaming-purple to-gaming-blue hover:opacity-90 font-bold transition-all"
                  >
                    <CreditCard size={16} className="mr-2" /> Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 p-4 border border-gaming-purple/30 rounded-lg bg-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <PhoneCall size={18} className="text-gaming-purple" />
              <p>Need assistance? Contact our vendor directly via WhatsApp for bulk orders or questions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodPoints;
