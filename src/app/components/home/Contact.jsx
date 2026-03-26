"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock3 } from "lucide-react";

import { FaTwitter, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yourmail@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "Sat – Thu, 10am – 8pm",
  },
];

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "GitHub", icon: FaGithub, href: "#" },
  { name: "Portfolio", icon: FaGlobe, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="relative inline-block text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Get In Touch
            <span className="absolute left-1/2 -bottom-2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-yellow-400" />
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Have a project in mind or want to discuss a new idea? Feel free to
            send me a message. I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  Let’s connect and talk about your website, web application, or
                  any custom development project.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-gray-800 sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Follow Me
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                      >
                        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-500">
                    ✓
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    Message Sent!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500 sm:text-base">
                    Thanks for reaching out. I will get back to you as soon as
                    possible.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Send a Message
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                      Fill out the form below and I will respond as soon as I
                      can.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-indigo-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:bg-indigo-600 hover:shadow-indigo-100 active:scale-[0.99]"
                    >
                      Send Message →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
