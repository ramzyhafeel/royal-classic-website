import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import JourneyChoice from "../components/home/JourneyChoice";
import BrandIntroduction from "../components/home/BrandIntroduction";
import FeaturedJourneys from "../components/home/FeaturedJourneys";
import ExperienceExplorer from "../components/home/ExperienceExplorer";
import TransportPreview from "../components/home/TransportPreview";
import AccommodationPreview from "../components/home/AccommodationPreview";
import DestinationJourney from "../components/home/DestinationJourney";
import HowItWorks from "../components/home/HowItWorks";
import ReviewsPreview from "../components/home/ReviewsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import FAQ from "../components/home/FAQ";
import FinalCta from "../components/home/FinalCta";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <JourneyChoice />
      <BrandIntroduction />
      <FeaturedJourneys />
      <ExperienceExplorer />
      <TransportPreview />
      <AccommodationPreview />
      <DestinationJourney />
      <HowItWorks />
      <ReviewsPreview />
      <GalleryPreview />
      <FAQ />
      <FinalCta />
    </Layout>
  );
}