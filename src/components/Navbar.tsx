import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Car className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-foreground">DriveEasy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("fleet")} className="text-foreground hover:text-primary font-medium transition-colors">
              Fleet
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-foreground hover:text-primary font-medium transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("fleet")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("fleet")} 
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Fleet
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("fleet")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
