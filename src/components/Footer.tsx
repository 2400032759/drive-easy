import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">DriveEasy Rentals</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comfortable and affordable car rentals across India. 
              We're committed to making your journey smooth and memorable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fleet" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  Peerzadiguda, Uppal, Hyderabad, Telangana, India-500039
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">+91 85008 02243</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">info@driveeasy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 DriveEasy Rentals. All rights reserved.
            </p>
            <p className="text-primary-foreground/80 text-sm text-center md:text-right">
              Designed by{" "}
              <a 
                href="https://redhost.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light font-semibold transition-colors"
              >
                Redhost Web Development Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
