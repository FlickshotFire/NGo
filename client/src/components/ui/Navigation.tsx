import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/lib/stores/useAudio";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleMute, isMuted } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work Areas", href: "#work-areas" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pledge", href: "#pledge" },
    { name: "Blog", href: "#blog" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "glass backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.webp" 
              alt="Raghukul Aryawart Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold gradient-text">
              Raghukul Aryawart
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={toggleMute}
              variant="outline"
              size="sm"
              className="glass border-green-500/50 text-white hover:bg-green-500/20"
            >
              {isMuted ? "🔇" : "🔊"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={toggleMute}
              variant="outline"
              size="sm"
              className="glass border-green-500/50 text-white hover:bg-green-500/20"
            >
              {isMuted ? "🔇" : "🔊"}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-green-400 hover:bg-green-500/10 rounded-md transition-colors duration-300"
                >
                  {item.name}
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
