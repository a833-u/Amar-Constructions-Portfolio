import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";


const stats = [
  {
    value: 8,
    label: "Years experience",
    description:
      "Improving homes with expert craftsmanship for years",
  },
  {
    value: 26,
    label: "Projects completed",
    description:
      "Over 250 successful projects delivered with quality and care",
  },
  {
    value: 30,
    label: "Skilled Tradespeople",
    description:
      "Our team of 30 experts ensures top-quality results",
  },
  {
    value: 100,
    label: "Client satisfaction",
    description:
      "All of our clients are satisfied with our work and service",
    suffix: "%",
  },
];

const CompanyPerformance = () => {
  return (
    <section className="bg-black min-h-[60svh] py-24 px-6 flex items-center">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center lg:text-left">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Number */}
            <SectionHeading className="font-author-bold text-5xl md:text-6xl">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                startCounting
              />
              {stat.suffix && stat.suffix}
            </SectionHeading>

            {/* Label */}
            <h4 className="mt-6 text-xl font-medium text-white font-satoshi-regular">
              {stat.label}
            </h4>

            {/* Description */}
            <p className="mt-3 text-gray-400 text-base font-inter-regular max-w-xs">
              {stat.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default CompanyPerformance;