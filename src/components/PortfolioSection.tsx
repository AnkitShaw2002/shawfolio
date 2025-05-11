
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  category,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <Card className="tech-card overflow-hidden group hover-lift">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-tech-blue/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-adaptive-light mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded border border-gray-200 dark:border-gray-700 text-adaptive-light"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-700 hover:border-tech-blue hover:bg-tech-blue/10"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" /> Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="bg-tech-blue hover:bg-tech-blue/90"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects: ProjectProps[] = [
    {
      image: "https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      title: "Land Price Prediction Model",
      category: "Data Science",
      description: "Machine learning system with a 15% accuracy improvement, designed to predict land prices based on multiple features.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
      githubUrl: "https://github.com/AnkitShaw2002/land-price-prediction",
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80",
      title: "Library Management System",
      category: "Java Development",
      description: "A comprehensive system with role-based access control, database integration, and an intuitive user interface.",
      technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
      githubUrl: "https://github.com/AnkitShaw2002/library-management-system",
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Student Record Management",
      category: "Database",
      description: "A database system designed to efficiently manage and retrieve student records with an intuitive interface.",
      technologies: ["MySQL", "Java", "JDBC", "Database Design"],
      githubUrl: "https://github.com/AnkitShaw2002/student-record-management",
    },
    {
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Weather Data Analysis",
      category: "Data Science",
      description: "Analysis of historical weather data to identify patterns and make predictions using statistical models.",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      githubUrl: "https://github.com/AnkitShaw2002/weather-data-analysis",
    },
  ];
  
  const filters = ["All", "Java Development", "Data Science", "Database"];
  
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-light-gray dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-800 dark:text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-adaptive-light text-center max-w-2xl">
            Showcasing my best work across different domains and technologies.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "bg-tech-blue hover:bg-tech-blue/90"
                    : "border-gray-300 dark:border-gray-700 hover:border-tech-blue hover:bg-tech-blue/10"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-tech-blue hover:bg-tech-blue/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
