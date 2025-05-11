
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-gray-900">
            Ankit<span className="text-tech-blue">Shaw</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-tech-blue transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex space-x-3 items-center">
          <a
            href="https://github.com/AnkitShaw2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ankit-shaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-tech-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="container flex flex-col px-4 pb-4">
            {["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 text-gray-600 hover:text-tech-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <div className="flex space-x-4 items-center pt-4">
              <a
                href="https://github.com/AnkitShaw2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ankit-shaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <Button className="mt-4 bg-tech-blue hover:bg-tech-blue/90 text-white">
              Download CV
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
