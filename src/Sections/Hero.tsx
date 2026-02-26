import AvailabilityBadge from "@/components/AvailabilityBadge";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[100svh] bg-black overflow-hidden">
      {/* GRID (z-0) */}
      <AnimatedGridPattern className="absolute inset-0 z-0 opacity-30 text-white" />

      {/* DARK OVERLAY (z-1) */}
      <div className="absolute inset-0 z-0 text-white/90" />

      {/* Hero Content */}
      <div className="relative z-[2] w-full sm:w-3/4 md:w-auto lg:w-auto flex flex-col items-center justify-center gap-6 text-center px-4">
        <AvailabilityBadge text="Crafting Foundations for the Future" />

        <h1 className="font-figtree uppercase text-white text-[9vw] sm:text-4xl md:text-5xl lg:text-6xl leading-tight flex flex-col md:flex-row items-center gap-4">
          We Believe in{" "}
          <WordRotate
            words={["Precision", "Quality", "Commitment"]}
            className="font-bold text-[#e2ca76]"
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
  );
};

export default Hero;
