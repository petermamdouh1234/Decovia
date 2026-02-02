import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedSection";

export const AboutBrand = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative divider */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-16 h-px bg-gold/50"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-gold text-sm tracking-luxury uppercase font-sans">
              About the Brand
            </span>
            <motion.div 
              className="w-16 h-px bg-gold/50"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Main content */}
          <AnimatedText delay={0.1}>
            <p className="text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed font-serif mb-8">
              At Decovia Gallery, we curate rare and exquisite décor inspired by
              the golden eras of European art and architecture.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans mb-8">
              Our pieces are not objects — they are expressions of culture,
              elegance, and legacy. From ornate mirrors to sculptural consoles and
              museum-worthy accents, Decovia transforms interiors into timeless
              masterpieces.
            </p>
          </AnimatedText>

          {/* Decorative ornament */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <svg
              className="w-24 h-12 text-gold/60"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 25C50 25 35 10 20 15C5 20 5 35 20 35C35 35 50 25 50 25ZM50 25C50 25 65 10 80 15C95 20 95 35 80 35C65 35 50 25 50 25Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="50" cy="25" r="3" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;