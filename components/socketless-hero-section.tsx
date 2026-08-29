export function SocketlessHeroSection() {
  return (
    <section
      className="bg-anim-section-dots border-b border-[#d0e4f5]/40"
      style={{ background: "linear-gradient(180deg, #deeefa 0%, #eaf4fc 18%, #f4faff 45%, #fafcff 72%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow label */}
            <p className="text-[#e05a2e] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 font-sans">
              Hydraulic Fittings &nbsp;/&nbsp; Socketless
            </p>

            {/* Main heading */}
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#0f2040] leading-tight mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Socketless Fittings
              <span className="block text-[#1a5fa8] text-2xl sm:text-3xl font-semibold mt-2" style={{ letterSpacing: "-0.01em" }}>
                Reliable Hydraulic Connections
              </span>
            </h1>

            {/* Accent rule */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
              <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-[#2a4a70]/80 leading-relaxed max-w-2xl mb-8 text-sm sm:text-base">
              Hydronex offers a comprehensive range of socketless fittings designed for reliable hydraulic connections. Our socketless fittings feature 60° and 74° cone seats and are available in BSP, JIC, NPT, and SAE standards for maximum compatibility and performance.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <span className="text-[#e05a2e] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-[#2a4a70] text-sm sm:text-base">Multiple thread standards (BSP, JIC, NPT, SAE)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e05a2e] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-[#2a4a70] text-sm sm:text-base">60° and 74° cone seat options</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e05a2e] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-[#2a4a70] text-sm sm:text-base">High-pressure rated connections</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e05a2e] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-[#2a4a70] text-sm sm:text-base">Excellent sealing characteristics</span>
              </div>
            </div>
          </div>

          {/* Right: Visual accent */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e05a2e]/5 to-[#1a5fa8]/5 rounded-2xl border border-[#d0e4f5]/40" />
            <div className="relative z-10">
              <svg className="w-64 h-64 opacity-40" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#e05a2e", stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: "#1a5fa8", stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="80" fill="none" stroke="url(#gradient1)" strokeWidth="2" />
                <rect x="80" y="80" width="140" height="140" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6" />
                <circle cx="150" cy="150" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
