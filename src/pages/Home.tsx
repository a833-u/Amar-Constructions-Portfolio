import CurvedLoop from "../components/CurvedLoop";
import ServicesSection from "@/Sections/ServicesSection";
import CircularGallery from "@/components/CircularGallery";
import ContactForm from "@/components/ContactForm";
import Hero from "@/Sections/Hero";
import About from "../Sections/About";
import CompanyPerformance from "@/Sections/CompanyPerformance";

const Home = () => {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      {/* ================ HERO SECTION =================*/}
      <Hero />

      {/* ================ ABOUT SECTION =================*/}
      <About />

      {/* ================ MARQUEE =================*/}
      <CurvedLoop
        marqueeText=" Design  ✦  Build  ✦  Deliver  ✦  Excellence  ✦"
        speed={2}
        curveAmount={0}
        direction="left"
        interactive={false}
        className="custom-text-style"
      />

      {/* ================ COMPANY PERFORMANCE =================*/}
      <CompanyPerformance />

      {/* ================ SERVICE =================*/}
      <ServicesSection />

      {/* ================ IMAGE SLIDER =================*/}
      <section id="projects" className="scroll-mt-32">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#e2ca76"
            font="bold 40px Figtree"
            borderRadius={0.05}
            scrollEase={0.02}
            bend={0}
            borderRadius={0.07}
            scrollSpeed={1.5}
            scrollEase={0.1}
          />
        </div>
      </section>

      {/* ================ CONTACT FORM =================*/}
      <ContactForm />
    </div>
  );
};

export default Home;
