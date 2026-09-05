import Image from "next/image"
import type { Metadata } from "next"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"

const productName = "Torque PRB Series Single Acting/ Double Acting Hand Pumps (Oil Medium)"
const productImage = "/images/hydraulic-pumps/hand-pumps/torque-prb-series-single-acting-double-acting-hand-pumps-oil-medium.png"
const specificationDiagram = "/images/hydraulic-pumps/hand-pumps/torque-prb-series-specification-diagram.png"

export const metadata: Metadata = {
  title: `${productName} | Hydronex`,
  description: "Torque PRB Series Single Acting/ Double Acting Hand Pumps (Oil Medium)",
}

export default function TorquePrbHandPumpPage() {
  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Hand Pumps"
        categoryHref="/products/hydraulic-pumps/hand-pumps"
        parentCategoryName="Hydraulic Pumps"
        parentCategoryHref="/products/hydraulic-pumps"
        product={{
          name: productName,
          shortName: productName,
          slug: "torque-prb-series-single-acting-double-acting-hand-pumps-oil-medium",
          image: productImage,
          description:
            "Working Pressure: Up to 250 bar Pressure relief valve and dust protection cover options From 1 liter up to 10 liter steel oil tank options. Single acting / Double acting. Tank: 3 / 5 Liter With tank or without tank.",
          material: "Steel oil tank",
          surfaceTreat: "Pressure relief valve and dust protection cover options",
          features: [
            "Working Pressure: Up to 250 bar",
            "Pressure relief valve and dust protection cover options",
            "From 1 liter up to 10 liter steel oil tank options",
            "Single acting / Double acting",
            "Tank: 3 / 5 Liter With tank or without tank",
          ],
          specs: [
            { label: "Model code", value: "PRB series" },
            { label: "CC", value: "12 / 25 / 40" },
            { label: "Working Pressure", value: "Up to 250 bar" },
            { label: "Acting", value: "Single acting / Double acting" },
            { label: "Tank", value: "3 / 5 Liter With tank or without tank" },
            { label: "Tank options", value: "From 1 liter up to 10 liter steel oil tank options" },
          ],
          applications: [],
        }}
        additionalSpecificationSection={
          <section className="relative overflow-hidden border-y border-[#dbe8ea] bg-[#f7f8f6] py-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(242,101,34,0.1),transparent_25%),radial-gradient(circle_at_90%_78%,rgba(63,108,140,0.14),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-7 w-1 shrink-0 rounded-full bg-[#f26522]" aria-hidden />
                <h2 className="text-2xl font-bold text-[#143126]">Specification Diagram</h2>
              </div>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#173b59]/35 bg-[#071525] p-3 shadow-[0_20px_46px_rgba(9,26,42,0.2)] sm:p-5">
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f26522] via-[#ffb17d] to-[#f26522]" />
                <div className="relative mx-auto max-w-[760px] overflow-hidden rounded-xl bg-[#020914] p-2 sm:p-4">
                  <Image
                    src={specificationDiagram}
                    alt="Torque PRB Series hand pump specification diagram"
                    width={1015}
                    height={1544}
                    className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    sizes="(max-width: 768px) 100vw, 760px"
                  />
                </div>
              </div>
            </div>
          </section>
        }
        otherProductsSection={
          <>
            <BSPCtaSection
              title="Let's specify the right hand pump."
              description={productName}
              buttonLabel="Talk to our team"
              ctaHref="/contact"
            />
          </>
        }
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </>
  )
}
