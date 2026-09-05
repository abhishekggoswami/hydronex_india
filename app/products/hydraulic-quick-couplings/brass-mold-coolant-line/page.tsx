import { Metadata } from "next"
import { brassMoldCoolantProducts } from "@/lib/brass-mold-coolant"
import { BMCLProductDetail } from "@/components/bmcl-product-detail"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { BSPCtaSection } from "@/components/bsp-cta-section"

export const metadata: Metadata = {
  title: "Brass Mold Coolant-Line Quick Couplers | D-M-E Parker Poster Interchange | Hydronex",
  description:
    "Brass Mold Coolant-Line Quick Couplers for D-M-E, Parker and Poster interchange. Available in straight, 45Â° and 90Â° configurations. Silicone seals, rated to ISO 7241-2.",
}

export default function BrassMoldCoolantLinePage() {
  const product = brassMoldCoolantProducts[0]

  return (
    <>
      <HydraulicAdaptersHeroSection
        category="D-M-E / Parker / Poster Interchange"
        title={product.name}
        description={product.description}
        featuredProduct={{ name: product.name, code: product.code, image: product.image }}
        productCount={brassMoldCoolantProducts.length}
        summary={product.description}
        standardLabel="ISO 7241-2"
        standardsDescription="Mold coolant line"
        primaryActionLabel="Get More Information"
        primaryActionHref="#product-details"
        secondaryActionLabel="Download Specs"
        secondaryActionHref="#product-details"
      />

      <div id="product-details">
        <BMCLProductDetail product={product} />
      </div>

      <BSPCtaSection
        title="Need Help Selecting a Mold Coolant Coupler?"
        description="Our expert team is ready to help with product selection, technical support and bulk orders."
        buttonLabel="Get More Information"
        ctaHref="/#contact"
      />
    </>
  )
}
