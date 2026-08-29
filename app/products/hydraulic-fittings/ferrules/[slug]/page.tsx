import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
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
      otherProductsSection={
        <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ed5629]">Related</p>
              <h2 className="font-heading text-3xl font-bold text-[#0d2949]">Other Ferrule Solutions</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {otherProducts.map((item, index) => (
                <BSPProductCard
                  key={item.slug}
                  product={{
                    id: 130000 + item.id,
                    name: item.name,
                    code: item.code,
                    image: item.image,
                    slug: item.slug,
                  }}
                  index={index}
                  basePath="/products/hydraulic-fittings/ferrules"
                  categoryLabel="Ferrules"
                />
              ))}
            </div>
          </div>
        </section>
      }
    />
  )
}
