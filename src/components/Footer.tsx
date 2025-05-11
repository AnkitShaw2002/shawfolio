
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-card py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight text-white">
              Ankit<span className="text-tech-blue">Shaw</span>
            </a>
            <p className="mt-3 text-gray-400 max-w-md">
              A passionate tech enthusiast and problem solver specializing in Java development and Data Science solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-tech-blue transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: <a href="mailto:ashaw2588@gmail.com" className="hover:text-tech-blue">ashaw2588@gmail.com</a>
              </li>
              <li className="text-gray-400">
                Phone: <a href="tel:+919330275207" className="hover:text-tech-blue">+91 9330275207</a>
              </li>
              <li className="text-gray-400">
                Location: Kolkata, West Bengal, India
              </li>
            </ul>
            
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/AnkitShaw2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tech-blue transition-colors"
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
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ankit-shaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tech-blue transition-colors"
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ankit Shaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
