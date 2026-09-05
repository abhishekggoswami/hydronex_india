import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { mobileControlValveCategories, monoblockValveProducts, sectionalValveProducts } from "@/lib/mobile-control-valves"

export function generateStaticParams() {
  return mobileControlValveCategories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = mobileControlValveCategories.find((item) => item.slug === slug)
  return category ? { title: `${category.name} | Hydronex`, description: category.name } : {}
}

export default async function MobileControlValveSubcategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = mobileControlValveCategories.find((item) => item.slug === slug)
  if (!category) notFound()

  if (slug === "monoblock-valves") {
    return (
      <HydraulicPumpCategoryPage
        categoryName="MONOBLOCK VALVES"
        products={monoblockValveProducts}
        basePath="/products/mobile-control-valve/monoblock-valves"
        parentCategoryName="Mobile Control Valve"
        parentCategoryHref="/products/mobile-control-valve"
        productNoun="Valve"
        introductionTitle="Monoblock Mobile Control Valve Trader, Supplier, and Dealer in India."
        introduction={[
          "We import mobile control valves from world-leading manufacturers, and we also deal in brands like Rexroth, Yuken, Hydevo, Polyhydron, Dowty, Mariotte, Eaton, and Hydac as per customer requirements. Our designed mobile control valves are used in many industries for controlling the direction, flow, or pressure of the fluid. We do have a modification team of highly qualified engineers and expert technicians. Our team of experts has huge experience in manufacturing and production. being leader industrial in hydraulic sector we do ‘n’ number of testing before delivering product",
          "Client trust always being fuel for us and encourage us to work harder and delivering top notch high-performance product Client trust is always fuel for us, which encourages us to work harder and deliver top-notch, high-performance products to every corner of India, like Suraj, Mumbai, Goa, Ahmedabad, Bhopal, Delhi, Gujarat, Lucknow, Haryana, Chennai, Kerala, Bengaluru, Delhi, Rajkot, Telangana, and many more.",
        ]}
      />
    )
  }

  if (slug === "sectional-valves") {
    return (
      <HydraulicPumpCategoryPage
        categoryName="SECTIONAL VALVES"
        products={sectionalValveProducts}
        basePath="/products/mobile-control-valve/sectional-valves"
        parentCategoryName="Mobile Control Valve"
        parentCategoryHref="/products/mobile-control-valve"
        productNoun="Valve"
        introductionTitle="India's Sectional Mobile Control Valve Supplier, Dealer, and Trader."
        introduction={[
          "Leading global manufacturers provide us with mobile control valves, and we also deal with brands such as Rexroth, Yuken, Polyhydron, Dowty, Mariotte, Eaton, and Hydac, depending on what our customers need. Numerous industries use our mobile control valves to regulate the fluid's flow, pressure, or direction. We do have a team of highly skilled technicians and engineers that work on modifications. Our team of professionals has extensive manufacturing and industrial experience. As a pioneer in the hydraulic industry, we conduct numerous tests prior to product delivery. We are constantly motivated to work harder and produce excellent, high-performance products by the trust we have from our clients. Trust from our clients is always our fuel.",
          "We are constantly motivated to work harder and deliver excellent, high-performance products to all parts of India, including Suraj, Mumbai, Goa, Ahmedabad, Bhopal, Delhi, Gujarat, Lucknow, Haryana, Chennai, Kerala, Bengaluru, Delhi, Rajkot, Telangana, and many more, by the trust we have from our clients.",
        ]}
      />
    )
  }

  const otherCategories = mobileControlValveCategories
    .filter((item) => item.slug !== category.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="MOBILE CONTROL VALVE"
        categoryHref="/products/mobile-control-valve"
        parentCategoryName="Products"
        parentCategoryHref="/products"
        product={{
          name: category.name,
          shortName: category.name,
          slug: category.slug,
          image: category.image,
          description: category.name,
          features: [],
          specs: [],
          applications: [],
        }}
        otherProductsSection={
          <>
            <BSPOtherProducts
              products={otherCategories}
              basePath="/products/mobile-control-valve"
              categoryLabel="MOBILE CONTROL VALVE"
            />
            <BSPCtaSection
              title="Let’s specify the right mobile control valve."
              description={category.name}
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
