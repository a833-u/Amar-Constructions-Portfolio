import SectionHeading from "@/components/SectionHeading";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-24 font-satoshi-light">
      <div className="flex flex-col md:flex-row justify-between gap-20">
        <div className="group">
          <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-6xl mt-6">
            Amar Constructions
          </SectionHeading>

          <p className="text-gray-500 mt-6 max-w-sm text-sm leading-relaxed">
            Specializes in civil and electrical projects, delivering safe, efficient, and high-standard construction with professionalism and reliability.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-satoshi-bold mb-10 tracking-wide">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-x-20 gap-y-6 text-gray-400 text-lg">
            {[
              { name: "About us", link: "#about" },
              { name: "Our work", link: "#work" },
              { name: "Services", link: "#services" },
              { name: "Testimonials", link: "#testimonials" },
              { name: "FAQs", link: "#faq" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative group w-fit transition-all duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-white to-gray-500 transition-all duration-400 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 my-16"></div>

      <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm gap-4">
        <p>© 2025 Refit. All rights reserved.</p>

        <p className="hover:text-gray-300 transition duration-300 cursor-pointer">
          Designed & Developed by You
        </p>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <p className="text-sm font-satoshi-light">&copy; {new Date().getFullYear()} Amar Contructions. All rights reserved.</p>
<p className="text-sm mt-2 font-satoshi-light">Designed and Developed by Ansh Kansara</p> */
}
