"use client"

import { usePathname } from "next/navigation"
import { LandingProductFooter, LandingProductNavbar } from "@/components/landing-product-chrome"

export function ProductsLayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isProductsLanding = pathname === "/products"

  return (
    <>
      {!isProductsLanding && <LandingProductNavbar />}
      <div>{children}</div>
      {!isProductsLanding && <LandingProductFooter />}
    </>
  )
}
