import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { vanePumpProducts } from "@/lib/hydraulic-pumps"

export const metadata: Metadata = {
  title: "Vane Pumps | Hydronex",
  description: "Explore Hydronex Vane Pumps.",
}

export default function VanePumpsPage() {
  return (
    <HydraulicPumpCategoryPage
      categoryName="Vane Pumps"
      products={vanePumpProducts}
      basePath="/products/hydraulic-pumps/vane-pumps"
    />
  )
}
