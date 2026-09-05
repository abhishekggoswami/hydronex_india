import { Metadata } from "next"
import Link from "next/link"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { HydraulicAdaptersHeroSection } from "@/components/hydraulic-adapters-hero-section"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "Hydraulic Adapters – All Standard Configurations | Hydronex",
  description:
    "Hydronex supplies a comprehensive range of hydraulic adapters across all standard configurations — NPT, BSP, JIC, ORFS, Metric, SAE and more. Precision-engineered for leak-free, high-pressure performance.",
}

const category = "Hydraulic Adapters"
const heroTitle = "Hydraulic Adapters - All Standard Configurations"
const heroDescription = "Hydronex supplies a comprehensive range of hydraulic adapters across all standard configurations - NPT, BSP, JIC, ORFS, Metric, SAE and more. Precision-engineered for leak-free, high-pressure performance."

// ── Real adapter products ─────────────────────────────────────────────────────
// Each product is { id, name, code, image? }
// No slug field — this category has no individual product pages.
const adapterProducts: { id: number; name: string; code: string; image?: string }[] = [
  {
    id: 1,
    name: "1E - Metric Male O-Ring - Metric Thread O-Ring Face Seal Fittings",
    code: "1E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1E%20-%20Metric%20Male%20O-Ring%20-%20Metric%20Thread%20O-Ring%20Face%20Seal%20Fittings-XsRR4tj0CwwQBfmtfTgbifSHejA5WO.png",
  },
  {
    id: 2,
    name: "1E9 - Metric Male O-Ring (90°Elbows) - Metric Thread O-Ring Face Seal Fittings",
    code: "1E9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1E9%20-%20Metric%20Male%20O-Ring%20%2890%C2%B0Elbows%29%20-%20Metric%20Thread%20O-Ring%20Face%20Seal%20Fittings-lnO7rbWk8kvD4nza0y7aK9hGWZgjNf.png",
  },
  {
    id: 3,
    name: "1EH - Metric Male O-Ring × Metric Male ISO 6149-2",
    code: "1EH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EH%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Male%20ISO%206149-2-awUuRiYsIKk4KRwLc4Zs4laVUkciHx.png",
  },
  {
    id: 4,
    name: "1EH4-OG - Metric Male O-Ring × Metric Male Adjustable Stud ISO 6149-2 (45°Elbows)",
    code: "1EH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EH4-OG%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO%206149-2%20%2845%C2%B0Elbows%29-JLoDeKX6btiq8PQRatpAp8LV3iuzf5.png",
  },
  {
    id: 5,
    name: "1EH9-OG - Metric Male O-Ring × Metric Male Adjustable Stud ISO 6149-2 (90°Elbows)",
    code: "1EH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EH9-OG%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO%206149-2%20%2890%C2%B0Elbows%29-p9T3kefuS4te6XgvxT7QnbTB4sYGxQ.png",
  },
  {
    id: 6,
    name: "2E9 - Metric Male O-Ring × Metric Female O-Ring (90°Elbows) - Metric Thread O-Ring Face Seal Fittings",
    code: "2E9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2E9%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Female%20O-Ring%20%2890%C2%B0Elbows%29%20-%20Metric%20Thread%20O-Ring%20Face%20Seal%20Fittings-pdKZEbhtuvHVRJVoNVgtjlXm19MQwy.png",
  },
  {
    id: 7,
    name: "4E - Metric Male O-Ring Plug - Metric Thread O-Ring Face Seal Fittings",
    code: "4E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4E%20-%20Metric%20Male%20O-Ring%20Plug%20-%20Metric%20Thread%20O-Ring%20Face%20Seal%20Fittings-GUblJN5wUyKvbw1bhieCurMvEKPEwU.png",
  },
  {
    id: 8,
    name: "6E - Metric Male O-Ring Bulkhead",
    code: "6E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6E%20-%20Metric%20Male%20O-Ring%20Bulkhead-kcpCYnOgnWSPSjxTvr76sjK3OK8KJI.png",
  },
  {
    id: 9,
    name: "6E9 - Metric Male O-Ring Bulkhead (90°Elbows)",
    code: "6E9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6E9%20-%20Metric%20Male%20O-Ring%20Bulkhead%20%2890%C2%B0Elbows%29-Tn3bjpeyjGxUfLufjyHBO74nhdoJMc.png",
  },
  {
    id: 10,
    name: "9E - Metric Female O-Ring Plug - Metric Thread O-Ring Face Seal Fittings",
    code: "9E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9E%20-%20Metric%20Female%20O-Ring%20Plug%20-%20Metric%20Thread%20O-Ring%20Face%20Seal%20Fittings-DRxKvpOIy1amwwm7bi7e3N7dhIgKgK.png",
  },
  {
    id: 11,
    name: "1EM - Metric Male O-Ring × Metric 60°with Bonded Seal",
    code: "1EM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EM%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%2060%C2%B0with%20Bonded%20Seal-HRH6Sj9i7whx5zWky8ks6QzAnsDWep.png",
  },
  {
    id: 12,
    name: "1EN - Metric Male O-Ring × NPT Male",
    code: "1EN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EN%20-%20Metric%20Male%20O-Ring%20%C3%97%20NPT%20Male-DFhtu5m9tUcKylZnBwmOLHX8IPOeUg.png",
  },
  {
    id: 13,
    name: "1ET - Metric Male O-Ring × BSPT Male",
    code: "1ET",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ET%20-%20Metric%20Male%20O-Ring%20%C3%97%20BSPT%20Male-t3iiacaEHWrSZmUPVZuRry8YImjc1Q.png",
  },
  {
    id: 14,
    name: "1EW - Metric Male O-Ring × Butt-Weld Tube",
    code: "1EW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EW%20-%20Metric%20Male%20O-Ring%20%C3%97%20Butt-Weld%20Tube-AXllOkdraBewm0cvyJLAN1RIhaIQUJ.png",
  },
  {
    id: 15,
    name: "1EW9 - Metric Male O-Ring × Butt-Weld Tube (90°Elbows)",
    code: "1EW9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EW9%20-%20Metric%20Male%20O-Ring%20%C3%97%20Butt-Weld%20Tube%20%2890%C2%B0Elbows%29-lOBbbDPi9ERIwWVjrEBKixtm6nAWj6.png",
  },
  {
    id: 16,
    name: "1EZ - Metric Male O-Ring × BSP Male DIN 3852-2 Tyre A",
    code: "1EZ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1EZ%20-%20Metric%20Male%20O-Ring%20%C3%97%20BSP%20Male%20DIN%203852-2%20Tyre%20A-ofvFm9pPToSPLqlYncUPnfZ6M3ilN4.png",
  },
  {
    id: 17,
    name: "2WE - Butt-Weld Tube × Metric Female O-Ring",
    code: "2WE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2WE%20-%20Butt-Weld%20Tube%20%C3%97%20Metric%20Female%20O-Ring-3qHbrcAA6NPFpq9jL2rblncdOixfLv.png",
  },
  {
    id: 18,
    name: "AE - Metric Male O-Ring Tee",
    code: "AE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE%20-%20Metric%20Male%20O-Ring%20Tee-Fd4qaPaTcigLbARzcOAsngofhnoqFP.png",
  },
  {
    id: 19,
    name: "BE - Metric Male O-Ring × Metric Female Tee",
    code: "BE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BE%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Female%20Tee-blhCqXXFf3BZtAsE2jV5tf4M7xNAaT.png",
  },
  {
    id: 20,
    name: "XE - Metric Male O-Ring Cross",
    code: "XE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XE%20-%20Metric%20Male%20O-Ring%20Cross-kl4nxLow6LGkNXJo2NkbGcbuNd3v5B.png",
  },
  {
    id: 21,
    name: "1C - Metric Male 24° L.T.",
    code: "1C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1C%20-%20Metric%20Male%2024%C2%B0%20L.T.-2JZk10bg8No5jxp6pRkwl0O7SG4MZd.png",
  },
  {
    id: 22,
    name: "1C - Metric Male 24° Reducers",
    code: "1C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1C%20-%20Metric%20Male%2024%C2%B0%20Reducers-XfZjn9X3Dpe8DzW0LgOLHh1aD7vWQE.png",
  },
  {
    id: 23,
    name: "1C9 - Metric Male 24°L.T. (90°Elbows)",
    code: "1C9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1C9%20-%20Metric%20Male%2024%C2%B0L.T.%20%2890%C2%B0Elbows%29-bnjGokhbr4MHY5K0ZCficg7L1bU5dt.png",
  },
  {
    id: 24,
    name: "1D - Metric Male 24° H.T.",
    code: "1D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1D%20-%20Metric%20Male%2024%C2%B0%20H.T.-gl4h079Tz39eCf5BOywP0CPL7p5zUo.png",
  },
  {
    id: 25,
    name: "1D - Metric Male 24° Reducers",
    code: "1D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1D%20-%20Metric%20Male%2024%C2%B0%20Reducers-MEKgsZswa48twaIaIvw9QPTSAZ0CaB.png",
  },
  {
    id: 26,
    name: "AE6EE - Metric Male O-Ring Bulkhead Branch Tee",
    code: "AE6EE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE6EE%20-%20Metric%20Male%20O-Ring%20Bulkhead%20Branch%20Tee-NbSEq6lrk1vX23s7HXgSYxAXkkKpls.png",
  },
  {
    id: 27,
    name: "AEE6E - 90°Metric Male O-Ring Bulkhead Run Tee",
    code: "AEE6E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEE6E%20-%2090%C2%B0Metric%20Male%20O-Ring%20Bulkhead%20Run%20Tee-If2pR8JWJ3viXsgWMkhvOu2K4gMzfl.png",
  },
  {
    id: 28,
    name: "AEEH-OG - Metric Male O-Ring × Metirc Male Adjustable Stud S-Series Run Tee",
    code: "AEEH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEEH-OG%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metirc%20Male%20Adjustable%20Stud%20S-Series%20Run%20Tee-v3121hkjvGIxA0MjnJCFD4INj2JLxl.png",
  },
  {
    id: 29,
    name: "AEHE-OG - Metric Male O-Ring × Metirc Male Adjustable Stud S-Series Branch Tee",
    code: "AEHE-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEHE-OG%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metirc%20Male%20Adjustable%20Stud%20S-Series%20Branch%20Tee-bzNZFPJfWud4dJ7pKI1TRJlToMLB3b.png",
  },
  {
    id: 30,
    name: "CE - Metric Male O-Ring × Metric Female Tee",
    code: "CE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CE%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Female%20Tee-y3JzSgo5tBDV3ZB3ZpZvhLxJqbsbAA.png",
  },
  {
    id: 31,
    name: "1D9 - Metric Male 24°H.T. (90°Elbows)",
    code: "1D9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1D9%20-%20Metric%20Male%2024%C2%B0H.T.%20%2890%C2%B0Elbows%29-mI6Mf7ojyjNEiHomxrD2VSj6lJhdKV.png",
  },
  {
    id: 32,
    name: "2C - Metric Female 24°× Metric Male 24°L.T.",
    code: "2C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2C%20-%20Metric%20Female%2024%C2%B0%C3%97%20Metric%20Male%2024%C2%B0L.T.-mt4ylR21llLi7KW9pWWwHTjRRVGFgf.png",
  },
  {
    id: 33,
    name: "2C9 - 90°Metric Female 24°× Metric Male 24°L.T.(90°Elbows)",
    code: "2C9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2C9%20-%2090%C2%B0Metric%20Female%2024%C2%B0%C3%97%20Metric%20Male%2024%C2%B0L.T.%2890%C2%B0Elbows%29-drySqzSsmzzXd769XyIzuNDrfLnwz2.png",
  },
  {
    id: 34,
    name: "2D - Metric Female 24°× Metric Male 24°H.T.",
    code: "2D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D%20-%20Metric%20Female%2024%C2%B0%C3%97%20Metric%20Male%2024%C2%B0H.T.-51oQw3nGXgHjc3r6KeNgO393UB3VW7.png",
  },
  {
    id: 35,
    name: "2D9 - 90°Metric Female 24°× Metric Male 24°H.T.(90°Elbows)",
    code: "2D9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D9%20-%2090%C2%B0Metric%20Female%2024%C2%B0%C3%97%20Metric%20Male%2024%C2%B0H.T.%2890%C2%B0Elbows%29-2vRObAas3vDyejEOl7Q6PfMCMawweO.png",
  },
  {
    id: 36,
    name: "3C - Metric Female 24°L.T.",
    code: "3C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3C%20-%20Metric%20Female%2024%C2%B0L.T.-x6IACmpnzH7CANwL3RuTm6ZEqGb87R.png",
  },
  {
    id: 37,
    name: "3D - Metric Female 24°H.T.",
    code: "3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20-%20Metric%20Female%2024%C2%B0H.T.-0eRSabJvdrEuz9wfMU7FTl4a4YztQr.png",
  },
  {
    id: 38,
    name: "4C - Metric Male 24°L.T. Pulg",
    code: "4C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4C%20-%20Metric%20Male%2024%C2%B0L.T.%20Pulg-crrd4nrKiWLqhyURJQawZirPBml7cT.png",
  },
  {
    id: 39,
    name: "4D - Metric Male 24°H.T. Plug",
    code: "4D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4D%20-%20Metric%20Male%2024%C2%B0H.T.%20Plug-sxaz7QHQpUK52LYrNrM0c6gxi4RvZl.png",
  },
  {
    id: 40,
    name: "6C - Metric Male 24° L.T. Bulkhead",
    code: "6C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6C%20-%20Metric%20Male%2024%C2%B0%20L.T.%20Bulkhead-z80y10RbHePFh5g8TP4EyV7s1rwUvg.png",
  },
  {
    id: 41,
    name: "1CN - Metric Male 24°L.T. × NPT Male 60°",
    code: "1CN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CN%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20NPT%20Male%2060%C2%B0-fxOCggooV0BXTyFLo7FmD5cNUBODVH.png",
  },
  {
    id: 42,
    name: "1CN9 - Metric Male 24°L.T. × NPT Male 60° (90°Elbows)",
    code: "1CN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CN9%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20NPT%20Male%2060%C2%B0%20%2890%C2%B0Elbows%29-5CJK6NqrFBj6EsUbOcS51WTDTgcFI7.png",
  },
  {
    id: 43,
    name: "1DN - Metric Male 24°H.T. × NPT Male 60°",
    code: "1DN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DN%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20NPT%20Male%2060%C2%B0-nzGVNUwCdUUC1wFBmSBmElQc5IRTWJ.png",
  },
  {
    id: 44,
    name: "1DN9 - Metric Male 24°H.T. × NPT Male 60° (90°Elbows)",
    code: "1DN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DN9%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20NPT%20Male%2060%C2%B0%20%2890%C2%B0Elbows%29-EKihHshbpElM4ij9avyWSBSWnb9axt.png",
  },
  {
    id: 45,
    name: "6C9 - 90° Metric Male 24° L.T. Bulkhead",
    code: "6C9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6C9%20-%2090%C2%B0%20Metric%20Male%2024%C2%B0%20L.T.%20Bulkhead-JbVCRjO6A0ImjR4I5eaPPxSCY03YBw.png",
  },
  {
    id: 46,
    name: "6D - Metric Male 24° H.T. Bulkhead",
    code: "6D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6D%20-%20Metric%20Male%2024%C2%B0%20H.T.%20Bulkhead-HqwRdum0R097K9VBWbk3qpth6dkC0J.png",
  },
  {
    id: 47,
    name: "6D9 - 90° Metric Male 24° H.T. Bulkhead",
    code: "6D9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6D9%20-%2090%C2%B0%20Metric%20Male%2024%C2%B0%20H.T.%20Bulkhead-eeDnGPoC12v73xYEcQARfHqLyIAct8.png",
  },
  {
    id: 48,
    name: "8C - Metric Lock Nut",
    code: "8C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8C%20-%20Metric%20Lock%20Nut-U2cT6n3etRezdnZ2ZRWDGC1W7zRedU.png",
  },
  {
    id: 49,
    name: "9C - Metric Female 24° L.T. Plug",
    code: "9C",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9C%20-%20Metric%20Female%2024%C2%B0%20L.T.%20Plug-4sRfPLOtuH9h50zjPwV9zQwPCO6U1F.png",
  },
  {
    id: 50,
    name: "9D - Metric Female 24° H.T. Plug",
    code: "9D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9D%20-%20Metric%20Female%2024%C2%B0%20H.T.%20Plug-k1lDW8vm8BS9I5GYxOqFGDhyizwSW8.png",
  },
  {
    id: 51,
    name: "1CB - Metric Male 24°L.T. × BSP Male Double 60 °Seat Bonded Seal",
    code: "1CB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CB%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%20Double%2060%20%C2%B0Seat%20Bonded%20Seal-p4pt4SOgwPZa6b49ZF1uiaYGO80ALJ.png",
  },
  {
    id: 52,
    name: "1CB-WD - Metric Male 24°L.T. × BSP Thread With Captive Seal",
    code: "1CB-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CB-WD%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Thread%20With%20Captive%20Seal-ys4alXSoZprMH94KX3O3IQkRmrJsEz.png",
  },
  {
    id: 53,
    name: "1CB9 - Metric Male 24°L.T. × BSP Male 60°Cone (90°Elbows)",
    code: "1CB9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CB9%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-kyGnnCSl4wf3JbqHBaM1tEbIDOhPU4.png",
  },
  {
    id: 54,
    name: "1CT - Metric Male 24°L.T. × BSPT Male 60°",
    code: "1CT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CT%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSPT%20Male%2060%C2%B0-ZI3mmKHynqDVK1iQPksjCqDvAFFdks.png",
  },
  {
    id: 55,
    name: "1CT9 - Metric Male 24°L.T. × BSPT Male 60° (90°Elbows)",
    code: "1CT9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CT9%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSPT%20Male%2060%C2%B0%20%2890%C2%B0Elbows%29-40aCywZh4tQCu3GIygK3Bl6wWvtSuD.png",
  },
  {
    id: 56,
    name: "1DB - Metric Male 24°H.T. × BSP Male Double 60 °Seat Bonded Seal",
    code: "1DB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DB%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20Double%2060%20%C2%B0Seat%20Bonded%20Seal-JdOzewIIgzC9n14aSxvBl6dPAc26Rd.png",
  },
  {
    id: 57,
    name: "1DB-WD - Metric Male 24°H.T. × BSP Thread With Captive Seal",
    code: "1DB-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DB-WD%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Thread%20With%20Captive%20Seal-mqmZJJSOXhHOZ2Moyxj5ep42qCXOsv.png",
  },
  {
    id: 58,
    name: "1DB9 - Metric Male 24°H.T. × BSP Male BSP Male 60°Cone (90°Elbows)",
    code: "1DB9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DB9%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20BSP%20Male%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-sYsHin7oQJMsXY6BHATSmZNKxsAe0y.png",
  },
  {
    id: 59,
    name: "1DT - Metric Male 24°H.T. × BSPT Male 60°",
    code: "1DT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DT%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSPT%20Male%2060%C2%B0-54Wlwd1q61zXUwcg2ZeIYP1MNiMGyH.png",
  },
  {
    id: 60,
    name: "1DT9 - Metric Male 24°H.T. × BSPT Male 60° (90°Elbows)",
    code: "1DT9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DT9%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSPT%20Male%2060%C2%B0%20%2890%C2%B0Elbows%29-6sNHd82pJabZw18LNW2U7IBWUUwZ2Y.png",
  },
  {
    id: 61,
    name: "1CG - Metric Male 24°L.T. × BSP Male with O-Ring",
    code: "1CG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%20with%20O-Ring-QGjjfRal3AvYdEmltTXThupA6nU5OQ.png",
  },
  {
    id: 62,
    name: "1CG4-OG - Metric Male 24°L.T. × BSP Thread Adjustable Stud Ends with O-Ring Seal (45°Elbows)",
    code: "1CG4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CG4-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Thread%20Adjustable%20Stud%20Ends%20with%20O-Ring%20Seal%20%2845%C2%B0Elbows%29-6mVG9MSjTyMWN8ewdtLIaw8pgAvMsr.png",
  },
  {
    id: 63,
    name: "1CG9-OG - Metric Male 24°L.T. × BSP Thread Adjustable Stud Ends with O-Ring Seal (90°Elbows)",
    code: "1CG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CG9-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Thread%20Adjustable%20Stud%20Ends%20with%20O-Ring%20Seal%20%2890%C2%B0Elbows%29-cr69l1BbI68bocgknIM8sbeO1Tn0EI.png",
  },
  {
    id: 64,
    name: "1CH - Metric Male 24°L.T. × Metric Male ISO6149-2",
    code: "1CH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CH%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Male%20ISO6149-2-gbMhnZbmYkJvGIx36E9OUdkbcJmH30.png",
  },
  {
    id: 65,
    name: "1CH4-OG - Metric Male 24°L.T. × Metric Male Thread Adjustable Stud Ends ISO6149-2 (45°Elbows)",
    code: "1CH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CH4-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Male%20Thread%20Adjustable%20Stud%20Ends%20ISO6149-2%20%2845%C2%B0Elbows%29-agRGOkuvRQ7k0Kse79mlhmyNi43zsQ.png",
  },
  {
    id: 66,
    name: "1DG - Metric Male 24°H.T. × BSP Male with O-Ring",
    code: "1DG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20with%20O-Ring-v3KPIjMdunLTuMqRJQsfJdhXHbFIp8.png",
  },
  {
    id: 67,
    name: "1DG4-OG - Metric Male 24°H.T. × BSP Thread Adjustable Stud Ends with O-Ring Seal (45°Elbows)",
    code: "1DG4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DG4-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Thread%20Adjustable%20Stud%20Ends%20with%20O-Ring%20Seal%20%2845%C2%B0Elbows%29-8rO4yvGbM0e1Cus02uRi6ZHkJYG5L6.png",
  },
  {
    id: 68,
    name: "1DG9-OG - Metric Male 24°H.T. × BSP Thread Adjustable Stud Ends with O-Ring Seal (90°Elbows)",
    code: "1DG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DG9-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Thread%20Adjustable%20Stud%20Ends%20with%20O-Ring%20Seal%20%2890%C2%B0Elbows%29-sDk2MJgLKORf5xxX5pZ8rrbJ5D4Gfg.png",
  },
  {
    id: 69,
    name: "1DH - Metric Male 24°H.T. × Metric Male ISO6149-2",
    code: "1DH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DH%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Male%20ISO6149-2-OAKMk5gGCudvhTpYCfRKY7sHiOVXiY.png",
  },
  {
    id: 70,
    name: "1DH4-OG - Metric Male 24°H.T. × Metric Male Thread Adjustable Stud Ends ISO6149-2 (45°Elbows)",
    code: "1DH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DH4-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Male%20Thread%20Adjustable%20Stud%20Ends%20ISO6149-2%20%2845%C2%B0Elbows%29-34BaWVdZXopqsTPNZgSm1QuyJg29iJ.png",
  },
  {
    id: 71,
    name: "1CH9-OG - Metric Male 24°L.T. × Metric Male Thread Adjustable Stud Ends ISO6149-2 (90°Elbows)",
    code: "1CH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CH9-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Male%20Thread%20Adjustable%20Stud%20Ends%20ISO6149-2%20%2890%C2%B0Elbows%29-LcHnfRWmTZoD6RWRr9aNNcVPRUrbP4.png",
  },
  {
    id: 72,
    name: "1CJ - Metric Male 24°L.T. × JIC 74° Cone Seal",
    code: "1CJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CJ%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20JIC%2074%C2%B0%20Cone%20Seal-SCvwZYWrQsXUdpFOQypAENR7ecq8cw.png",
  },
  {
    id: 73,
    name: "1CM - Metric Male 24°L.T. × 60°Cone Bonded Seal",
    code: "1CM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CM%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%2060%C2%B0Cone%20Bonded%20Seal-raG0uQaHjKck5uz1Jox5lSvw2rCKvh.png",
  },
  {
    id: 74,
    name: "1CM-WD - Metric Male 24°L.T. × 60°Cone Captive Seal",
    code: "1CM-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CM-WD%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%2060%C2%B0Cone%20Captive%20Seal-aX3Psl9fCFzYPhvJJ3ZmyqmEDvP8Su.png",
  },
  {
    id: 75,
    name: "1CO - Metric Male 24°L.T. × SAE Male O-Ring",
    code: "1CO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CO%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20SAE%20Male%20O-Ring-211YEK1KNQvUDFpXt23W33lYo27NI3.png",
  },
  {
    id: 76,
    name: "1DH9-OG - Metric Male 24°H.T. × Metric Male Thread Adjustable Stud Ends ISO6149-2 (90°Elbows)",
    code: "1DH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DH9-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Male%20Thread%20Adjustable%20Stud%20Ends%20ISO6149-2%20%2890%C2%B0Elbows%29-Jem8PbYuPGG8jWJfBm3hnKyAivSCFe.png",
  },
  {
    id: 77,
    name: "1DJ - Metric Male 24°H.T. × JIC 74° Cone Seal",
    code: "1DJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DJ%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20JIC%2074%C2%B0%20Cone%20Seal-RGW12DObApwM92qTdNmQBstKFUoqxi.png",
  },
  {
    id: 78,
    name: "1DM - Metric Male 24°H.T. × 60°Cone Bonded Seal",
    code: "1DM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DM%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%2060%C2%B0Cone%20Bonded%20Seal-AByK0g1sfy9E5rKdWOBgiNTg3mmWoe.png",
  },
  {
    id: 79,
    name: "1DM-WD - Metric Male 24°H.T. × 60°Cone Captive Seal",
    code: "1DM-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DM-WD%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%2060%C2%B0Cone%20Captive%20Seal-4MOu3SiXBqDXJ37RcbJmVF4W1CqGtK.png",
  },
  {
    id: 80,
    name: "1DO - Metric Male 24°H.T. × SAE Male O-Ring",
    code: "1DO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DO%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20SAE%20Male%20O-Ring-5R4PRteE9rnwm0CCdEexAHxQYE1s0Z.png",
  },
  {
    id: 81,
    name: "1CO9-OG - Metric 24°L.T. × SAE Male Adjustable Stud (90°Elbows)",
    code: "1CO9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CO9-OG%20-%20Metric%2024%C2%B0L.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-mELP6qFuRSrnY2ZLzabpScV7izfS3w.png",
  },
  {
    id: 82,
    name: "1CW - Metric Male 24°L.T. × Weld Fittings",
    code: "1CW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CW%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Weld%20Fittings-h1zADn8UqxCsXqqa3Oz6xroDPdA2gd.png",
  },
  {
    id: 83,
    name: "1DO9-OG - Metric 24°H.T. × SAE Male Adjustable Stud (90°Elbows)",
    code: "1DO9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DO9-OG%20-%20Metric%2024%C2%B0H.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-PExhfuYOUJTkT6cRbyj1SU9tyW4fMd.png",
  },
  {
    id: 84,
    name: "1DW - Metric Male 24°H.T. × Weld Fittings",
    code: "1DW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DW%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Weld%20Fittings-g19hBiSjDzLaqnIsN6tWDsG9BHf4Pr.png",
  },
  {
    id: 85,
    name: "2BC-WD - Metric Female 24°L.T. × BSP Male Double 60°Seat Bonded Seal",
    code: "2BC-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2BC-WD%20-%20Metric%20Female%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%20Double%2060%C2%B0Seat%20Bonded%20Seal-yZKNsgi4h9iipFenHAuEkdU0kANj1Q.png",
  },
  {
    id: 86,
    name: "2BD-WD - Metric Female 24°H.T. × BSP Male Double 60°Seat Bonded Seal",
    code: "2BD-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2BD-WD%20-%20Metric%20Female%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20Double%2060%C2%B0Seat%20Bonded%20Seal-0lWvwoObPXkg8ychZYS6mLQdZ741Sm.png",
  },
  {
    id: 87,
    name: "2GC - Metric Female 24°L.T.Cone O-Ring × BSP Maleo-Ring",
    code: "2GC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2GC%20-%20Metric%20Female%2024%C2%B0L.T.Cone%20O-Ring%20%C3%97%20BSP%20Maleo-Ring-oYESPFoUxHHqNVx9pl1Ag3nBAPn0s9.png",
  },
  {
    id: 88,
    name: "2GD - Metric Female 24°H.T.Cone O-Ring × BSP Maleo-Ring",
    code: "2GD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2GD%20-%20Metric%20Female%2024%C2%B0H.T.Cone%20O-Ring%20%C3%97%20BSP%20Maleo-Ring-LME0TnKX1tECFdOeFR8OcwOv80HWLx.png",
  },
  {
    id: 89,
    name: "2JC - JIC 74° × Metric Female 24° O-Ring Sealing L.T.",
    code: "2JC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2JC%20-%20JIC%2074%C2%B0%20%C3%97%20Metric%20Female%2024%C2%B0%20O-Ring%20Sealing%20L.T.-PXVW43iMBVLAVyZM3Kz8729XwvTrB4.png",
  },
  {
    id: 90,
    name: "2JD - Metric Male O-Ring × Metric Female O-Ring (90°Elbows)",
    code: "2JD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2JD%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Female%20O-Ring%20%2890%C2%B0Elbows%29-6Gqcvj1a9jj3iHKWJ6Mgpj4kfPhiLQ.png",
  },
  {
    id: 91,
    name: "2MC-WD - Metric Thread × Metric Female24 °Cone O-Ring Seal L.T.",
    code: "2MC-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2MC-WD%20-%20Metric%20Thread%20%C3%97%20Metric%20Female24%20%C2%B0Cone%20O-Ring%20Seal%20L.T.-MQCCMwkw8nKofjlC93IZK0hv8W0FUG.png",
  },
  {
    id: 92,
    name: "2MD-WD - Metric Thread × Metric Female24 °Cone O-Ring Seal H.T.",
    code: "2MD-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2MD-WD%20-%20Metric%20Thread%20%C3%97%20Metric%20Female24%20%C2%B0Cone%20O-Ring%20Seal%20H.T.-bj6iubPDsSzrFPZhFoEQZJCoy1TDIx.png",
  },
  {
    id: 93,
    name: "5CB - Metric Male 24°L.T. × BSP Female",
    code: "5CB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5CB%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Female-ZfGTh3daRFeUkEcI02kJJK71o1QEf8.png",
  },
  {
    id: 94,
    name: "5CM - Metric Male 24°L.T. × Metric Female",
    code: "5CM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5CM%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Female-IElNXXibGVk7FhlrxEPTxHcS3dqty2.png",
  },
  {
    id: 95,
    name: "5DB - Metric Male 24°H.T. × BSP Female",
    code: "5DB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5DB%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Female-AH99VZbuhWA0Lo5VukkUmql85UwqnV.png",
  },
  {
    id: 96,
    name: "5DM - Metric Male 24°H.T. × Metric Female",
    code: "5DM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5DM%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Female-PRSnYEdpndOXCPgdb8H2MfOdaEJXHm.png",
  },
  {
    id: 97,
    name: "AC - Metric Male 24°L.T. Tee",
    code: "AC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC%20-%20Metric%20Male%2024%C2%B0L.T.%20Tee-fIiGLrbM11q3gfnKdCJbNUEtgP0A0k.png",
  },
  {
    id: 98,
    name: "AD - Metric Male 24°H.T. Tee",
    code: "AD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AD%20-%20Metric%20Male%2024%C2%B0H.T.%20Tee-LQHt47k5SmHsCzYG7WCbKaYSMXfuFe.png",
  },
  {
    id: 99,
    name: "BC - Metric Female 24° × Metric Male 24°L.T. Tee",
    code: "BC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BC%20-%20Metric%20Female%2024%C2%B0%20%C3%97%20Metric%20Male%2024%C2%B0L.T.%20Tee-Pd8XAY8w11OOfRGowUwc7CP3TmHmWl.png",
  },
  {
    id: 100,
    name: "BD - Metric Female 24° × Metric Male 24°H.T. Tee",
    code: "BD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD%20-%20Metric%20Female%2024%C2%B0%20%C3%97%20Metric%20Male%2024%C2%B0H.T.%20Tee-yxZDYn8rZS6trPB37WV667bNyCZDkO.png",
  },
  {
    id: 101,
    name: "ACCG-OG - Metric Male 24°L.T. × BSP Male Adjustable Stud Run Tee",
    code: "ACCG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACCG-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%20Adjustable%20Stud%20Run%20Tee-1Zqpxm6ntVN6il9rcRafdg5bFaYM6h.png",
  },
  {
    id: 102,
    name: "ACCH-OG - Metric Male 24°L.T. × Metric Male Adjustable Stud ISO6149-2 Run Tee",
    code: "ACCH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACCH-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO6149-2%20Run%20Tee-e3Nx3gqdAtoGEvMwEJ94TblhW1Sv4Q.png",
  },
  {
    id: 103,
    name: "ACHC-OG - Metric Male 24°L.T. × Metric Male Adjustable Stud ISO6149-2 Bradch Tee",
    code: "ACHC-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACHC-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO6149-2%20Bradch%20Tee-1g9mxAiz3kYSfrV8iVGG34BuBAY5J1.png",
  },
  {
    id: 104,
    name: "ADDG-OG - Metric Male 24°H.T. × BSP Male Adjustable Stud Run Tee",
    code: "ADDG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADDG-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20Adjustable%20Stud%20Run%20Tee-F0QlcAag5MIpWB19BqKrqh9jQKAdzp.png",
  },
  {
    id: 105,
    name: "ADDH-OG - Metric Male 24°H.T. × Metric Male Adjustable Stud ISO6149-2 Run Tee",
    code: "ADDH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADDH-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO6149-2%20Run%20Tee-cepVeBvGYNiH8X5342HYJ232h7msuJ.png",
  },
  {
    id: 106,
    name: "ADHD-OG - Metric Male 24°H.T. × Metric Male Adjustable Stud ISO6149-2 Bradch Tee",
    code: "ADHD-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADHD-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20ISO6149-2%20Bradch%20Tee-MteDB8onSGx4edmadU471R0p2TRZ5m.png",
  },
  {
    id: 107,
    name: "CC - Metric Male 24° × Metric Female 24°L.T. Tee",
    code: "CC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CC%20-%20Metric%20Male%2024%C2%B0%20%C3%97%20Metric%20Female%2024%C2%B0L.T.%20Tee-nAJRIE9BoOaJW0B5MZTb52W4pubVAe.png",
  },
  {
    id: 108,
    name: "CD - Metric Male 24° × Metric Female 24°H.T. Tee",
    code: "CD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CD%20-%20Metric%20Male%2024%C2%B0%20%C3%97%20Metric%20Female%2024%C2%B0H.T.%20Tee-SrEasSWolORhK3Hr3JGypVzE9QdJWw.png",
  },
  {
    id: 109,
    name: "XC - Metric Male 24°L.T. Cross",
    code: "XC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XC%20-%20Metric%20Male%2024%C2%B0L.T.%20Cross-lgsrHko6b8nAWExRi13f8bIwEeidtZ.png",
  },
  {
    id: 110,
    name: "XD - Metric Male 24°H.T. Cross",
    code: "XD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XD%20-%20Metric%20Male%2024%C2%B0H.T.%20Cross-YeQd01gfUaA8QKZOtb88WOp2Ic0udV.png",
  },
  {
    id: 111,
    name: "1CL - Metric Male 24°L.T. × Metric Banjo",
    code: "1CL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CL%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20Metric%20Banjo-ZSqUkkZe7OIhGA6s4Z3SVjILeLu3Aq.png",
  },
  {
    id: 112,
    name: "1CL-B - Metric Male 24°L.T. × BSP Banjo",
    code: "1CL-B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CL-B%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Banjo-sGg0yCSMSyPngfroiA0JdAGGcy6zFV.png",
  },
  {
    id: 113,
    name: "1DL - Metric Male 24°H.T. × Metric Banjo",
    code: "1DL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DL%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20Metric%20Banjo-4DqdSeuW6ZRHnPAWUuujwz5oUYHpin.png",
  },
  {
    id: 114,
    name: "1DL-B - Metric Male 24°H.T. × BSP Banjo",
    code: "1DL-B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DL-B%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Banjo-pvgFxsLROytGz8iumBFa5MJAnHbbJF.png",
  },
  {
    id: 115,
    name: "ACCO-OG - Metric Male 24°L.T. × SAE Male Adjustable Stud Run Tee",
    code: "ACCO-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACCO-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20Run%20Tee-gHOQE4Cf2bAEtI6x95GSMR3MKMZZvN.png",
  },
  {
    id: 116,
    name: "ACGC-OG - Metric Male 24°L.T. × BSP Male Adjustable Stud Branch Tee",
    code: "ACGC-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACGC-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20BSP%20Male%20Adjustable%20Stud%20Branch%20Tee-65uKEFEhxgUQv2B6BG7CuOg39EsIO2.png",
  },
  {
    id: 117,
    name: "ACOC-OG - Metric Male 24°L.T. × SAE Male Adjustable Stud Branch Tee",
    code: "ACOC-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACOC-OG%20-%20Metric%20Male%2024%C2%B0L.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20Branch%20Tee-h79wGlqMpWwLUgxmAgQIDUbATA2aam.png",
  },
  {
    id: 118,
    name: "ADDO-OG - Metric Male 24°H.T. × SAE Male Adjustable Stud Run Tee",
    code: "ADDO-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADDO-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20Run%20Tee-80zQcHUkKxYD0nrGG4d5CW390QdPBM.png",
  },
  {
    id: 119,
    name: "ADGD-OG - Metric Male 24°H.T. × BSP Male Adjustable Stud Branch Tee",
    code: "ADGD-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADGD-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20BSP%20Male%20Adjustable%20Stud%20Branch%20Tee-fv1A5v7HvqrHZUWXtMYjrPOChSJQrb.png",
  },
  {
    id: 120,
    name: "ADOD-OG - Metric Male 24°H.T. × SAE Male Adjustable Stud Branch Tee",
    code: "ADOD-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADOD-OG%20-%20Metric%20Male%2024%C2%B0H.T.%20%C3%97%20SAE%20Male%20Adjustable%20Stud%20Branch%20Tee-O4NWBxJt77khgkXxjeqObnLZYwduQP.png",
  },
  {
    id: 121,
    name: "1Q - Metric Male 74°Cone",
    code: "1Q",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Q%20-%20Metric%20Male%2074%C2%B0Cone-vfcHN62bXwL1DM6PHHOA7fsCDgvqE3.png",
  },
  {
    id: 122,
    name: "4Q - Metric Male 74°Cone Plug",
    code: "4Q",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4Q%20-%20Metric%20Male%2074%C2%B0Cone%20Plug-VCHIW4R7NFI7bWRCV523LjqHfn0DW5.png",
  },
  {
    id: 123,
    name: "6Q - Metric Male 74°Cone Bulkhead",
    code: "6Q",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6Q%20-%20Metric%20Male%2074%C2%B0Cone%20Bulkhead-tRQxF4NxWT4gjgttZf20vc1bIkB7Oa.png",
  },
  {
    id: 124,
    name: "6Q9 - 90° Metric Male 74°Cone Bulkhead",
    code: "6Q9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6Q9%20-%2090%C2%B0%20Metric%20Male%2074%C2%B0Cone%20Bulkhead-clDWX2f7sXM2UtSf2KpShUFbdIfKhK.png",
  },
  {
    id: 125,
    name: "700M - Metric Bolt",
    code: "700M",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/700M%20-%20Metric%20Bolt-Me1k8XPx5mVgKeK1TQdJod6aT1oqJm.png",
  },
  {
    id: 126,
    name: "720B - BSP Bolt",
    code: "720B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/720B%20-%20BSP%20Bolt-74N0OYxaxUV5oCLk6ArQww5bbzsem9.png",
  },
  {
    id: 127,
    name: "NL - Retaining Nuts L.T.",
    code: "NL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NL%20-%20Retaining%20Nuts%20L.T.-KF7i0rXoHS40GLCPUxULUO2sxw2dt8.png",
  },
  {
    id: 128,
    name: "NS - Retaining Nuts H.T.",
    code: "NS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NS%20-%20Retaining%20Nuts%20H.T.-kAN9Q6MKmYlF1kWpBeAt6ivnqQlxtC.png",
  },
  {
    id: 129,
    name: "RL - Cutting Ring L.T.",
    code: "RL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RL%20-%20Cutting%20Ring%20L.T.-RoxLuPlBPhG7YdYUZnuSc3TZXzTvEe.png",
  },
  {
    id: 130,
    name: "RS - Cutting Ring H.T.",
    code: "RS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RS%20-%20Cutting%20Ring%20H.T.-5RxqDTxf57fTQ8ndpCkFP3PTA2Y6hL.png",
  },
  {
    id: 131,
    name: "1QB - Metric Male 74°Cone × BSP Male Double For 60 °Seat Bonded Seal",
    code: "1QB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QB%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20Double%20For%2060%20%C2%B0Seat%20Bonded%20Seal-VPNET86hSH7e8phwEmbsuCUQTXjptu.png",
  },
  {
    id: 132,
    name: "1QG - Metric Male 74°Cone × BSP Male O-Ring",
    code: "1QG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QG%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring-AHBNpGW8NXFuaWXoQSIjvAawa9n6cn.png",
  },
  {
    id: 133,
    name: "1QG9-OG - Metric Male 74°Cone × BSP Male O-Ring Adjustable Stud (90°Elbows)",
    code: "1QG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QG9-OG%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-Soq301vFK2a3jo3ObaixGXsFMkA0ii.png",
  },
  {
    id: 134,
    name: "1QH - Metric 74°Cone × Metric Male",
    code: "1QH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QH%20-%20Metric%2074%C2%B0Cone%20%C3%97%20Metric%20Male-OWIUjnmNKGWZdOnpBc9kw6uHrG8qRX.png",
  },
  {
    id: 135,
    name: "1QH9-OG - Metric 74°Cone × Metric Male Adjustable Stud (90°Elbows)",
    code: "1QH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QH9-OG%20-%20Metric%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-GAqunsXjijPEeWY79YZY8lubfA8ST2.png",
  },
  {
    id: 136,
    name: "1QN - Metric Male 74°Cone × NPT Male",
    code: "1QN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QN%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male-qdDmXVG4fmgXjPnb9DioQPiZZSxVbS.png",
  },
  {
    id: 137,
    name: "1QN4 - Metric Male 74°Cone × NPT Male (45°Elbows)",
    code: "1QN4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QN4%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20%2845%C2%B0Elbows%29-dJR4ColdC3Hm1mgsdXePa0wgoqKEu9.png",
  },
  {
    id: 138,
    name: "1QN9 - Metric Male 74°Cone × NPT Male (90°Elbows)",
    code: "1QN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QN9%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20%2890%C2%B0Elbows%29-3JKahbw5Zaxkl4mizpco16rHCrlAIG.png",
  },
  {
    id: 139,
    name: "1QT - Metric Male 74°Cone × BSPT Male",
    code: "1QT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QT%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Male-BUUGV9uBLreUzXVdgbYgb51q5Gw16o.png",
  },
  {
    id: 140,
    name: "1QT9 - Metric Male 74°Cone × BSPT Male (90°Elbows)",
    code: "1QT9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QT9%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Male%20%2890%C2%B0Elbows%29-5ZPW7n2GCm9UEEzExd8ZJpB6yV8prG.png",
  },
  {
    id: 141,
    name: "1QM - Metric Male 74°Cone × Metric Male Double For 60 °Seat Bonded Seal",
    code: "1QM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QM%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Double%20For%2060%20%C2%B0Seat%20Bonded%20Seal-GS6fJpIAseDSTSrD3066SN2uJhkvLQ.png",
  },
  {
    id: 142,
    name: "1QO - Metric Male 74°Cone × SAE Male O-Ring",
    code: "1QO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QO%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20Male%20O-Ring-WYGNre7DE5XcQvIBSapOr1U8G7GT30.png",
  },
  {
    id: 143,
    name: "1QO9-OG - Metric Male 74°Cone × SAE Male O-Ring Adjustable Stud (90° Elbows)",
    code: "1QO9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1QO9-OG%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20Male%20O-Ring%20Adjustable%20Stud%20%2890%C2%B0%20Elbows%29-TE746Uh56isqZPLcBxC7tIV6gvCHRD.png",
  },
  {
    id: 144,
    name: "1K - JIS Metric Male 60° Cone",
    code: "1K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1K%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone-aUOSE3v3SeTlNXF8iWepgamezDaZTC.png",
  },
  {
    id: 145,
    name: "4K - JIS Metric Male 60° Cone Plug",
    code: "4K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4K%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20Plug-o5yMvNNj4cdTeSB6fszKqwThWiP79O.png",
  },
  {
    id: 146,
    name: "2K9 - JIS Metric Male 60° Cone × JIS Metric Female 60° (90°Elbows)",
    code: "2K9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2K9%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20JIS%20Metric%20Female%2060%C2%B0%20%2890%C2%B0Elbows%29-KivfxoOdwEaMdr1xd4mhtGiYmtHGMR.png",
  },
  {
    id: 147,
    name: "2Q9 - Metric Male 74°Cone × Metric Female 74°Seat (90° Elbows)",
    code: "2Q9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2Q9%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Female%2074%C2%B0Seat%20%2890%C2%B0%20Elbows%29-ZhFQ0OUSiS9zF9NRWKuWV6jrURQI3h.png",
  },
  {
    id: 148,
    name: "AQ - Metric Male 74°Cone Tee",
    code: "AQ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQ%20-%20Metric%20Male%2074%C2%B0Cone%20Tee-4FOiSYg775bnPbDb06aFWCVPRpbpOI.png",
  },
  {
    id: 149,
    name: "AQHQ-OG - Metric Male 74°Cone × Adjustable Stud Branch Tee",
    code: "AQHQ-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQHQ-OG%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20Adjustable%20Stud%20Branch%20Tee-uatxP5MzkAyNacexujUUfhAIv9Upf8.png",
  },
  {
    id: 150,
    name: "AQQH-OG - Metric Male 74°Cone × Adjustable Stud Run Tee",
    code: "AQQH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQQH-OG%20-%20Metric%20Male%2074%C2%B0Cone%20%C3%97%20Adjustable%20Stud%20Run%20Tee-jFuLO6zdQnHZDwJhFMrdsnHnUDhNsq.png",
  },
  {
    id: 151,
    name: "9K - JIS Metric Female 60° Seat Plug",
    code: "9K",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9K%20-%20JIS%20Metric%20Female%2060%C2%B0%20Seat%20Plug-iWSy4DLKscGLRdTgC1QPKVX2eaytTr.png",
  },
  {
    id: 152,
    name: "1KG - JIS Metric Male 60°Cone × BSP Male O-Ring",
    code: "1KG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KG%20-%20JIS%20Metric%20Male%2060%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring-Mq9Lc8VwH3EtiFMkt7slXfGNr7Sd9I.png",
  },
  {
    id: 153,
    name: "1KG9-OG - JIS Meric Male × BSP Male O-Ring Adjustable Stud (90°Elbows)",
    code: "1KG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KG9-OG%20-%20JIS%20Meric%20Male%20%C3%97%20BSP%20Male%20O-Ring%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-o0mxE4QjkR0Z01APHGCAdlu08tqa8F.png",
  },
  {
    id: 154,
    name: "1KH - JIS Metric Male 60° Cone × Metric Male S-Series",
    code: "1KH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KH%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20Metric%20Male%20S-Series-GDVl429ZBVmqkGUPbw1atQ1Az0oTbt.png",
  },
  {
    id: 155,
    name: "1KH9-OG - JIS Metric Male 60°Cone × Metric Ale Adjustable Stud (90°Elbows)",
    code: "1KH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KH9-OG%20-%20JIS%20Metric%20Male%2060%C2%B0Cone%20%C3%97%20Metric%20Ale%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-ajfro9DRfT4cDhu19o9aiiv9LFCViP.png",
  },
  {
    id: 156,
    name: "1KM - JIS Metric Male 60° Cone × Metric Male 60° Cone Bonded Seal",
    code: "1KM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KM%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20Metric%20Male%2060%C2%B0%20Cone%20Bonded%20Seal-0f44ZMuTMwDQDVbAwFFrflfN8CS2o6.png",
  },
  {
    id: 157,
    name: "1KN - JIS Metric Male 60° Cone × NPT Male",
    code: "1KN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KN%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20NPT%20Male-RuDETwQLRvrdh3eRPkQNfCC735itAy.png",
  },
  {
    id: 158,
    name: "1KT - JIS Metric Male 60°Cone × BSPT Male",
    code: "1KT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1KT%20-%20JIS%20Metric%20Male%2060%C2%B0Cone%20%C3%97%20BSPT%20Male-gZ2jRxnHu8L9hc8nRJaWqelHNqKvQI.png",
  },
  {
    id: 159,
    name: "AK - JIS Metric Male 60° Cone Tee",
    code: "AK",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AK%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20Tee-5Bc3GRgeF59oSFXey7HcTgyuhMObuo.png",
  },
  {
    id: 160,
    name: "BK - JIS Metric Male 60° Cone × JIS Metric Female 60 °Seat Branch Tee",
    code: "BK",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BK%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20JIS%20Metric%20Female%2060%20%C2%B0Seat%20Branch%20Tee-xmGJQWOzsIvaZAZpPeJ2JsD3rwKwZ4.png",
  },
  {
    id: 161,
    name: "1S - JIS Gas Male 60°Cone",
    code: "1S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1S%20-%20JIS%20Gas%20Male%2060%C2%B0Cone-RcXT8goMKSeWdwqLf3Cvev4ToP6x0k.png",
  },
  {
    id: 162,
    name: "1V - Metric Male 74° Cone Seat",
    code: "1V",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1V%20-%20Metric%20Male%2074%C2%B0%20Cone%20Seat-NAthenPhPRRUxw6vkakDEv1S7II7n0.png",
  },
  {
    id: 163,
    name: "1VT - Metric Male 74° Cone Seat × BSPT Male",
    code: "1VT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1VT%20-%20Metric%20Male%2074%C2%B0%20Cone%20Seat%20%C3%97%20BSPT%20Male-xyLQ0lrOLm2NpHgg0AxOzwLSZc05DJ.png",
  },
  {
    id: 164,
    name: "4S - JIS Gas Male 60°Cone Plug",
    code: "4S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4S%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20Plug-DIxsmw1260TkQ38wiCf5xD1BZ4LOWh.png",
  },
  {
    id: 165,
    name: "6S - JIS Gas Male 60°Cone Bulkhead",
    code: "6S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6S%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20Bulkhead-6FMJ7ha4b3uueqFHQi4lS3PYnPEXaA.png",
  },
  {
    id: 166,
    name: "9S - JIS Gas Female 60°Seat Plug",
    code: "9S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9S%20-%20JIS%20Gas%20Female%2060%C2%B0Seat%20Plug-9PXQFAi4WS41SwwoJ61Jy8dtXHkmAb.png",
  },
  {
    id: 167,
    name: "AKGK-OG - JIS Metric Male × BSP Male O-Ring Adjustable Stud Branch Tee",
    code: "AKGK-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKGK-OG%20-%20JIS%20Metric%20Male%20%C3%97%20BSP%20Male%20O-Ring%20Adjustable%20Stud%20Branch%20Tee-AIIkTgML50iAi7CdbY4RQnMMwrH2ZS.png",
  },
  {
    id: 168,
    name: "AKHK-OG - JIS Metric Male 60° Cone × Adjustable Stud Branchtee",
    code: "AKHK-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKHK-OG%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20Adjustable%20Stud%20Branchtee-tJoBfwh057RCHLkY0sLXh8MO1Y0Oxs.png",
  },
  {
    id: 169,
    name: "AKKG-OG - JIS Metric Male × BSP Male O-Ring Run Tee Adjustable Stud",
    code: "AKKG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKKG-OG%20-%20JIS%20Metric%20Male%20%C3%97%20BSP%20Male%20O-Ring%20Run%20Tee%20Adjustable%20Stud-q34pEqxNB4n0Wmt7oW4DLU1ecIjamo.png",
  },
  {
    id: 170,
    name: "AKKH-OG - JIS Metric Male 60° Cone × Adjustable Stud Run Tee",
    code: "AKKH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKKH-OG%20-%20JIS%20Metric%20Male%2060%C2%B0%20Cone%20%C3%97%20Adjustable%20Stud%20Run%20Tee-8zCGlcblDz1U9NCYdaZQRHEy27dj8o.png",
  },
  {
    id: 171,
    name: "1SG - JIS Gas Male 60°Cone × BSP Male O-Ring",
    code: "1SG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SG%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring-s5DKOUKJ9L7M5jFa4s98Vo0p0tQGS9.png",
  },
  {
    id: 172,
    name: "1SG9-OG - JIS Gas Male 60°Cone × BSP Male O-RING Adjustable Stud (90°Elbows)",
    code: "1SG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SG9-OG%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSP%20Male%20O-RING%20Adjustable%20Stud%20%2890%C2%B0Elbows%29-v85rAJGWFJMzkxK1Eb4dH4CyEq6IFd.png",
  },
  {
    id: 173,
    name: "1SN - JIS Gas Male 60°Cone × NPT Male",
    code: "1SN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SN%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20NPT%20Male-JTPHfB707Fgd8kiibzgr8h304g1aAi.png",
  },
  {
    id: 174,
    name: "1SN4 - JIS Gas Male 60°Cone × NPT Male (45°Elbows)",
    code: "1SN4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SN4%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20NPT%20Male%20%2845%C2%B0Elbows%29-W3LSBvkTAmopbd2JYM1GMBbSTX4hXH.png",
  },
  {
    id: 175,
    name: "1SN9 - JIS Gas Male 60°Cone × NPT Male (90°Elbows)",
    code: "1SN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SN9%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20NPT%20Male%20%2890%C2%B0Elbows%29-v1UwD8jDWzmWbJg5SaUAnksDM7boJr.png",
  },
  {
    id: 176,
    name: "1ST - JIS Gas Male 60°Cone × BSPT Male",
    code: "1ST",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ST%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSPT%20Male-cfoIXM6oS1eviHEPtzf7BHLuwO91Mg.png",
  },
  {
    id: 177,
    name: "1ST4 - JIS Gas Male 60°Cone × BSPT Male (45°Elbows)",
    code: "1ST4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ST4%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSPT%20Male%20%2845%C2%B0Elbows%29-FpHFaZXYBD1uouk2foZKqjYsRbwmZF.png",
  },
  {
    id: 178,
    name: "1ST9 - JIS Gas Male 60°Cone × BSPT Male (90°Elbows)",
    code: "1ST9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ST9%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSPT%20Male%20%2890%C2%B0Elbows%29-vd1JfyBtjAZ4FEamGA4GjrNohxCYdg.png",
  },
  {
    id: 179,
    name: "AS - JIS Gas Female 60°Seat Tee",
    code: "AS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%20-%20JIS%20Gas%20Female%2060%C2%B0Seat%20Tee-NP246OPc8itNywdwquCflSEbyN0PUj.png",
  },
  {
    id: 180,
    name: "BS - JIS Gas Male 60°Cone × JIS Gas Female 60°Seat Branch Tee",
    code: "BS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BS%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20JIS%20Gas%20Female%2060%C2%B0Seat%20Branch%20Tee-hdhViFwnXrN7mK3hJO1GsFyvuEJf1q.png",
  },
  {
    id: 181,
    name: "1B - BSP Male Double For 60°Seat Bonded Seal",
    code: "1B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1B%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal-ICaHYiY60UN3BuTLcHfZGpElmkCljW.png",
  },
  {
    id: 182,
    name: "1B4 - BSP Male 60°Seat (45°Elbows)",
    code: "1B4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1B4%20-%20BSP%20Male%2060%C2%B0Seat%20%2845%C2%B0Elbows%29-a1T5d1wWmsABCnHEi9Yr6ZQYbqiiQ3.png",
  },
  {
    id: 183,
    name: "1B9 - BSP Male 60°Seat (90°Elbows)",
    code: "1B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1B9%20-%20BSP%20Male%2060%C2%B0Seat%20%2890%C2%B0Elbows%29-Py37KsEhANtd3LXbFoXlvKFQa7VH0y.png",
  },
  {
    id: 184,
    name: "2B - BSP Male Double For 60°Seat Bonded Seal × BSP Female 60 °Cone",
    code: "2B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2B%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20BSP%20Female%2060%20%C2%B0Cone-CK4jJAWjDVcYhI7gH8uSbXSsueKz7f.png",
  },
  {
    id: 185,
    name: "2B4 - BSP Male 60°Seat × BSP Female 60°Cone (45°Elbows)",
    code: "2B4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2B4%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2845%C2%B0Elbows%29-0nhBiBiDq1o87bUAPCnXDmJSwDGpnx.png",
  },
  {
    id: 186,
    name: "2B9 - BSP Male 60°Seat × BSP Female 60°Cone (90°Elbows)",
    code: "2B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2B9%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-hIuisw6tb1SkWNwXQTZ4DZqmj9rNxR.png",
  },
  {
    id: 187,
    name: "ASGS-OG - JIS Gas Male 60°Cone × BSP Maleo-Ring Adjustable Stud Branch Tee",
    code: "ASGS-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASGS-OG%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSP%20Maleo-Ring%20Adjustable%20Stud%20Branch%20Tee-yz4MDV0DNA51jTT5Whco0WKK69yzlf.png",
  },
  {
    id: 188,
    name: "ASSG-OG - JIS Gas Male 60°Cone × BSP Maleo-Ring Adjustable Stud End Run Tee",
    code: "ASSG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASSG-OG%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20BSP%20Maleo-Ring%20Adjustable%20Stud%20End%20Run%20Tee-gC5Rc8S52SM5n8dH7SYe3VOObegmOF.png",
  },
  {
    id: 189,
    name: "CS - JIS Gas Male 60°Cone × JIS Gas Female 60°Seat Run Tee",
    code: "CS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CS%20-%20JIS%20Gas%20Male%2060%C2%B0Cone%20%C3%97%20JIS%20Gas%20Female%2060%C2%B0Seat%20Run%20Tee-mNU55HlR5o2WRIEteRbVfal8PGDHuP.png",
  },
  {
    id: 190,
    name: "DS - JIS Gas Female 60°Seat Tee",
    code: "DS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DS%20-%20JIS%20Gas%20Female%2060%C2%B0Seat%20Tee-vm7UuAc6DpeUHMGSfXZdYivSxfxcXp.png",
  },
  {
    id: 191,
    name: "1BN - BSP Male Double For 60°Seat Bonded Seal × NPT Male",
    code: "1BN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BN%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20NPT%20Male-c3KlCWh8ayym4rvht356pqj3qMS11B.png",
  },
  {
    id: 192,
    name: "1BT - BSP Male Double For 60°Seat Bonded Seal × BSPT Male",
    code: "1BT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BT%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20BSPT%20Male-5njm1Q6Dj4FQUNqtDubZ5ZOCY8dk2E.png",
  },
  {
    id: 193,
    name: "3B - BSP Female 60°Cone",
    code: "3B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3B%20-%20BSP%20Female%2060%C2%B0Cone-nCE3bldJYZKyPfLXt3m0H4dkaQhi7U.png",
  },
  {
    id: 194,
    name: "3B4 - BSP Female 60°Cone (45°Elbows)",
    code: "3B4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3B4%20-%20BSP%20Female%2060%C2%B0Cone%20%2845%C2%B0Elbows%29-4lgGmS9rxJ2q5EfXmelVIAfNmJozCR.png",
  },
  {
    id: 195,
    name: "3B9 - BSP Female 60°Cone (90°Elbows)",
    code: "3B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3B9%20-%20BSP%20Female%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-7CshUa3KgJiCHpy3lvNafZeVoVAChH.png",
  },
  {
    id: 196,
    name: "4B - BSP Male Double For 60°Seat Or Bonded Seal Plug",
    code: "4B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4B%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Or%20Bonded%20Seal%20Plug-61HJHSJxUNZNuOXw63M4gluIVOtNEj.png",
  },
  {
    id: 197,
    name: "6B - BSP Male 60°Seat Bulkhead",
    code: "6B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6B%20-%20BSP%20Male%2060%C2%B0Seat%20Bulkhead-p9ytBtRxXfOQ4Jn1OVLIPjmcN2OlyO.png",
  },
  {
    id: 198,
    name: "6B9 - 90° Elbows BSP Male 60°Seat Bulkhead",
    code: "6B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6B9%20-%2090%C2%B0%20Elbows%20BSP%20Male%2060%C2%B0Seat%20Bulkhead-OkisAnd3d65LxL5eOI25WxdtZkY6Gp.png",
  },
  {
    id: 199,
    name: "8B - BSP Lock Nut",
    code: "8B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8B%20-%20BSP%20Lock%20Nut-vELFf5SyBNfjPKYrKkGWADvNQnMjTq.png",
  },
  {
    id: 200,
    name: "9B - BSP Female 60°Cone Plug",
    code: "9B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9B%20-%20BSP%20Female%2060%C2%B0Cone%20Plug-q8BeJ0CoLuNc66dLEet3LkjBbxcmwe.png",
  },
  {
    id: 201,
    name: "1BG - BSP Male Double For 60°Seat Bonded Seal × BSPT Male O-Ring",
    code: "1BG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BG%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20BSPT%20Male%20O-Ring-kGgxhtRER2RfeiVwMK66XhEeLaVNDv.png",
  },
  {
    id: 202,
    name: "1BG4-OG - BSP Male 60°Seat × BSP Male O-Ring Adjustable Stud End (45°Elbows)",
    code: "1BG4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BG4-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Male%20O-Ring%20Adjustable%20Stud%20End%20%2845%C2%B0Elbows%29-TPLlYnHjfnImDGjcKYhgZlXxR1mXnR.png",
  },
  {
    id: 203,
    name: "1BG9-OG - BSP Male 60°Seat × BSP Male O-Ring Adjustable Stud End (90°Elbows)",
    code: "1BG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BG9-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Male%20O-Ring%20Adjustable%20Stud%20End%20%2890%C2%B0Elbows%29-si8IGELmtb58MklYevpxr5V1zkyQPs.png",
  },
  {
    id: 204,
    name: "1BH - BSP Male Double For 60°Seat Bonded Seal × Metric Male L-Series",
    code: "1BH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BH%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20Metric%20Male%20L-Series-A94663i0dBWRHeZUS0CEzTfXYe1iCD.png",
  },
  {
    id: 205,
    name: "1BH4-OG - BSP Male 60°Seat × Metric Male 0-Ring (45°Elbows)",
    code: "1BH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BH4-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20Metric%20Male%200-Ring%20%2845%C2%B0Elbows%29-JDCZ7LyxIAJwadYfEdjfY8CfyWeG5s.png",
  },
  {
    id: 206,
    name: "1BH9-OG - BSP Male 60°Seat × Metric Male 0-Ring (90°Elbows)",
    code: "1BH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BH9-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20Metric%20Male%200-Ring%20%2890%C2%B0Elbows%29-a1mBtst9Vyhh5l26r1VUKbInYHEr0b.png",
  },
  {
    id: 207,
    name: "1BN4 - BSP Male 60°Seat × NPT Male (45°Elbows)",
    code: "1BN4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BN4%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20NPT%20Male%20%2845%C2%B0Elbows%29-gflIVAccY8BQNJE14PV4NP554y0Pl9.png",
  },
  {
    id: 208,
    name: "1BN9 - BSP Male 60°Seat × NPT Male (90°Elbows)",
    code: "1BN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BN9%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20NPT%20Male%20%2890%C2%B0Elbows%29-Mxj0JooraontGuNIDnkZFX7d0Y3yLc.png",
  },
  {
    id: 209,
    name: "1BT4 - BSP Male 60°Seat × BSPT Male (45°Elbows)",
    code: "1BT4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BT4%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSPT%20Male%20%2845%C2%B0Elbows%29-9oVPv2r8aGLVWXrX08tcoOcdCtXBxZ.png",
  },
  {
    id: 210,
    name: "1BT9 - BSP Male 60°Seat × BSPT Male (90°Elbows)",
    code: "1BT9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BT9%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSPT%20Male%20%2890%C2%B0Elbows%29-FThOo5STI5shVARQqHrK6odg6zSR4J.png",
  },
  {
    id: 211,
    name: "1B-WD - BSP Male 60°Seat Bonded Seal × BSP Male Captive Seal",
    code: "1B-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1B-WD%20-%20BSP%20Male%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20BSP%20Male%20Captive%20Seal-Ltqd9NGQ8NIz0D4DttZJ1TKyhVb8fp.png",
  },
  {
    id: 212,
    name: "1BJ - BSP Male Double For 60°Seatbonded Seal × JIC Male 74 °Cone",
    code: "1BJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BJ%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seatbonded%20Seal%20%C3%97%20JIC%20Male%2074%20%C2%B0Cone-PhabuaxNpLCh3rTi92PoXmelLUDIrl.png",
  },
  {
    id: 213,
    name: "1BJ4 - BSP Male 60°Seat × JIC Male 74°Cone (45°Elbows)",
    code: "1BJ4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BJ4%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20JIC%20Male%2074%C2%B0Cone%20%2845%C2%B0Elbows%29-7acykqc27JrgsLz8Gm0JHx4Xo3CzM7.png",
  },
  {
    id: 214,
    name: "1BJ9 - BSP Male 60°Seat × JIC Male 74°Cone (90°Elbows)",
    code: "1BJ9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BJ9%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20JIC%20Male%2074%C2%B0Cone%20%2890%C2%B0Elbows%29-2UGFxedw5lU3GuBa1EZ4zjyc50yevv.png",
  },
  {
    id: 215,
    name: "1BM - BSP Male 60°Seat Double 60°Seat Bonded Seal × Metric Male Double 60°Seat Bonded Se",
    code: "1BM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BM%20-%20BSP%20Male%2060%C2%B0Seat%20Double%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20Metric%20Male%20Double%2060%C2%B0Seat%20Bonded%20Se-TdxGCpNoNzJEiNRLD9WUSlBdk6eCAZ.png",
  },
  {
    id: 216,
    name: "1BO - BSP Male 60°Seat Bonded Seal × SAE O-Ring Boss L-Series",
    code: "1BO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BO%20-%20BSP%20Male%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20SAE%20O-Ring%20Boss%20L-Series-3EzoHWRbsp0XQz6iKiBmdqCqxjyqRm.png",
  },
  {
    id: 217,
    name: "1BW - BSP Male 60°Seat Bonded Seal × Butt-Weld Tube",
    code: "1BW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BW%20-%20BSP%20Male%2060%C2%B0Seat%20Bonded%20Seal%20%C3%97%20Butt-Weld%20Tube-MC7CwAZCUnNgXHuNveAlOh5F79luaL.png",
  },
  {
    id: 218,
    name: "2BJ - BSP Male Double For 60°Seatbonded Seal × JIC Female 74 °Seat",
    code: "2BJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2BJ%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seatbonded%20Seal%20%C3%97%20JIC%20Female%2074%20%C2%B0Seat-NQpPhqdWHuiGyf8GmvzIOJ2ygKdqoz.png",
  },
  {
    id: 219,
    name: "2BJ-WD - BSP Male Captive Seal × JIC Female 74 °Seat",
    code: "2BJ-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2BJ-WD%20-%20BSP%20Male%20Captive%20Seal%20%C3%97%20JIC%20Female%2074%20%C2%B0Seat-jtWu5ewtOq74LJ8snzBoHfljoRBOt2.png",
  },
  {
    id: 220,
    name: "2WB - Butt-Weld Tube × BSP Female 60 °Cone",
    code: "2WB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2WB%20-%20Butt-Weld%20Tube%20%C3%97%20BSP%20Female%2060%20%C2%B0Cone-cQO2pys1hHfbypHEbG1fyoKOWO8BG1.png",
  },
  {
    id: 221,
    name: "2NB - NPT Male × BSP Female 60°Cone",
    code: "2NB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NB%20-%20NPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone-ooCvrcU4gUYGuVKzO3OoOpfyouqxsP.png",
  },
  {
    id: 222,
    name: "2NB4 - NPT Male × BSP Female 60°Cone (45°Elbows)",
    code: "2NB4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NB4%20-%20NPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2845%C2%B0Elbows%29-5ThZTafjdsJMDRVsUMSzI90rbgyNVA.png",
  },
  {
    id: 223,
    name: "2NB9 - NPT Male × BSP Female 60°Cone (90°Elbows)",
    code: "2NB9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NB9%20-%20NPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-OLjRCakEwZelDSa7devtjXd8pa09JQ.png",
  },
  {
    id: 224,
    name: "2TB - BSPT Male × BSP Female 60°Cone",
    code: "2TB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2TB%20-%20BSPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone-QHWCCYlwbOahPJqREf0rKokSiBW0Sc.png",
  },
  {
    id: 225,
    name: "2TB4 - BSPT Male × BSP Female 60°Cone (45°Elbows)",
    code: "2TB4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2TB4%20-%20BSPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2845%C2%B0Elbows%29-O51faHti7jqfWWm9cQznMGoQFGhRUQ.png",
  },
  {
    id: 226,
    name: "2TB9 - BSPT Male × BSP Female 60°Cone (90°Elbows)",
    code: "2TB9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2TB9%20-%20BSPT%20Male%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-CvVjN87SVrr1M14wD380rmROim9dj8.png",
  },
  {
    id: 227,
    name: "4B-WD - BSP Male Captive Seal Plug",
    code: "4B-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4B-WD%20-%20BSP%20Male%20Captive%20Seal%20Plug-6c0xNPRWfNb9102SiYZdLcAQCF4DLJ.png",
  },
  {
    id: 228,
    name: "4BN-WD - BSP Male Captive Seal Hollow Hex Plug",
    code: "4BN-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4BN-WD%20-%20BSP%20Male%20Captive%20Seal%20Hollow%20Hex%20Plug-wIFiMVvyR08RDyKaRHU2729FYtAHxG.png",
  },
  {
    id: 229,
    name: "5B - BSP Male Double For 60°Seatbonded Seal × BSP Female",
    code: "5B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5B%20-%20BSP%20Male%20Double%20For%2060%C2%B0Seatbonded%20Seal%20%C3%97%20BSP%20Female-JMBmjVrBDOcqjjTDkqmUCDULTOE1C9.png",
  },
  {
    id: 230,
    name: "5B9 - BSP Male 60°Seat × BSP Female (90°Elbows)",
    code: "5B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5B9%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Female%20%2890%C2%B0Elbows%29-v3jf7eHEa3T5DmSZsJLFhIBnD1xIuB.png",
  },
  {
    id: 231,
    name: "5B-WD - BSP Male Captive Seal × BSP Female",
    code: "5B-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5B-WD%20-%20BSP%20Male%20Captive%20Seal%20%C3%97%20BSP%20Female-Udw8DoBo9kJrIzb89JEvoBuBo3t1Sg.png",
  },
  {
    id: 232,
    name: "5BN - BSP Male Double For 60°Eatbonede Seal × NPT Female",
    code: "5BN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5BN%20-%20BSP%20Male%20Double%20For%2060%C2%B0Eatbonede%20Seal%20%C3%97%20NPT%20Female-WMOZsNcmV84l0rm7SsSUHOY4NaSFot.png",
  },
  {
    id: 233,
    name: "5BT - BSP Male Double For 60°Eatbonede Seal × BSPT Female",
    code: "5BT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5BT%20-%20BSP%20Male%20Double%20For%2060%C2%B0Eatbonede%20Seal%20%C3%97%20BSPT%20Female-1du9Y4c5i8fGF2jLvl4bDdrEApY00a.png",
  },
  {
    id: 234,
    name: "5GB - BSP Male O-Ring × BSP Female",
    code: "5GB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5GB%20-%20BSP%20Male%20O-Ring%20%C3%97%20BSP%20Female-yg6o3q2naFDn9eitrqc21twl058J0o.png",
  },
  {
    id: 235,
    name: "7B - BSP Female",
    code: "7B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7B%20-%20BSP%20Female-pK9vXriANbazHnVrcZDN79HK1W3STP.png",
  },
  {
    id: 236,
    name: "7B9 - BSP Female (90°Elbows)",
    code: "7B9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7B9%20-%20BSP%20Female%20%2890%C2%B0Elbows%29-ahe4jva0rzWOHS5HnMv6awibCKFXcn.png",
  },
  {
    id: 237,
    name: "7TB - BSPT Female × BSP Female 60°Cone",
    code: "7TB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7TB%20-%20BSPT%20Female%20%C3%97%20BSP%20Female%2060%C2%B0Cone-VQXhTji9GOoFutXkfqob4S0ol2LOPf.png",
  },
  {
    id: 238,
    name: "AB - BSP Male 60°Seat Tee",
    code: "AB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AB%20-%20BSP%20Male%2060%C2%B0Seat%20Tee-j7F1OgUp8Tj8KeNkDHHQRIwxJmBzOO.png",
  },
  {
    id: 239,
    name: "BB - BSP Male 60°Seat × BSP Female 60°Cone Branch Tee",
    code: "BB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20Branch%20Tee-zpqyYrRdKwtf3zfsSL1vU04CCFmzVc.png",
  },
  {
    id: 240,
    name: "GB - BSP Female Tee",
    code: "GB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GB%20-%20BSP%20Female%20Tee-Iblo2jjsIV3serFw5ndNzdyu0Oe6nA.png",
  },
  {
    id: 241,
    name: "1T - BSPT Male",
    code: "1T",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1T%20-%20BSPT%20Male-x9H0eIwFeoTskaqDjtKGZRZ7s60w76.png",
  },
  {
    id: 242,
    name: "1T4 - BSPT Male (45°Elbows)",
    code: "1T4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1T4%20-%20BSPT%20Male%20%2845%C2%B0Elbows%29-7S1lAK0XxEW58o3TboCS7yVO6Y4C2C.png",
  },
  {
    id: 243,
    name: "1T9 - BSPT Male (90°Elbows)",
    code: "1T9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1T9%20-%20BSPT%20Male%20%2890%C2%B0Elbows%29-dRaRoURgcCexXVdSPQH9uLBwHWGncs.png",
  },
  {
    id: 244,
    name: "4T - BSPT Male Plug",
    code: "4T",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4T%20-%20BSPT%20Male%20Plug-DIkEkjGGRwySpVyCyAX3KQkd4FpAuK.png",
  },
  {
    id: 245,
    name: "ABBG-OG - BSP Male 60°Seat × BSP Maleo-Ring Adjustable Stud End Run Tee",
    code: "ABBG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABBG-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Maleo-Ring%20Adjustable%20Stud%20End%20Run%20Tee-qs0C3NhWyTUexrKgQNfLdVXzqgdxfl.png",
  },
  {
    id: 246,
    name: "ABGB-OG - BSP Male 60°Seat × BSP Maleo-Ringadjustable Stud End Branch Tee",
    code: "ABGB-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABGB-OG%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Maleo-Ringadjustable%20Stud%20End%20Branch%20Tee-sdXQb4LBZ53rIgoMFNirc3zs0V5Pw7.png",
  },
  {
    id: 247,
    name: "CB - BSP Male 60°Seat × BSP Female 60°Cone Run Tee",
    code: "CB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CB%20-%20BSP%20Male%2060%C2%B0Seat%20%C3%97%20BSP%20Female%2060%C2%B0Cone%20Run%20Tee-XufbDp1SeWFG1dQy2ofi2MZfbC43cQ.png",
  },
  {
    id: 248,
    name: "DB - BSP Female 60°Cone Tee",
    code: "DB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DB%20-%20BSP%20Female%2060%C2%B0Cone%20Tee-bq78KZbaDfmwSepBI81XyJFArEcqZ0.png",
  },
  {
    id: 249,
    name: "EB - BSP Female 60°Cone × BSP Male 60° Branch Tee",
    code: "EB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EB%20-%20BSP%20Female%2060%C2%B0Cone%20%C3%97%20BSP%20Male%2060%C2%B0%20Branch%20Tee-S6nQc4OdfUuMte4KM0leXa1BMiJAKO.png",
  },
  {
    id: 250,
    name: "FB - BSP Female 60°Cone × BSP Male 60°Branch Tee",
    code: "FB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB%20-%20BSP%20Female%2060%C2%B0Cone%20%C3%97%20BSP%20Male%2060%C2%B0Branch%20Tee-mBknKYKCIraRi1GgRvCgUpV9LCUMTc.png",
  },
  {
    id: 251,
    name: "1N - NPT Male",
    code: "1N",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1N%20-%20NPT%20Male-pboWwvE84b40VSJgv3Ci8ULjZaGIbD.png",
  },
  {
    id: 252,
    name: "1N4 - NPT Male (45°Elbows)",
    code: "1N4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1N4%20-%20NPT%20Male%20%2845%C2%B0Elbows%29-eB8i6ccImrnhjFDjtYvAh0FnzCt39F.png",
  },
  {
    id: 253,
    name: "4TN - BSPT Male Hollow Hex Plug",
    code: "4TN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4TN%20-%20BSPT%20Male%20Hollow%20Hex%20Plug-wKetefpyBIQ1jqdcw6dGGhXV818Abs.png",
  },
  {
    id: 254,
    name: "5GT - BSP Male O-Ring × BSPT Female",
    code: "5GT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5GT%20-%20BSP%20Male%20O-Ring%20%C3%97%20BSPT%20Female-8G9UBVY5scKQGgICNun4LINlfnDe4Y.png",
  },
  {
    id: 255,
    name: "5T - BSPT Male × BSPT Female",
    code: "5T",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5T%20-%20BSPT%20Male%20%C3%97%20BSPT%20Female-vSlzWQujOcXyH1D0dr0a9dWVfFlPSt.png",
  },
  {
    id: 256,
    name: "5T9 - BSPT Male × BSPT Female (90°Elbows)",
    code: "5T9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5T9%20-%20BSPT%20Male%20%C3%97%20BSPT%20Female%20%2890%C2%B0Elbows%29-vyXcPZJZx41iDqhOmj9dZqSWdpb6Ll.png",
  },
  {
    id: 257,
    name: "7T - BSPT Female",
    code: "7T",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7T%20-%20BSPT%20Female-eJREZysFrkJuNHo7pZJHqkYVpN79Is.png",
  },
  {
    id: 258,
    name: "7T9 - BSPT Female (90°Elbows)",
    code: "7T9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7T9%20-%20BSPT%20Female%20%2890%C2%B0Elbows%29-lj4oZcGo4mNBzWuqpQ8AymL4OhS4MA.png",
  },
  {
    id: 259,
    name: "GT - BSPT Female Tee",
    code: "GT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GT%20-%20BSPT%20Female%20Tee-OLjYjVdEHzRBeUVFurqfnaGyI2mTMF.png",
  },
  {
    id: 260,
    name: "ZT - BSPT Female Cross",
    code: "ZT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZT%20-%20BSPT%20Female%20Cross-iPizDuK0ZPRlCyjQUHJBs5vxmcxWMJ.png",
  },
  {
    id: 261,
    name: "1N9 - NPT Male (90°Elbows)",
    code: "1N9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1N9%20-%20NPT%20Male%20%2890%C2%B0Elbows%29-3kdFUSovC4ZJKa4EkbgWksWg4GuNzw.png",
  },
  {
    id: 262,
    name: "1NO - NPT Male × SAE O-Ring Boss",
    code: "1NO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1NO%20-%20NPT%20Male%20%C3%97%20SAE%20O-Ring%20Boss-hgzFC71foxblb30mB4qLilD0DRMcUu.png",
  },
  {
    id: 263,
    name: "4N - NPT Male Plug",
    code: "4N",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4N%20-%20NPT%20Male%20Plug-3mfKN0pRQlT9WG5eWlaP6Rr7mH6stW.png",
  },
  {
    id: 264,
    name: "4NN - NPT Male Hollow Hex Plug",
    code: "4NN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4NN%20-%20NPT%20Male%20Hollow%20Hex%20Plug-Cd2YGV6GBeoYfv20ObEzjizTzxCqS1.png",
  },
  {
    id: 265,
    name: "5N - NPT Male × NPT Female",
    code: "5N",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5N%20-%20NPT%20Male%20%C3%97%20NPT%20Female-bA4aBLxUBhTZ8yUQLxl8uWDzK4Dz1b.png",
  },
  {
    id: 266,
    name: "5N4 - NPT Male × NPT Female (45°Elbows)",
    code: "5N4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5N4%20-%20NPT%20Male%20%C3%97%20NPT%20Female%20%2845%C2%B0Elbows%29-aNPzMwt9niM2yFqKwvkKO8mUrG6Mqd.png",
  },
  {
    id: 267,
    name: "5N9 - NPT Male × NPT Female (90°Elbows)",
    code: "5N9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5N9%20-%20NPT%20Male%20%C3%97%20NPT%20Female%20%2890%C2%B0Elbows%29-f5sUKpNr0kGDBg27sHitlfzxkMjJOp.png",
  },
  {
    id: 268,
    name: "7N - NPT Female",
    code: "7N",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7N%20-%20NPT%20Female-AKrFe9UsgZr3ZLdEWP4D2edIpUDY0M.png",
  },
  {
    id: 269,
    name: "7N9 - NPT Female (90°Elbows)",
    code: "7N9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7N9%20-%20NPT%20Female%20%2890%C2%B0Elbows%29-CL4ACsMNJtq2WlcGiK9Ofc9Sf2bVaV.png",
  },
  {
    id: 270,
    name: "9N-CAP - NPT Female Plug",
    code: "9N-CAP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9N-CAP%20-%20NPT%20Female%20Plug-Cnhp2duI0e7gatDRjmghNl9DV3GFFv.png",
  },
  {
    id: 271,
    name: "2NU - NPT Male × NPSM Female 60°Cone",
    code: "2NU",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NU%20-%20NPT%20Male%20%C3%97%20NPSM%20Female%2060%C2%B0Cone-B630XyjGdUEbG1amT3XJU7UJ9Lef8F.png",
  },
  {
    id: 272,
    name: "2NU4 - NPT Male × NPSM Female 60°Cone (45°Elbows)",
    code: "2NU4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NU4%20-%20NPT%20Male%20%C3%97%20NPSM%20Female%2060%C2%B0Cone%20%2845%C2%B0Elbows%29-XFdn7f5pmbqrYjD3ovOHhTuCPJPW4K.png",
  },
  {
    id: 273,
    name: "2NU9 - NPT Male × NPSM Female 60°Cone (90°Elbows)",
    code: "2NU9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NU9%20-%20NPT%20Male%20%C3%97%20NPSM%20Female%2060%C2%B0Cone%20%2890%C2%B0Elbows%29-6BsOZP0Jfh4iweXfTmZBSSxPTcw8Oj.png",
  },
  {
    id: 274,
    name: "5GN - BSP Male O-Ring × NPT Female",
    code: "5GN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5GN%20-%20BSP%20Male%20O-Ring%20%C3%97%20NPT%20Female-4OCPWx6qwiS9aM7Ues4Iv5tx6KVxFd.png",
  },
  {
    id: 275,
    name: "5HN - Metric Male L-Series × NPT Female",
    code: "5HN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5HN%20-%20Metric%20Male%20L-Series%20%C3%97%20NPT%20Female-pobokl6046m0i16KAE6V0Ol0tavAUg.png",
  },
  {
    id: 276,
    name: "5MN - Metric Male With Bonded Seal × NPT Female",
    code: "5MN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5MN%20-%20Metric%20Male%20With%20Bonded%20Seal%20%C3%97%20NPT%20Female-1VMBNSutcnNhxSJ9NmRaMtO2TZS6hQ.png",
  },
  {
    id: 277,
    name: "5NO - NPT Male × SAE Female",
    code: "5NO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5NO%20-%20NPT%20Male%20%C3%97%20SAE%20Female-O46eKRda6sAPcom88MgLbxrvw7Eb62.png",
  },
  {
    id: 278,
    name: "5ON - SAE O-Ring Boss L-Series × NPT Female",
    code: "5ON",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ON%20-%20SAE%20O-Ring%20Boss%20L-Series%20%C3%97%20NPT%20Female-dseFZlyDhGgJ24Y0ljG8EfES3FYqxC.png",
  },
  {
    id: 279,
    name: "5TN - BSPT Male × NPT Female",
    code: "5TN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5TN%20-%20BSPT%20Male%20%C3%97%20NPT%20Female-0g7HOing4OWdYfcxNjnDx5MVxNL3OC.png",
  },
  {
    id: 280,
    name: "ZN - NPT Female Cross",
    code: "ZN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZN%20-%20NPT%20Female%20Cross-hBCvJYOLeDBxNPalG4KQ2GnqqlE2Tf.png",
  },
  {
    id: 281,
    name: "1J - JIC Male 74° Cone",
    code: "1J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1J%20-%20JIC%20Male%2074%C2%B0%20Cone-tUzFyfLzdPQwV7TXv4q1bADPBkdMpf.png",
  },
  {
    id: 282,
    name: "1J4 - JIC Male 74° Cone (45°Elbows)",
    code: "1J4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1J4%20-%20JIC%20Male%2074%C2%B0%20Cone%20%2845%C2%B0Elbows%29-bmySmU1LniIB06nxW6gxwzWhm5kIFR.png",
  },
  {
    id: 283,
    name: "1J9 -JIC Male 74° Cone (90°Elbows)",
    code: "1J9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1J9%20-JIC%20Male%2074%C2%B0%20Cone%20%2890%C2%B0Elbows%29-XQh6nLv60muC0NcgAYmnap6GeHPq3P.png",
  },
  {
    id: 284,
    name: "2J4 - JIC Male 74°Cone × JIC Female 74°Seat (45°Elbows)",
    code: "2J4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2J4%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20JIC%20Female%2074%C2%B0Seat%20%2845%C2%B0Elbows%29-EbHIP4Kdmc3ovIYc7aHD9yeXJqBeH5.png",
  },
  {
    id: 285,
    name: "2J9 - JIC Male 74°Cone × JIC Female 74°Seat (90°Elbows)",
    code: "2J9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2J9%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20JIC%20Female%2074%C2%B0Seat%20%2890%C2%B0Elbows%29-vFwVK66UzK7CaIEgh8m42vPSzeEvyk.png",
  },
  {
    id: 286,
    name: "7NU - NPT Female × NPSM Female 60°Cone",
    code: "7NU",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7NU%20-%20NPT%20Female%20%C3%97%20NPSM%20Female%2060%C2%B0Cone-REtzzceEmLG5yasUvG1AasYHMsVPe7.png",
  },
  {
    id: 287,
    name: "AN - NPT Male Tee",
    code: "AN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AN%20-%20NPT%20Male%20Tee-EyUnzkuZ9r3Rb9LnGD3Ltst9FFiLpN.png",
  },
  {
    id: 288,
    name: "GN - NPT Female Tee",
    code: "GN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GN%20-%20NPT%20Female%20Tee-NSN3MjUKhdagpazQvV0pPCuGIojhn1.png",
  },
  {
    id: 289,
    name: "HN - NPT Female × NPT Male Run Tee",
    code: "HN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HN%20-%20NPT%20Female%20%C3%97%20NPT%20Male%20Run%20Tee-GB0CxpjpJZxU1LUtbJgmBmYQ4eojJA.png",
  },
  {
    id: 290,
    name: "JN - NPT Female × NPT Male Branch Tee",
    code: "JN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JN%20-%20NPT%20Female%20%C3%97%20NPT%20Male%20Branch%20Tee-r45r1i0jkxu5Hbqdgmj6h5gJB0ecOp.png",
  },
  {
    id: 291,
    name: "3J - JIC Female 74°Seat",
    code: "3J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3J%20-%20JIC%20Female%2074%C2%B0Seat-AkzRIuuQc0xim6wjeuUbsqGUOm9neo.png",
  },
  {
    id: 292,
    name: "3J4 - JIC Female 74°Seat (45°Elbows)",
    code: "3J4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3J4%20-%20JIC%20Female%2074%C2%B0Seat%20%2845%C2%B0Elbows%29-65vdksO8Yh6qXlK1GdEUYHRM2q693k.png",
  },
  {
    id: 293,
    name: "3J9 - JIC Female 74°Seat (90°Elbows)",
    code: "3J9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3J9%20-%20JIC%20Female%2074%C2%B0Seat%20%2890%C2%B0Elbows%29-SGnQ3AD3fc7J9yzNLbkOLp69YxzpwB.png",
  },
  {
    id: 294,
    name: "4J - JIC Male 74°Cone Plug",
    code: "4J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4J%20-%20JIC%20Male%2074%C2%B0Cone%20Plug-e1xitrpr6YXfA3m47h1KKADRQ9GzkV.png",
  },
  {
    id: 295,
    name: "5J - JIC Male × JIC Female",
    code: "5J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5J%20-%20JIC%20Male%20%C3%97%20JIC%20Female-f7TsIe69PcTcivY5vH4b5Fhx90oFn8.png",
  },
  {
    id: 296,
    name: "6J - JIC Male 74°Cone Bulkhead",
    code: "6J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6J%20-%20JIC%20Male%2074%C2%B0Cone%20Bulkhead-CQYGsoImA4jGjZWDWPrWGYyYZjqXPt.png",
  },
  {
    id: 297,
    name: "6J4 - 45°JIC Male 74°Cone Bulkhead",
    code: "6J4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6J4%20-%2045%C2%B0JIC%20Male%2074%C2%B0Cone%20Bulkhead-Gi3TsmtoxtwEHAGBhovn8SeCfa1FAY.png",
  },
  {
    id: 298,
    name: "6J9 - 90°JIC Male 74°Cone Bulkhead",
    code: "6J9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6J9%20-%2090%C2%B0JIC%20Male%2074%C2%B0Cone%20Bulkhead-BLUETkhpIWfLHdCHBCEtTxsAhtzvLZ.png",
  },
  {
    id: 299,
    name: "8J - JIC Lock Nut",
    code: "8J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8J%20-%20JIC%20Lock%20Nut-ZnpsqGTGXsf4oGbfprR2CPbD15QiJz.png",
  },
  {
    id: 300,
    name: "9J - JIC Female 74°Seat Plug",
    code: "9J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9J%20-%20JIC%20Female%2074%C2%B0Seat%20Plug-z4UBFu3mewBetYln0dGMuF4gKt7ERg.png",
  },
  {
    id: 301,
    name: "5JB - JIC Male 74°Cone × BSP Female",
    code: "5JB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5JB%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Female-a0tqVVnlGFxbHV6mw4XkU55Nm6jJgM.png",
  },
  {
    id: 302,
    name: "5JN - JIC Male 74°Cone × NPT Female",
    code: "5JN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5JN%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Female-OmVY5n0FHE8U2reg3W3w8HUAF9dg3b.png",
  },
  {
    id: 303,
    name: "5JN9 - JIC Male 74°Cone × NPT Female (90°Elbows)",
    code: "5JN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5JN9%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Female%20%2890%C2%B0Elbows%29-EjzOLjrhMTgku9LYQxQAbTeZAZk0qw.png",
  },
  {
    id: 304,
    name: "5JT - JIC Male 74°Cone × BSPT Female",
    code: "5JT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5JT%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Female-IgNdrqQjFc9cuKBMIYCRqVHcQJXDUT.png",
  },
  {
    id: 305,
    name: "6NJ - NPT Male × JIC Male 74°Cone Bulkhead",
    code: "6NJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6NJ%20-%20NPT%20Male%20%C3%97%20JIC%20Male%2074%C2%B0Cone%20Bulkhead-14rts6EfDSLB0u29Bx4IEmgcu0Gvv7.png",
  },
  {
    id: 306,
    name: "7NJ - NPT Female × JIC Female 74°Seat",
    code: "7NJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7NJ%20-%20NPT%20Female%20%C3%97%20JIC%20Female%2074%C2%B0Seat-eHJyRIK0XqUZohqKCKVFPvcrsA586p.png",
  },
  {
    id: 307,
    name: "AJ - JIC Male 74°Cone Tee",
    code: "AJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJ%20-%20JIC%20Male%2074%C2%B0Cone%20Tee-CJQHz7JbF0KJWbJNTNS2UxeqonYC6G.png",
  },
  {
    id: 308,
    name: "CJ - JIC Male 74° Cone × JIC Female 74°Seat Run Tee",
    code: "CJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CJ%20-%20JIC%20Male%2074%C2%B0%20Cone%20%C3%97%20JIC%20Female%2074%C2%B0Seat%20Run%20Tee-5XwROsXyxtfFBeua6UJJzuHnvEiTOD.png",
  },
  {
    id: 309,
    name: "DJ - JIC Female 74°Seat Tee",
    code: "DJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJ%20-%20JIC%20Female%2074%C2%B0Seat%20Tee-yK0ZUFEm4tMxTRrH1VyEBXFTaHevtx.png",
  },
  {
    id: 310,
    name: "EJ - JIC Female 74° Seat × JIC Male 74°Cone Branch Tee",
    code: "EJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EJ%20-%20JIC%20Female%2074%C2%B0%20Seat%20%C3%97%20JIC%20Male%2074%C2%B0Cone%20Branch%20Tee-ZpFfIC4pTHdeofmgGOKdiWtIHcUvgY.png",
  },
  {
    id: 311,
    name: "1JN - JIC Male 74°Cone × NPT Male",
    code: "1JN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JN%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male-mf32XQ9aysUkf8GSanH1gKTV0GF2qf.png",
  },
  {
    id: 312,
    name: "1JN4 - JIC Male 74°Cone × NPT Male (45°Elbows)",
    code: "1JN4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JN4%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20%2845%C2%B0Elbows%29-fMsaS7KrRDoGLSDV9D9MvVrHw0z86f.png",
  },
  {
    id: 313,
    name: "1JN9 - JIC Male 74°Cone × NPT Male (90°Elbows)",
    code: "1JN9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JN9%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20%2890%C2%B0Elbows%29-l4SWsNEeRaSlpgZIfLApqgYnbqfs01.png",
  },
  {
    id: 314,
    name: "1JN9-L - JIC Male 74°Cone × Long NPT Male (90°Elbows)",
    code: "1JN9-L",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JN9-L%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Long%20NPT%20Male%20%2890%C2%B0Elbows%29-EljEKAC4VUvBahip8sBhzIvYFFzyMl.png",
  },
  {
    id: 315,
    name: "1JN9-LL - JIC Male 74°Cone × Longger NPT Male (90°Elbows)",
    code: "1JN9-LL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JN9-LL%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Longger%20NPT%20Male%20%2890%C2%B0Elbows%29-e7EqgpK2W2nfehRbz6oCcnWiF4yJzW.png",
  },
  {
    id: 316,
    name: "1JT - JIC Male 74°Cone × BSPT Male",
    code: "1JT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JT%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Male-43KLvC2FXNTcmqGHYpUwmedDnnBRCE.png",
  },
  {
    id: 317,
    name: "1JT4 - JIC Male 74°Cone × BSPT Male (45°Elbows)",
    code: "1JT4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JT4%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Male%20%2845%C2%B0Elbows%29-VZIYZxPfIv8TnZjsRFqhKrMurNTEG8.png",
  },
  {
    id: 318,
    name: "1JT9 - JIC Male 74°Cone × BSPT Male (90°Elbows)",
    code: "1JT9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JT9%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSPT%20Male%20%2890%C2%B0Elbows%29-U6BMfh8ESzJlQHHIUe2baY90AF7BPE.png",
  },
  {
    id: 319,
    name: "2JB - JIC Male 74°Cone × BSP Female 60°Cone",
    code: "2JB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2JB%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Female%2060%C2%B0Cone-tfoUS0EQqVbeUEnnd9UzkoXIUyPLe4.png",
  },
  {
    id: 320,
    name: "9J-CAP - JIC 74°Female Plug",
    code: "9J-CAP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9J-CAP%20-%20JIC%2074%C2%B0Female%20Plug-QDNmW917cYiyNBMpRoJZIgbhkUwAox.png",
  },
  {
    id: 321,
    name: "1JF - JIC Male 74°Cone × ORFS Male",
    code: "1JF",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JF%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20ORFS%20Male-DjyIVVGLCeq7idC4Avptqs15NoVTv0.png",
  },
  {
    id: 322,
    name: "1JG - JIC Male 74°Cone × BSP Male O-Ring",
    code: "1JG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring-pIldEIZ7lFQOXTgbl8JDNd8IeVbySR.png",
  },
  {
    id: 323,
    name: "1JG4-OG - JIC Male 74°Cone × BSP Male O-Ring (45°Elbows)",
    code: "1JG4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JG4-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring%20%2845%C2%B0Elbows%29-4cBxvHLy0GUqjGQaZnMkkywxPEWweH.png",
  },
  {
    id: 324,
    name: "1JG9-OG - JIC Male 74°Cone × BSP Male O-Ring (90°Elbows)",
    code: "1JG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JG9-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring%20%2890%C2%B0Elbows%29-3z6P70zYqcWnwSfQhrr2Nd3RhTwHbd.png",
  },
  {
    id: 325,
    name: "1JH - JIC Male 74°Cone × Metric Male End O-Ring",
    code: "1JH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JH%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20End%20O-Ring-bvQbF50F7bExV28Wxj44Tcunx6yzTX.png",
  },
  {
    id: 326,
    name: "1JH4-OG - JIC Male 74°Cone × Metric Male Adjustable Stud End (45°Elbows)",
    code: "1JH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JH4-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20%2845%C2%B0Elbows%29-ievkxX6tllwzjflzgrmAO00BqVZ3Os.png",
  },
  {
    id: 327,
    name: "1JH9-OG - JIC Male 74°Cone × Metric Male Adjustable Stud End (90°Elbows)",
    code: "1JH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JH9-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20%2890%C2%B0Elbows%29-r0gpw5B4SzjqM3V5gTjsnlUGKp7mHX.png",
  },
  {
    id: 328,
    name: "1JM - JIC Male 74°Cone × Metric Male Doubleuse For 60 °Seat Or Bonded Seal",
    code: "1JM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JM%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Doubleuse%20For%2060%20%C2%B0Seat%20Or%20Bonded%20Seal-Ya5mfDfVeQt90mZzzjavdPOJon6DdE.png",
  },
  {
    id: 329,
    name: "1JM-WD - JIC Male 74°Cone × Metric Male Captive Seal",
    code: "1JM-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JM-WD%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Captive%20Seal-t8fehuWpiO2PXmRmv4Q3jaqZ1Rn3AH.png",
  },
  {
    id: 330,
    name: "1JO - JIC Male 74°Cone × SAE O-Ring Boss",
    code: "1JO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JO%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20O-Ring%20Boss-K8uhCSGLYkfBcCIAivwbT1g50EjrRQ.png",
  },
  {
    id: 331,
    name: "1JO-L - Long JIC Male 74°Cone × SAE O-Ring Boss",
    code: "1JO-L",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JO-L%20-%20Long%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20O-Ring%20Boss-jnLI1nrmhwhxz1aEzNnDLAw7vNuGIS.png",
  },
  {
    id: 332,
    name: "1JO4-OG - JIC Male 74°Cone × SAE O-Ring Boss (45°Elbows)",
    code: "1JO4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JO4-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20O-Ring%20Boss%20%2845%C2%B0Elbows%29-sw0tQzsLwWzOhS3sPTnVRnon9eSu5Q.png",
  },
  {
    id: 333,
    name: "1JO9-OG - JIC Male 74°Cone × SAE O-Ring Boss (90°Elbows)",
    code: "1JO9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JO9-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20O-Ring%20Boss%20%2890%C2%B0Elbows%29-9mgzCsytuq4pBKSzk7poKkxghbhI9N.png",
  },
  {
    id: 334,
    name: "1JO9-OG × L - JIC Male 74°Cone × Long SAE O-Ring Boss (90°Elbows)",
    code: "1JO9-OG × L",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JO9-OG%20%C3%97%20L%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Long%20SAE%20O-Ring%20Boss%20%2890%C2%B0Elbows%29-UL3pojrEPDRzyl3J1BbylcJGt4B3Ah.png",
  },
  {
    id: 335,
    name: "1BJ-WD - BSP Male Captive Seal × JIC Male 74 °Cone",
    code: "1BJ-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1BJ-WD%20-%20BSP%20Male%20Captive%20Seal%20%C3%97%20JIC%20Male%2074%20%C2%B0Cone-dY2pKRcs9yLgqj9Ly5Djawd48DcKau.png",
  },
  {
    id: 336,
    name: "2GJ - BSP Male O-Ring × JIC Female 74 °Cone",
    code: "2GJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2GJ%20-%20BSP%20Male%20O-Ring%20%C3%97%20JIC%20Female%2074%20%C2%B0Cone-Uf2MbmFL38sqJvqWxSHL376SP6NImW.png",
  },
  {
    id: 337,
    name: "2NJ - NPT Male × JIC Female 74°Seat",
    code: "2NJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2NJ%20-%20NPT%20Male%20%C3%97%20JIC%20Female%2074%C2%B0Seat-7xp7hEEDn1humctknLQHUr6TEmi42f.png",
  },
  {
    id: 338,
    name: "2OJ - SAE O-Ring Boss × JIC Female 74 °Seat",
    code: "2OJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2OJ%20-%20SAE%20O-Ring%20Boss%20%C3%97%20JIC%20Female%2074%20%C2%B0Seat-6abPFinQzLiRPzXuqdHssuptnDM88B.png",
  },
  {
    id: 339,
    name: "2TJ - BSPT Male × JIC Female 74°Seat",
    code: "2TJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2TJ%20-%20BSPT%20Male%20%C3%97%20JIC%20Female%2074%C2%B0Seat-A8NrgOY5BEKyEU0mV8CNtWZE4UotVh.png",
  },
  {
    id: 340,
    name: "2WJ - Butt-Weld Tube × JIC Female 74 °Seat",
    code: "2WJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2WJ%20-%20Butt-Weld%20Tube%20%C3%97%20JIC%20Female%2074%20%C2%B0Seat-k42KgJRVvxCbZMknMiLSSywq47Hqfy.png",
  },
  {
    id: 341,
    name: "AJ6JJ - JIC Male 74°Cone Bulkhead Branch Tee",
    code: "AJ6JJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJ6JJ%20-%20JIC%20Male%2074%C2%B0Cone%20Bulkhead%20Branch%20Tee-1dnKm9k2NzX2XqCpEo1G2TlPXoDybk.png",
  },
  {
    id: 342,
    name: "AJJ6J - JIC Male 74°Cone Bulkhead Run Tee",
    code: "AJJ6J",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJJ6J%20-%20JIC%20Male%2074%C2%B0Cone%20Bulkhead%20Run%20Tee-JfZutZlrRYQr3DsreleQddmcR28gnk.png",
  },
  {
    id: 343,
    name: "AJGJ-OG - JIC Male 74°Cone × BSP Male O-Ring Branch Tee",
    code: "AJGJ-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJGJ-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring%20Branch%20Tee-ACkdWZyRTzodBChbtm5VhnBPwzJ6VB.png",
  },
  {
    id: 344,
    name: "AJJO-OG - Metric Male O-Ring × Metric Female O-Ring (90°Elbows)",
    code: "AJJO-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJJO-OG%20-%20Metric%20Male%20O-Ring%20%C3%97%20Metric%20Female%20O-Ring%20%2890%C2%B0Elbows%29-p9fmwuOrus07uiSPQNAo36MXdo3MCj.png",
  },
  {
    id: 345,
    name: "AJJN - JIC Male 74°Cone × NPT Male Run Tee",
    code: "AJJN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJJN%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20Run%20Tee-R0osnsmKr7T6uirJALAptdCJ6YGcia.png",
  },
  {
    id: 346,
    name: "AJNJ - JIC Male 74°Cone × NPT Male Branch Tee",
    code: "AJNJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJNJ%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Male%20Branch%20Tee-5SlnHF64szbBO7UJf8kc00Rl1BoUIL.png",
  },
  {
    id: 347,
    name: "AJOJ-OG - JIC Male 74°Cone × SAE O-Ring Boss Branch Tee",
    code: "AJOJ-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJOJ-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20SAE%20O-Ring%20Boss%20Branch%20Tee-j33bUnGJF9B8fEy49H74hBiCib3HMk.png",
  },
  {
    id: 348,
    name: "FJ - JIC Female 74° Seat × JIC Male 74°Cone Branch Tee",
    code: "FJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FJ%20-%20JIC%20Female%2074%C2%B0%20Seat%20%C3%97%20JIC%20Male%2074%C2%B0Cone%20Branch%20Tee-08mIoT6EFpIXJv21keqWlORutYTUcd.png",
  },
  {
    id: 349,
    name: "KJNJ - JIC Male 74°Cone × NPT Female Branch Tee",
    code: "KJNJ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KJNJ%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Female%20Branch%20Tee-CCdMq3vfEJ8WN1px29hEMFd4tAwe1P.png",
  },
  {
    id: 350,
    name: "LJJN - JIC Male 74°Cone × NPT Female Run Tee",
    code: "LJJN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LJJN%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20NPT%20Female%20Run%20Tee-YFhGAQTX981u8jJrPoCAvaeyHFgzNp.png",
  },
  {
    id: 351,
    name: "00TSUM-NB - JIC Flare Tube End Nut",
    code: "00TSUM-NB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00TSUM-NB%20-%20JIC%20Flare%20Tube%20End%20Nut-kXml5LCIQvgd2Sn6TMfsvXU3KOq455.png",
  },
  {
    id: 352,
    name: "1F - ORFS Male O-Ring",
    code: "1F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F%20-%20ORFS%20Male%20O-Ring-cvtz5XY5qeegtFQU2OTaiexTqSZL8n.png",
  },
  {
    id: 353,
    name: "1F4 - ORFS Male O-Ring (45°Elbows)",
    code: "1F4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F4%20-%20ORFS%20Male%20O-Ring%20%2845%C2%B0Elbows%29-vGC86I1nEVsN1vp6jp77XnqzJvAnPu.png",
  },
  {
    id: 354,
    name: "1F9 - ORFS Male O-Ring (90°Elbows)",
    code: "1F9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F9%20-%20ORFS%20Male%20O-Ring%20%2890%C2%B0Elbows%29-kmCn4OKqbAx12UviopLUEJiidJ4voW.png",
  },
  {
    id: 355,
    name: "2F4 - ORFS Male O-Ring × ORFS Female (45°Elbows)",
    code: "2F4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2F4%20-%20ORFS%20Male%20O-Ring%20%C3%97%20ORFS%20Female%20%2845%C2%B0Elbows%29-2OsQaeV8FNTaXWYLYxmqUv85tdQgvo.png",
  },
  {
    id: 356,
    name: "2F9 - ORFS Male O-Ring × ORFS Female (90°Elbows)",
    code: "2F9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2F9%20-%20ORFS%20Male%20O-Ring%20%C3%97%20ORFS%20Female%20%2890%C2%B0Elbows%29-DHetQJ8I2PlcgMbM1eLEYFib98k3Rl.png",
  },
  {
    id: 357,
    name: "AJJG-OG - JIC Male 74°Cone × BSP Male O-Ring Run Tee",
    code: "AJJG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJJG-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20BSP%20Male%20O-Ring%20Run%20Tee-j5i3S4m0OJKFAQvYSCYkqwvPcTGxkG.png",
  },
  {
    id: 358,
    name: "AJJH-OG - JIC Male 74°Cone × Metric Male Adjustable Stud End",
    code: "AJJH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJJH-OG%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End-RikpsBY0iEdMmT2qVUxwV1IlWfm2oO.png",
  },
  {
    id: 359,
    name: "NB300 - JIC Inch Sleeve",
    code: "NB300",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NB300%20-%20JIC%20Inch%20Sleeve-Sjnbgg2sjKvbshtkW7EkfmXLGE3s7R.png",
  },
  {
    id: 360,
    name: "NB500 - JIC Metric Sleeve",
    code: "NB500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NB500%20-%20JIC%20Metric%20Sleeve-1rH3r0I7ZD94vT1gioA6wKp0CA7kTQ.png",
  },
  {
    id: 361,
    name: "1FG - ORFS Male O-Ring × BSP Male O-Ring",
    code: "1FG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20BSP%20Male%20O-Ring-isOVH7zuoovM49RZ5RzCgHsoJBPPo0.png",
  },
  {
    id: 362,
    name: "1FH4-OG - ORFS Male O-Ring × Metric Male Adjustable Stud End (45°Elbows)",
    code: "1FH4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FH4-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20%2845%C2%B0Elbows%29-a1qSqdlIXGBuDGXyM5BPq69TdKLGSa.png",
  },
  {
    id: 363,
    name: "1FH9-OG - ORFS Male O-Ring × Metric Male Adjustable Stud End (90°Elbows)",
    code: "1FH9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FH9-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20%2890%C2%B0Elbows%29-WbfryT04YdxNoQ5myFqtua457RYXzC.png",
  },
  {
    id: 364,
    name: "1FO - ORFS Male O-Ring × SAE O-Ring Boss S-Series",
    code: "1FO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FO%20-%20ORFS%20Male%20O-Ring%20%C3%97%20SAE%20O-Ring%20Boss%20S-Series-sDy3BHMuiVpTKDdfB16SwEKfntP4vn.png",
  },
  {
    id: 365,
    name: "1FO9-OG - ORFS Male O-Ring × SAE O-Ring Boss S-Series (90°Elbows)",
    code: "1FO9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FO9-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20SAE%20O-Ring%20Boss%20S-Series%20%2890%C2%B0Elbows%29-9gHFHDt4UGymxAc1yavOZLW0jEXjZU.png",
  },
  {
    id: 366,
    name: "3F - ORFS Female",
    code: "3F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3F%20-%20ORFS%20Female-a3KnEnS9c53DJ6Ke2106sTGW21OCZS.png",
  },
  {
    id: 367,
    name: "4F - ORFS Male O-Ring Plug",
    code: "4F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4F%20-%20ORFS%20Male%20O-Ring%20Plug-I0i1QmDcFjpXA6T3lWYBnXidGitcXA.png",
  },
  {
    id: 368,
    name: "6F - ORFS Male O-Ring Bulkhead",
    code: "6F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6F%20-%20ORFS%20Male%20O-Ring%20Bulkhead-soByRkt3xeDVVsvSlv8evfneA573iy.png",
  },
  {
    id: 369,
    name: "6F4 - 45°ORFS Male O-Ring Bulkhead",
    code: "6F4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6F4%20-%2045%C2%B0ORFS%20Male%20O-Ring%20Bulkhead-t44e45atdL7geR6bdBmtCc3CMRL6qO.png",
  },
  {
    id: 370,
    name: "6F9 - 90°ORFS Male O-Ring Bulkhead",
    code: "6F9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6F9%20-%2090%C2%B0ORFS%20Male%20O-Ring%20Bulkhead-0MCarcpN1Tuw4Hl2nHhQu6L94m9TO0.png",
  },
  {
    id: 371,
    name: "1FG4-OG ORFS Male O-Ring × BSP Male O-Ring (45°Elbows)",
    code: "1FG4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FG4-OG%20ORFS%20Male%20O-Ring%20%C3%97%20BSP%20Male%20O-Ring%20%2845%C2%B0Elbows%29-88DH3oV4V0MYtPZnHOAxWxItURVQrQ.png",
  },
  {
    id: 372,
    name: "1FG9-OG - ORFS Male O-Ring × BSP Male O-Ring (90°Elbows)",
    code: "1FG9-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FG9-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20BSP%20Male%20O-Ring%20%2890%C2%B0Elbows%29-P0CThU6fOLAetnfAOEoe0F1lTHQIEt.png",
  },
  {
    id: 373,
    name: "1FO4-OG - ORFS Male O-Ring × SAE O-Ring Boss S-Series (45°Elbows)",
    code: "1FO4-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FO4-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20SAE%20O-Ring%20Boss%20S-Series%20%2845%C2%B0Elbows%29-MspdlrN0ibpPRQ0zXKrUTqa2np9CbO.png",
  },
  {
    id: 374,
    name: "2OF - SAE O-Ring Boss S-Series × ORFS Female",
    code: "2OF",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2OF%20-%20SAE%20O-Ring%20Boss%20S-Series%20%C3%97%20ORFS%20Female-csrfzK9GjgCggbQYHq0nyZrOhBWICe.png",
  },
  {
    id: 375,
    name: "AF6FF - ORFS Male O-Ring Bulkhead Branch Tee",
    code: "AF6FF",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF6FF%20-%20ORFS%20Male%20O-Ring%20Bulkhead%20Branch%20Tee-XMaRKfTsKyxEED9lVhVHV9OvFEIbuC.png",
  },
  {
    id: 376,
    name: "AFF6F - ORFS Male O-Ring Bulkhead Run Tee",
    code: "AFF6F",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFF6F%20-%20ORFS%20Male%20O-Ring%20Bulkhead%20Run%20Tee-hNXgJ0FoWIGRKutgDXF4NpBcY09zgW.png",
  },
  {
    id: 377,
    name: "AFFG-OG - ORFS Male O-Ring × BSP Male O-Ring Run Tee",
    code: "AFFG-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFFG-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20BSP%20Male%20O-Ring%20Run%20Tee-MTPVKWvqcUeiJdS9BUklbmjzz1t3xA.png",
  },
  {
    id: 378,
    name: "AFFO-OG - ORFS Male O-Ring × SAE O-Ring Boss Run Tee",
    code: "AFFO-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFFO-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20SAE%20O-Ring%20Boss%20Run%20Tee-3KmWgDxqfXJc8b9hHi4yQxOF4bjMyz.png",
  },
  {
    id: 379,
    name: "AFGF-OG - ORFS Male O-Ring × BSP Male O-Ring Run Tee",
    code: "AFGF-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFGF-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20BSP%20Male%20O-Ring%20Run%20Tee-SfoLe0KDw2Jd6oZlWI7k5YBEteEmSV.png",
  },
  {
    id: 380,
    name: "AFOF-OG - ORFS Male O-Ring × SAE O-Ring Boss Branch Tee",
    code: "AFOF-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFOF-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20SAE%20O-Ring%20Boss%20Branch%20Tee-oqKsjXY0aAvz3DUMM2NVdHSfpVflT6.png",
  },
  {
    id: 381,
    name: "1G - BSP Male O-Ring",
    code: "1G",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1G%20-%20BSP%20Male%20O-Ring-u35uqVAMDEHkzTU2JyG8uPsk699JTu.png",
  },
  {
    id: 382,
    name: "1O - SAE O-Ring Boss",
    code: "1O",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1O%20-%20SAE%20O-Ring%20Boss-0CkSjYu7CmOJP9MeeWL7RhE3zxZhiH.png",
  },
  {
    id: 383,
    name: "1OT - SAE O-Ring Boss × BSPT Male",
    code: "1OT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1OT%20-%20SAE%20O-Ring%20Boss%20%C3%97%20BSPT%20Male-rpwmY7BdhhMmnk9CUDnZeykplchkSc.png",
  },
  {
    id: 384,
    name: "1P - SAE Male 90°Cone",
    code: "1P",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1P%20-%20SAE%20Male%2090%C2%B0Cone-GfztNwtwzWM0sQg69BUwDrK00RLArs.png",
  },
  {
    id: 385,
    name: "2OU - SAE O-Ring Boss × NPSM Female 60 °Cone",
    code: "2OU",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2OU%20-%20SAE%20O-Ring%20Boss%20%C3%97%20NPSM%20Female%2060%20%C2%B0Cone-qIIUwo0bW0FyyYQgLGMvkhl7uetXIW.png",
  },
  {
    id: 386,
    name: "4MN-WD - Metric Male Captive Seal Hollow Hex Plug",
    code: "4MN-WD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4MN-WD%20-%20Metric%20Male%20Captive%20Seal%20Hollow%20Hex%20Plug-MOmNcv7dA7XnSYb0RVqAy156059J5V.png",
  },
  {
    id: 387,
    name: "4O - SAE O-Ring Boss Plug",
    code: "4O",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4O%20-%20SAE%20O-Ring%20Boss%20Plug-uPBX2ociDY5363dQCpSrqmT2cKJEbv.png",
  },
  {
    id: 388,
    name: "4ON - SAE O-Ring Boss Hollow Hex Plug",
    code: "4ON",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ON%20-%20SAE%20O-Ring%20Boss%20Hollow%20Hex%20Plug-iai86t27uECr7XwnxzAZAutRby8v7M.png",
  },
  {
    id: 389,
    name: "AFFH-OG - ORFS Male O-Ring × Metric Male Adjustable Stud End Run Tee",
    code: "AFFH-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFFH-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20Run%20Tee-3mb0sLspMvSh1Qfv3RozVbs1E7sVeW.png",
  },
  {
    id: 390,
    name: "AFHF-OG - ORFS Male O-Ring × Metric Male Adjustable Stud End Branch Tee",
    code: "AFHF-OG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AFHF-OG%20-%20ORFS%20Male%20O-Ring%20%C3%97%20Metric%20Male%20Adjustable%20Stud%20End%20Branch%20Tee-GRt2XNYz9eSIpFtZR5CrMwRaqzomxs.png",
  },
  {
    id: 391,
    name: "1CFL - Metric Male Bite Type × L-Series Flange",
    code: "1CFL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CFL%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20L-Series%20Flange-1nTn74dcAI62saESa4AL0v3Qor3Ehx.png",
  },
  {
    id: 392,
    name: "1CFL9 - Metric Male Bite Type × L-Series Flange (90°Elbows)",
    code: "1CFL9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1CFL9%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20L-Series%20Flange%20%2890%C2%B0Elbows%29-PoqmhXZ4TJQ2HSN5KFVSmjJALbNwFL.png",
  },
  {
    id: 393,
    name: "1DFL - Metric Male Bite Type × L-Series Flange",
    code: "1DFL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DFL%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20L-Series%20Flange-6ryjFbTfq9OsGuEKzzgyvJz2rUaMvJ.png",
  },
  {
    id: 394,
    name: "1DFL9 - Metric Male Bite Type × L-Series Flange (90°Elbows)",
    code: "1DFL9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DFL9%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20L-Series%20Flange%20%2890%C2%B0Elbows%29-WVBfxJ13uFxjtonNeejfZU3enOu5IB.png",
  },
  {
    id: 395,
    name: "1DFS - Metric Male Bite Type × S-Series Flange",
    code: "1DFS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DFS%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20S-Series%20Flange-xqGJQXGyYqIylGChUSw0aZkkN6qalK.png",
  },
  {
    id: 396,
    name: "4P - SAE Male 90°Cone Plug",
    code: "4P",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4P%20-%20SAE%20Male%2090%C2%B0Cone%20Plug-N81UDtXh2UGNRA0EGm3GGNxjCADXMQ.png",
  },
  {
    id: 397,
    name: "FL - L-Series Split Flange Clamps",
    code: "FL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FL%20-%20L-Series%20Split%20Flange%20Clamps-UZi9VCZKGZ2xGYIUNGZIAKkHJtq3Z8.png",
  },
  {
    id: 398,
    name: "FL-W - L-Series Whole Flange Clamps",
    code: "FL-W",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FL-W%20-%20L-Series%20Whole%20Flange%20Clamps-eFIOsmY8PMlfoLvn2pHTK32gsN4xCD.png",
  },
  {
    id: 399,
    name: "FS - S-Series Split Flange Clamps",
    code: "FS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FS%20-%20S-Series%20Split%20Flange%20Clamps-58oLyDNRqYfw8fYa9JJe6NfJDnQPeG.png",
  },
  {
    id: 400,
    name: "FS-W - S-Series Whole Flange Clamps",
    code: "FS-W",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FS-W%20-%20S-Series%20Whole%20Flange%20Clamps-TSWh1Zr7pbkFmQVcNt8zxbOStDHry2.png",
  },
  {
    id: 401,
    name: "1DFS9 - Metric Male Bite Type × S-Series Flange (90°Elbows)",
    code: "1DFS9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1DFS9%20-%20Metric%20Male%20Bite%20Type%20%C3%97%20S-Series%20Flange%20%2890%C2%B0Elbows%29-FDTrWK8lOlMsBpxeKtHG3sCjToNPNu.png",
  },
  {
    id: 402,
    name: "1FFL - ORFS Male O-Ring × L-Series Flange",
    code: "1FFL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FFL%20-%20ORFS%20Male%20O-Ring%20%C3%97%20L-Series%20Flange-S1Qz8wCRXcCTxj6QYyovMId0PIbEGQ.png",
  },
  {
    id: 403,
    name: "1FFL9 - ORFS Male O-Ring × L-Series Flange (90°Elbows)",
    code: "1FFL9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FFL9%20-%20ORFS%20Male%20O-Ring%20%C3%97%20L-Series%20Flange%20%2890%C2%B0Elbows%29-f5oTdwryRlZoDHzUbohmFl2PnOSlPR.png",
  },
  {
    id: 404,
    name: "1FFS - ORFS Male O-Ring × S-Series Flange",
    code: "1FFS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FFS%20-%20ORFS%20Male%20O-Ring%20%C3%97%20S-Series%20Flange-EmSrZBvjYoCDAQnmuWCeWpzUtQ9xAu.png",
  },
  {
    id: 405,
    name: "1FFS9 - ORFS Male O-Ring × S-Series Flange (90°Elbows)",
    code: "1FFS9",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FFS9%20-%20ORFS%20Male%20O-Ring%20%C3%97%20S-Series%20Flange%20%2890%C2%B0Elbows%29-7SL7UZPQBTDuBHVXaH4AjhsytKJtAU.png",
  },
  {
    id: 406,
    name: "1FSW - S-Series Flange × Butt-Weld Tube",
    code: "1FSW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1FSW%20-%20S-Series%20Flange%20%C3%97%20Butt-Weld%20Tube-gJU2XsQF05Bn9nhPhQhILtDQVYy2Yc.png",
  },
  {
    id: 407,
    name: "1JFL - JIC Male 74°Cone × L-Series Flange",
    code: "1JFL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1JFL%20-%20JIC%20Male%2074%C2%B0Cone%20%C3%97%20L-Series%20Flange-274FMmAC06A6CJrwWEcosFxhZKXglo.png",
  },
  {
    id: 408,
    name: "4FL - L-Series Flange Plug",
    code: "4FL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4FL%20-%20L-Series%20Flange%20Plug-02RemoAFg0GqQxUAZDCjNUUtKzUYFo.png",
  },
  {
    id: 409,
    name: "4FL-M - L-Series Flange Plug",
    code: "4FL-M",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4FL-M%20-%20L-Series%20Flange%20Plug-5M3ztWthOe3qTz72k1lR70Kdt3dSK4.png",
  },
  {
    id: 410,
    name: "4FS - S-Series Flange Plug",
    code: "4FS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4FS%20-%20S-Series%20Flange%20Plug-yoN5uxiXdHaFEeUHuf0zjwrwtj9R5I.png",
  },
  {
    id: 411,
    name: "4FS-M - S-Series Flange Plug",
    code: "4FS-M",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4FS-M%20-%20S-Series%20Flange%20Plug-UR2o5ujqUxjLifOAZu407Pu6Oo91G9.png",
  },
]
// ─────────────────────────────────────────────────────────���───────────────────

export default function HydraulicAdaptersPage() {
  const products = adapterProducts.map((product) => ({
    id: 140000 + product.id,
    name: product.name,
    code: product.code,
    image: product.image,
  }))

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
      <Topography className="pointer-events-none !fixed inset-0 z-0" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={3.4} thickness={0.018} glow={0.22} opacity={0.075} mouseRadius={0.24} mouseStrength={0.34} />
      <div className="relative z-10">

      {/* Breadcrumb */}
      <nav
        className="border-b"
        style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-0 flex-wrap">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-[11.5px] font-semibold tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#0f2040", letterSpacing: "0.06em" }}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center mx-2.5" aria-hidden>
              <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
            </li>
            <li className="flex items-center">
              <Link
                href="/products"
                className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                style={{ color: "#2a4a70", letterSpacing: "0.05em" }}
              >
                Products
              </Link>
            </li>
            <li className="flex items-center mx-2.5" aria-hidden>
              <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
            </li>
            <li className="flex items-center gap-1.5" aria-current="page">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e05a2e" }} />
              <span
                className="text-[11.5px] font-bold tracking-wide uppercase"
                style={{ color: "#e05a2e", letterSpacing: "0.06em" }}
              >
                Hydraulic Adapters
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ───────────────��──────���───────────────────────────────── */}
      <div className="relative overflow-hidden bg-transparent">
      <HydraulicAdaptersHeroSection category={category} title={heroTitle} description={heroDescription} featuredProduct={adapterProducts[0]} productCount={adapterProducts.length} />

      {/* ── Products Section ───────────────��──────────────────────────── */}
      <section
        className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

          {/* Section heading */}
          <div className="mb-8">
            <p className="text-[#e05a2e] text-[11px] font-bold uppercase tracking-[0.18em] mb-2 font-sans">
              Hydraulic Adapters &nbsp;/&nbsp; All Products
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#0f2040] leading-tight mb-4 text-balance"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Complete Adapter Range
              <span className="block text-[#1a5fa8] text-2xl sm:text-3xl font-semibold mt-0.5" style={{ letterSpacing: "-0.01em" }}>
                {adapterProducts.length} Products
              </span>
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
              <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
            </div>
          </div>

          <p className="text-[#2a4a70]/80 leading-relaxed max-w-3xl mb-10 text-sm sm:text-base">
            Hydronex offers a comprehensive range of hydraulic adapters covering all major thread
            standards — NPT, BSP, JIC, ORFS, Metric, and SAE. From straight adapters and reducers
            to elbows and tees, every adapter is precision-machined for reliable, leak-free
            connections in high-pressure hydraulic systems.
          </p>

          <BSPProductGrid
            products={products}
            categoryLabel="Hydraulic Adapters"
            searchScope="Hydraulic Adapters"
          />

        </div>
      </section>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <BSPCtaSection />
      <LikedProductsDrawer />
      <LikedProductsFAB />

      {/* ── Liked Products Drawer + FAB ────────────────────────────────── */}
      </div>
    </div>
  )
}
