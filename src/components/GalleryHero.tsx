import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroGallery from "@/assets/hero-gallery.jpg";

export const GalleryHero = () => {
  return (
    <section id="gallery" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroGallery}
          alt="Decovia Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/90 via-burgundy/70 to-burgundy/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <motion.p 
            className="text-gold text-sm tracking-luxury uppercase mb-6 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Decovia Gallery
          </motion.p>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-ivory leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Where Timeless Art Becomes a{" "}
            <span className="italic text-gold">Living Statement</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-champagne/90 text-lg md:text-xl leading-relaxed mb-10 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover a curated world of classical European décor, where heritage
            craftsmanship meets refined modern living. Every piece tells a story.
            Every detail speaks luxury.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/collections?tab=gallery">
              <Button variant="hero" size="xl" className="group">
                Explore the Collection
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

export default GalleryHero;