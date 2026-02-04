import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import VideoSplash from "@/components/VideoSplash";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroGallery from "@/assets/hero-gallery.jpg";
import heroMaison from "@/assets/hero-maison.jpg";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  useEffect(() => {
    // Check if user has already seen the splash this session
    const seen = sessionStorage.getItem("splashSeen");
    if (seen) {
      setShowSplash(false);
      setHasSeenSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasSeenSplash(true);
    sessionStorage.setItem("splashSeen", "true");
  };

  if (showSplash && !hasSeenSplash) {
    return <VideoSplash onComplete={handleSplashComplete} />;
  }

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
          <div className="absolute inset-0">
            <img
              src={heroGallery}
              alt="Decovia Gallery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy/70 group-hover:bg-burgundy/60 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center p-8 max-w-lg">
            <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
              Antiques & Décor
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">
              Decovia Gallery
            </h2>
            <p className="text-champagne/90 text-base md:text-lg leading-relaxed mb-8 font-sans">
              Where Timeless Art Becomes a Living Statement
            </p>
            <Button
              variant="hero"
              size="lg"
              className="group/btn pointer-events-none"
            >
              Explore Gallery
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </Link>

        {/* Maison Side */}
        <Link
          to="/maison"
          className="relative min-h-[50vh] lg:min-h-screen flex items-center justify-center group overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroMaison}
              alt="Decovia Maison"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy/70 group-hover:bg-burgundy/60 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center p-8 max-w-lg">
            <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
              Furniture & Interiors
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">
              Decovia Maison
            </h2>
            <p className="text-champagne/90 text-base md:text-lg leading-relaxed mb-8 font-sans">
              Where Furniture Wears Elegance
            </p>
            <Button
              variant="hero"
              size="lg"
              className="group/btn pointer-events-none"
            >
              Explore Maison
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
