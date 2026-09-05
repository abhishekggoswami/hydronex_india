import { Metadata } from "next"
import { dustPlugProduct } from "@/lib/dust-plug"
import { DustPlugDetail } from "@/components/dust-plug-detail"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"

export const metadata: Metadata = {
  title: "Dust Plug & Dust Cap | Hydraulic Quick Couplings | Hydronex",
  description:
    "Protective dust plugs (coupler / female half) and dust caps (nipple / male half) for hydraulic quick couplings. Available in ZE, ZB rubber and TL brass series across 1/4\" to 1\" sizes.",
}

export default function DustPlugPage() {
  const product = dustPlugProduct

  return (
    <>
      <HydraulicAdaptersHeroSection
        category="Hydraulic Quick Couplings"
        title={product.name}
        description={product.description}
        featuredProduct={{
          name: product.sections[0].title,
          code: product.specs[0].value,
          image: product.sections[0].image,
        }}
        productCount={product.sections.length}
        summary={product.description}
        standardLabel="ISO 7241"
        standardsDescription="Hydraulic quick couplings"
        primaryActionLabel="Get More Information"
        primaryActionHref="#product-details"
        secondaryActionLabel="Download Specs"
        secondaryActionHref="#product-details"
      />

      <div id="product-details">
        <DustPlugDetail product={product} />
      </div>
    </>
  )
}
