import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { name: "Decovia Gallery", href: "/gallery" },
  { name: "Decovia Maison", href: "/maison" },
  { name: "About Us", href: "/about" },
  { name: "Our Collections", href: "/collections" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/decovia_gallery?igsh=MXE3eHN1am41NzAyOQ==" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1DjHdhUsYh/?mibextid=wwXIfr" },
];

const PHONE_NUMBER = "01024770033";
const WHATSAPP_NUMBER = "01034888249";
const EMAIL = "artdeco2026@outlook.com";

export const Footer = () => {
  return (
    <footer className="bg-burgundy border-t border-gold/20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4 lg:mb-6">
              <img
                src={logo}
                alt="Decovia Gallery"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-champagne/80 text-xs lg:text-sm leading-relaxed font-sans">
              Timeless décor inspired by European elegance. Crafted for those who understand true luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-base lg:text-lg mb-4 lg:mb-6 tracking-elegant">
              Quick Links
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-champagne/80 text-xs lg:text-sm font-sans hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-gold font-serif text-base lg:text-lg mb-4 lg:mb-6 tracking-elegant">
              Contact Us
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-center gap-2 lg:gap-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-champagne/80 text-xs lg:text-sm font-sans hover:text-gold transition-colors"
                >
                  0102 4770033
                </a>
              </li>
              <li className="flex items-center gap-2 lg:gap-3">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" />
                <a
                  href={`https://wa.me/2${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne/80 text-xs lg:text-sm font-sans hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 lg:gap-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-champagne/80 text-xs lg:text-sm font-sans hover:text-gold transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-gold font-serif text-base lg:text-lg mb-4 lg:mb-6 tracking-elegant">
              Our Locations
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-start gap-2 lg:gap-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-champagne/80 text-xs lg:text-sm font-sans">
                  <strong className="text-champagne">Zamalek:</strong>
                  <br />
                  34 Mohamed Mazhar Street
                </span>
              </li>
              <li className="flex items-start gap-2 lg:gap-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-champagne/80 text-xs lg:text-sm font-sans">
                  <strong className="text-champagne">Maadi:</strong>
                  <br />
                  Building 6, Street 277
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Links - Full Width on Mobile */}
        <div className="mt-8 lg:mt-0 pt-8 border-t border-gold/10 lg:border-0 lg:pt-0">
          <h4 className="text-gold font-serif text-base lg:text-lg mb-4 tracking-elegant text-center lg:hidden">
            Follow Us
          </h4>
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-champagne hover:bg-gold hover:text-burgundy transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-champagne/60 text-sm font-sans">
            © {new Date().getFullYear()} Decovia Gallery. All rights reserved.
          </p>
          <p className="text-champagne/60 text-xs font-sans italic">
            Where Timeless Art Becomes a Living Statement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
