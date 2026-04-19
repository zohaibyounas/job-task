import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { QualityProducts } from "@/components/sections/QualityProducts";
import { SlantedCarousel } from "@/components/sections/SlantedCarousel";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Sections */}
      <section id="hero">
        <HeroSlider />
      </section>
      
      <section id="quality">
        <QualityProducts />
      </section>
      
      <section id="clients">
        <SlantedCarousel />
      </section>
      
      <Footer />
    </main>
  );
}
