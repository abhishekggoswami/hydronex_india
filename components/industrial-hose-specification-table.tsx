"use client"

import { useEffect, useRef, useState } from "react"
import type { IndustrialHoseProduct } from "@/lib/industrial-hoses"

type Row = NonNullable<IndustrialHoseProduct["partTable"]>[number]

const columns: Array<[keyof Row, string]> = [
  ["partNo", "Part No."], ["dn", "DN"], ["hoseIdMm", "Nominal ID (mm)"], ["hoseIdIn", "Nominal ID (In.)"],
  ["hoseOdMm", "Nominal OD (mm)"], ["hoseOdIn", "Nominal OD (In.)"], ["workingPressureBar", "Working Pressure (BAR)"],
  ["workingPressurePsi", "Working Pressure (PSI)"], ["minBendRadiusMm", "Min. Bend Radius (mm)"], ["minBendRadiusIn", "Min. Bend Radius (In.)"], ["uom", "UOM"],
]

/** Retains Industrial sizing data in the shared BSP table visual and scroll entrance. */
export function IndustrialHoseSpecificationTable({ hose }: { hose: IndustrialHoseProduct }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const rows = hose.partTable ?? []

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.05 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  if (!rows.length) return null

  return (
    <section ref={ref} className="relative py-14 transition-all duration-700" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-7 w-1 rounded-full bg-[#e05a2e]" />
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Products Specification</h2>
          <span className="ml-auto rounded-full border border-[#f4c4aa] bg-[#fff0eb] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c0420a]">{rows.length} variants</span>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,.06),0_4px_24px_rgba(224,90,46,.06)]">
          <table className="w-full min-w-[1000px] border-collapse text-sm">
            <thead><tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "2px solid #e05a2e" }}>
              {columns.map(([key, label], index) => <th key={String(key)} className={`px-3 py-3 text-center text-[9px] font-bold uppercase tracking-[.1em] text-[#0e1c35] ${index < columns.length - 1 ? "border-r border-[#e2e8f0]" : ""}`}>{label}</th>)}
            </tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={row.partNo} className="bsp-table-row" style={{ background: rowIndex % 2 === 0 ? "#fff" : "#fafbfc" }}>
              {columns.map(([key], index) => {
                const item = row[key]
                const value = typeof item === "number" && String(key).toLowerCase().includes("psi") ? item.toLocaleString() : item ?? "â€”"
                return <td key={String(key)} className={`px-3 py-2.5 text-center text-[11px] ${index < columns.length - 1 ? "border-r border-b border-[#e2e8f0]" : "border-b border-[#e2e8f0]"} ${key === "partNo" ? "font-mono font-bold text-[#c0420a]" : "text-[#374151]"}`}>{value}</td>
              })}
            </tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
