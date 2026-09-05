import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductDetail } from "@/components/bsp-product-detail"
import { BSPOtherProducts } from "@/components/bsp-other-products"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { bentAxisPistonMotorProducts } from "@/lib/hydraulic-motors"

const dinProductDescription =
  "Torque THPM 010-130 DIN is of the bent-axis type with spherical pistons. The design results in a compact motor with few moving parts, high starting torque and high reliability. It covers the entire displacement range 10-130 cm³/rev. at a maximum pressure of 400 bar. It features double tapered roller bearings, permit high shaft loads and gives superb speed performance. The high level of reliability is based on the choice of materials, hardening methods, surface structures and the quality assured manufacturing process. Target Hydratech also offers a two-bolt flange, THPM 010-130 DIN in the THPM family."

const dinProductFeatures = [
  "High maximum speed",
  "Smooth operation over the entire speed range",
  "Available in many different configurations of shafts and connections",
  "High efficiency",
  "Speed sensor available as option",
  "Suitable for applications with high angular accelerations due to its high rotary stiffness",
]

const dinProductSpecifications = [
  { label: "Motor design", value: "Bent-axis type with spherical pistons" },
  { label: "Displacement range", value: "10-130 cm³/rev." },
  { label: "Maximum pressure", value: "400 bar" },
  { label: "Bearings", value: "Double tapered roller bearings" },
  { label: "Performance", value: "High starting torque and high reliability" },
]

const dinMotorProductDescription =
  "TORQUE THPM 010-130 DIN is of the bent-axis type with spherical pistons. The design results in a compact motor with few moving parts, high starting torque and high reliability. It covers the entire displacement range 10-130 cm³/rev. at a maximum pressure of 400 bar. It features double tapered roller bearings, permit high shaft loads and gives superb speed performance. The high level of reliability is based on the choice of materials, hardening methods, surface structures and the quality assured manufacturing process. Target Hydratech also offers a two-bolt flange, TORQUE THPM 010-130 DIN in the THPM family."

const wheelMotorDescription =
  "Torque THPM 025-108 M2 modern motor with cartridge flange ideal choice for which, slewing, wheel & track drives. Torque THPM 025-108 is an bent-axis type with spherical pistons. The robust design gives a perfect compact motor with few moving parts, high starting torque and perfect reliability. The displacement is form 25-108 cm/rev with a maximum 400 ar. It comes with double tapered roller bearings that allow high shaft loads and results perfect speed performance. This pump meets the market’s high demand due to its high flow performance, pressure efficiency and simplest of installation."

const wheelMotorFeatures = [
  "Low noise levels at high maximum speed due to it quality production and design.",
  "The Operation over the entire speed range is smooth.",
  "We offer it in many different types of shafts and connections parts.",
  "long life with high performance.",
  "An ideal solution for application that require high angular accelerations",
]

const wheelMotorSpecifications = [
  { label: "Motor type", value: "Bent-axis type with spherical pistons" },
  { label: "Displacement", value: "25-108 cm/rev" },
  { label: "Maximum pressure", value: "400 ar" },
  { label: "Mounting", value: "Cartridge flange" },
  { label: "Bearings", value: "Double tapered roller bearings" },
]

const isoProductDescription =
  "Torque THPM 012-130 ISO is bent-axis motors an ideal for mobile hydraulics. These motors are spherical pistons as a type of torque bent-axis THPM 012-130 ISO is bent-axis type with spherical pistons. The robust design gives a perfect compact motor with few moving parts, high starting torque and perfect reliability. The displacement is from 12-130 cm/rev with a max 400bar. It comes with double tapered roller bearings that allow high shaft loads and results perfect speed performance. This pump meets the market's high demands due to its high flow performance, pressure efficiency and simplest of installation."

const isoProductFeatures = [
  "Low noise levels at high max. speed due to its quality production and design.",
  "The operation over the entire speed range is smooth.",
  "We offer it in many different types of shafts and connections parts.",
  "Long life with high performance.",
  "An ideal solution for applications that require high angular accelerations.",
]

const isoProductSpecifications = [
  { label: "Motor type", value: "Bent-axis type with spherical pistons" },
  { label: "Displacement", value: "12-130 cm/rev" },
  { label: "Maximum pressure", value: "400bar" },
  { label: "Applications", value: "Ideal for mobile hydraulics" },
  { label: "Bearings", value: "Double tapered roller bearings" },
]

const isoFlangeProductDescription =
  "THPM 012-130 ISO is bent-axis motors an ideal for mobile hydraulics. These motors are spherical pistons as a type of Torque bent-axis THPM 012-130 ISO is bent-axis type with spherical pistons. The robust design gives a perfect compact motor with few moving parts, high starting torque and perfect reliability. The displacement is from 12-130 cm/rev with a max. 400bar. It comes with double tapered roller bearings that allow high shaft loads and results perfect speed performance. This pump meets the market's high demands due to its high flow performance, pressure efficiency and simplest of installation."

const isoFlangeProductFeatures = [
  "Low noise levels at high max. speed due to its quality production and design.",
  "The operation over the entire speed range is smooth",
  "We offer it in many different types of shafts and connections parts.",
  "Long life with high performance.",
  "An ideal solution for applications that require high angular accelerations.",
]

const isoFlangeProductSpecifications = [
  { label: "Motor type", value: "Bent-axis type with spherical pistons" },
  { label: "Displacement", value: "12-130 cm/rev" },
  { label: "Maximum pressure", value: "400bar" },
  { label: "Applications", value: "Ideal for mobile hydraulics" },
  { label: "Bearings", value: "Double tapered roller bearings" },
]

function DINApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Applications</h2>
        <div className="mt-8 max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
          <p className="text-base leading-8 text-[#454545] sm:text-lg">
            Suitable for applications with high angular accelerations due to its high rotary stiffness.
          </p>
        </div>
      </div>
    </section>
  )
}

function WheelMotorApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Applications</h2>
        <div className="mt-8 max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
          <p className="text-base leading-8 text-[#454545] sm:text-lg">
            Ideal choice for slewing, wheel &amp; track drives, and an ideal solution for application that require high angular accelerations.
          </p>
        </div>
      </div>
    </section>
  )
}

function ISOProductDetailsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2f8fc] px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Applications</h2>
          <div className="mt-8 border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
            <p className="text-base leading-8 text-[#454545] sm:text-lg">
              Ideal for mobile hydraulics and an ideal solution for applications that require high angular accelerations.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="border-l-4 border-[#f15a24] pl-4 text-3xl font-bold tracking-tight text-[#173154] sm:text-4xl">
            Dimensional Data
          </h2>
          <div className="group mt-10 overflow-hidden border border-[#d5e2eb] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:p-12">
            <div className="overflow-hidden bg-white">
            <img
              src="/images/hydraulic-motors/bent-axis-piston-motors/torque-thpm-010-130-iso-dimensional-data-white-background.png"
              alt="Torque THPM-010-130 ISO dimensional data diagram"
              className="h-auto w-full bg-white object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ISOFlangeApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2f8fc] px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f15a24]">Where it performs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Applications</h2>
        <div className="mt-8 max-w-3xl border-l-4 border-[#f15a24] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
          <p className="text-base leading-8 text-[#454545] sm:text-lg">
            Ideal for mobile hydraulics and an ideal solution for applications that require high angular accelerations.
          </p>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return bentAxisPistonMotorProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = bentAxisPistonMotorProducts.find((item) => item.slug === slug)
  return product ? { title: `${product.name} | Hydronex`, description: product.name } : {}
}

export default async function BentAxisPistonMotorProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = bentAxisPistonMotorProducts.find((item) => item.slug === slug)
  if (!product) notFound()

  const otherProducts = bentAxisPistonMotorProducts
    .filter((item) => item.slug !== product.slug)
    .map((item) => ({ ...item, shortName: item.name }))

  const isDINProduct = product.slug === "torque-thpm-010-130-din"
  const isDINMotorProduct = product.slug === "torque-thpm-bent-axis-piston-motor-din"
  const isWheelMotor = product.slug === "torque-wheel-motor"
  const isISOProduct = product.slug === "torque-thpm-010-130-iso"
  const isISOFlangeProduct = product.slug === "torque-thpm-bent-axis-piston-motor-iso-flange"

  return (
    <>
      <BSPProductDetail
        editorialHero
        categoryName="Bent Axis Piston Motors"
        categoryHref="/products/hydraulic-motors/bent-axis-piston-motors"
        parentCategoryName="Hydraulic Motors"
        parentCategoryHref="/products/hydraulic-motors"
        product={{
          name: product.name,
          shortName: product.name,
          slug: product.slug,
          image: product.image,
          description: isDINProduct
            ? dinProductDescription
            : isDINMotorProduct
              ? dinMotorProductDescription
            : isWheelMotor
              ? wheelMotorDescription
              : isISOProduct
                ? isoProductDescription
                : isISOFlangeProduct
                  ? isoFlangeProductDescription
                : product.name,
          features: isDINProduct
            ? dinProductFeatures
            : isDINMotorProduct
              ? dinProductFeatures
            : isWheelMotor
              ? wheelMotorFeatures
              : isISOProduct
                ? isoProductFeatures
                : isISOFlangeProduct
                  ? isoFlangeProductFeatures
                  : [],
          specs: isDINProduct
            ? dinProductSpecifications
            : isDINMotorProduct
              ? dinProductSpecifications
            : isWheelMotor
              ? wheelMotorSpecifications
              : isISOProduct
                ? isoProductSpecifications
                : isISOFlangeProduct
                  ? isoFlangeProductSpecifications
                : [],
          applications: [],
        }}
        additionalSpecificationSection={
          isDINProduct
            ? <DINApplicationsSection />
            : isDINMotorProduct
              ? <DINApplicationsSection />
            : isWheelMotor
              ? <WheelMotorApplicationsSection />
              : isISOProduct
                ? <ISOProductDetailsSection />
                : isISOFlangeProduct
                  ? <ISOFlangeApplicationsSection />
                : null
        }
        otherProductsSection={
          <>
            <BSPOtherProducts
              products={otherProducts}
              basePath="/products/hydraulic-motors/bent-axis-piston-motors"
              categoryLabel="Bent Axis Piston Motors"
            />
            <BSPCtaSection
              title="Let’s specify the right bent axis piston motor."
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
