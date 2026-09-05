import { BSPOtherProducts } from "@/components/bsp-other-products"

type HosePreview = { slug: string; name: string; shortName: string; standard: string; tagline: string; image: string }

export function HydraulicHoseOtherProducts({ products }: { products: HosePreview[] }) {
  return (
    <BSPOtherProducts
      products={products.map((hose) => ({
        slug: hose.slug,
        name: hose.name,
        shortName: hose.shortName,
        code: hose.standard,
        tagline: hose.tagline,
        image: hose.image,
      }))}
      title="Other Hydraulic Hoses"
      basePath="/products/hydraulic-hoses"
      categoryLabel="Hydraulic Hoses"
    />
  )
}
