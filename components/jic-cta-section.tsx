"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function JICCtaSection() {
  return (
    <section
      className="border-t"
      style={{ background: "linear-gradient(135deg, #0f2040 0%, #1a3a5f 50%, #0f2040 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#e05a2e" }}>
            Ready to Get Started?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Connect with Our JIC Experts
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(200,220,250,0.85)" }}
          >
            Hydronex specializes in high-quality JIC hydraulic fittings for North American applications. Contact us today for quotes, technical support, or bulk orders.
          </p>
        </div>

        {/* ── Three-column CTA grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <Link
            href="tel:+1-555-0123"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e05a2e]/50
              rounded-sm p-6 transition-all duration-300 text-center"
          >
            <div className="mb-3 inline-flex p-3 rounded-full" style={{ background: "rgba(224,90,46,0.15)" }}>
              <Phone size={24} className="text-[#e05a2e]" />
            </div>
            <h3 className="font-bold text-white mb-1">Call Us</h3>
            <p className="text-sm text-[#8ab5d9]">+1 (555) 012-3456</p>
          </Link>

          {/* Email */}
          <Link
            href="mailto:sales@hydronex.com"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e05a2e]/50
              rounded-sm p-6 transition-all duration-300 text-center"
          >
            <div className="mb-3 inline-flex p-3 rounded-full" style={{ background: "rgba(224,90,46,0.15)" }}>
              <Mail size={24} className="text-[#e05a2e]" />
            </div>
            <h3 className="font-bold text-white mb-1">Email</h3>
            <p className="text-sm text-[#8ab5d9]">sales@hydronex.com</p>
          </Link>

          {/* Location */}
          <Link
            href="#"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e05a2e]/50
              rounded-sm p-6 transition-all duration-300 text-center"
          >
            <div className="mb-3 inline-flex p-3 rounded-full" style={{ background: "rgba(224,90,46,0.15)" }}>
              <MapPin size={24} className="text-[#e05a2e]" />
            </div>
            <h3 className="font-bold text-white mb-1">Visit Us</h3>
            <p className="text-sm text-[#8ab5d9]">1234 Industrial Ave, City, ST</p>
          </Link>
        </div>

        {/* ── Main CTA button ────────────────────────────────────────────── */}
        <div className="text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 font-bold px-9 py-4 text-base
              transition-all duration-200 hover:shadow-[0_8px_32px_rgba(224,90,46,0.40)]
              active:scale-[0.98] rounded-sm"
            style={{
              background: "#e05a2e",
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            GET YOUR QUOTE TODAY
          </Link>
        </div>
      </div>
    </section>
  )
}
