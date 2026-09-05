import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { radialPistonMotorProducts } from "@/lib/hydraulic-motors"

const tmdg2S058Description =
  "TMDG 2 S058 is on kind of low speed high torque radial piston hydraulic motor, it can be widely applied in petroleum industry, chemical industry, mining, shipping, constructing machinery, especially for plastic injection molding machinery, hydraulic winch, transmission etc."

const tmdg2S058Features = [
  "Low Noise",
  "High starring torque (mechanical efficiency Improved to over 0.9), good stability when low speed",
  "High Volumatic's efficiency",
  "Higher mechanical efficiency",
  "Opposite rotating available",
  "Radial and axial load available",
  "Higher kw/kg radio",
]

const tmdg2S058Specifications = [
  { label: "Motor type", value: "Low speed high torque radial piston hydraulic motor" },
  { label: "Mechanical efficiency", value: "Improved to over 0.9" },
  { label: "Rotation", value: "Opposite rotating available" },
  { label: "Load capacity", value: "Radial and axial load available" },
  { label: "Power ratio", value: "Higher kw/kg radio" },
]

const tmdg2S18Description =
  "The Torque TMDG 2 S18 is a low-speed, high-torque radial piston hydraulic motor. It is widely utilized in the petroleum industry, chemical industry, mining, shipping, and building machinery, especially plastic injection molding machinery, hydraulic winch, transmission, and so on."

const tmdg2S18Features = [
  "Low Noise",
  "High staring torque (mechanical efficiency Improved to over 0.9), good stability when low speed",
  "High Volumatic efficiency",
  "Higher mechanical efficiency",
  "Opposite rotating available",
  "Radial and axial load available",
  "Higher kw/kg radio",
]

const tmdg2S18Specifications = [
  { label: "Motor type", value: "Low-speed, high-torque radial piston hydraulic motor" },
  { label: "Mechanical efficiency", value: "Improved to over 0.9" },
  { label: "Rotation", value: "Opposite rotating available" },
  { label: "Load capacity", value: "Radial and axial load available" },
  { label: "Power ratio", value: "Higher kw/kg radio" },
]

const tmdg1Description =
  "Radial piston hydraulic motors are used by Torque TMDG. Superior performance is obtained via the unique Fluid Column Technology in comparison to competing systems. The motors are designed for good mechanical and volumetric performance throughout a wide speed and torque range. Because of their unique design, the Torque TMDG 1 motors provide the optimum performance when high torque values are required. The Torque TMDG 1 motors deliver accurate and smooth movements at low speeds, as well as transitions between acceleration and deceleration. Furthermore, the high starting torque (up to 96%) allows the user to select a smaller motor displacement, reducing the size of all other system components. Target Hydratech Pvt. Ltd is an active producer and supplier of hydraulic goods such as hydraulic motors, valves, pumps, cylinders, and other hydraulic parts."

const tmdg1Features = [
  "high power to weight ratio",
  "high volumetric and mechanical efficiency",
  "high resistance to thermal shock",
  "very low operating noise levels",
  "suitable for fire-resistant and biologically degradable fluids",
  "extremely well suited for control engineering applications",
  "reversible operation (motor and pump)",
]

const tmdg1Specifications = [
  { label: "Technology", value: "Fluid Column Technology" },
  { label: "Starting torque", value: "Up to 96%" },
  { label: "Performance", value: "Good mechanical and volumetric performance" },
  { label: "Operating range", value: "Wide speed and torque range" },
  { label: "Operation", value: "Reversible operation (motor and pump)" },
]

function TMDG2S058AdditionalDetailsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <article className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545]">
            Petroleum industry, chemical industry, mining, shipping, constructing machinery, especially for plastic injection molding machinery, hydraulic winch, transmission etc.
          </p>
        </article>
        <article className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Working Principle</h2>
          <p className="mt-6 text-base leading-8 text-[#454545]">
            High pressure oil comes into the cylinder, working on the piston, pushing the piston down, the piston is connected to the crankshaft, then the crankshaft will turn, together with oil distributor. When piston walks to its lowest position, the cylinder will get through with the oil tank, then the piston goes back. Total 5 pistons work one by one, the crankshaft will turn continually. when the working oil flows oppositely, the shaft will turn in another direction.
          </p>
        </article>
      </div>
    </section>
  )
}

function TMDG2S18AdditionalDetailsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <article className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Applications</h2>
          <p className="mt-6 text-base leading-8 text-[#454545]">
            Petroleum industry, chemical industry, mining, shipping, and building machinery, especially plastic injection molding machinery, hydraulic winch, transmission, and so on.
          </p>
        </article>
        <article className="border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020]">Working Principle</h2>
          <p className="mt-6 text-base leading-8 text-[#454545]">
            High pressure oil reaches the cylinder and works on the piston, causing it down. The piston has a connection to the crankshaft, which then rotates together with the oil distributor. When the piston walks to its lowest point, the cylinder passes through the oil tank and the piston returns. The crankshaft will continue to revolve while all five pistons fire one at a time. When the working oil flows in the other direction, the shaft will turn in the opposite direction.
          </p>
        </article>
      </div>
    </section>
  )
}

function TMDG1ApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Applications</h2>
        <div className="mt-8 max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
          <p className="text-base leading-8 text-[#454545] sm:text-lg">
            High torque applications and control engineering applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return radialPistonMotorProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = radialPistonMotorProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function RadialPistonMotorProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = radialPistonMotorProducts.find((item) => item.slug === slug)
  if (!product) notFound()

  const otherProducts = radialPistonMotorProducts
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  const isTMDG2S058 = product.slug === "torque-tmdg-2-s058"
  const isTMDG2S18 = product.slug === "torque-tmdg-2-s18"
  const isTMDG1 = product.slug === "torque-tmdg-1"

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Radial Piston Motors"
        categoryHref="/products/hydraulic-motors/radial-piston-motors"
        parentCategoryName="Hydraulic Motors"
        parentCategoryHref="/products/hydraulic-motors"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: isTMDG2S058 ? tmdg2S058Description : isTMDG2S18 ? tmdg2S18Description : isTMDG1 ? tmdg1Description : product.name,
          features: isTMDG2S058 ? tmdg2S058Features : isTMDG2S18 ? tmdg2S18Features : isTMDG1 ? tmdg1Features : [],
          specs: isTMDG2S058 ? tmdg2S058Specifications : isTMDG2S18 ? tmdg2S18Specifications : isTMDG1 ? tmdg1Specifications : [],
          applications: [],
        }}
        additionalSpecificationSection={
          isTMDG2S058
            ? <TMDG2S058AdditionalDetailsSection />
            : isTMDG2S18
              ? <TMDG2S18AdditionalDetailsSection />
              : isTMDG1
                ? <TMDG1ApplicationsSection />
                : null
        }
        otherProductsSection={
          <>
            <BSPOtherProducts
              products={otherProducts}
              basePath="/products/hydraulic-motors/radial-piston-motors"
              categoryLabel="Radial Piston Motors"
            />
            <BSPCtaSection
              title="Let’s specify the right radial piston motor."
              description={product.name}
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
