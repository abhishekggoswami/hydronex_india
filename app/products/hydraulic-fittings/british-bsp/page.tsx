import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LikedProductsDrawer } from "@/components/liked-products-drawer"
import { LikedProductsFAB } from "@/components/liked-products-fab"
import { BSPProductGrid } from "@/components/bsp-product-grid"
import { BSPCtaSection } from "@/components/bsp-cta-section"
import { BSPHeroSection } from "@/components/bsp-hero-section"
import Topography from "@/components/topography"

export const metadata: Metadata = {
  title: "British BSP Fittings – British and Metric Fittings | Hydronex",
  description:
    "Hydronex supplies a wide range of British Standard Pipe (BSP) fittings. High-quality stainless steel construction that can stand strong working conditions.",
}

// 54 BSPP products — add real data as products are confirmed
const bsppProducts: { id: number; name: string; code: string; image?: string; slug?: string }[] = [
  {
    id: 1,
    name: "British Std Pipe Parallel (BSPP)",
    code: "HYD-BSPP-001",
    image: "/images/hydraulic-fittings/bspp-fitting.png",
  },
  {
    id: 2,
    name: "British Strd Pipe Tapered (BSPT)",
    code: "HYD-BSPT-001",
    image: "/images/hydraulic-fittings/bspt-fitting.png",
  },
  {
    id: 3,
    name: "Stainless BSP Fittings",
    code: "HYD-SBSP-001",
    image: "/images/hydraulic-fittings/stainless-bsp-fittings.png",
  },
  {
    id: 4,
    name: "BSP Male 60° Cone Seat Seal (12611)",
    code: "HYD-BSP-12611",
    image: "/images/hydraulic-fittings/bsp-male-60-cone-seat-seal-12611.png",
    slug: "bsp-male-60-cone-seat-seal-12611",
  },
  {
    id: 5,
    name: "BSP Female 60° Cone Seal (22611)",
    code: "HYD-BSP-22611",
    image: "/images/hydraulic-fittings/bsp-female-60-cone-seal-22611.png",
    slug: "bsp-female-60-cone-seal-22611",
  },
  {
    id: 6,
    name: "BSP Female 60° Cone Seal Double Hexagon (22611D)",
    code: "HYD-BSP-22611D",
    image: "/images/hydraulic-fittings/bsp-female-60-cone-seal-double-hexagon-22611d.png",
    slug: "bsp-female-60-cone-seal-double-hexagon-22611d",
  },
  {
    id: 7,
    name: "45° BSP Female 60° Cone Seal (22641)",
    code: "HYD-BSP-22641",
    image: "/images/hydraulic-fittings/45-bsp-female-60-cone-seal-22641.png",
    slug: "45-bsp-female-60-cone-seal-22641",
  },
  {
    id: 8,
    name: "90° BSP Female 60° Cone Seal (22691)",
    code: "HYD-BSP-22691",
    image: "/images/hydraulic-fittings/90-bsp-female-60-cone-seal-22691.png",
    slug: "90-bsp-female-60-cone-seal-22691",
  },
  {
    id: 9,
    name: "90° BSP Female Multi Seal (22191)",
    code: "HYD-BSP-22191",
    image: "/images/hydraulic-fittings/90-bsp-female-multi-seal-22191.png",
    slug: "90-bsp-female-multi-seal-22191",
  },
  {
    id: 10,
    name: "45° BSP Female Multi Seal (22141)",
    code: "HYD-BSP-22141",
    image: "/images/hydraulic-fittings/45-bsp-female-multi-seal-22141.png",
    slug: "45-bsp-female-multi-seal-22141",
  },
  {
    id: 11,
    name: "BSP Female Multi Seal (22111)",
    code: "HYD-BSP-22111",
    image: "/images/hydraulic-fittings/bsp-female-multi-seal-22111.png",
    slug: "bsp-female-multi-seal-22111",
  },
  {
    id: 12,
    name: "BSP MALE O-RING SEAL (12211)",
    code: "HYD-BSP-12211",
    image: "/images/hydraulic-fittings/bsp-male-o-ring-seal-12211.png",
    slug: "bsp-male-o-ring-seal-12211",
  },
  {
    id: 13,
    name: "BSP Female Flat Seal (22211)",
    code: "HYD-BSP-22211",
    image: "/images/hydraulic-fittings/bsp-female-flat-seal-22211.png",
    slug: "bsp-female-flat-seal-22211",
  },
  {
    id: 14,
    name: "45° BSP Female Flat Seal (22241)",
    code: "HYD-BSP-22241",
    image: "/images/hydraulic-fittings/45-bsp-female-flat-seal-22241.png",
    slug: "45-bsp-female-flat-seal-22241",
  },
  {
    id: 15,
    name: "90° BSP Female Flat Seal (22291)",
    code: "HYD-BSP-22291",
    image: "/images/hydraulic-fittings/90-bsp-female-flat-seal-22291.png",
    slug: "90-bsp-female-flat-seal-22291",
  },
  {
    id: 16,
    name: "12211 BSP Male O-Ring Seal / ISO 8434-6 / BS 5200 - 12211",
    code: "HYD-BSP-12211-ISO",
    image: "/images/hydraulic-fittings/bsp-male-o-ring-seal-iso-8434-6-12211.png",
    slug: "12211-bsp-male-o-ring-seal-iso-8434-6-12211",
  },
  {
    id: 17,
    name: "13011SP BSPT MALE - 13011SP",
    code: "HYD-BSPT-13011SP",
    image: "/images/hydraulic-fittings/bspt-male-13011sp.png",
    slug: "13011sp-bspt-male",
  },
  {
    id: 18,
    name: "22641 45°BSP FEMALE 60° CONE  ISO 8434-6  BS 5200 - 22641",
    code: "HYD-BSP-22641-ISO",
    image: "/images/hydraulic-fittings/22641-45-bsp-female-60-cone-iso-8434-6.png",
    slug: "22641-45-bsp-female-60-cone-iso",
  },
  {
    id: 19,
    name: "12611A BSP MALE DOUBLE USE FOR 60° CONE SEAT OR BONDED SEAL - 12611A",
    code: "HYD-BSP-12611A",
    image: "/images/hydraulic-fittings/12611a-bsp-male-double-use-60-cone-bonded-seal.png",
    slug: "12611a-bsp-male-double-use-60-cone-bonded-seal",
  },
  {
    id: 20,
    name: "22611D-SM BSP FEMALE 60° Cone Seal DOUBLE HEXAGON - 22611D-SM",
    code: "HYD-BSP-22611D-SM",
    image: "/images/hydraulic-fittings/22611d-sm-bsp-female-60-cone-double-hexagon.png",
    slug: "22611d-sm-bsp-female-60-cone-double-hexagon",
  },
  {
    id: 21,
    name: "22611 BSP FEMALE 60° Cone Seal ISO 8434-6  BS 5200 - 22611",
    code: "HYD-BSP-22611-ISO",
    image: "/images/hydraulic-fittings/22611-bsp-female-60-cone-iso-8434-6.png",
    slug: "22611-bsp-female-60-cone-iso-8434-6",
  },
  {
    id: 22,
    name: "22611D BSP FEMALE 60° Cone Seal DOUBLE HEXAGON - 22611D",
    code: "HYD-BSP-22611D",
    image: "/images/hydraulic-fittings/22611d-bsp-female-60-cone-double-hexagon.png",
    slug: "22611d-bsp-female-60-cone-double-hexagon",
  },
  {
    id: 23,
    name: "22191 45°BSP FEMALE 60° CONE  ISO 8434-6  BS 5200 -22 191",
    code: "HYD-BSP-22191-ISO",
    image: "/images/hydraulic-fittings/22191-45-bsp-female-60-cone-iso-8434-6.png",
    slug: "22191-45-bsp-female-60-cone-iso-8434-6",
  },
  {
    id: 24,
    name: "22211 BSP Female Flat seat  ISO 8434-6  BS 5200 - 22211",
    code: "HYD-BSP-22211-ISO",
    image: "/images/hydraulic-fittings/22211-bsp-female-flat-seat-iso-8434-6.png",
    slug: "22211-bsp-female-flat-seat-iso-8434-6",
  },
  {
    id: 25,
    name: "22241 45°BSP Female flat seat ISO 8434-6  BS 5200 - 22241",
    code: "HYD-BSP-22241-ISO",
    image: "/images/hydraulic-fittings/22241-45-bsp-female-flat-seat-iso-8434-6.png",
    slug: "22241-45-bsp-female-flat-seat-iso-8434-6",
  },
  {
    id: 26,
    name: "22691K BSP Female 60° cone double hexagon -22691K",
    code: "HYD-BSP-22691K",
    image: "/images/hydraulic-fittings/22691k-bsp-female-60-cone-double-hexagon.png",
    slug: "22691k-bsp-female-60-cone-double-hexagon",
  },
  {
    id: 27,
    name: "22141 45° BSP Female multiseal  ISO 8434-6  BS 5200 -22141",
    code: "HYD-BSP-22141-ISO",
    image: "/images/hydraulic-fittings/22141-45-bsp-female-multiseal-iso-8434-6.png",
    slug: "22141-45-bsp-female-multiseal-iso-8434-6",
  },
  {
    id: 28,
    name: "22691 90°BSP FEMALE 60° CONE  ISO 8434-6  BS 5200 -22691",
    code: "HYD-BSP-22691-ISO",
    image: "/images/hydraulic-fittings/22691-90-bsp-female-60-cone-iso-8434-6.png",
    slug: "22691-90-bsp-female-60-cone-iso-8434-6",
  },
  {
    id: 29,
    name: "22111 BSP Female multiseal  ISO 8434-6  BS 5200 - 22111",
    code: "HYD-BSP-22111-ISO",
    image: "/images/hydraulic-fittings/22111-bsp-female-multiseal-iso-8434-6.png",
    slug: "22111-bsp-female-multiseal-iso-8434-6",
  },
  {
    id: 30,
    name: "22291 90°BSP Female flat seat ISO 8434-6  BS 5200 - 222 91",
    code: "HYD-BSP-22291-ISO",
    image: "/images/hydraulic-fittings/22291-90-bsp-female-flat-seat-iso-8434-6.png",
    slug: "22291-90-bsp-female-flat-seat-iso-8434-6",
  },
  {
    id: 31,
    name: "13013 BSPT Male",
    code: "HYD-BSPT-13013",
    image: "/images/hydraulic-fittings/13013-bspt-male.png",
    slug: "13013-bspt-male",
  },
  {
    id: 32,
    name: "22641F FEMALE BSP PARALLEL PIPE 60° CONE 45 ° ELBOW  ISO 228-1",
    code: "HYD-BSP-22641F",
    image: "/images/hydraulic-fittings/22641f-female-bsp-parallel-pipe-60-cone-45-elbow-iso-228-1.png",
    slug: "22641f-female-bsp-parallel-pipe-60-cone-45-elbow-iso-228-1",
  },
  {
    id: 33,
    name: "22691K-F FEMALE BSP PARALLEL PIPE 60° CONE BLOCK TYPE 90° ELBOW  COMPACT",
    code: "HYD-BSP-22691K-F",
    image: "/images/hydraulic-fittings/22691k-f-female-bsp-parallel-pipe-60-cone-block-90-elbow-compact.png",
    slug: "22691k-f-female-bsp-parallel-pipe-60-cone-block-90-elbow-compact",
  },
  {
    id: 34,
    name: "22611F FEMALE BSP PARALLEL PIPE 60° CONE  ISO 228-1",
    code: "HYD-BSP-22611F",
    image: "/images/hydraulic-fittings/22611f-female-bsp-parallel-pipe-60-cone-iso-228-1.png",
    slug: "22611f-female-bsp-parallel-pipe-60-cone-iso-228-1",
  },
  {
    id: 35,
    name: "22691F FEMALE BSP PARALLEL PIPE 60° CONE 90° ELBOW  ISO 228-1",
    code: "HYD-BSP-22691F",
    image: "/images/hydraulic-fittings/22691f-female-bsp-parallel-pipe-60-cone-90-elbow-iso-228-1.png",
    slug: "22691f-female-bsp-parallel-pipe-60-cone-90-elbow-iso-228-1",
  },
  {
    id: 36,
    name: "12611F MALE BSP PARALLEL PIPE 60° CONE  ISO 228-1",
    code: "HYD-BSP-12611F",
    image: "/images/hydraulic-fittings/12611f-male-bsp-parallel-pipe-60-cone-iso-228-1.png",
    slug: "12611f-male-bsp-parallel-pipe-60-cone-iso-228-1",
  },
  {
    id: 37,
    name: "12613 BSP Male 60°Cone Seat",
    code: "HYD-BSP-12613",
    image: "/images/hydraulic-fittings/12613-bsp-male-60-cone-seat.png",
    slug: "12613-bsp-male-60-cone-seat",
  },
  {
    id: 38,
    name: "22211DF FEMALE BSP PARALLEL PIPE FLAT SEAT  ISO 228-1",
    code: "HYD-BSP-22211DF",
    image: "/images/hydraulic-fittings/22211df-female-bsp-parallel-pipe-flat-seat-iso-228-1.png",
    slug: "22211df-female-bsp-parallel-pipe-flat-seat-iso-228-1",
  },
  {
    id: 39,
    name: "13011SP-F MALE BSP TAPER PIPE 60° CONE",
    code: "HYD-BSP-13011SP-F",
    image: "/images/hydraulic-fittings/13011sp-f-male-bsp-taper-pipe-60-cone.png",
    slug: "13011sp-f-male-bsp-taper-pipe-60-cone",
  },
  {
    id: 40,
    name: "22643 45° BSP FEMALE 60° CONE O-RING-22643W",
    code: "HYD-BSP-22643W",
    image: "/images/hydraulic-fittings/22643-45-bsp-female-60-cone-o-ring-22643w.png",
    slug: "22643-45-bsp-female-60-cone-o-ring-22643w",
  },
  {
    id: 41,
    name: "BSP FEMALE 60° CONE 22618D(R5)",
    code: "HYD-BSP-22618D-R5",
    image: "/images/hydraulic-fittings/bsp-female-60-cone-22618d-r5.png",
    slug: "bsp-female-60-cone-22618d-r5",
  },
  {
    id: 42,
    name: "22613 ORW BSP FEMALE 60° CONE O-RING REF. BS5200 -22613-ORW",
    code: "HYD-BSP-22613-ORW",
    image: "/images/hydraulic-fittings/22613-orw-bsp-female-60-cone-o-ring-bs5200.png",
    slug: "22613-orw-bsp-female-60-cone-o-ring-bs5200",
  },
  {
    id: 43,
    name: "13012SP MALE BSP TAPER PIPE 60° CONE",
    code: "HYD-BSP-13012SP",
    image: "/images/hydraulic-fittings/13012sp-male-bsp-taper-pipe-60-cone.png",
    slug: "13012sp-male-bsp-taper-pipe-60-cone",
  },
  {
    id: 44,
    name: "22111D-F FEMALE BSP PARALLEL PIPE 60° CONE  ISO 228-1",
    code: "HYD-BSP-22111D-F",
    image: "/images/hydraulic-fittings/22111d-f-female-bsp-parallel-pipe-60-cone-iso-228-1.png",
    slug: "22111d-f-female-bsp-parallel-pipe-60-cone-iso-228-1",
  },
  {
    id: 45,
    name: "28612D-F MALE BSP TAPER PIPE 60° CONE",
    code: "HYD-BSP-28612D-F",
    image: "/images/hydraulic-fittings/28612d-f-male-bsp-taper-pipe-60-cone.png",
    slug: "28612d-f-male-bsp-taper-pipe-60-cone",
  },
  {
    id: 46,
    name: "12618-R5 BSPP MALE 60°CONE SEAT REUSABLE FITTING -12618R5",
    code: "HYD-BSP-12618R5",
    image: "/images/hydraulic-fittings/12618-r5-bspp-male-60-cone-seat-reusable-12618r5.png",
    slug: "12618-r5-bspp-male-60-cone-seat-reusable-12618r5",
  },
  {
    id: 47,
    name: "22612D-F FEMALE BSP PARALLEL PIPE 60° CONE  ISO 228-1",
    code: "HYD-BSP-22612D-F",
    image: "/images/hydraulic-fittings/22612d-f-female-bsp-parallel-pipe-60-cone-iso-228-1.png",
    slug: "22612d-f-female-bsp-parallel-pipe-60-cone-iso-228-1",
  },
  {
    id: 48,
    name: "29612D-F FEMALE SWIVEL JIS BSP PARALLEL PIPE 30° FLARE",
    code: "HYD-BSP-29612D-F",
    image: "/images/hydraulic-fittings/29612d-f-female-swivel-jis-bsp-parallel-pipe-30-flare.png",
    slug: "29612d-f-female-swivel-jis-bsp-parallel-pipe-30-flare",
  },
  {
    id: 49,
    name: "22618-R5T BSPP FEMALE 60°CONE REUSABLE FITTING-22618R5-T",
    code: "HYD-BSP-22618R5-T",
    image: "/images/hydraulic-fittings/22618-r5t-bspp-female-60-cone-reusable-22618r5-t.png",
    slug: "22618-r5t-bspp-female-60-cone-reusable-22618r5-t",
  },
  {
    id: 50,
    name: "13011 SP-PO BSPT MALE SOCKETLESS FITTING 13011-SP-PO",
    code: "HYD-BSPT-13011SP-PO",
    image: "/images/hydraulic-fittings/13011sp-po-bspt-male-socketless-13011-sp-po.png",
    slug: "13011sp-po-bspt-male-socketless-13011-sp-po",
  },
  {
    id: 51,
    name: "22611-PO BSP FEMALE 60° CONE SAET SOCKETLESS FITTING 22611-PO",
    code: "HYD-BSP-22611-PO",
    image: "/images/hydraulic-fittings/22611-po-bsp-female-60-cone-socketless-22611-po.png",
    slug: "22611-po-bsp-female-60-cone-socketless-22611-po",
  },
  {
    id: 52,
    name: "12611-PO BSP MALE 60° CONE SAET SOCKETLESS FITTING 12611-PO",
    code: "HYD-BSP-12611-PO",
    image: "/images/hydraulic-fittings/12611-po-bsp-male-60-cone-socketless-12611-po.png",
    slug: "12611-po-bsp-male-60-cone-socketless-12611-po",
  },
  {
    id: 53,
    name: "22693 90° BSP FEMALE 60° CONE O-RING-22693W",
    code: "HYD-BSP-22693W",
    image: "/images/hydraulic-fittings/22693-90-bsp-female-60-cone-o-ring-22693w.png",
    slug: "22693-90-bsp-female-60-cone-o-ring-22693w",
  },
  {
    id: 54,
    name: "22691K -PO90° BSP FEMALE 60° CONE SAET SOCKETLESS FITTING22691K-PO",
    code: "HYD-BSP-22691K-PO",
    image: "/images/hydraulic-fittings/22691k-po-90-bsp-female-60-cone-socketless-22691k-po.png",
    slug: "22691k-po-90-bsp-female-60-cone-socketless-22691k-po",
  },
]

export default function BritishBSPFittingsPage() {
  return (
      <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <Topography
          className="pointer-events-none !fixed inset-0 z-0"
          lowColor="#9eb8c3"
          midColor="#f26522"
          highColor="#ffffff"
          speed={0.18}
          morphAmount={1.7}
          bands={3.4}
          thickness={0.018}
          glow={0.22}
          opacity={0.075}
          mouseRadius={0.24}
          mouseStrength={0.34}
        />
        <div className="relative z-10">

        {/* Breadcrumb — classy modern with parent→child opacity cascade */}
        <nav
          className="border-b"
          style={{ background: "#f8fafc", borderColor: "rgba(210,225,240,0.7)" }}
          aria-label="Breadcrumb"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <ol className="flex items-center gap-0 flex-wrap">
              {/* Level 1 — darkest */}
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
              {/* Level 2 */}
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
              {/* Level 3 */}
              <li className="flex items-center">
                <Link
                  href="/products/hydraulic-fittings"
                  className="text-[11.5px] font-medium tracking-wide uppercase transition-colors duration-150 hover:text-[#e05a2e]"
                  style={{ color: "#4a6a90", letterSpacing: "0.05em" }}
                >
                  Hydraulic Fittings
                </Link>
              </li>
              <li className="flex items-center mx-2.5" aria-hidden>
                <span style={{ color: "#94aabf", fontSize: "10px" }}>&#x2044;</span>
              </li>
              {/* Active category */}
              <li className="flex items-center gap-1.5" aria-current="page">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#e05a2e" }}
                />
                <span
                  className="text-[11.5px] font-bold tracking-wide uppercase"
                  style={{ color: "#e05a2e", letterSpacing: "0.06em" }}
                >
                  British BSP Fittings
                </span>
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden bg-transparent">
          <BSPHeroSection />

        {/* ── BSPP Section ──────────────────────────────────────────────── */}
        <section className="relative z-10 border-b border-[#d0e4f5]/40 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

            {/* Section heading */}
            <div className="mb-8">
              {/* Eyebrow label */}
              <p className="text-[#e05a2e] text-[11px] font-bold uppercase tracking-[0.18em] mb-2 font-sans">
                Hydraulic Fittings &nbsp;/&nbsp; British BSP
              </p>
              <h2 className="max-w-[15ch] font-heading text-[#143126] text-balance" style={{ fontSize: "clamp(2.55rem, 4.7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.07em", lineHeight: 0.9 }}>
                British Std Pipe Parallel <span className="text-[#143126]">(BSPP) Fittings</span>
              </h2>
              {/* Accent rule */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[3px] w-10 bg-[#e05a2e] rounded-full" />
                <span className="h-[3px] w-4 bg-[#1a5fa8]/40 rounded-full" />
              </div>
            </div>

            <p className="text-[#2a4a70]/80 leading-relaxed max-w-3xl mb-10 text-sm sm:text-base">
              We offer a wide variety British standard pipe parallel (BSPP) adapters. These fittings can
              withstand intense PSI pressure levels and high temperatures. BSPP or parallel thread pipes
              are available in a number of sizes and designs for your unique needs.
            </p>

            {/* ── Scoped search + product grid ─────────────────────────── */}
            <BSPProductGrid products={bsppProducts} />

          </div>
        </section>

        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <BSPCtaSection />

        {/* ── Liked Products Drawer + FAB ───────────────────────────────── */}
        <LikedProductsDrawer />
        <LikedProductsFAB />

        </div>
      </div>
  )
}
