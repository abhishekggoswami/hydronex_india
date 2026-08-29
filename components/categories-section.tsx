import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    num: "01",
    title: "Hydraulic Hoses",
    href: "#hydraulic",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80",
  },
  {
    num: "02",
    title: "Industrial Hoses",
    href: "#industrial",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    num: "03",
    title: "Fittings & Adapters",
    href: "#fittings",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    num: "04",
    title: "PVC & Specialty Hoses",
    href: "#pvc",
    img: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=600&q=80",
  },
]

export default function CategoriesSection() {
  return (
    <section className="bg-white py-16" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-[#e05a2e] text-sm font-semibold mb-2">. Category</p>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-10 text-balance"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Huge selection of hose solutions<br className="hidden md:block" /> on our website
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.num}
              href={cat.href}
              className="group relative overflow-hidden block aspect-[3/4]"
            >
              {/* BG image */}
              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              {/* Number overlay */}
              <span
                className="absolute top-4 left-4 text-7xl font-extrabold text-white/20 leading-none select-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {cat.num}
              </span>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#141414]/90 px-5 py-4 flex items-center justify-between group-hover:bg-[#e05a2e] transition-colors duration-300">
                <span className="text-white font-semibold text-sm leading-tight">{cat.title}</span>
                <ArrowUpRight size={18} className="text-white shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
