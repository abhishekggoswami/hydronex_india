"use client"

import Link from "next/link"
import { useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Minus, Pause, Phone, Play, Plus } from "lucide-react"
import { LandingBrandLogo, LandingProductNavbar } from "@/components/landing-product-chrome"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductCard } from "@/components/bsp-product-card"
import Topography from "@/components/topography"
import { HomeHero } from "@/components/home-hero"

function RollingCta({
  href,
  label,
  tone = "dark",
}: {
  href: string
  label: string
  tone?: "dark" | "orange"
}) {
  const isOrange = tone === "orange"

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-[13px] font-semibold transition-colors duration-300 ${
        isOrange
          ? "bg-[#f26522] text-white hover:bg-[#df571a]"
          : "bg-[#161616] text-white hover:bg-[#303030]"
      }`}
    >
      <span className="h-5 overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-5 leading-5">{label}</span>
          <span className="h-5 leading-5">{label}</span>
        </span>
      </span>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full ${
          isOrange ? "bg-white text-[#f26522]" : "bg-white text-[#171717]"
        }`}
      >
        <ArrowRight
          size={14}
          className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45"
        />
      </span>
    </Link>
  )
}

function TypewriterHeading({ text, light = false }: { text: string; light?: boolean }) {
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    setVisibleLength(0)
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setVisibleLength(index)
      if (index >= text.length) window.clearInterval(timer)
    }, 24)

    return () => window.clearInterval(timer)
  }, [text])

  return (
    <h1
      aria-label={text}
      className={`max-w-5xl text-[clamp(3.4rem,8.15vw,8rem)] font-semibold leading-[0.88] tracking-[-0.085em] ${light ? "text-white" : "text-[#161616]"}`}
    >
      <span aria-hidden="true">{text.slice(0, visibleLength)}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[0.78em] w-[0.08em] animate-pulse bg-[#f26522] align-[-0.06em]" />
    </h1>
  )
}

const applications = [
  { title: "Mining & drilling", detail: "Abrasion-resistant hose and fitting solutions for dependable fluid transfer in demanding extraction environments.", video: "/videos/applications/mining-drilling.mp4" },
  { title: "Pressure washing", detail: "High-pressure assemblies built to support precise, durable cleaning performance on intensive wash-down work.", video: "/videos/applications/pressure-washer.mp4" },
  { title: "Transportation", detail: "Reliable hose routing and secure connections designed to keep mobile equipment and transport systems moving.", video: "/videos/applications/transportation.mp4" },
  { title: "Water blasting", detail: "Robust high-pressure hose solutions for controlled, efficient water-blasting applications and surface preparation.", video: "/videos/applications/water-blast.mp4" },
  { title: "Construction", detail: "Pressure-ready hydraulic components that support tough site conditions, machinery uptime and day-to-day productivity.", video: "/videos/applications/construction.mp4" },
  { title: "Dock operations", detail: "Durable fluid-transfer assemblies for dockside equipment, loading operations and exposed industrial environments.", video: "/videos/applications/dock.mp4" },
  { title: "Layflat systems", detail: "Flexible layflat hose solutions engineered for fast deployment and efficient high-volume water movement.", video: "/videos/applications/layflat.mp4" },
  { title: "Material handling", detail: "Purpose-built hose and fittings that help safely move abrasive, bulk and process materials through industrial systems.", video: "/videos/applications/material-handling.mp4" },
  { title: "Agriculture", detail: "Dependable hydraulic and fluid-transfer connections that support equipment performance across agricultural operations.", video: "/videos/applications/agriculture.mp4" },
]

function SectionBackdrop({ dark = false, interactive = false, opacity }: { dark?: boolean; interactive?: boolean; opacity?: number }) {
  return (
    <Topography
      className="pointer-events-none !absolute inset-0"
      lowColor={dark ? "#5e8397" : "#9eb8c3"}
      midColor="#f26522"
      highColor={dark ? "#d9e8ee" : "#ffffff"}
      speed={interactive ? 0.18 : 0}
      morphAmount={1.7}
      bands={2.65}
      thickness={0.018}
      glow={0.22}
      opacity={opacity ?? (dark ? 0.14 : interactive ? 0.12 : 0.22)}
      mouseRadius={interactive ? 0.24 : 0}
      mouseStrength={interactive ? 0.34 : 0}
    />
  )
}

function ApplicationsCarousel() {
  const [activeApplication, setActiveApplication] = useState(0)
  const [isAutoplaying, setIsAutoplaying] = useState(true)
  const goToApplication = (direction: number) => {
    setActiveApplication((current) => (current + direction + applications.length) % applications.length)
  }

  useEffect(() => {
    if (!isAutoplaying) return
    const timer = window.setInterval(() => {
      setActiveApplication((current) => (current + 1) % applications.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [isAutoplaying])
  const getSlideOffset = (index: number) => {
    const distance = index - activeApplication
    if (distance > applications.length / 2) return distance - applications.length
    if (distance < -applications.length / 2) return distance + applications.length
    return distance
  }

  return (
    <div className="relative">
      <div className="relative h-[500px] overflow-visible sm:h-[560px]">
        <div className="absolute inset-y-0 left-1/2 w-[92%] max-w-[1120px] -translate-x-1/2 sm:w-[78%]">
          {applications.map((application, index) => {
            const offset = getSlideOffset(index)
            const isActive = offset === 0
            const visible = Math.abs(offset) <= 1

            return (
              <motion.article
                key={application.title}
                initial={false}
                animate={{
                  x: `${offset * 88}%`,
                  scale: isActive ? 1 : Math.abs(offset) === 1 ? 0.84 : 0.7,
                  opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.9 : 0,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.8 }}
                style={{ zIndex: 10 - Math.abs(offset) }}
                aria-hidden={!isActive}
                className={`absolute inset-0 overflow-hidden rounded-[1.75rem] bg-[#0b1f37] shadow-[0_24px_55px_rgba(6,22,42,0.2)] transition-shadow duration-300 ${visible ? "pointer-events-auto" : "pointer-events-none"} ${isActive ? "" : "cursor-pointer"}`}
                onClick={() => !isActive && setActiveApplication(index)}
              >
                <video key={`${application.video}-${isActive}-${visible}`} autoPlay={visible} muted loop playsInline preload={visible ? "auto" : "none"} className="absolute inset-0 h-full w-full object-cover" aria-label={`${application.title} application video`}>
                  <source src={application.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#071426]/54 to-[#071426]/20" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#071426]/90 via-transparent to-transparent" />
                <div className="relative flex min-h-[500px] max-w-2xl flex-col justify-end p-7 text-white sm:min-h-[560px] sm:p-10">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9b6d]">Application {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="max-w-xl text-[clamp(2.1rem,3.6vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.06em]">{application.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base">{application.detail}</p>
                  <Link href="/products" className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold">Explore suitable products <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" /></Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
      <div className="relative z-20 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:px-[11%]">
        <div className="hidden items-center gap-1.5 sm:flex">
          {applications.map((item, index) => (
            <button key={item.title} type="button" aria-label={`Show ${item.title} application`} aria-current={index === activeApplication ? "true" : undefined} onClick={() => setActiveApplication(index)} className={`h-1.5 rounded-full transition-all duration-300 ${index === activeApplication ? "w-7 bg-[#f26522]" : "w-1.5 bg-white/45 hover:bg-white"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 self-end rounded-full border border-[#0b1f37]/10 bg-white/90 p-1.5 shadow-[0_10px_24px_rgba(3,12,27,0.1)] backdrop-blur-md sm:self-auto">
          <span className="px-2 text-[11px] font-bold tabular-nums text-[#0b1f37]/70">{String(activeApplication + 1).padStart(2, "0")} / {String(applications.length).padStart(2, "0")}</span>
          <button type="button" aria-label="Previous application" onClick={() => goToApplication(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f37]/10 text-[#0b1f37] transition-colors hover:bg-[#0b1f37] hover:text-white"><ArrowRight size={16} className="rotate-180" /></button>
          <button type="button" aria-label={isAutoplaying ? "Pause autoplay" : "Start autoplay"} aria-pressed={isAutoplaying} onClick={() => setIsAutoplaying((current) => !current)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f37]/10 text-[#0b1f37] transition-colors hover:bg-[#0b1f37] hover:text-white">{isAutoplaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}</button>
          <button type="button" aria-label="Next application" onClick={() => goToApplication(1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f26522] text-white transition-colors hover:bg-[#ff7a3d]"><ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  )
}

function ProductCard({
  title,
  description,
  href,
  image,
  label,
}: {
  title: string
  description: string
  href: string
  image: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[1.2/1] overflow-hidden rounded-[1.5rem] bg-[#171717]"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
      <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
        {label}
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
        <div className="max-w-sm">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-5 text-white/75">{description}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-[width,background-color] duration-500 group-hover:w-32 group-hover:bg-[#f26522] group-hover:text-white">
          <ArrowRight className="shrink-0 transition-transform duration-500 group-hover:-rotate-45" size={17} />
          <span className="w-0 overflow-hidden whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.1em] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-16 group-hover:opacity-100">
            Explore
          </span>
        </span>
      </div>
    </Link>
  )
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const frequentlyAsked = [
  {
    question: "How do I select the right hose for my application?",
    answer: "Share the fluid, pressure, temperature, routing and operating environment with our team. We will help match the hose construction, fitting and safety requirements to the system.",
  },
  {
    question: "Can Hydronex support custom hose assemblies?",
    answer: "Yes. We support product selection and assembly requirements across hose, fittings, quick couplings and related hydraulic accessories.",
  },
  {
    question: "Which connection standards are available?",
    answer: "Our fittings range covers common hydraulic connection standards including BSP, NPT, JIC, JIS, ORFS and metric systems.",
  },
  {
    question: "Can I get technical information before ordering?",
    answer: "Yes. Product pages include specifications and dimensions, and our specialists can help clarify compatibility for the intended hydraulic system.",
  },
]

function HomeFaq() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  return (
    <section className="bg-anim-cta-gradient px-5 py-20 text-white sm:px-9 sm:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <ScrollReveal>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">04 / technical guidance</p>
          <h2 className="mt-5 max-w-md text-[clamp(2.8rem,4.6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">Frequently asked questions.</h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-white/60">Clear product guidance for specifying reliable hydraulic components.</p>
        </ScrollReveal>
        <div className="border-t border-white/15">
          {frequentlyAsked.map((item, index) => {
            const isOpen = openItem === index
            return (
              <ScrollReveal key={item.question} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 border-b border-white/15 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium tracking-[-0.03em] sm:text-xl">{item.question}</span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">{isOpen ? <Minus size={15} /> : <Plus size={15} />}</span>
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.32, ease: "easeOut" }} className="overflow-hidden">
                  <p className="max-w-2xl pb-6 pr-12 text-sm leading-6 text-white/60 sm:text-base">{item.answer}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [supportSent, setSupportSent] = useState(false)

  return (
    <main
      className="overflow-hidden bg-[#efefef] text-[#171717]"
      style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}
    >
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)",
          }}
        >
          <SectionBackdrop interactive opacity={0.1} />
        </div>

      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent pb-2 sm:pb-3">
        <LandingProductNavbar />
        <HomeHero />
      </section>

      <section id="company" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-transparent px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-36">
        <div className="relative mx-auto max-w-[1280px]">
          <ScrollReveal className="mx-auto max-w-[1200px] text-center">
            <p className="inline-flex rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">01 / dependable fluid power</p>
            <h2 className="mt-7 text-[clamp(2.9rem,4.7vw,5.2rem)] font-semibold leading-[0.93] tracking-[-0.07em]"><span className="block">Built for the next generation</span><span className="block">of hydraulic performance.</span></h2>
            <p className="mt-6 text-base leading-7 text-black/60 sm:text-lg">From product selection to reliable hydraulic connections, Hydronex helps teams specify systems with confidence.</p>
          </ScrollReveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-[1.24fr_0.76fr]">
            <ScrollReveal className="group relative min-h-[350px] overflow-hidden rounded-[1.5rem] bg-[#dbeaf3]" delay={0.06}>
              <img src="/images/factory-bg.jpg" alt="Hydronex hydraulic manufacturing" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a32]/85 via-[#071a32]/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Hydraulic systems</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">Engineered for demanding work.</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">Hoses, fittings and accessories designed to support dependable pressure control and fluid transfer.</p>
                <Link href="/products" className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold">Explore products <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" /></Link>
              </div>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ScrollReveal className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem] bg-[#0b1f37] p-6" delay={0.14}>
                <img src="/images/home/hose-range.jpg" alt="Hydraulic hose range" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/35 to-[#071426]/10" />
                <div className="absolute inset-x-6 bottom-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8b57]">Hose range</p><h3 className="mt-2 max-w-[13rem] text-2xl font-semibold leading-7 tracking-[-0.05em]">Pressure built into every layer.</h3></div>
              </ScrollReveal>
              <ScrollReveal className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem] bg-[#0b1f37] p-6" delay={0.22}>
                <img src="/images/home/fittings-range.webp" alt="Hydraulic fittings range" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/35 to-[#071426]/10" />
                <div className="absolute inset-x-6 bottom-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8b57]">Fittings range</p><h3 className="mt-2 max-w-[13rem] text-2xl font-semibold leading-7 tracking-[-0.05em]">Precision at every connection.</h3></div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      </div>

      <section id="industries" className="bsp-features-gradient relative overflow-hidden px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-36">
        <div className="relative mx-auto max-w-[1280px]">
          <ScrollReveal className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff9b6d]">02 / the Hydronex advantage</p><h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5vw,5.35rem)] font-semibold leading-[0.93] tracking-[-0.07em] text-white">Solutions that keep systems moving.</h2></div>
            <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#ff9b6d]">View all product categories <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </ScrollReveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { id: 4, name: "BSP Male 60° Cone Seat Seal (12611)", code: "HYD-BSP-12611", image: "/images/hydraulic-fittings/bsp-male-60-cone-seat-seal-12611.png", slug: "bsp-male-60-cone-seat-seal-12611" },
              { id: 5, name: "BSP Female 60° Cone Seal (22611)", code: "HYD-BSP-22611", image: "/images/hydraulic-fittings/bsp-female-60-cone-seal-22611.png", slug: "bsp-female-60-cone-seal-22611" },
              { id: 8, name: "90° BSP Female 60° Cone Seal (22691)", code: "HYD-BSP-22691", image: "/images/hydraulic-fittings/90-bsp-female-60-cone-seal-22691.png", slug: "90-bsp-female-60-cone-seal-22691" },
            ].map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 0.1}>
                <BSPProductCard product={product} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[100svh] overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14">
        <SectionBackdrop interactive opacity={0.05} />
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-center">
          <ScrollReveal className="mb-10 max-w-3xl sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">03 / applications</p>
            <h2 className="mt-4 text-[clamp(2.7rem,4.8vw,5rem)] font-semibold leading-[0.93] tracking-[-0.07em]">Hydraulic performance wherever work takes you.</h2>
          </ScrollReveal>
          <ScrollReveal><ApplicationsCarousel /></ScrollReveal>
        </div>
      </section>

      <HomeFaq />

      <section id="support" className="relative isolate overflow-hidden bg-[#fff8f3] px-5 py-20 sm:px-9 sm:py-28 lg:px-14">
        <SectionBackdrop interactive opacity={0.075} />
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <ScrollReveal className="mx-auto max-w-2xl text-center"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">05 / get expert support</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.93] tracking-[-0.07em]">Bring clarity to your next hydraulic project.</h2><p className="mt-5 text-base leading-7 text-black/60">Tell us about your requirement and our team will help you choose the right fitting, hose or coupling.</p></ScrollReveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <ScrollReveal className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_44px_rgba(33,39,45,0.08)] backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Support request</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">How can we help?</h3></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1f37] text-white"><Phone size={16} /></span></div>
              <form className="mt-8 grid gap-4" onSubmit={(event) => { event.preventDefault(); setSupportSent(true) }}>
                <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Name<input required name="name" autoComplete="name" className="h-12 rounded-lg border border-[#0b1f37]/15 bg-white/75 px-4 text-sm font-normal outline-none transition focus:border-[#f26522] focus:ring-4 focus:ring-[#f26522]/10" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-semibold">Phone<input required name="phone" type="tel" autoComplete="tel" className="h-12 rounded-lg border border-[#0b1f37]/15 bg-white/75 px-4 text-sm font-normal outline-none transition focus:border-[#f26522] focus:ring-4 focus:ring-[#f26522]/10" placeholder="Your phone number" /></label></div>
                <label className="grid gap-2 text-sm font-semibold">Email<input required name="email" type="email" autoComplete="email" className="h-12 rounded-lg border border-[#0b1f37]/15 bg-white/75 px-4 text-sm font-normal outline-none transition focus:border-[#f26522] focus:ring-4 focus:ring-[#f26522]/10" placeholder="you@company.com" /></label>
                <label className="grid gap-2 text-sm font-semibold">What do you need?<select name="topic" defaultValue="" className="h-12 rounded-lg border border-[#0b1f37]/15 bg-white/75 px-4 text-sm font-normal outline-none transition focus:border-[#f26522] focus:ring-4 focus:ring-[#f26522]/10"><option value="" disabled>Select a topic</option><option>Product selection</option><option>Technical support</option><option>Quote or bulk order</option><option>Other enquiry</option></select></label>
                <label className="grid gap-2 text-sm font-semibold">Message<textarea required name="message" rows={4} className="resize-y rounded-lg border border-[#0b1f37]/15 bg-white/75 px-4 py-3 text-sm font-normal outline-none transition focus:border-[#f26522] focus:ring-4 focus:ring-[#f26522]/10" placeholder="Share your application, fitting type or requirement." /></label>
                <button type="submit" className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f26522] px-6 text-sm font-bold text-white transition hover:bg-[#df571a]">{supportSent ? "Request received" : "Send support request"}<ArrowRight size={16} /></button>
                {supportSent && <p role="status" className="text-center text-sm font-medium text-[#276556]">Thank you. Our sales team will contact you shortly.</p>}
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-[0_18px_44px_rgba(33,39,45,0.08)] backdrop-blur-xl">
              <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8"><a href="tel:+919869809811" className="group rounded-xl bg-[#0b1f37] p-5 text-white transition-transform hover:-translate-y-1"><Phone size={19} className="text-[#ff9b6d]" /><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff9b6d]">Phone</p><p className="mt-2 text-lg font-semibold">+91 9869809811</p><p className="mt-2 text-sm leading-5 text-white/65">Direct contact with our sales team</p></a><div className="rounded-xl border border-[#0b1f37]/10 bg-[#f8faf8] p-5"><MapPin size={19} className="text-[#f26522]" /><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7521c]">Location</p><p className="mt-2 text-lg font-semibold leading-snug">Uran Karanja Road</p><p className="mt-2 text-sm leading-5 text-black/60">Tal Uran, Dist Raigad 400702</p></div></div>
              <div className="mx-6 mb-6 overflow-hidden rounded-xl border border-[#0b1f37]/10 sm:mx-8 sm:mb-8"><iframe title="Hydronex office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.731401145381!2d72.9470456!3d18.8546071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d978bb9deae3%3A0xb50d93d069df69e0!2sOm%20Sai%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1787789310196!5m2!1sen!2sin" className="h-[340px] w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BSPCtaSection />

      <footer id="contact" className="bg-[#151515] px-5 pb-7 pt-16 text-white sm:px-9 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.15fr_0.7fr_0.7fr_1fr]">
          <div>
            <LandingBrandLogo light />
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              Hydraulic hoses, fittings and accessories for dependable fluid-power systems.
            </p>
            <div className="mt-7">
              <RollingCta href="/contact" label="Request a quote" tone="orange" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Products</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/products/hydraulic-hoses" className="hover:text-white">Hydraulic Hoses</Link>
              <Link href="/products/hydraulic-fittings/british-bsp" className="hover:text-white">Hydraulic Fittings</Link>
              <Link href="/products/hydraulic-quick-couplings/iso-a-couplers" className="hover:text-white">Quick Couplings</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Company</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/about" className="hover:text-white">About Hydronex</Link>
              <Link href="/blog" className="hover:text-white">Insights</Link>
              <Link href="/contact" className="hover:text-white">Contact us</Link>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Get in touch</p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-white/70">
              <a href="tel:+180098745698" className="flex items-center gap-2 hover:text-white"><Phone size={15} /> +1 (800) 987 456 98</a>
              <a href="mailto:info@hydronex.com" className="flex items-center gap-2 hover:text-white"><Mail size={15} /> info@hydronex.com</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Hydronex. All rights reserved.</span>
          <span>Engineered for dependable connections.</span>
        </div>
      </footer>
    </main>
  )
}
