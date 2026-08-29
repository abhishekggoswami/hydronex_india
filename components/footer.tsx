import { ArrowRight } from "lucide-react"

const mainMenu = [
  ["Home", "About Us", "Products", "Our Projects"],
  ["Careers", "Team", "Blog", "Contacts"],
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/*
              Light logo crop — same math as navbar dark crop.
              Source: ~530×530 square; logo at x:5–95%, y:37–63%
              Target height: 38px. Scale: 38/138 ≈ 0.275
              Rendered: 146×146px, marginTop: -54px, marginLeft: -7px
              Container width: ~131px
            */}
            <div className="overflow-hidden flex-shrink-0 mb-4" style={{ width: "131px", height: "38px" }}>
              <img
                src="/hydronex-logo-light.png"
                alt="Hydronex Logo"
                style={{
                  width:      "146px",
                  height:     "146px",
                  marginTop:  "-54px",
                  marginLeft: "-7px",
                  display:    "block",
                }}
              />
            </div>
            <p className="text-sm leading-relaxed">
              Leading manufacturer of hydraulic hoses, industrial hoses, fittings and fluid-power solutions. ISO 9001:2015 certified. Serving 80+ countries since 2001.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
            <p className="text-sm mb-4 leading-relaxed">Subscribe for product updates, industry news, and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-gray-500 outline-none border border-white/10 border-r-0"
              />
              <button className="bg-[#e05a2e] text-white px-3 py-2 hover:bg-[#c94d24] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Main Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-3 text-sm">Main Menu</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {mainMenu.flat().map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm hover:text-[#e05a2e] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>2024 <span className="text-[#e05a2e]">Hydronex</span>. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
