import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { reusableHoseFittings } from "@/lib/reusable-hose-fittings"

export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return reusableHoseFittings.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = reusableHoseFittings.find((item) => item.slug === slug)

  if (!product) return { title: "Product Not Found - Hydronex" }

  return {
    title: `${product.name} - Reusable Hose Fittings | Hydronex`,
    description: product.description || `High-quality ${product.name} for hydraulic systems`,
  }
}

const normaliseRows = (rows: Array<Record<string, string | number | undefined>> | undefined) =>
  rows?.map((row) => ({
    partNo: String(row["Part No."] ?? row["P/N."] ?? row["PA/RT NO."] ?? row.partNo ?? ""),
    threadE: row["Thread E"]?.toString() ?? row["TH/READ E"]?.toString() ?? row.Thread?.toString() ?? row.threadE?.toString(),
    dn: row.DN?.toString() ?? row.dn?.toString(),
    dash: row.DASH?.toString() ?? row.dash?.toString(),
    a: row.A?.toString() ?? row.a?.toString(),
    c: row.C?.toString() ?? row.c?.toString(),
    h: row.H?.toString() ?? row.h?.toString(),
    s: row.S?.toString() ?? row.s?.toString(),
    s1: row.S1?.toString() ?? row.s1?.toString(),
    s2: row.S2?.toString() ?? row.s2?.toString(),
    d: row.D?.toString() ?? row.d?.toString(),
    l: row.L?.toString() ?? row.l?.toString(),
  }))

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = reusableHoseFittings.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = reusableHoseFittings.filter((item) => item.slug !== slug).slice(0, 6)
  const application = typeof product.applications === "string" ? product.applications : undefined
  const applications = Array.isArray(product.applications) ? product.applications : []

  return (
    <BSPProductDetail
      categoryName="Reusable Hose Fittings"
      categoryHref="/products/hydraulic-fittings/reusable-hose-fittings"
      product={{
        name: product.name,
        shortName: product.code,
        slug: product.slug,
        description: product.description ?? "",
        material: product.material,
        surfaceTreat: product.surfaceTreat,
        application,
        features: product.features ?? [],
        specs: [],
        applications,
        partTable: normaliseRows(product.partTable),
        tableNote: product.tableNote,
        image: product.image,
      }}
      editorialHero
      otherProductsSection={
        <>
          <BSPOtherProducts
            products={otherProducts.map((item) => ({
              slug: item.slug,
              name: item.name,
              shortName: item.code,
              code: item.code,
              image: item.image,
            }))}
            title="Other Reusable Hose Fittings"
            basePath="/products/hydraulic-fittings/reusable-hose-fittings"
            categoryLabel="Reusable Hose Fittings"
          />
          <BSPCtaSection
            title="Need Help Selecting the Right Reusable Hose Fitting?"
            description="Our expert team is ready to help with product selection, technical support and bulk orders."
            buttonLabel="Contact Sales"
            ctaHref="/contact"
          />
        </>
      }
    />
  )
}
