import { useState } from "react";
import { Link } from "react-router-dom";
import consolesImg from "@/assets/collection-consoles.jpg";
import mirrorsImg from "@/assets/collection-mirrors.jpg";
import artImg from "@/assets/collection-art.jpg";
import lightingImg from "@/assets/collection-lighting.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";
import sofasImg from "@/assets/collection-sofas.jpg";

const galleryCategories = [
  { id: "sculptures", title: "Sculptures", image: artImg },
  { id: "furniture", title: "Furniture", image: consolesImg },
  { id: "clocks", title: "Clocks", image: accessoriesImg },
  { id: "lighting", title: "Lighting", image: lightingImg },
  { id: "vases", title: "Vases", image: artImg },
  { id: "collectables", title: "Collectables", image: mirrorsImg },
  { id: "art", title: "Art", image: artImg },
  { id: "tableware", title: "Tableware", image: accessoriesImg },
];

const maisonCategories = [
  { id: "furniture", title: "Furniture", image: consolesImg },
  { id: "lighting", title: "Lighting", image: lightingImg },
  { id: "vases", title: "Vases", image: accessoriesImg },
  { id: "art", title: "Art", image: artImg },
  { id: "tableware", title: "Tableware", image: sofasImg },
];

export const CollectionToggle = () => {
  const [activeTab, setActiveTab] = useState<"gallery" | "maison">("gallery");

  const categories = activeTab === "gallery" ? galleryCategories : maisonCategories;

  return (
    <section className="py-20 lg:py-32 bg-champagne">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
            Explore Our World
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
            Browse by Collection
          </h2>

          {/* Toggle Buttons */}
          <div className="inline-flex bg-background rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-8 py-3 rounded-full text-sm font-sans tracking-elegant transition-all duration-300 ${
                activeTab === "gallery"
                  ? "bg-burgundy text-ivory"
                  : "text-foreground hover:text-gold"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab("maison")}
              className={`px-8 py-3 rounded-full text-sm font-sans tracking-elegant transition-all duration-300 ${
                activeTab === "maison"
                  ? "bg-burgundy text-ivory"
                  : "text-foreground hover:text-gold"
              }`}
            >
              Maison
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div
          className={`grid gap-4 ${
            activeTab === "gallery"
              ? "grid-cols-2 md:grid-cols-4"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          }`}
        >
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collections?tab=${activeTab}&category=${category.id}`}
              className="group relative aspect-square rounded-lg overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-ivory font-serif text-sm lg:text-base group-hover:text-gold transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionToggle;
