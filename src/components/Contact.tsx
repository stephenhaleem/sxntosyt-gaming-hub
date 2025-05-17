
import React, { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, ShieldCheck, MessageSquare, User, Mail, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef(null);
  const titleRef = useRef(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Form animation
    gsap.fromTo(formRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Tactical background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d')] bg-cover bg-center opacity-5"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with military style */}
        <div ref={titleRef} className="relative mb-16 text-center">
          <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
            <span className="text-gaming-purple font-futuristic tracking-widest text-sm">REQUEST TRANSMISSION</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          
          {/* Tactical decorative elements */}
          <div className="hidden md:block absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-gaming-purple/30"></div>
          <div className="hidden md:block absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-gaming-purple/30"></div>
        </div>
        
        <div ref={formRef} className="max-w-3xl mx-auto relative">
          {/* Tactical corner elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gaming-purple/30"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gaming-purple/30"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gaming-purple/30"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gaming-purple/30"></div>
          
          <div className="card-gaming p-8 relative bg-gradient-to-b from-gaming-dark/90 to-black backdrop-blur-md">
            {/* HUD-style elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gaming-purple/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gaming-purple/40 to-transparent"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center">
                    <User size={14} className="mr-2 text-gaming-purple" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gaming-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gaming-purple transition-all"
                  />
                  <div className="absolute top-[38px] left-0 h-[calc(100%-38px)] w-px bg-gaming-purple/20"></div>
                  <div className="absolute bottom-0 left-0 w-[calc(100%-1px)] h-px bg-gaming-purple/20"></div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center">
                    <Mail size={14} className="mr-2 text-gaming-purple" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gaming-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gaming-purple transition-all"
                  />
                  <div className="absolute top-[38px] right-0 h-[calc(100%-38px)] w-px bg-gaming-purple/20"></div>
                  <div className="absolute bottom-0 right-0 w-[calc(100%-1px)] h-px bg-gaming-purple/20"></div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="subject" className="block text-gray-300 mb-2 flex items-center">
                  <FileText size={14} className="mr-2 text-gaming-purple" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gaming-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gaming-purple transition-all"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center">
                  <MessageSquare size={14} className="mr-2 text-gaming-purple" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-gaming-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gaming-purple transition-all"
                ></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-400">
                  <ShieldCheck size={14} className="mr-1 text-gaming-purple" />
                  Your information is secure
                </div>
                
                <button 
                  type="submit" 
                  className={`btn-gaming min-w-[150px] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
