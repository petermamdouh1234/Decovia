import { Link } from "react-router-dom";
import sofasImg from "@/assets/collection-sofas.jpg";
import lightingImg from "@/assets/collection-lighting.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";
import artImg from "@/assets/collection-art.jpg";
import consolesImg from "@/assets/collection-consoles.jpg";

const collections = [
  {
    title: "Furniture",
    description: "Couture-inspired furniture tailored for refined interiors.",
    image: consolesImg,
    category: "furniture",
  },
  {
    title: "Lighting",
    description: "Chandeliers & lamps that illuminate with elegance.",
    image: lightingImg,
    category: "lighting",
  },
  {
    title: "Vases",
    description: "Sculptural vessels as decorative statements.",
    image: accessoriesImg,
    category: "vases",
  },
  {
    title: "Art",
    description: "Curated art pieces for the discerning collector.",
    image: artImg,
    category: "art",
  },
  {
    title: "Tableware",
    description: "Luxury dining pieces for elegant entertaining.",
    image: sofasImg,
    category: "tableware",
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

        {/* Collection Cards - 5 columns for 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={`/collections?tab=maison&category=${collection.category}`}
              className="group card-luxury rounded-lg overflow-hidden bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-serif text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground text-xs font-sans leading-relaxed line-clamp-2">
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
