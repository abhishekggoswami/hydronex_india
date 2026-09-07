"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const homeHeroVideos = [
  "/videos/home-hero-1.mp4",
  "/videos/home-hero-2.mp4",
  "/videos/home-hero-3.mp4",
]

function HeroVideo() {
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <video
      key={homeHeroVideos[activeVideo]}
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={() => setActiveVideo((index) => (index + 1) % homeHeroVideos.length)}
      className="home-hero-video"
      aria-hidden="true"
    >
      <source src={homeHeroVideos[activeVideo]} type="video/mp4" />
    </video>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="home-hero-stat">
      <p>{value}</p>
      <span>{label}</span>
    </div>
  )
}

function HydronexTab() {
  return (
    <div className="home-hero-tab" aria-label="Hydronex solutions">
      <span>Hydronex solutions</span>
    </div>
  )
}

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero-main">
        <h1 id="home-hero-heading" className="home-hero-heading">
          Built to move power
        </h1>

        <div className="home-hero-media">
          <HeroVideo />
          <div className="home-hero-media-shade" />
        </div>

        <div className="home-hero-info">
          <HydronexTab />
          <div className="home-hero-panel">
            <p className="home-hero-description">Dependable fluid-power products for every connection.</p>
            <div className="home-hero-stats" aria-label="Hydronex capabilities">
              <StatItem value="50+" label="product categories" />
              <StatItem value="24/7" label="technical support" />
              <StatItem value="ISO" label="quality focused" />
            </div>
            <Link href="/products" className="home-hero-liked">
              <span>Liked products</span>
              <span className="home-hero-liked-icon"><ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
