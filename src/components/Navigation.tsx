import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    //{ name: "education", label: "Education" },
    //{ name: "experience", label: "Experience" },
    { name: "projects", label: "Projects" },
    { name: "skills", label: "Skills" },
    //{ name: "workshops", label: "Workshops" },
    { name: "volunteering", label: "Volunteering" },
    //{ name: "achievements", label: "Achievements" },
    { name: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.name));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 terminal-window border-b border-neon-cyan/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="glow-green text-3xl font-bold">~/suchir</span>
            <span className="cursor-blink ml-1">_</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`terminal-prompt hover:glow-yellow transition-all duration-300 ${
                  activeSection === item.name ? "glow-green" : "glow-cyan"
                }`}
              >
                ${item.label.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glow-cyan hover:glow-pink transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-terminal-surface rounded-lg mt-2 border border-neon-cyan/30">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.name ? "glow-green" : "glow-cyan hover:glow-yellow"
                  }`}
                >
                  ${item.label.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;