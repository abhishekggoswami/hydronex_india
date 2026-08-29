import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "80+", label: "Countries Served" },
  { value: "200+", label: "Global Clients" },
  { value: "10M+", label: "Fittings in Stock" },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "SAE & EN standard specifications",
  "GOST Certified products",
  "MSHA, SGS, CE & FDA Approved",
]

export default function AboutSection() {
  return (
    <section className="bg-[#f7f7f7] py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + stats */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80"
              alt="Hydronex factory"
              className="w-full object-cover aspect-[4/3]"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-4 bg-[#e05a2e] text-white p-6 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-2xl font-extrabold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-white/80 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-[#e05a2e] text-sm font-semibold mb-2">. About Hydronex</p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-5 leading-tight text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              One-Stop Hoses and Fittings Solutions
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Hydronex produces not only hydraulic hoses and fittings but also industrial hoses, PVC hoses, pneumatic hoses, automotive hoses, silicone hoses, hose protective sleeves, and more.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              No matter what type of hose and hose fittings you need, we have suitable solutions for you. Our flexible manufacturing capabilities give you a variety of options to ensure you get the best hose and fittings for your OEM hydraulic equipment and business.
            </p>

            {/* Certifications */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={15} className="text-[#e05a2e] shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-0">
              <a
                href="#contact"
                className="bg-transparent border border-[#141414] text-[#141414] font-semibold px-7 py-3.5 text-sm hover:bg-[#141414] hover:text-white transition-colors"
              >
                Get a Quick Quote
              </a>
              <a
                href="#contact"
                className="bg-[#e05a2e] text-white p-3.5 hover:bg-[#c94d24] transition-colors"
                aria-label="Contact us"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="mt-10 lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#e05a2e] text-white p-4 text-center">
              <div className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.value}
              </div>
              <div className="text-xs text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
