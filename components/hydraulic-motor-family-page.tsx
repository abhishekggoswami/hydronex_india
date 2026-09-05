import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { LandingProductFooter } from "@/components/landing-product-chrome"
import Topography from "@/components/topography"

export function HydraulicMotorFamilyPage({ name, image }: { name: string; image: string }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white px-5 py-16 sm:px-9 sm:py-24 lg:px-14">
        <Topography className="pointer-events-none absolute inset-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} />
        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d7521c]"><span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />Hydraulic Motors</p>
            <h1 className="mt-5 max-w-[10ch] font-heading text-[clamp(3.25rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.075em] text-[#143126]">{name}</h1>
            <Link href="/products/hydraulic-motors" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#f26522] py-3 pl-6 pr-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(242,101,34,0.22)] transition-transform hover:-translate-y-0.5">
              All hydraulic motors
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#f26522]"><ArrowRight size={16} className="transition-transform duration-300 group-hover:-rotate-45" /></span>
            </Link>
          </div>
          <div className="group relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#293e57] shadow-[0_24px_60px_rgba(20,49,38,0.2)] sm:min-h-[430px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(255,255,255,0.23),transparent_34%)]" />
            <div className="absolute left-6 top-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">Hydronex / motors</div>
            <img src={image} alt={name} className="absolute left-1/2 top-1/2 h-[68%] w-[78%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_24px_22px_rgba(0,0,0,0.56)] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" />
          </div>
        </div>
      </section>
      <BSPCtaSection title="Let’s specify the right hydraulic motor." description={name} buttonLabel="Talk to our team" ctaHref="/contact" />
      <LandingProductFooter />
    </main>
  )
}
