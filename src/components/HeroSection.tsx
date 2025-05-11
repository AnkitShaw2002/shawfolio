
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center bg-dark bg-tech-pattern"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-tech-blue/10 text-tech-blue border border-tech-blue/20 text-sm">
              Tech Enthusiast & Problem Solver
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Welcome to My <span className="text-gradient">Creative Space</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Building innovative solutions with Java Development and Data Science. Passionate about creating efficient, elegant code and data-driven applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                View Portfolio
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white">
                Contact Me
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-400">Java Developer</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-400">Data Scientist</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow"></div>
                <p className="text-sm text-gray-400">Problem Solver</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-blue/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Ankit Shaw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dark-card p-3 rounded-lg border border-gray-700 shadow-lg">
                <p className="text-tech-blue font-medium">B.Tech CSE</p>
                <p className="text-sm text-gray-400">Expected 2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown className="text-tech-blue" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
