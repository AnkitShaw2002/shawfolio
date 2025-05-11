
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center bg-white bg-tech-pattern relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-tech-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-tech-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-navy/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-tech-blue/10 text-tech-blue border border-tech-blue/20 text-sm backdrop-blur-sm">
              Tech Enthusiast & Problem Solver
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to My <span className="text-gradient relative">Creative Space</span>
              <div className="absolute -bottom-2 left-0 h-1 w-16 bg-tech-blue/50 rounded-full"></div>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Building innovative solutions with <span className="text-tech-blue font-medium">Java Development</span> and <span className="text-tech-blue font-medium">Data Science</span>. Passionate about creating efficient, elegant code and data-driven applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white shadow-lg shadow-tech-blue/20 transition-all duration-300 hover:scale-105">
                View Portfolio
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-tech-blue/50">
                Contact Me
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="flex items-center space-x-2 bg-gray-100/60 backdrop-blur-sm py-2 px-3 rounded-full">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-600">Java Developer</p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100/60 backdrop-blur-sm py-2 px-3 rounded-full">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-600">Data Scientist</p>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100/60 backdrop-blur-sm py-2 px-3 rounded-full">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-600">Problem Solver</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-blue to-tech-blue/30 rounded-full blur-sm opacity-70 animate-pulse-glow"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-blue/30 relative z-10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Ankit Shaw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 p-4 rounded-lg border border-gray-200 shadow-xl backdrop-blur-sm">
                <p className="text-tech-blue font-medium">B.Tech CSE</p>
                <p className="text-sm text-gray-600">Expected 2025</p>
              </div>

              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-tech-blue/5 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-8 -right-8 w-20 h-20 bg-tech-blue/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <a href="#about" className="inline-block p-2 bg-white/80 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm hover:border-tech-blue/50 transition-all">
            <ChevronDown className="text-tech-blue" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
