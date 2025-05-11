
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
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
            className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ankit-shaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <Button onClick={toggleDarkMode} variant="outline" size="icon" className="rounded-full">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button onClick={toggleDarkMode} variant="outline" size="icon" className="rounded-full">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <ul className="container flex flex-col px-4 pb-4">
            {["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue"
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
                className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ankit-shaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
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
