import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import QuickLinks from "@/components/QuickLinks";
import WorkingPrinciples from "@/components/WorkingPrinciples";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="page-surface relative z-20 overflow-x-hidden rounded-t-[1.75rem] shadow-[0_-28px_70px_rgba(15,23,42,0.5)] motion-reduce:!mt-0 sm:rounded-t-[2rem]">
        <main id="ana-icerik" className="overflow-x-hidden">
          <About />
          <PracticeAreas />
          <QuickLinks />
          <WorkingPrinciples />
          <Blog />
          <Faq />
        </main>
        <Footer />
      </div>

      <WhatsAppButton />
    </>
  );
}
