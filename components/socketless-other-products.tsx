"use client"

import Link from "next/link"
import Image from "next/image"

interface Product {
  id: number
  slug: string
  name: string
  code: string
  image: string
}

interface SocketlessOtherProductsProps {
  products: Product[]
}

export function SocketlessOtherProducts({ products }: SocketlessOtherProductsProps) {
  return (
    <section className="py-12 border-t border-gray-200 mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Socketless Fittings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/hydraulic-fittings/socketless-fittings/${product.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#e05a2e] transition-all duration-300">
              <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={120}
                  className="object-contain w-auto h-auto max-h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-[#e05a2e] uppercase tracking-wider mb-1">
                  {product.code}
                </p>
                <h3 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-[#e05a2e] transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
