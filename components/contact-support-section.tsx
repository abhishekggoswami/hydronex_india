"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import Topography from "@/components/topography"

const supportPoints = [
  "Product selection for your application",
  "Technical guidance and compatibility checks",
  "Quotes for single items and bulk orders",
]

const fieldClass = "h-12 rounded-xl border border-white/80 bg-white/45 px-4 text-sm font-medium text-[#143126] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(20,49,38,0.04)] outline-none backdrop-blur-md transition-all duration-200 placeholder:text-[#143126]/38 hover:border-[#143126]/20 focus:-translate-y-px focus:border-[#f26522]/70 focus:bg-white/70 focus:ring-4 focus:ring-[#f26522]/10"

export function ContactSupportSection() {
  const [supportSent, setSupportSent] = useState(false)

  return (
    <section className="relative isolate overflow-hidden bg-[#fff8f3] px-5 py-20 sm:px-9 sm:py-28 lg:px-14">
      <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
        <div className="pt-2 lg:pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Contact / support request</p>
          <h2 className="mt-5 max-w-[11ch] text-[clamp(2.8rem,5vw,5.1rem)] font-semibold leading-[0.93] tracking-[-0.07em] text-[#143126]">Let&apos;s solve the connection.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#143126]/65">Share a few details about your requirement. Our team will help you identify the right hose, fitting or coupling for the job.</p>
          <div className="mt-8 grid gap-3">
            {supportPoints.map((point) => <div key={point} className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm font-semibold text-[#143126] shadow-[0_8px_20px_rgba(33,39,45,0.04)] backdrop-blur-md"><CheckCircle2 size={17} className="shrink-0 text-[#f26522]" />{point}</div>)}
          </div>
          <a href="tel:+919869809811" className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#143126] transition-colors hover:text-[#f26522]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b1f37] text-white"><Phone size={16} /></span>Prefer to talk? Call +91 9869809811</a>
        </div>

        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/58 p-6 shadow-[0_24px_60px_rgba(20,49,38,0.12)] backdrop-blur-2xl sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,255,255,0.18)_42%,rgba(242,101,34,0.1))]" aria-hidden="true" />
          <div className="relative"><div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Enquiry form</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#143126]">How can we help?</h3></div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b1f37] text-white"><ArrowRight size={18} /></span></div>
            <form className="mt-8 grid gap-4" onSubmit={(event) => { event.preventDefault(); setSupportSent(true) }}>
              <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#143126]/75">Name<input required name="name" autoComplete="name" className={fieldClass} placeholder="Your name" /></label><label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#143126]/75">Phone<input required name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Your phone number" /></label></div>
              <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#143126]/75">Email<input required name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@company.com" /></label>
              <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#143126]/75">Product or support requirement<input required name="requirement" type="text" className={fieldClass} placeholder="e.g. BSP fitting selection or a technical question" /></label>
              <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#143126]/75">Message<textarea required name="message" rows={4} className="resize-y rounded-xl border border-white/80 bg-white/45 px-4 py-3 text-sm font-medium text-[#143126] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_14px_rgba(20,49,38,0.04)] outline-none backdrop-blur-md transition-all duration-200 placeholder:text-[#143126]/38 hover:border-[#143126]/20 focus:-translate-y-px focus:border-[#f26522]/70 focus:bg-white/70 focus:ring-4 focus:ring-[#f26522]/10" placeholder="Share your application, fitting type or requirement." /></label>
              <button type="submit" className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f26522] px-6 text-sm font-bold text-white transition hover:bg-[#df571a]">{supportSent ? "Request received" : "Send support request"}<ArrowRight size={16} /></button>
              {supportSent && <p role="status" className="text-center text-sm font-medium text-[#276556]">Thank you. Our sales team will contact you shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
