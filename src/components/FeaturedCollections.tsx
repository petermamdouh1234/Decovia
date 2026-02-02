import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedText, StaggerContainer, StaggerItem } from "./AnimatedSection";
import consolesImg from "@/assets/collection-consoles.jpg";
import mirrorsImg from "@/assets/collection-mirrors.jpg";
import artImg from "@/assets/collection-art.jpg";

const collections = [
  {
    title: "Classic Consoles & Sideboards",
    description:
      "Handcrafted statement pieces inspired by French and Italian palaces.",
    image: consolesImg,
    category: "gallery",
  },
  {
    title: "Antique Mirrors & Frames",
    description:
      "Gilded reflections that amplify space, light, and prestige.",
    image: mirrorsImg,
    category: "gallery",
  },
  {
    title: "Decorative Art Pieces",
    description:
      "Sculptural clocks, vases, and centerpieces that elevate any setting.",
    image: artImg,
    category: "gallery",
  },
];

export const FeaturedCollections = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedText>
            <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
              Curated Selection
            </p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              Featured Collections
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Explore our most distinguished pieces, each selected for their
              exceptional craftsmanship and timeless beauty.
            </p>
          </AnimatedText>
        </div>

        {/* Collection Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {collections.map((collection) => (
            <StaggerItem key={collection.title}>
              <Link
                to={`/collections?category=${collection.category}`}
                className="group block card-luxury rounded-lg overflow-hidden bg-card"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-gold font-sans tracking-elegant hover:gap-4 transition-all duration-300"
          >
            View All Collections
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;