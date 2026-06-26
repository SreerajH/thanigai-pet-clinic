import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Location from "@/components/Location";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <Services />
        <Reviews />
        <About />
        <Location />
        <WhatsAppBanner />
      </main>
      <Footer />
    </>
  );
}
