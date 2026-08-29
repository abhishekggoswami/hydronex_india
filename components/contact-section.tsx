"use client"

import { useState } from "react"
import { ArrowUpRight, Twitter, Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We will get back to you shortly.")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="bg-[#141414] py-20 relative overflow-hidden" id="contact">
      {/* World-map dot pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div>
            <p className="text-[#e05a2e] text-sm font-semibold mb-3">. Contacts</p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We are always ready to help you and answer your questions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-white font-semibold mb-2">Head Office</h4>
                <div className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-[#e05a2e]" />
                  <span>78,000 m² Industrial Zone<br />Manufacturing District, China</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <div className="flex flex-col gap-1">
                  <a href="tel:+18009874569" className="flex items-center gap-2 text-[#e05a2e] text-sm hover:text-white transition-colors">
                    <Phone size={13} />
                    +1 (800) 987 456 98
                  </a>
                  <a href="tel:+19876543210" className="flex items-center gap-2 text-[#e05a2e] text-sm hover:text-white transition-colors">
                    <Phone size={13} />
                    +1 (987) 654 3210
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-2">
                  {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#e05a2e] hover:text-[#e05a2e] transition-colors"
                      aria-label="Social link"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-400 text-sm mb-1">Interested in working with us?</p>
                <a href="mailto:info@hydronex.com" className="flex items-center gap-2 text-[#e05a2e] text-sm hover:text-white transition-colors">
                  <Mail size={13} />
                  info@hydronex.com
                </a>
              </div>
            </div>

            {/* Since year */}
            <p
              className="text-6xl font-extrabold text-white/5 select-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              since 2001
            </p>
          </div>

          {/* Right: form card */}
          <div className="bg-white p-8">
            <h3
              className="text-2xl font-extrabold text-[#141414] mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get in Touch
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Send us your inquiry and we will respond within 24 hours with product details and pricing.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-3">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full text-sm text-[#141414] placeholder:text-gray-400 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full text-sm text-[#141414] placeholder:text-gray-400 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full text-sm text-[#141414] placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full text-sm text-[#141414] placeholder:text-gray-400 outline-none bg-transparent resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-3 text-[#e05a2e] font-semibold text-sm hover:gap-4 transition-all group self-start"
              >
                SEND A MESSAGE
                <span className="flex items-center justify-center w-7 h-7 border border-[#e05a2e] group-hover:bg-[#e05a2e] group-hover:text-white transition-colors">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
