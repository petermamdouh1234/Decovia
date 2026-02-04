import { Link } from "react-router-dom";
import consolesImg from "@/assets/collection-consoles.jpg";
import mirrorsImg from "@/assets/collection-mirrors.jpg";
import artImg from "@/assets/collection-art.jpg";
import lightingImg from "@/assets/collection-lighting.jpg";
import sofasImg from "@/assets/collection-sofas.jpg";
import chairsImg from "@/assets/collection-chairs.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";

const collections = [
  {
    title: "Sculptures",
    description: "Classical and contemporary sculptural masterpieces.",
    image: artImg,
    category: "sculptures",
  },
  {
    title: "Furniture",
    description: "Timeless pieces inspired by European palaces.",
    image: consolesImg,
    category: "furniture",
  },
  {
    title: "Clocks",
    description: "Ornate timepieces that mark moments with elegance.",
    image: accessoriesImg,
    category: "clocks",
  },
  {
    title: "Lighting",
    description: "Chandeliers and lamps that illuminate with prestige.",
    image: lightingImg,
    category: "lighting",
  },
  {
    title: "Vases",
    description: "Exquisite vessels that celebrate artisanal craft.",
    image: artImg,
    category: "vases",
  },
  {
    title: "Collectables",
    description: "Rare treasures for the discerning collector.",
    image: mirrorsImg,
    category: "collectables",
  },
  {
    title: "Art",
    description: "Curated paintings and decorative art pieces.",
    image: artImg,
    category: "art",
  },
  {
    title: "Tableware",
    description: "Fine dining pieces crafted for luxury entertaining.",
    image: accessoriesImg,
    category: "tableware",
  },
];

export const FeaturedCollections = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
            Curated Selection
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Explore our most distinguished pieces, each selected for their
            exceptional craftsmanship and timeless beauty.
          </p>
        </div>

        {/* Collection Cards - 4 columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={`/collections?tab=gallery&category=${collection.category}`}
              className="group card-luxury rounded-lg overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.05}s` }}
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
            to="/collections?tab=gallery"
            className="inline-flex items-center gap-2 text-gold font-sans tracking-elegant hover:gap-4 transition-all duration-300"
          >
            View All Collections
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
