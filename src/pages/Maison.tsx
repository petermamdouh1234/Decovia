import Layout from "@/components/Layout";
import MaisonHero from "@/components/MaisonHero";
import MaisonConcept from "@/components/MaisonConcept";
import MaisonCollections from "@/components/MaisonCollections";
import VideoShowcase from "@/components/VideoShowcase";

const Maison = () => {
  return (
    <Layout>
      <MaisonHero />
      <MaisonConcept />
      <MaisonCollections />
      <VideoShowcase />
    </Layout>
  );
};

export default Maison;
