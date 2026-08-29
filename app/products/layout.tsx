import { ProductsLayoutChrome } from "@/components/products-layout-chrome"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductsLayoutChrome>{children}</ProductsLayoutChrome>
}
