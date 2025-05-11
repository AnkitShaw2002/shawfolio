
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        {link ? (
          <a
            href={link}
            className="text-gray-400 hover:text-tech-blue transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-400">{content}</p>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would handle the form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-dark bg-tech-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-tech-blue mb-6 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? Get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="tech-card p-6 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Talk
            </h3>
            
            <div className="space-y-8">
              <ContactInfo
                icon={<Mail className="text-tech-blue" />}
                title="Email"
                content="ashaw2588@gmail.com"
                link="mailto:ashaw2588@gmail.com"
              />
              
              <ContactInfo
                icon={<Phone className="text-tech-blue" />}
                title="Phone"
                content="+91 9330275207"
                link="tel:+919330275207"
              />
              
              <ContactInfo
                icon={<MapPin className="text-tech-blue" />}
                title="Location"
                content="Kolkata, West Bengal, India"
              />
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AnkitShaw2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-card border border-gray-700 flex items-center justify-center hover:border-tech-blue hover:bg-tech-blue/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/ankit-shaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-card border border-gray-700 flex items-center justify-center hover:border-tech-blue hover:bg-tech-blue/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="tech-card p-6 md:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-dark border-gray-700 focus:border-tech-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="bg-dark border-gray-700 focus:border-tech-blue"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-dark border-gray-700 focus:border-tech-blue"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="bg-dark border-gray-700 focus:border-tech-blue resize-none"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="bg-tech-blue hover:bg-tech-blue/90">
                <Send className="mr-2" size={18} /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
