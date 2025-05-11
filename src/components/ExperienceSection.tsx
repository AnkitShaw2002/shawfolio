import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  location,
  description,
  skills
}) => {
  return <Card className="tech-card p-6 relative hover-lift">
      <div className="absolute top-0 right-0 w-2 h-16 bg-tech-blue rounded-bl-lg rounded-tr-lg"></div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
      <h4 className="text-tech-blue font-semibold mb-3">{company}</h4>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-adaptive-light text-sm">
          <Calendar className="mr-1" size={16} />
          {period}
        </div>
        <div className="flex items-center text-adaptive-light text-sm">
          <MapPin className="mr-1" size={16} />
          {location}
        </div>
      </div>
      
      <div className="mb-4">
        <ul className="list-disc list-inside text-adaptive-medium space-y-2">
          {description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => <span key={index} className="bg-tech-blue/10 text-tech-blue text-xs px-2 py-1 rounded-md border border-tech-blue/20">
            {skill}
          </span>)}
      </div>
    </Card>;
};
const ExperienceSection = () => {
  const experiences = [{
    title: "Java Developer Intern",
    company: "Ardent Computech",
    period: "Jun 2023 - Aug 2023",
    location: "Remote",
    description: ["Developed a Library Management System with role-based access control", "Implemented database integration with MySQL for efficient data management", "Designed an intuitive user interface using Java Swing for seamless user experience"],
    skills: ["Java", "MySQL", "JDBC", "Java Swing", "Problem Solving"]
  }, {
    title: "Data Science Intern",
    company: "Webskitter",
    period: "Jan 2023 - Mar 2023",
    location: "Remote",
    description: ["Created a Land Price Prediction Model achieving 15% improvement in accuracy", "Implemented feature selection techniques to enhance model performance", "Conducted thorough data preprocessing and exploratory data analysis"],
    skills: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "Machine Learning"]
  }];
  return <section id="experience" className="py-20 bg-white dark:bg-dark bg-tech-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-800 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-adaptive-light text-center max-w-2xl">
            My professional journey and internship experiences that have shaped my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-tech-blue/10 border border-tech-blue/20 hover:bg-tech-blue/20 transition-all duration-300">
            <Briefcase className="text-tech-blue" size={20} />
            <p className="text-gray-800 dark:text-white">Currently seeking new opportunities for 2025</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;