import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { variableDisplacementPumpProducts } from "@/lib/hydraulic-pumps"

export const metadata: Metadata = {
  title: "Variable Displacement Pumps | Hydronex",
  description: "Explore Hydronex Variable Displacement Pumps.",
}

export default function VariableDisplacementPumpsPage() {
  return <HydraulicPumpCategoryPage categoryName="Variable Displacement Pumps" products={variableDisplacementPumpProducts} basePath="/products/hydraulic-pumps/variable-displacement-pumps" />
}
