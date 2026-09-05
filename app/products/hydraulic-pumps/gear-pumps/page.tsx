import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { gearPumpProducts } from "@/lib/hydraulic-pumps"
export const metadata: Metadata = { title: "Gear Pumps | Hydronex", description: "Explore Hydronex Gear Pumps." }
export default function GearPumpsPage() { return <HydraulicPumpCategoryPage categoryName="Gear Pumps" products={gearPumpProducts} basePath="/products/hydraulic-pumps/gear-pumps" /> }
