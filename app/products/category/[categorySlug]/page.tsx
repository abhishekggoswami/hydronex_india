import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { getCategoryBySlug, categories } from "@/lib/products"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ categorySlug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  if (!category) return { title: "Category Not Found" }
  return {
    title: `${category.name} | Hydronex`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return categories.map((c) => ({ categorySlug: c.slug }))
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  if (!category) notFound()

  const otherCategories = categories.filter((c) => c.slug !== category.slug)

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#e05a2e] transition-colors">Home</Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link href="/products" className="hover:text-[#e05a2e] transition-colors">Products</Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-gray-800 font-medium">{category.name}</span>
        </div>
      </div>

      {/* Category hero */}
      <section className="bg-[#141414] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#e05a2e] text-sm font-semibold uppercase tracking-widest mb-3">
            . Category
          </p>
          <h1
            className="font-heading text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {category.name}
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            {category.description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <span className="text-[#e05a2e] font-semibold text-2xl font-heading" style={{ fontFamily: "var(--font-heading)" }}>
              {category.products.length}
            </span>
            <span>products in this category</span>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {category.products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-gray-200 hover:border-[#e05a2e] transition-colors bg-white"
              >
                {/* Image */}
                <div className="relative aspect-video bg-[#f0f0f0] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-4 text-white/20 font-heading font-bold text-5xl leading-none select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-[#141414] font-semibold text-base leading-snug group-hover:text-[#e05a2e] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#e05a2e] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="bg-[#f5f5f5] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#e05a2e] text-sm font-semibold uppercase tracking-widest mb-2">
            . Browse More
          </p>
          <h2
            className="font-heading text-3xl font-bold text-[#141414] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/category/${cat.slug}`}
                className="group flex items-center justify-between p-6 bg-white border border-gray-200 hover:border-[#e05a2e] transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-[#141414] group-hover:text-[#e05a2e] transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-500">{cat.products.length} products</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-300 group-hover:text-[#e05a2e] group-hover:-rotate-45 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
