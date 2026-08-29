import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Hydraulic Quick Couplings - ISO 7241, ISO 5675, High-Pressure - Hydronex",
  description:
    "Explore our comprehensive range of hydraulic quick couplings including ISO 7241-A, ISO 5675 Agricultural, Pioneer 4000 Series, and high-pressure quick couplers for all your hydraulic connection needs.",
}

export default function HydraulicQuickCouplingsPage() {
  const couplingTypes = [
    {
      name: "ISO-A Couplers",
      slug: "iso-a-couplers",
      description: "Standard ISO 7241-A hydraulic quick-connect couplings for reliable, leak-free connections in diverse industrial applications",
      href: "/products/hydraulic-quick-couplings/iso-a-couplers",
      features: ["ISO 7241-A Standard", "Flat-Face Design", "Zero Spillage", "Poppet Valve Technology"],
    },
    {
      name: "ISO-B Couplers",
      slug: "iso-b-couplers",
      description: "ISO 7241-B series quick couplings providing superior performance for medium to high-pressure hydraulic systems",
      href: "/products/hydraulic-quick-couplings/iso-b-couplers",
      features: ["ISO 7241-B Standard", "High Performance", "Medium-High Pressure", "Durable Design"],
    },
    {
      name: "Push And Pull Coupler",
      slug: "push-and-pull-coupler",
      description: "Ergonomic push and pull type quick couplings designed for easy and safe connection and disconnection operations",
      href: "/products/hydraulic-quick-couplings/push-and-pull-coupler",
      features: ["Push-Pull Operation", "Ergonomic Design", "Easy Engagement", "Safety Features"],
    },
    {
      name: "Quick-Release Couplers",
      slug: "quick-release-couplers",
      description: "Fast-connect quick-release couplers for rapid connection and disconnection with minimal fluid loss",
      href: "/products/hydraulic-quick-couplings/quick-release-couplers",
      features: ["Quick Connect", "Minimal Spillage", "Rapid Operation", "Field-Tested"],
    },
    {
      name: "High-Pressure Couplers",
      slug: "high-pressure-couplers",
      description: "Heavy-duty high-pressure quick couplings engineered for extreme pressure applications and demanding industrial environments",
      href: "/products/hydraulic-quick-couplings/high-pressure-couplers",
      features: ["10,000 PSI Rated", "Extreme Pressure", "Heavy-Duty Construction", "Industrial Grade"],
    },
    {
      name: "Flat-Face Couplers",
      slug: "flat-face-couplers",
      description: "Specialized flat-face design couplings that prevent spillage and contamination in hydraulic systems",
      href: "/products/hydraulic-quick-couplings/flat-face-couplers",
      features: ["Flat-Face Design", "Zero Spillage", "Contamination Prevention", "Clean Operation"],
    },
    {
      name: "Threaded Couplers",
      slug: "threaded-couplers",
      description: "Thread-locked quick couplings providing secure and vibration-resistant connections for demanding applications",
      href: "/products/hydraulic-quick-couplings/threaded-couplers",
      features: ["Thread Locked", "Vibration Resistant", "Secure Connection", "Industrial Applications"],
    },
    {
      name: "Straight Through Couplings",
      slug: "straight-through-couplings",
      description: "Straight-through flow quick couplings for uninterrupted hydraulic system performance and low pressure applications",
      href: "/products/hydraulic-quick-couplings/straight-through-couplings",
      features: ["Straight Flow Path", "Low Pressure", "Continuous Operation", "Simple Design"],
    },
    {
      name: "Brass Mold Coolant-Line Quick Couplers",
      slug: "brass-mold-coolant-line",
      description: "Specialized brass quick couplers designed for mold cooling applications with excellent corrosion resistance",
      href: "/products/hydraulic-quick-couplings/brass-mold-coolant-line",
      features: ["Brass Construction", "Coolant-Line Compatible", "Corrosion Resistant", "Mold Applications"],
    },
    {
      name: "Dust Plug",
      slug: "dust-plug",
      description: "Protective dust plugs for quick coupling ports preventing contamination and maintaining system cleanliness",
      href: "/products/hydraulic-quick-couplings/dust-plug",
      features: ["Protective Cover", "Contamination Prevention", "Port Protection", "Easy Application"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#e05a2e] transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href="/products" className="hover:text-[#e05a2e] transition-colors">
              Products
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">Hydraulic Quick Couplings</span>
          </div>
        </div>
      </nav>

      {/* Header and Introduction Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Hydraulic Quick Couplings</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Sinopulse is a factory for hydraulic fluid products, including the research, design, and production of hydraulic quick couplings. With its advanced technology, our products easily meet diverse market demands and comply with international standards and the specific requirements of various manufacturers.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-4">
                We can supply any type of hydraulic quick connect fittings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our hydraulic quick couplers and couplings are field-tested to ensure stable operation under high pressure, giving you peace of mind when connecting.
              </p>
            </div>

            {/* Right Column - Introduction Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm">
                <Image
                  src="/images/hydraulic-quick-couplings-intro.png"
                  alt="Hydraulic Quick Couplings"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Product Range Includes:</h2>
            <p className="text-gray-600">ISO-A and ISO-B Couplers, Push and Pull Couplers, Quick-Release and High-Pressure Couplers, Flat-Face and Threaded Couplers, Straight Through Couplings, Brass Mold Coolant-Line Quick Couplers, and Dust Plugs for complete hydraulic connection solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {couplingTypes.map((type) => (
              <Link
                key={type.slug}
                href={type.href}
                className="group"
              >
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#e05a2e] transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#e05a2e] transition-colors line-clamp-2">
                      {type.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="p-6 flex-grow">
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">{type.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">Key Features</p>
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#e05a2e] font-bold mt-1 text-sm">•</span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#e05a2e] group-hover:gap-3 transition-all">
                      Explore Range
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#e05a2e] text-white flex items-center justify-center font-bold text-sm">1</span>
                ISO 7241-A Series
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Standard hydraulic quick-connect couplings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Flat-face design for zero spillage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Compatible with multiple pressure ranges</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#e05a2e] text-white flex items-center justify-center font-bold text-sm">2</span>
                High-Pressure Series
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>10,000 PSI high-pressure quick couplers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Advanced pressure containment systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Extreme duty industrial applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#e05a2e] text-white flex items-center justify-center font-bold text-sm">3</span>
                Agricultural Series
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>ISO 5675 agricultural quick couplers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Field-proven durable construction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Suitable for farm equipment and machinery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#e05a2e] text-white flex items-center justify-center font-bold text-sm">4</span>
                Flat-Face Quick Couplings
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Zero spillage design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Easy connection and disconnection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e05a2e] font-bold">✓</span>
                  <span>Environmentally friendly operation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              For more details about our hydraulic quick couplings and specifications, please send us an online inquiry or contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-[#e05a2e] text-white font-bold px-8 py-3 rounded hover:bg-[#d04a1e] transition-colors"
              >
                Send Inquiry
              </Link>
              <Link
                href="/#contact"
                className="inline-block border-2 border-[#e05a2e] text-[#e05a2e] font-bold px-8 py-3 rounded hover:bg-[#e05a2e] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
