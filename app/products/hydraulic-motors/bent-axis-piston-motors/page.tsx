import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { bentAxisPistonMotorProducts } from "@/lib/hydraulic-motors"

export const metadata: Metadata = { title: "Bent Axis Piston Motors | Hydronex", description: "Explore Hydronex Bent Axis Piston Motors." }

export default function BentAxisPistonMotorsPage() {
  return (
    <HydraulicPumpCategoryPage
      categoryName="Bent Axis Piston Motors"
      products={bentAxisPistonMotorProducts}
      basePath="/products/hydraulic-motors/bent-axis-piston-motors"
      parentCategoryName="Hydraulic Motors"
      parentCategoryHref="/products/hydraulic-motors"
      productNoun="Motor"
    />
  )
}
