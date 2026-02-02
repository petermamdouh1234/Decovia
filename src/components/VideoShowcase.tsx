import { useState } from "react";
import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

// Placeholder videos - replace with actual video URLs
const videos: Video[] = [
  {
    id: 1,
    title: "The Art of Luxury Living",
    thumbnail: "",
    embedUrl: "", // Replace with actual embed URL
  },
  {
    id: 2,
    title: "Craftsmanship & Heritage",
    thumbnail: "",
    embedUrl: "", // Replace with actual embed URL
  },
  {
    id: 3,
    title: "Behind the Collection",
    thumbnail: "",
    embedUrl: "", // Replace with actual embed URL
  },
];

export const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-luxury uppercase mb-4 font-sans">
            Experience Decovia
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Video Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Immerse yourself in the world of timeless elegance and exceptional
            craftsmanship.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-video bg-burgundy/10 rounded-lg overflow-hidden card-luxury animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Placeholder or Thumbnail */}
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-burgundy/20 to-burgundy/40 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-sans">
                    Video Coming Soon
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-burgundy ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-burgundy/90 to-transparent">
                <h3 className="text-ivory font-serif text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-burgundy/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center text-ivory transition-colors"
              >
                ✕
              </button>

              {/* Video placeholder - replace with actual embed */}
              <div className="w-full h-full flex items-center justify-center text-champagne">
                <p className="text-center font-sans">
                  Video embed placeholder
                  <br />
                  <span className="text-sm text-champagne/60">
                    Add your video embed URL here
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;
