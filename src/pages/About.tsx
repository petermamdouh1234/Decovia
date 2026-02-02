import Layout from "@/components/Layout";
import heroGallery from "@/assets/hero-gallery.jpg";

const values = [
  {
    title: "Timeless Over Trendy",
    description:
      "We believe in pieces that transcend seasons and fleeting fashions, offering enduring beauty for generations.",
  },
  {
    title: "Art as Identity",
    description:
      "Every object in your space reflects who you are. We curate pieces that become extensions of your personal narrative.",
  },
  {
    title: "Details Matter",
    description:
      "From the curve of a gilded frame to the grain of aged wood, we obsess over the nuances that define true craftsmanship.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48">
        <div className="absolute inset-0">
          <img
            src={heroGallery}
            alt="About Decovia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-burgundy/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-luxury uppercase mb-6 font-sans">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-8">
            About Decovia
          </h1>
          <p className="text-champagne/90 text-xl max-w-3xl mx-auto font-sans leading-relaxed">
            European-inspired, timeless décor curated for modern spaces.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
                  Our Vision
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  The Leading Destination for Luxury Vintage Décor
                </h2>
                <p className="text-muted-foreground text-lg font-sans leading-relaxed">
                  We envision Decovia as the premier destination where
                  discerning collectors and design enthusiasts discover pieces
                  that transform spaces into statements of refined taste and
                  cultural appreciation.
                </p>
              </div>
              <div>
                <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  Delivering Exceptional Décor as Artistic Statements
                </h2>
                <p className="text-muted-foreground text-lg font-sans leading-relaxed">
                  Our mission is to curate and present exceptional decorative
                  pieces that transcend mere functionality — each item an
                  artistic statement that enriches living spaces and elevates
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
              Brand Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-background rounded-lg card-luxury"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <h3 className="text-xl font-serif text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Section */}
      <section className="py-20 lg:py-32 bg-burgundy">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <svg
              className="w-16 h-16 text-gold mx-auto mb-8"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 8L36 20H48L38 28L42 40L32 32L22 40L26 28L16 20H28L32 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="text-champagne/90 text-xl md:text-2xl font-serif italic leading-relaxed">
              "At Decovia, we don't just sell furniture and décor. We curate
              legacies. Each piece carries the weight of history, the finesse
              of artistry, and the promise of timeless elegance."
            </p>
            <div className="mt-8 w-16 h-px bg-gold mx-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
