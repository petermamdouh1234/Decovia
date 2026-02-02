import Layout from "@/components/Layout";
import GalleryHero from "@/components/GalleryHero";
import AboutBrand from "@/components/AboutBrand";
import FeaturedCollections from "@/components/FeaturedCollections";
import VideoShowcase from "@/components/VideoShowcase";

const Gallery = () => {
  return (
    <Layout>
      <GalleryHero />
      <AboutBrand />
      <FeaturedCollections />
      <VideoShowcase />
    </Layout>
  );
};

export default Gallery;
