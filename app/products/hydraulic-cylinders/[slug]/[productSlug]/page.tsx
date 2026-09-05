import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { doubleActingCylinderProducts, singleActingCylinderProducts } from "@/lib/hydraulic-cylinders"

const weldedTypeDescription =
  "Hydraulic cylinders that have been directly welded together from the barrel to both end caps are known as welded hydraulic cylinders. As a result, they are smaller and more movable than other kinds of hydraulic cylinders. Torque Welded hydraulic cylinders are superior to other types of hydraulic cylinders in terms of durability and strength, making them perfect for applications needing a lot of force."

const weldedTypeFeatures = [
  "They are lighter and may fit into smaller areas.",
  "In comparison to other types of hydraulic cylinders, they are stronger and more robust.",
  "High pressures won't damage them.",
  "They are more dependable and last longer.",
]

const weldedTypeSpecifications = [
  { label: "Construction", value: "directly welded together from the barrel to both end caps" },
  { label: "Size", value: "smaller and more movable than other kinds of hydraulic cylinders" },
  { label: "Performance", value: "superior to other types of hydraulic cylinders in terms of durability and strength" },
  { label: "Use", value: "applications needing a lot of force" },
  { label: "Safety", value: "welded hydraulic cylinders need to be tested carefully" },
  { label: "Pressure", value: "a significant quantity of stored energy" },
]

function WeldedTypeApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Introduction</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Introduction of hydraulic welded cylinder by torque.</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Because they are pressure vessels, welded hydraulic cylinders need to be tested carefully. Under pressure, a welded hydraulic cylinder that explodes or splits can discharge a significant quantity of stored energy. Because of the possibility for damage, it is essential to pay attention to the manufacturer's suggested safety measures.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">applications needing a lot of force.</p>
        </div>
      </div>
    </section>
  )
}

const telescopicCylinderDescription =
  "Multi Stage cylinders, a synonym for telescopic hydraulic cylinders, are a kind of linear actuator that use several stages to produce a long stroke in a compact form. Whether they need hydraulic power to extend and return decides whether they are single acting or double acting."

const telescopicCylinderFeatures = [
  "Multi Stage cylinders, a synonym for telescopic hydraulic cylinders",
  "use several stages to produce a long stroke in a compact form",
  "Whether they need hydraulic power to extend and return decides whether they are single acting or double acting.",
  "single acting, double acting, or a single / double acting hybrid telescopic hydraulic cylinders",
  "minimizing space and capable of achieving particular angle needs",
]

const telescopicCylinderSpecifications = [
  { label: "Type", value: "Multi Stage cylinders, a synonym for telescopic hydraulic cylinders" },
  { label: "Function", value: "a kind of linear actuator" },
  { label: "Stages", value: "several stages" },
  { label: "Stroke", value: "a long stroke in a compact form" },
  { label: "Operation", value: "single acting or double acting" },
  { label: "Range", value: "two- and three-stage Torque telescopic hydraulic cylinders" },
  { label: "Manufacture", value: "manufactured especially to fit your specifications" },
]

function TelescopicCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Torque telescopic cylinders</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Benefits of torque telescoping cylinders</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">The ability to create single acting, double acting, or a single / double acting hybrid telescopic hydraulic cylinders is their key selling point. You may acquire the additional advantages and usability of a double acting hydraulic cylinder along with the simplicity of use and efficiency of a single acting hydraulic cylinder through choosing a combination of single acting/double acting telescopic cylinder. Additionally minimizing space and capable of achieving particular angle needs are telescopic hydraulic cylinders.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">You can be sure that you'll find the ideal cylinder for your application since our cylinders are manufactured especially to fit your specifications.</p>
        </div>
      </div>
    </section>
  )
}

const liftCylinderDescription =
  "A hydraulic machine for lifting uses is the Torque Hydraulic Lift Cylinder device. It is outstanding for heavy material handling, loading, and lifting in motor vehicles mining, construction, and a variety of industrial applications and can bear huge weights. In Mumbai is regarded as one of the reliable manufacturer and suppliers of hydraulic lift cylinders. Our hydraulic cylinder is particularly created to satisfy your needs. For light duty to high duty applications, they are available in a range of dimensions."

const liftCylinderFeatures = [
  "Transporting overloaded materials and goods.",
  "Generating precise force depending on the piston size.",
  "Easy installation and low maintenance utility.",
  "Ensuring safe lifting and positioning of heavy machinery.",
]

const liftCylinderSpecifications = [
  { label: "Device", value: "Torque Hydraulic Lift Cylinder device" },
  { label: "Capacity", value: "can bear huge weights" },
  { label: "Duty", value: "For light duty to high duty applications" },
  { label: "Dimensions", value: "available in a range of dimensions" },
  { label: "Force", value: "precise force depending on the piston size" },
  { label: "Installation", value: "Easy installation and low maintenance utility" },
]

function LiftCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Hydraulic lift cylinders</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Pros of Using Torque Hydraulic Lift Cylinders:</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">The process can benefit from a number of features and advantages offered by hydraulic lift cylinders. In order to be sure you are putting money in the proper solution, it is important to understand the same. Give it a couple of the numerous benefits related to it.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">heavy material handling, loading, and lifting in motor vehicles mining, construction, and a variety of industrial applications</p>
        </div>
      </div>
    </section>
  )
}

const doubleRodCylinderDescription =
  "Double-rod cylinders by torque have two equal-sized working regions for pulling and pulling out because they operate via a through piston rod."

const doubleRodCylinderFeatures = [
  "two equal-sized working regions for pulling and pulling out",
  "operate via a through piston rod",
  "These cylinders are nearly as large as ones with one-sided piston rods because of the through rod.",
  "Double-acting double-rod cylinders by torque can be used for pushing or pulling",
  "can also be used as single-acting cylinders by adding air filters.",
]

const doubleRodCylinderSpecifications = [
  { label: "Type", value: "Double-rod" },
  { label: "Working regions", value: "two equal-sized working regions" },
  { label: "Operation", value: "pulling and pulling out" },
  { label: "Piston rod", value: "operate via a through piston rod" },
  { label: "Size", value: "nearly as large as ones with one-sided piston rods" },
  { label: "Use", value: "used for pushing or pulling" },
  { label: "Single-acting option", value: "by adding air filters" },
]

function DoubleRodCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Double-rod</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Benefits of the double-rod cylinder type</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">These cylinders are nearly as large as ones with one-sided piston rods because of the through rod.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Double-acting double-rod cylinders by torque can be used for pushing or pulling and can also be used as single-acting cylinders by adding air filters.</p>
        </div>
      </div>
    </section>
  )
}

const doubleActingWeldedCylinderDescription =
  "Hydraulic cylinders that have been directly welded together from the barrel to both end caps are known as welded hydraulic cylinders. As a result, they are smaller and more movable than other kinds of hydraulic cylinders. Welded hydraulic cylinders are superior to other types of hydraulic cylinders in terms of durability and strength, making them perfect for applications needing a lot of force."

const doubleActingWeldedCylinderFeatures = [
  "They are lighter and may fit into smaller areas.",
  "In comparison to other types of hydraulic cylinders, they are stronger and more robust.",
  "High pressures won't damage them.",
  "They are more dependable and last longer.",
]

const doubleActingWeldedCylinderSpecifications = [
  { label: "Construction", value: "directly welded together from the barrel to both end caps" },
  { label: "Size", value: "smaller and more movable than other kinds of hydraulic cylinders" },
  { label: "Performance", value: "superior durability and strength" },
  { label: "Use", value: "applications needing a lot of force" },
  { label: "Safety", value: "welded hydraulic cylinders need to be tested carefully" },
  { label: "Pressure", value: "a significant quantity of stored energy" },
]

function DoubleActingWeldedCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Introduction</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Introduction of hydraulic welded cylinder.</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Because they are pressure vessels, welded hydraulic cylinders need to be tested carefully. Under pressure, a welded hydraulic cylinder that explodes or splits can discharge a significant quantity of stored energy. Because of the possibility for damage, it is essential to pay attention to the manufacturer's suggested safety measures.</p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#202020]">The following are a few advantages of using welded hydraulic cylinders:</h3>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Applications needing a lot of force.</p>
        </div>
      </div>
    </section>
  )
}

const tieRodCylinderDescription =
  "High-strength threaded steel rods hold the end caps to the cylinder barrel in a tie rod cylinder. Static seals are often present on these cylinders to stop leakage at the barrel-to-end-cap interface. In general, small cylinders have four tie rods, whereas big, industrial-style models can have up to twenty tie rods to sustain significant stress."

const tieRodCylinderFeatures = [
  "High-strength threaded steel rods hold the end caps to the cylinder barrel in a tie rod cylinder.",
  "Static seals are often present on these cylinders to stop leakage at the barrel-to-end-cap interface.",
  "Small cylinders have four tie rods.",
  "Big, industrial-style models can have up to twenty tie rods to sustain significant stress.",
]

const tieRodCylinderSpecifications = [
  { label: "Rods", value: "High-strength threaded steel rods" },
  { label: "Construction", value: "hold the end caps to the cylinder barrel" },
  { label: "Seals", value: "Static seals are often present" },
  { label: "Leakage", value: "barrel-to-end-cap interface" },
  { label: "Small cylinders", value: "four tie rods" },
  { label: "Industrial-style models", value: "up to twenty tie rods" },
]

function TieRodCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Introduction</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Introduction of Torque Tie Rod Cylinders?</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Hydraulic tie rod cylinders, praised for their small size, are most frequently employed in manufacturing settings.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Support</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Our highly skilled experts are capable of fixing any issue that arises with either a normal or powerful tie rod hydraulic cylinder.</p>
        </div>
      </div>
    </section>
  )
}

const millTypeCylinderDescription =
  "Mill-type cylinders by torque are developed to meet the demand for a more strong and reliable product in order to save downtime and maintenance cost. The mill-type cylinder has heavy-duty construction with steel flanged end caps, heavy-wall steel tubing, bigger pistons, bearings, enhanced gland design, and multiple other characteristics based on design standards that are not subject to NFPA constraints. The mill-type cylinder has a high pressure rating that exceeds industrial norms. These traits, when combined, ensure better dependability under the most adverse climatic and operating situations."

const millTypeCylinderFeatures = [
  "developed to meet the demand for a more strong and reliable product",
  "heavy-duty construction with steel flanged end caps",
  "heavy-wall steel tubing, bigger pistons, bearings, and enhanced gland design",
  "a high pressure rating that exceeds industrial norms",
]

const millTypeCylinderSpecifications = [
  { label: "Construction", value: "heavy-duty construction with steel flanged end caps" },
  { label: "Tubing", value: "heavy-wall steel tubing" },
  { label: "Components", value: "bigger pistons, bearings, enhanced gland design" },
  { label: "Standards", value: "not subject to NFPA constraints" },
  { label: "Pressure rating", value: "exceeds industrial norms" },
  { label: "Dependability", value: "adverse climatic and operating situations" },
]

function MillTypeCylinderApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.45fr_1fr]">
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Product purpose</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Reliable mill-type cylinder construction</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">Mill-type cylinders by torque are developed to meet the demand for a more strong and reliable product in order to save downtime and maintenance cost.</p>
        </div>
        <div className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545] sm:text-lg">These traits, when combined, ensure better dependability under the most adverse climatic and operating situations.</p>
        </div>
      </div>
    </section>
  )
}

function getProductsForCategory(slug: string) {
  if (slug === "single-acting-cylinders") return singleActingCylinderProducts
  if (slug === "double-acting-cylinders") return doubleActingCylinderProducts
  return []
}

export function generateStaticParams() {
  return [
    ...singleActingCylinderProducts.map(({ slug }) => ({ slug: "single-acting-cylinders", productSlug: slug })),
    ...doubleActingCylinderProducts.map(({ slug }) => ({ slug: "double-acting-cylinders", productSlug: slug })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; productSlug: string }> }): Promise<Metadata> {
  const { slug, productSlug } = await params
  const product = getProductsForCategory(slug).find((item) => item.slug === productSlug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function HydraulicCylinderProductPage({ params }: { params: Promise<{ slug: string; productSlug: string }> }) {
  const { slug, productSlug } = await params
  const products = getProductsForCategory(slug)
  const product = products.find((item) => item.slug === productSlug)
  if (!product) notFound()

  const isDoubleActing = slug === "double-acting-cylinders"
  const categoryName = isDoubleActing ? "DOUBLE ACTING CYLINDERS" : "SINGLE ACTING CYLINDERS"
  const categoryHref = isDoubleActing ? "/products/hydraulic-cylinders/double-acting-cylinders" : "/products/hydraulic-cylinders/single-acting-cylinders"
  const isWeldedTypeByTorque = slug === "single-acting-cylinders" && product.slug === "welded-type-by-torque"
  const isTelescopicCylinder = slug === "single-acting-cylinders" && product.slug === "telescopic-cylinders-by-toque"
  const isLiftCylinder = slug === "single-acting-cylinders" && product.slug === "lift-cylinders-by-torque"
  const isDoubleRodCylinder = slug === "double-acting-cylinders" && product.slug === "double-rod-cylinder-by-torque"
  const isDoubleActingWeldedCylinder = slug === "double-acting-cylinders" && product.slug === "welded-type-cylinders"
  const isTieRodCylinder = slug === "double-acting-cylinders" && product.slug === "tie-rod-type-cylinders-by-torque"
  const isMillTypeCylinder = slug === "double-acting-cylinders" && product.slug === "mill-type-cylinders-by-torque"
  const otherProducts = products.filter((item) => item.slug !== product.slug).map((item) => ({ ...item, shortName: item.name }))

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName={categoryName}
        categoryHref={categoryHref}
        parentCategoryName="Hydraulic Cylinders"
        parentCategoryHref="/products/hydraulic-cylinders"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: isWeldedTypeByTorque ? weldedTypeDescription : isTelescopicCylinder ? telescopicCylinderDescription : isLiftCylinder ? liftCylinderDescription : isDoubleRodCylinder ? doubleRodCylinderDescription : isDoubleActingWeldedCylinder ? doubleActingWeldedCylinderDescription : isTieRodCylinder ? tieRodCylinderDescription : isMillTypeCylinder ? millTypeCylinderDescription : product.name,
          features: isWeldedTypeByTorque ? weldedTypeFeatures : isTelescopicCylinder ? telescopicCylinderFeatures : isLiftCylinder ? liftCylinderFeatures : isDoubleRodCylinder ? doubleRodCylinderFeatures : isDoubleActingWeldedCylinder ? doubleActingWeldedCylinderFeatures : isTieRodCylinder ? tieRodCylinderFeatures : isMillTypeCylinder ? millTypeCylinderFeatures : [],
          specs: isWeldedTypeByTorque ? weldedTypeSpecifications : isTelescopicCylinder ? telescopicCylinderSpecifications : isLiftCylinder ? liftCylinderSpecifications : isDoubleRodCylinder ? doubleRodCylinderSpecifications : isDoubleActingWeldedCylinder ? doubleActingWeldedCylinderSpecifications : isTieRodCylinder ? tieRodCylinderSpecifications : isMillTypeCylinder ? millTypeCylinderSpecifications : [],
          applications: [],
        }}
        additionalSpecificationSection={isWeldedTypeByTorque ? <WeldedTypeApplicationsSection /> : isTelescopicCylinder ? <TelescopicCylinderApplicationsSection /> : isLiftCylinder ? <LiftCylinderApplicationsSection /> : isDoubleRodCylinder ? <DoubleRodCylinderApplicationsSection /> : isDoubleActingWeldedCylinder ? <DoubleActingWeldedCylinderApplicationsSection /> : isTieRodCylinder ? <TieRodCylinderApplicationsSection /> : isMillTypeCylinder ? <MillTypeCylinderApplicationsSection /> : null}
        otherProductsSection={<><BSPOtherProducts products={otherProducts} basePath={categoryHref} categoryLabel={categoryName} /><BSPCtaSection title="Let’s specify the right hydraulic cylinder." description={product.name} buttonLabel="Talk to our team" ctaHref="/contact" /></>}
      />
      <LikedProductsDrawer />
      <LikedProductsFAB />
    </>
  )
}
