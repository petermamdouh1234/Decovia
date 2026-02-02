import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMaison from "@/assets/hero-maison.jpg";

export const MaisonHero = () => {
  return (
    <section id="maison" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroMaison}
          alt="Decovia Maison"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-burgundy/90 via-burgundy/70 to-burgundy/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl ml-auto text-right">
          {/* Subtitle */}
          <motion.p 
            className="text-gold text-sm tracking-luxury uppercase mb-6 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Decovia Maison
          </motion.p>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-ivory leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Where Furniture Wears{" "}
            <span className="italic text-gold">Elegance</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-champagne/90 text-lg md:text-xl leading-relaxed mb-10 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A refined furniture and accessories house inspired by the language of
            fashion, where every piece is designed with the same attention given
            to couture, form, and timeless style.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/collections?tab=maison">
              <Button variant="hero" size="xl" className="group">
                Explore the Maison
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default MaisonHero;