import type { HydraulicPumpProduct } from "@/lib/hydraulic-pumps"

export const hydraulicCylinderCategories: HydraulicPumpProduct[] = [
  {
    id: 1,
    name: "SINGLE ACTING CYLINDERS",
    slug: "single-acting-cylinders",
    code: "Single Acting",
    image: "/images/hydraulic-cylinders/single-acting-cylinders/welded-type-by-torque.png",
  },
  {
    id: 2,
    name: "DOUBLE ACTING CYLINDERS",
    slug: "double-acting-cylinders",
    code: "Double Acting",
    image: "/images/hydraulic-cylinders/double-acting-cylinders/double-rod-cylinder-by-torque.png",
  },
]

export const singleActingCylinderProducts: HydraulicPumpProduct[] = [
  {
    id: 1,
    name: "Welded-Type by Torque",
    slug: "welded-type-by-torque",
    code: "Welded-Type",
    image: "/images/hydraulic-cylinders/single-acting-cylinders/welded-type-by-torque.png",
  },
  {
    id: 2,
    name: "Telescopic Cylinders by toque",
    slug: "telescopic-cylinders-by-toque",
    code: "Telescopic",
    image: "/images/hydraulic-cylinders/single-acting-cylinders/telescopic-cylinders-by-toque.png",
  },
  {
    id: 3,
    name: "Lift Cylinders by Torque",
    slug: "lift-cylinders-by-torque",
    code: "Lift",
    image: "/images/hydraulic-cylinders/single-acting-cylinders/lift-cylinders-by-torque.png",
  },
]

export const doubleActingCylinderProducts: HydraulicPumpProduct[] = [
  {
    id: 1,
    name: "Double Rod Cylinder BY torque",
    slug: "double-rod-cylinder-by-torque",
    code: "Double Rod",
    image: "/images/hydraulic-cylinders/double-acting-cylinders/double-rod-cylinder-by-torque.png",
  },
  {
    id: 2,
    name: "Welded-Type Cylinders",
    slug: "welded-type-cylinders",
    code: "Welded-Type",
    image: "/images/hydraulic-cylinders/double-acting-cylinders/welded-type-cylinders.png",
  },
  {
    id: 3,
    name: "Tie Rod-Type Cylinders by Torque",
    slug: "tie-rod-type-cylinders-by-torque",
    code: "Tie Rod-Type",
    image: "/images/hydraulic-cylinders/double-acting-cylinders/tie-rod-type-cylinders-by-torque.png",
  },
  {
    id: 4,
    name: "Mill-Type Cylinders by Torque",
    slug: "mill-type-cylinders-by-torque",
    code: "Mill-Type",
    image: "/images/hydraulic-cylinders/double-acting-cylinders/mill-type-cylinders-by-torque.png",
  },
]
