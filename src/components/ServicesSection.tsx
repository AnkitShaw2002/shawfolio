
import React from "react";
import { Card } from "@/components/ui/card";
import { MonitorCode, Database, LineChart, School } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="tech-card p-6 hover:translate-y-[-5px] transition-all duration-300">
      <div className="w-14 h-14 rounded-lg bg-tech-blue/10 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <MonitorCode className="text-tech-blue" size={28} />,
      title: "Custom Software Development",
      description:
        "Specialized in developing desktop applications using Java Swing and creating efficient database systems with MySQL.",
    },
    {
      icon: <Database className="text-tech-blue" size={28} />,
      title: "Database Design",
      description:
        "Design and implementation of robust database systems with focus on efficiency, security, and scalability.",
    },
    {
      icon: <LineChart className="text-tech-blue" size={28} />,
      title: "Data Science Solutions",
      description:
        "Development of machine learning models, data analysis services, and visualization solutions for informed decision-making.",
    },
    {
      icon: <School className="text-tech-blue" size={28} />,
      title: "Academic Support",
      description:
        "Expertise in providing assistance with Java/Python programming assignments and database design projects.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark bg-tech-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Specialized solutions and services that I offer to help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
