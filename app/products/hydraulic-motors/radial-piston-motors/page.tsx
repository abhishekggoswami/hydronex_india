import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { radialPistonMotorProducts } from "@/lib/hydraulic-motors"

export const metadata: Metadata = { title: "Radial Piston Motors | Hydronex", description: "Explore Hydronex Radial Piston Motors." }

export default function RadialPistonMotorsPage() {
  return (
    <HydraulicPumpCategoryPage
      categoryName="Radial Piston Motors"
      products={radialPistonMotorProducts}
      basePath="/products/hydraulic-motors/radial-piston-motors"
      parentCategoryName="Hydraulic Motors"
      parentCategoryHref="/products/hydraulic-motors"
      productNoun="Motor"
    />
  )
}
