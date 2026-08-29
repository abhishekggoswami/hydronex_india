"use client"

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react"

const STORAGE_KEY = "hydronex-liked-products"

export interface LikedProduct {
  id: number
  name: string
  code: string
  image?: string
  slug?: string
  href?: string
}

interface LikedProductsContextValue {
  likedProducts: LikedProduct[]
  isLiked: (id: number) => boolean
  toggleLike: (product: LikedProduct) => void
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
}

const LikedProductsContext = createContext<LikedProductsContextValue | null>(null)

export function LikedProductsProvider({ children }: { children: ReactNode }) {
  const [likedProducts, setLikedProducts] = useState<LikedProduct[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [storageReady, setStorageReady] = useState(false)

  // Keep the cart-like list available after a refresh as well as during route navigation.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) setLikedProducts(JSON.parse(saved) as LikedProduct[])
    } catch {
      window.localStorage.removeItem(STORAGE_KEY)
    } finally {
      setStorageReady(true)
    }
  }, [])

  useEffect(() => {
    if (!storageReady) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(likedProducts))
    } catch {
      // Storage may be unavailable; in-memory behavior remains functional.
    }
  }, [likedProducts, storageReady])

  const isLiked = useCallback(
    (id: number) => likedProducts.some((p) => p.id === id),
    [likedProducts]
  )

  const toggleLike = useCallback((product: LikedProduct) => {
    setLikedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id)
      return exists ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    })
  }, [])

  return (
    <LikedProductsContext.Provider
      value={{ likedProducts, isLiked, toggleLike, drawerOpen, setDrawerOpen }}
    >
      {children}
    </LikedProductsContext.Provider>
  )
}

export function useLikedProducts() {
  const ctx = useContext(LikedProductsContext)
  if (!ctx) throw new Error("useLikedProducts must be used within LikedProductsProvider")
  return ctx
}
