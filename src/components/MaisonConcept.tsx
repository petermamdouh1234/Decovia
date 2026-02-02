import { motion } from "framer-motion";
import { AnimatedText, StaggerContainer, StaggerItem } from "./AnimatedSection";

export const MaisonConcept = () => {
  const features = [
    "Sculptural forms and refined proportions",
    "Luxurious materials and tailored finishes",
    "Harmonious balance of comfort & visual impact",
    "Timeless palettes inspired by fashion heritage",
  ];

  const audiences = [
    "Luxury residences & villas",
    "Boutique hotels & refined salons",
    "Interior designers & stylists",
    "Clients who see interiors as self-expression",
  ];

  return (
    <section className="py-20 lg:py-32 bg-burgundy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedText>
              <p className="text-gold text-sm tracking-luxury uppercase mb-6 font-sans">
                The Maison Philosophy
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-8">
                Fashion-Inspired Living
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-champagne/90 text-lg md:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
                At Decovia Maison, we approach furniture the way fashion houses
                approach couture. Each sofa, chair, chandelier, and accessory is
                curated as a statement piece — designed to shape spaces with
                elegance, confidence, and identity.
              </p>
            </AnimatedText>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-gold font-serif text-xl mb-8">
                Our Design Principles
              </h3>
              <StaggerContainer staggerDelay={0.1}>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-4 text-champagne/80 font-sans">
                        <motion.span 
                          className="text-gold mt-1"
                          initial={{ rotate: 0 }}
                          whileInView={{ rotate: 360 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          ◆
                        </motion.span>
                        {feature}
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </motion.div>

            {/* Designed For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-gold font-serif text-xl mb-8">
                Designed for Styled Spaces
              </h3>
              <StaggerContainer staggerDelay={0.1}>
                <ul className="space-y-4">
                  {audiences.map((audience, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-4 text-champagne/80 font-sans">
                        <motion.span 
                          className="text-gold mt-1"
                          initial={{ rotate: 0 }}
                          whileInView={{ rotate: 360 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          ◆
                        </motion.span>
                        {audience}
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </motion.div>
          </div>

          {/* Craftsmanship Note */}
          <motion.div 
            className="mt-16 pt-16 border-t border-gold/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-gold font-serif text-xl mb-4">
              Craftsmanship & Materials
            </h3>
            <p className="text-champagne/80 font-sans text-lg">
              Premium woods, marble, brass, fine upholstery, and artisanal
              finishes.
              <br />
              <span className="italic">
                Limited quantity to preserve exclusivity.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaisonConcept;