import SectionHeading from "@/components/SectionHeading";
import aboutUsimg from "@/assets/Images/Hero-img.jpg";
import { TextAnimate } from "@/components/ui/text-animate";
import { PixelImage } from "@/components/ui/pixel-image";

const About = () => {
  return (
    <section id="about" className="bg-black min-h-[100svh] flex items-center px-5 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* IMAGE */}
        <div className="w-full h-[60svh] md:h-[80svh] rounded-3xl overflow-hidden">
          <PixelImage src={aboutUsimg} grid="8x8" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center md:items-start gap-8">

          <SectionHeading className="font-author-bold text-4xl md:text-5xl">
            About Us
          </SectionHeading>

          <TextAnimate
            animation="blurIn"
            as="p"
            className="font-satoshi-light text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left"
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
  );
};

export default About;