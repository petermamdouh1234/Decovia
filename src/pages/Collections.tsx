import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import consolesImg from "@/assets/collection-consoles.jpg";
import mirrorsImg from "@/assets/collection-mirrors.jpg";
import artImg from "@/assets/collection-art.jpg";
import sofasImg from "@/assets/collection-sofas.jpg";
import chairsImg from "@/assets/collection-chairs.jpg";
import lightingImg from "@/assets/collection-lighting.jpg";
import accessoriesImg from "@/assets/collection-accessories.jpg";

// Sample products - these would be replaced with actual product data
const galleryProducts = [
  { id: 1, name: "Classical Bronze Sculpture", price: "$4,800", image: artImg, category: "sculptures" },
  { id: 2, name: "Baroque Console Table", price: "$6,200", image: consolesImg, category: "furniture" },
  { id: 3, name: "Ornate Mantel Clock", price: "$1,850", image: accessoriesImg, category: "clocks" },
  { id: 4, name: "Crystal Chandelier", price: "$5,400", image: lightingImg, category: "lighting" },
  { id: 5, name: "Venetian Glass Vase", price: "$1,200", image: artImg, category: "vases" },
  { id: 6, name: "Gilded Rococo Mirror", price: "$2,400", image: mirrorsImg, category: "collectables" },
  { id: 7, name: "Renaissance Oil Painting", price: "$8,500", image: artImg, category: "art" },
  { id: 8, name: "Fine Porcelain Set", price: "$3,100", image: accessoriesImg, category: "tableware" },
];

const maisonProducts = [
  { id: 9, name: "Velvet Curve Sofa", price: "$8,500", image: sofasImg, category: "furniture" },
  { id: 10, name: "Crystal Chandelier", price: "$5,400", image: lightingImg, category: "lighting" },
  { id: 11, name: "Decorative Vases Set", price: "$1,100", image: accessoriesImg, category: "vases" },
  { id: 12, name: "Contemporary Art Piece", price: "$3,400", image: artImg, category: "art" },
  { id: 13, name: "Luxury Dining Set", price: "$4,200", image: sofasImg, category: "tableware" },
];

const galleryCategories = [
 
  { id: "sculptures", label: "Sculptures" },
  { id: "furniture", label: "Furniture" },
  { id: "clocks", label: "Clocks" },
  { id: "lighting", label: "Lighting" },
  { id: "vases", label: "Vases" },
  { id: "collectables", label: "Collectables" },
  { id: "art", label: "Art" },
  { id: "tableware", label: "Tableware" },
];

const maisonCategories = [
 
  { id: "furniture", label: "Furniture" },
  { id: "lighting", label: "Lighting" },
  { id: "vases", label: "Vases" },
  { id: "art", label: "Art" },
  { id: "tableware", label: "Tableware" },
];

const Collections = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "maison" ? "maison" : "gallery";
  const initialCategory = searchParams.get("category") || "all";
  
  const [activeTab, setActiveTab] = useState<"gallery" | "maison">(initialTab);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const tab = searchParams.get("tab");
    const category = searchParams.get("category");
    if (tab === "maison" || tab === "gallery") {
      setActiveTab(tab);
    }
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = activeTab === "gallery" ? galleryCategories : maisonCategories;
  const allProducts = activeTab === "gallery" ? galleryProducts : maisonProducts;
  
  const products = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-burgundy">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
            Discover Our World
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">
            Our Collections
          </h1>
          <p className="text-champagne/90 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            A tribute to classical European artistry. Each piece represents the
            pinnacle of craftsmanship and timeless design.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-cream sticky top-16 lg:top-18 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Toggle + Category Filters in one row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Main Toggle */}
            <div className="inline-flex bg-background rounded-full p-1 shadow-md">
              <button
                onClick={() => {
                  setActiveTab("gallery");
                  setActiveCategory("all");
                }}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-elegant transition-all duration-300 ${
                  activeTab === "gallery"
                    ? "bg-burgundy text-ivory"
                    : "text-foreground hover:text-gold"
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  setActiveTab("maison");
                  setActiveCategory("all");
                }}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-elegant transition-all duration-300 ${
                  activeTab === "maison"
                    ? "bg-burgundy text-ivory"
                    : "text-foreground hover:text-gold"
                }`}
              >
                Maison
              </button>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-border" />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gold text-burgundy"
                      : "bg-background text-foreground hover:bg-gold/20"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden card-luxury animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-serif text-foreground mb-1 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gold font-sans font-medium text-sm">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about products */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-sans italic text-sm">
              Contact us for availability and private viewings.
              <br />
              Additional products will be uploaded soon.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
