"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type CategoryLandingHeroProps = { category: string; title: string; description: string; ctaHref: string; palette?: string }

function useTypewriter(text: string, speed = 55, startDelay = 0) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed(""); setDone(false)
    let index = 0
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        index += 1; setDisplayed(text.slice(0, index))
        if (index >= text.length) { clearInterval(timer); setDone(true) }
      }, speed)
      return () => clearInterval(timer)
    }, startDelay)
    return () => clearTimeout(delay)
  }, [text, speed, startDelay])
  return { displayed, done }
}

function Cursor({ visible }: { visible: boolean }) {
  const [on, setOn] = useState(true)
  useEffect(() => { if (!visible) return; const timer = setInterval(() => setOn((value) => !value), 530); return () => clearInterval(timer) }, [visible])
  return <span aria-hidden style={{ display: "inline-block", width: "2px", height: "0.85em", background: "currentColor", marginLeft: "2px", verticalAlign: "middle", opacity: on ? 1 : 0, transition: "opacity .1s" }} />
}

/** Uses the same staged typewriter and word-reveal sequence as the BSP hero. */
export function CategoryLandingHero({ category, title, description, ctaHref, palette = "#15324d" }: CategoryLandingHeroProps) {
  const eyebrow = useTypewriter(category, 48, 200)
  const button = useTypewriter("GET A QUOTE", 70, 1400)
  const words = title.split(" ")
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    let current = 0
    const timer = setInterval(() => { current += 1; setPhase(current); if (current >= words.length) clearInterval(timer) }, 120)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>
      <Image src="/images/bsp-hero-bg.jpg" alt="" aria-hidden fill priority className="object-cover object-center" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, rgba(4,10,22,.92) 0%, ${palette}d1 35%, rgba(8,18,38,.50) 58%, rgba(4,10,22,.25) 100%)` }} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, rgba(4,10,22,.55))" }} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-4 min-h-[1.4em] font-mono text-[11px] font-bold uppercase tracking-[.22em] text-[#e05a2e]">
            {eyebrow.displayed}<Cursor visible={!eyebrow.done} />
          </p>
          <h1 className="mb-4 font-extrabold leading-tight text-white" style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", letterSpacing: "-.025em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>
            {words.map((word, index) => <span key={`${word}-${index}`} style={{ display: "inline-block", marginRight: ".22em", opacity: phase > index ? 1 : 0, transform: phase > index ? "translateY(0)" : "translateY(10px)", transition: "opacity .35s ease, transform .35s ease" }}>{word}</span>)}
          </h1>
          <h2 className="mb-4 font-semibold text-[#f0a060]" style={{ fontSize: "1.05rem", letterSpacing: ".01em" }}>{category}</h2>
          <p className="mb-8 max-w-md text-[.94rem] leading-relaxed text-[#dce8f8]">{description}</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/#contact" className="inline-flex min-w-[160px] items-center gap-2 rounded-[3px] bg-[#e05a2e] px-7 py-3 text-sm font-bold tracking-[.1em] text-white transition-all duration-200 hover:shadow-[0_6px_24px_rgba(224,90,46,.55)] active:scale-[.98]">
              <span className="font-mono text-sm">{button.displayed}<Cursor visible={!button.done} /></span>{button.done && <ChevronRight size={14} strokeWidth={2.5} />}
            </Link>
            <Link href={ctaHref} className="flex items-center gap-1.5 text-sm font-medium text-[#c8daf0]/75 transition-colors duration-150 hover:text-white">View products <ChevronRight size={14} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
