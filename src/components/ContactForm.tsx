import { useState } from "react";
import AvailabilityBadge from "./AvailabilityBadge";
import SectionHeading from "./SectionHeading";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
New Contact Form Submission:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}
    `;

    const phoneNumber = "919999999999"; // Replace
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-black min-h-[100svh] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <AvailabilityBadge text="Contact Us" />
          <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-6xl mt-6">
            Get in Touch
          </SectionHeading>
          <p className="text-gray-400 mt-4 font-satoshi-light">
            Tell us about your project and we’ll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-[#222222] rounded-3xl p-5 sm:p-8 space-y-8 shadow-xl"
        >
          {/* Name + Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full bg-black border font-satoshi-light border-[#2a2a2a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e2ca76] transition-colors duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full bg-black border font-satoshi-light border-[#2a2a2a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e2ca76] transition-colors duration-300"
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full bg-black border font-satoshi-light border-[#2a2a2a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e2ca76] transition-colors duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            onChange={handleChange}
            className="w-full bg-black border font-satoshi-light border-[#2a2a2a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e2ca76] transition-colors duration-300 resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full px-8 py-4 rounded-xl
              font-semibold text-black
              bg-[linear-gradient(90deg,#6f5320,#e2ca76,#fff3c4,#e2ca76,#6f5320)]
              shadow-[0_4px_20px_rgba(226,202,118,0.4)]
              hover:shadow-[0_6px_30px_rgba(226,202,118,0.6)]
              transition-all duration-300
              cursor-pointer
              font-satoshi-bold
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
