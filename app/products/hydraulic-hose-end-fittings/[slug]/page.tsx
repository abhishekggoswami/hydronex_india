import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductCard } from "@/components/bsp-product-card"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import Topography from "@/components/topography"
import { hydraulicHoseEndFittings } from "@/lib/hydraulic-hose-end-fittings"

type Props = { params: Promise<{ slug: string }> }

function CompatibilityList({ values }: { values: string[] }) {
  if (!values.length) return <span className="text-[#a4afc0]">-</span>

  return (
    <ul className="space-y-0.5">
      {values.map((value, index) => <li key={`${value}-${index}`}>{value}</li>)}
    </ul>
  )
}

export function generateStaticParams() {
  return hydraulicHoseEndFittings.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = hydraulicHoseEndFittings.find((item) => item.slug === slug)

  if (!product) return {}

  return {
    title: `${product.shortName} - Hydronex Hydraulic Hose End Fittings`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = hydraulicHoseEndFittings.find((item) => item.slug === slug)

  if (!product) notFound()

  const otherProducts = hydraulicHoseEndFittings.filter((item) => item.slug !== slug)
  const compatibilitySection = product.specifications?.length ? (
    <section
      className="relative py-14"
      style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-7 w-1 rounded-full bg-[#e05a2e]" />
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">
              Hose Size Specifications Chart
            </h2>
            <p className="mt-1 text-sm text-[#60708b]">Complete fitting compatibility by hose size</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,.06),0_4px_24px_rgba(224,90,46,.06)]">
          <table className="w-full min-w-[1400px] border-collapse text-sm">
            <thead>
              <tr
                style={{
                  background: "linear-gradient(90deg, #fff0eb, #fff7f3)",
                  borderBottom: "2px solid #e05a2e",
                }}
              >
                {[
                  "Hose ID (Inch)",
                  "Hose ID (MM)",
                  "BSP Female-Male",
                  "Metric Female-Male",
                  "Ferrule Fittings Type",
                  "Stand Pipe",
                  "UNF Female-Male",
                  "3000 PSI SAE Flange",
                  "6000 PSI SAE Flange",
                ].map((label) => (
                  <th
                    key={label}
                    scope="col"
                    className="border-r border-[#e2e8f0] px-3 py-3 text-center text-[9px] font-bold uppercase tracking-[.1em] text-[#0e1c35]"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr
                  key={spec.hoseIdInch}
                  className="bsp-table-row align-top"
                  style={{ background: index % 2 === 0 ? "#fff" : "#fafbfc" }}
                >
                  <td className="border-r border-b border-[#e2e8f0] px-3 py-3 text-center font-mono text-[11px] font-bold text-[#c0420a]">
                    {spec.hoseIdInch}
                  </td>
                  <td className="border-r border-b border-[#e2e8f0] px-3 py-3 text-center text-[11px] text-[#374151]">
                    {spec.hoseIdMm}
                  </td>
                  {[spec.bspFemale, spec.metricFemale, spec.ferruleType, spec.standPipe, spec.unfFemale].map((values, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-r border-b border-[#e2e8f0] px-3 py-2 text-center text-[11px] leading-5 text-[#374151]"
                    >
                      <CompatibilityList values={values} />
                    </td>
                  ))}
                  <td className="border-r border-b border-[#e2e8f0] px-3 py-3 text-center text-[11px] text-[#374151]">
                    {spec.psi3000 || <span className="text-[#a4afc0]">-</span>}
                  </td>
                  <td className="border-b border-[#e2e8f0] px-3 py-3 text-center text-[11px] text-[#374151]">
                    {spec.psi6000 || <span className="text-[#a4afc0]">-</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  ) : null

  return (
    <BSPProductDetail
      categoryName="Hydraulic Hose End Fittings"
      categoryHref="/products/hydraulic-hose-end-fittings"
      showParentCategory={false}
      product={{
        name: product.name,
        shortName: product.shortName,
        slug: product.slug,
        description: product.description,
        material: product.specs.find((spec) => /material/i.test(spec.label))?.value,
        surfaceTreat: product.specs.find((spec) => /type/i.test(spec.label))?.value,
        application: product.applications.join(", "),
        features: product.features,
        specs: [...product.specs, ...(product.quickStats ?? [])],
        applications: product.applications,
        image: product.image,
      }}
      additionalSpecificationSection={compatibilitySection}
      otherProductsSection={
        <>
          <section className="relative isolate overflow-hidden border-b border-[#d0e4f5]/40 bg-white">
            <Topography
              className="pointer-events-none absolute inset-0 z-0"
              lowColor="#9eb8c3"
              midColor="#f26522"
              highColor="#ffffff"
              speed={0.18}
              morphAmount={1.7}
              bands={3.4}
              thickness={0.018}
              glow={0.22}
              opacity={0.075}
              mouseRadius={0.24}
              mouseStrength={0.34}
            />
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-3xl font-bold text-[#0e1c35]">Other Hydraulic Hose End Fittings</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                {otherProducts.map((item, index) => (
                  <div key={item.slug} style={{ "--shimmer-delay": `${(index % 5) * 0.9}s` } as React.CSSProperties}>
                    <BSPProductCard
                      index={index}
                      basePath="/products/hydraulic-hose-end-fittings"
                      categoryLabel="Hydraulic Hose End Fittings"
                      product={{
                        id: index + 17000,
                        name: item.shortName,
                        code: item.slug,
                        image: item.image,
                        slug: item.slug,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <BSPCtaSection
            title="Need More Information?"
            description="Get in touch with our expert team to discuss your specific hydraulic hose end fitting requirements and find the perfect solution for your application."
            buttonLabel="Contact Us Today"
          />
        </>
      }
      editorialHero
    />
  )
}
