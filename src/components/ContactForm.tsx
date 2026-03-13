import { useState } from "react";
import AvailabilityBadge from "./AvailabilityBadge";
import SectionHeading from "./SectionHeading";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
}

// Validates a realistic email format (user@domain.tld)
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

// Validates exactly 10 digits
const isValidPhone = (phone: string): boolean => {
  return /^\d{10}$/.test(phone.trim());
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error as user types if it's now valid
    if (name === "email" && errors.email && isValidEmail(value)) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
    if (name === "phone" && errors.phone && isValidPhone(value)) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  // Block non-digit keystrokes on the phone field
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];
    if (allowedKeys.includes(e.key)) return;
    if (e.ctrlKey || e.metaKey) return; // Allow copy/paste shortcuts
    if (!/^\d$/.test(e.key)) {
      e.preventDefault(); // Block letters and special characters
    }
  };

  // Also strip non-digits from paste events on phone field
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 10);
    setForm((prev) => ({ ...prev, phone: pasted }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (name === "email") {
      if (!value) {
        setErrors((prev) => ({ ...prev, email: "Email is required." }));
      } else if (!isValidEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    }

    if (name === "phone") {
      if (!value) {
        setErrors((prev) => ({ ...prev, phone: "Phone number is required." }));
      } else if (!isValidPhone(value)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!isValidPhone(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    setTouched({ email: true, phone: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `
      New Client Inquiry:

      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
      Message: ${form.message}`;

    const phoneNumber = "919426984852";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-black border font-satoshi-light rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors duration-300 ${
      hasError
        ? "border-red-500 focus:border-red-400"
        : "border-[#2a2a2a] focus:border-[#e2ca76]"
    }`;

  return (
    <section
      id="contact"
      className="bg-black min-h-[100svh] flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <AvailabilityBadge text="Contact Us" />
          <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-6xl mt-6">
            Get in Touch
          </SectionHeading>
          <p className="text-gray-400 mt-4 font-satoshi-light">
            Tell us about your project and we'll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-[#222222] rounded-3xl p-5 sm:p-8 space-y-6 shadow-xl"
        >
          {/* Name + Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass()}
            />

            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass(errors.email)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-satoshi-light pl-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (10 digits)"
              required
              value={form.phone}
              maxLength={10}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handlePhoneKeyDown}
              onPaste={handlePhonePaste}
              inputMode="numeric"
              className={inputClass(errors.phone)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs font-satoshi-light pl-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
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
