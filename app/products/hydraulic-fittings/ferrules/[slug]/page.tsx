import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { ferrules } from "@/lib/ferrules"

export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ferrules.map((ferrule) => ({ slug: ferrule.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ferrule = ferrules.find((item) => item.slug === slug)

  if (!ferrule) return { title: "Product Not Found | Hydronex" }

  return {
    title: `${ferrule.name} | Ferrules | Hydronex`,
    description: ferrule.description,
  }
}

const normaliseRows = (rows: Array<Record<string, string | number | undefined>> | undefined) =>
  rows?.map((row) => ({
    partNo: String(row["Part No."] ?? row["P/N."] ?? row.partNo ?? ""),
    dn: row.DN?.toString() ?? row.dn?.toString(),
    dash: row.DASH?.toString() ?? row.dash?.toString(),
    d: row.D?.toString() ?? row.d?.toString(),
    l: row.L?.toString() ?? row.l?.toString(),
    s: row.S?.toString() ?? row.s?.toString(),
  }))

export default async function FerrulesProductPage({ params }: Props) {
  const { slug } = await params
  const ferrule = ferrules.find((item) => item.slug === slug)

  if (!ferrule) notFound()

  const otherProducts = ferrules.filter((item) => item.slug !== slug).slice(0, 6)

  return (
    <BSPProductDetail
      categoryName="Ferrules"
      categoryHref="/products/hydraulic-fittings/ferrules"
      product={{
        name: ferrule.name,
        shortName: ferrule.code,
        slug: ferrule.slug,
        description: ferrule.description,
        material: ferrule.material,
        surfaceTreat: ferrule.surfaceTreat,
        application: ferrule.applications,
        features: ferrule.features,
        specs: [],
        applications: [],
        partTable: normaliseRows(ferrule.partTable),
        tableNote: ferrule.tableNote,
        image: ferrule.image,
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
            title="Other Ferrule Solutions"
            basePath="/products/hydraulic-fittings/ferrules"
            categoryLabel="Ferrules"
          />
          <BSPCtaSection
            title="Need Help Selecting the Right Ferrule?"
            description="Our expert team is ready to help with product selection, technical support and bulk orders."
            buttonLabel="Contact Sales"
            ctaHref="/contact"
          />
        </>
      }
    />
  )
}
