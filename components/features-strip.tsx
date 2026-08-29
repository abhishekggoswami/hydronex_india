import { ShieldCheck, FlaskConical, Truck, Wrench } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "ISO 9001 Certified",
    desc: "All products comply with ISO 9001, SAE, GOST and EN standard specifications for guaranteed quality.",
  },
  {
    icon: FlaskConical,
    title: "In-House Testing",
    desc: "Dynamic tests meeting SAE and EN specs performed in our own testing facility before every shipment.",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    desc: "Supplying 80+ countries worldwide including USA, Europe, Japan, and South America on time.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: "OEM and custom hose solutions tailored to your local market standards and application requirements.",
  },
]

export default function FeaturesStrip() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 border border-gray-200 flex items-center justify-center text-[#141414]">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-[#141414] text-base mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-200" />
      </div>
    </section>
  )
}
