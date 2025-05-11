
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="tech-card p-6 hover-lift">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-adaptive-medium">{skill.name}</span>
              <span className="text-tech-blue">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full bg-gradient-to-r from-tech-blue to-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </Progress>
          </div>
        ))}
      </div>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 80 },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "Scikit-learn", level: 80 },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Flask", level: 75 },
        { name: "Bootstrap", level: 80 },
        { name: "Java Swing", level: 90 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Attention to Detail", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-light-gray dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-800 dark:text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-adaptive-light text-center max-w-2xl">
            A comprehensive overview of my technical and soft skills developed through education and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
