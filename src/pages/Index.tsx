import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroGallery from "@/assets/hero-gallery.jpg";
import heroMaison from "@/assets/hero-maison.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Two Divisions */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Gallery Side */}
        <Link
          to="/gallery"
          className="relative min-h-[50vh] lg:min-h-screen flex items-center justify-center group overflow-hidden"
        >
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={heroGallery}
              alt="Decovia Gallery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy/70 group-hover:bg-burgundy/60 transition-colors duration-500" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center p-8 max-w-lg">
            <motion.p 
              className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Antiques & Décor
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Decovia Gallery
            </motion.h2>
            <motion.p 
              className="text-champagne/90 text-base md:text-lg leading-relaxed mb-8 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Where Timeless Art Becomes a Living Statement
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group/btn pointer-events-none"
              >
                Explore Gallery
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </Link>

        {/* Maison Side */}
        <Link
          to="/maison"
          className="relative min-h-[50vh] lg:min-h-screen flex items-center justify-center group overflow-hidden"
        >
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={heroMaison}
              alt="Decovia Maison"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy/70 group-hover:bg-burgundy/60 transition-colors duration-500" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center p-8 max-w-lg">
            <motion.p 
              className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Furniture & Interiors
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Decovia Maison
            </motion.h2>
            <motion.p 
              className="text-champagne/90 text-base md:text-lg leading-relaxed mb-8 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Where Furniture Wears Elegance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group/btn pointer-events-none"
              >
                Explore Maison
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default Index;