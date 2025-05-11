import React from "react";
import { Card } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-light-gray dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-800 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-adaptive-light text-center max-w-2xl">
            A passionate tech enthusiast with a strong foundation in Computer Science and a commitment to continuous learning.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <img alt="Ankit Working" className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" src="/lovable-uploads/cd15ce6a-230e-4c14-9138-8fc8d20e38ad.png" />
              <div className="absolute -top-5 -left-5 bg-tech-blue/10 border border-tech-blue/20 py-1 px-3 rounded-full backdrop-blur-sm">
                <span className="text-tech-blue font-semibold">Tech Enthusiast</span>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-tech-blue/10 border border-tech-blue/20 py-1 px-3 rounded-full backdrop-blur-sm">
                <span className="text-tech-blue font-semibold">Problem Solver</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              I'm <span className="text-tech-blue">Ankit Shaw</span>
            </h3>
            <p className="text-adaptive-medium mb-6">
              I am a dedicated tech enthusiast and problem solver currently pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering at MCKV Institute of Engineering, expected to graduate in 2025.
            </p>
            <p className="text-adaptive-medium mb-6">
              My academic journey has equipped me with strong fundamentals in software development, particularly in Java, and data science. I specialize in building practical solutions such as machine learning models and management systems that solve real-world challenges.
            </p>
            <p className="text-adaptive-medium mb-8">
              Outside of my professional pursuits, I'm passionate about exploring emerging technologies and enjoy gaming as a way to unwind and foster creative thinking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="tech-card p-4 flex flex-col items-center text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-3">
                  <Code className="text-tech-blue" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Java Development</h4>
              </Card>
              <Card className="tech-card p-4 flex flex-col items-center text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-3">
                  <Brain className="text-tech-blue" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Data Science</h4>
              </Card>
              <Card className="tech-card p-4 flex flex-col items-center text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mb-3">
                  <Database className="text-tech-blue" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Database Design</h4>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;