import { Metadata } from "next"
import { highPressureCouplers } from "@/lib/high-pressure-couplers"
import { KTCProductDetail } from "@/components/ktc-product-detail"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const metadata: Metadata = {
  title: "Super High-Pressure Hydraulic Quick Couplers | Hydronex",
  description:
    "Ultra-high-pressure hydraulic quick couplers rated up to 10,000 PSI. KTC Series engineered for extreme pressure applications and demanding industrial environments.",
}

export default function HighPressureCoupler() {
  const product = highPressureCouplers[0]

  return (
    <>
      <HydraulicAdaptersHeroSection
        category="High-Pressure Category"
        title={product.name}
        description={product.description}
        featuredProduct={{ name: product.name, code: product.code, image: product.image }}
        productCount={highPressureCouplers.length}
        summary={product.description}
        standardLabel="10,000 PSI"
        standardsDescription="Super high-pressure"
        primaryActionLabel="Get More Information"
        primaryActionHref="#product-details"
        secondaryActionLabel="Download Specs"
        secondaryActionHref="#product-details"
      />

      {/* Product Details */}
      <div id="product-details">
        <KTCProductDetail
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          description: product.description,
          material: product.material,
          surfaceTreat: product.surfaceTreat,
          application: product.application,
          features: product.features,
          specs: product.specs,
          techSpecs: product.techSpecs,
          applications: product.applications,
          femaleSpecsTable: product.femaleSpecsTable,
          femaleDiagram: product.femaleDiagram,
          maleSpecsTable: product.maleSpecsTable,
          maleDiagram: product.maleDiagram,
        }}
        />
      </div>
      <BSPCtaSection
        title="Need Help Selecting a High-Pressure Coupler?"
        description="Our expert team is ready to help with product selection, technical support and bulk orders."
        buttonLabel="Get More Information"
        ctaHref="/#contact"
      />
    </>
  )
}
