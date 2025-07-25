
import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-inter font-bold text-xl text-primary">
            NC
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-inter font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a href="mailto:chandavoluchaitanya@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chandavolunagachaitanya" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Nagachaitanya28" className="text-gray-600 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
