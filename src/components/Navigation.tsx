import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Decovia Gallery", href: "/gallery" },
  { name: "Decovia Maison", href: "/maison" },
  { name: "About Us", href: "/about" },
  { name: "Our Collections", href: "/collections" },
];

const PHONE_NUMBER = "01024770033";
const WHATSAPP_NUMBER = "01034888249";
const EMAIL = "artdeco2026@outlook.com";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top or scrolling up
      if (currentScrollY <= 20) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
        setIsScrolled(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down (after 100px)
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/2${WHATSAPP_NUMBER}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-burgundy shadow-lg py-2"
          : "bg-burgundy/95 backdrop-blur-md py-0"
      } border-b border-gold/20`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16 lg:h-18" : "h-20 lg:h-24"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Decovia Gallery"
              className={`transition-all duration-300 w-auto object-contain ${
                isScrolled ? "h-10 lg:h-12" : "h-12 lg:h-16"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className={`text-sm tracking-elegant font-sans hover:text-gold transition-colors duration-300 link-elegant ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-champagne"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="luxury-ghost" size="sm">
                  Contact Us
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-burgundy border-gold/30 min-w-[180px]"
              >
                <DropdownMenuItem
                  onClick={handleCall}
                  className="text-champagne hover:text-gold hover:bg-gold/10 cursor-pointer gap-3"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleWhatsApp}
                  className="text-champagne hover:text-gold hover:bg-gold/10 cursor-pointer gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleEmail}
                  className="text-champagne hover:text-gold hover:bg-gold/10 cursor-pointer gap-3"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-champagne hover:text-gold transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-burgundy border-b border-gold/20 animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`text-base tracking-elegant font-sans hover:text-gold transition-colors duration-300 py-2 border-b border-gold/10 ${
                    location.pathname === link.href
                      ? "text-gold"
                      : "text-champagne"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Contact Options */}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={handleCall}
                  className="flex items-center gap-3 text-champagne hover:text-gold transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-sans">Call Us</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-3 text-champagne hover:text-gold transition-colors py-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-sans">WhatsApp</span>
                </button>
                <button
                  onClick={handleEmail}
                  className="flex items-center gap-3 text-champagne hover:text-gold transition-colors py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-sans">Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
