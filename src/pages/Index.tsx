import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PopularCakes from "@/components/PopularCakes";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* CONTENT SECTIONS */}
      <section className="bg-white">

        <About />
        <CTABanner />
        <Services />
        <Testimonials />
        <PopularCakes />
        <Gallery />
        <FAQ />

      </section>

    </main>
  );
};

export default Index;
