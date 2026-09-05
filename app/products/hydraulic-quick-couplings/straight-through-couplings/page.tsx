import { Metadata } from "next"
import { straightThroughCouplings } from "@/lib/straight-through-couplings"
import { STProductDetail } from "@/components/st-product-detail"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const metadata: Metadata = {
  title: "Straight Through Couplings / Industrial Interchange | Hydronex",
  description:
    "Industrial interchange straight-through hydraulic quick couplings available in Brass, Steel, and Stainless Steel. ISO 7241-2 compliant, US market interchange, sleeve-pull connection.",
}

export default function StraightThroughCouplingsPage() {
  const product = straightThroughCouplings[0]

  return (
    <>
      <HydraulicAdaptersHeroSection
        category="Industrial Interchange"
        title={product.name}
        description={product.description}
        featuredProduct={{ name: product.name, code: product.code, image: product.couplerFemaleDiagram }}
        productCount={straightThroughCouplings.length}
        summary={product.description}
        standardLabel="ISO 7241-2"
        standardsDescription="Industrial interchange"
        primaryActionLabel="Get More Information"
        primaryActionHref="#product-details"
        secondaryActionLabel="Download Specs"
        secondaryActionHref="#product-details"
      />

      <div id="product-details">
        <STProductDetail product={product} />
      </div>

      <BSPCtaSection
        title="Need Help Selecting a Straight Through Coupling?"
        description="Our expert team is ready to help with product selection, technical support and bulk orders."
        buttonLabel="Get More Information"
        ctaHref="/#contact"
      />
    </>
  )
}
