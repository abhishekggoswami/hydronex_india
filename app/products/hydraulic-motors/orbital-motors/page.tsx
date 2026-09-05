import type { Metadata } from "next"
import { HydraulicPumpCategoryPage } from "@/components/hydraulic-pump-category-page"
import { orbitalMotorProducts } from "@/lib/hydraulic-motors"

export const metadata: Metadata = { title: "Orbital Motors | Hydronex", description: "Explore Hydronex Orbital Motors." }

export default function OrbitalMotorsPage() {
  return <HydraulicPumpCategoryPage categoryName="Orbital Motors" products={orbitalMotorProducts} basePath="/products/hydraulic-motors/orbital-motors" parentCategoryName="Hydraulic Motors" parentCategoryHref="/products/hydraulic-motors" productNoun="Motor" introduction={["A orbitals gear motor with a star-like rotor and a stator with corresponding internal teeth is called an orbital motor. The rotor can roll in a circular motion inside the stator because it has one less tooth than the stator. The fluid flow establishes a pressure variations that drives the rotors' rotation.", "Applications for orbital motors contain mobile and industrial settings. They may produce high torques at very slow speeds (approximately 5 rpm) and have very low leaks of oil."]} />
}
