import Link from 'next/link'

export function SocketlessCtaSection() {
  return (
    <section
      className="border-t border-[#d0e4f5]/40 py-20 sm:py-28"
      style={{ background: 'linear-gradient(135deg, #0f2b52 0%, #1a5fa8 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-balance">
          Need Help Selecting the Right Socketless Fitting?
        </h2>

        {/* Description */}
        <p className="text-lg text-[#c5d9f1] mb-10 max-w-2xl mx-auto leading-relaxed">
          Our expert team is ready to help you find the perfect socketless fitting for your hydraulic application. Contact us for technical assistance and custom solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#e05a2e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c94a22] transition-colors duration-300"
          >
            Contact Sales
          </Link>
          <Link
            href="/products"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f2b52] transition-colors duration-300"
          >
            Back to Hydraulic Fittings
          </Link>
        </div>
      </div>
    </section>
  )
}
