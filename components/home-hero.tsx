"use client"

import { useState } from "react"
import StrokeText from "@/components/StrokeText"

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
      <svg viewBox="0 0 230 62" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 62V16Q0 0 16 0H166C178 0 187 4 196 13C204 24 213 60 230 60V62Z" fill="#fff" stroke="none" />
      </svg>
      <span>Hydronex solutions</span>
    </div>
  )
}

export function HomeHero() {
  return (
    <div className="home-hero">
      <div className="home-hero-main">
        <div className="home-hero-heading" aria-label="Built to move power">
          <StrokeText
            text="BUILT TO MOVE POWER"
            strokeColor="#f26522"
            fillColor="#143126"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={112}
            fontWeight={800}
            letterSpacing={-7}
            className="font-heading"
            style={{ fontFamily: "var(--font-heading)", lineHeight: 0.9 }}
          />
        </div>

        <div className="home-hero-visual-card">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
