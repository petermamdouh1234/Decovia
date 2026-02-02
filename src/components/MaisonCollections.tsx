import { Link } from "react-router-dom";
import sofasImg from "@/assets/collection-sofas.jpg";
import chairsImg from "@/assets/collection-chairs.jpg";
import lightingImg from "@/assets/collection-lighting.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";

const collections = [
  {
    title: "Sofas & Statement Seating",
    description: "Tailored like couture pieces for the most refined interiors.",
    image: sofasImg,
    category: "sofas",
  },
  {
    title: "Chairs & Accent Furniture",
    description: "Sculptural accents and seating that define spaces.",
    image: chairsImg,
    category: "chairs",
  },
  {
    title: "Lighting Maison",
    description: "Chandeliers & table lamps that illuminate with elegance.",
    image: lightingImg,
    category: "lighting",
  },
  {
    title: "Accessories & Decorative Art",
    description: "Curated finishing touches for the discerning collector.",
    image: accessoriesImg,
    category: "accessories",
  },
];

export const MaisonCollections = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
            Maison Collection
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Featured Pieces
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Discover our fashion-inspired furniture and accessories, designed to
            transform your space into a statement of elegance.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={`/collections?tab=maison&category=${collection.category}`}
              className="group card-luxury rounded-lg overflow-hidden bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/collections?tab=maison"
            className="inline-flex items-center gap-2 text-gold font-sans tracking-elegant hover:gap-4 transition-all duration-300"
          >
            View Full Collection
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MaisonCollections;
