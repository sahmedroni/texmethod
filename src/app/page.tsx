import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TopicsDiscussed } from "@/components/sections/TopicsDiscussed";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { GlobalClientMap } from "@/components/sections/GlobalClientMap";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <TopicsDiscussed />
      <FeaturedProducts />
      <ServiceHighlights />
      <WhyChooseUs />
      <GlobalClientMap />
      <ClientLogos />
      <CtaSection />
    </>
  );
}
