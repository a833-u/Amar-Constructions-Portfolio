import ShinyText from "../components/ShinyText";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import aboutUsimg from "../assets/Images/Hero-img.jpg";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { PixelImage } from "@/components/ui/pixel-image";
import { WordRotate } from "@/components/ui/word-rotate";
import { TextAnimate } from "@/components/ui/text-animate";
import SectionHeading from "@/components/SectionHeading";
import CurvedLoop from "../components/CurvedLoop";
import CountUp from "../components/CountUp";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ServicesSection from "@/Sections/ServicesSection";
import CircularGallery from "@/components/CircularGallery";

const Home = () => {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      {/* ================================= */}
      {/* HERO SECTION */}
      {/* ================================= */}

      <section className="relative flex items-center justify-center min-h-screen px-5 sm:px-0 overflow-hidden">
        {/* Background Grid */}
        <AnimatedGridPattern />

        {/* Dark Overlay (improves readability) */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] w-full sm:w-3/4 md:w-auto lg:w-auto flex flex-col items-center justify-center gap-6 text-center px-4">
          <AvailabilityBadge text="Crafting Foundations for the Future" />

          <h1 className="figtree-regular text-white uppercase text-[9vw] sm:text-4xl md:text-5xl lg:text-[vw] leading-tight flex flex-col md:flex-row items-center gap-[1.5vw]">
            We Belive in{" "}
            <WordRotate
              words={["Precision", "Quality", "Commitment"]}
              className="figtree-bold text-[#e2ca76]"
            />
          </h1>

          <p className="font-satoshi-regular text-white text-sm sm:text-base md:text-lg max-w-xl">
            Amar Constructions specializes in civil and electrical projects,
            delivering safe, efficient, and high-standard construction with
            professionalism and reliability.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ShimmerButton>Contact us</ShimmerButton>
            <ShimmerButton>See Projects</ShimmerButton>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* ABOUT SECTION */}
      {/* ================================= */}

      <section className="min-h-screen flex items-center px-5 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-15 md:gap-10 items-center">
          <div className="w-full aspect-[4/3] md:aspect-square">
            <PixelImage src={aboutUsimg} grid="8x8" />
          </div>

          <div className="flex flex-col items-center md:items-start gap-[5vw] md:gap-[1.5vw]">
            <SectionHeading className="font-author-bold text-4xl md:text-3xl">
              About Us
            </SectionHeading>

            <TextAnimate
              animation="blurIn"
              as="p"
              className="font-satoshi-light text-white"
            >
              Amar Construction is led by its partners, Dipen Shah and Mithil,
              bringing together strong expertise in electrical engineering and
              civil construction. With the support of a qualified partnership
              and an experienced professional team, Amar Construction is
              committed to delivering high-quality construction, strict
              adherence to safety standards, and timely project completion.
            </TextAnimate>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* MARQUEE */}
      {/* ================================= */}

      <CurvedLoop
        marqueeText=" Design  ✦  Build  ✦  Deliver  ✦  Excellence  ✦"
        speed={2}
        curveAmount={0}
        direction="left"
        interactive={false}
        className="custom-text-style"
      />

      {/* ================================= */}
      {/* COMPANY PERFORMANCE */}
      {/* ================================= */}

      <section className="company-performance bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {/* Stat 1 */}
          <div className="flex flex-col items-center lg:items-start">
            <SectionHeading className="font-author-bold text-5xl">
              <CountUp
                from={0}
                to={8}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                startCounting
              />
            </SectionHeading>

            <h4 className="mt-4 text-xl font-medium text-white font-satoshi-regular">
              Years experience
            </h4>

            <p className="mt-2 text-gray-400 text-base font-inter-regular">
              Improving homes with expert craftsmanship for years
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center lg:items-start">
            <SectionHeading className="font-author-bold text-5xl">
              <CountUp
                from={0}
                to={26}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                startCounting
              />
            </SectionHeading>

            <h4 className="mt-4 text-xl font-medium text-white font-satoshi-regular">
              Projects completed
            </h4>

            <p className="mt-2 text-gray-400 text-base font-inter-regular">
              Over 250 successful projects delivered with quality and care
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center lg:items-start">
            <SectionHeading className="font-author-bold text-5xl">
              <CountUp
                from={0}
                to={30}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                startCounting
              />
            </SectionHeading>

            <h4 className="mt-4 text-xl font-medium text-white font-satoshi-regular">
              Skilled Tradespeople
            </h4>

            <p className="mt-2 text-gray-400 text-base font-inter-regular">
              Our team of 30 experts ensures top-quality results
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center lg:items-start">
            <SectionHeading className="font-author-bold text-5xl">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                startCounting
              />
              %
            </SectionHeading>

            <h4 className="mt-4 text-xl font-medium text-white font-satoshi-regular">
              Client satisfaction
            </h4>

            <p className="mt-2 text-gray-400 text-base font-inter-regular">
              All of our clients are satisfied with our work and service
            </p>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SERVICE */}
      {/* ================================= */}

      <ServicesSection />

      {/* ================================= */}
      {/* IMAGE SLIDER */}
      {/* ================================= */}

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          bend={0}
          borderRadius={0.07}
          scrollSpeed={1.5}
          scrollEase={0.1}
        />
      </div>
    </div>
  );
};

export default Home;
