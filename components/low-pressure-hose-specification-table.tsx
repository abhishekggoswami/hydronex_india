"use client"

import { useEffect, useRef, useState } from "react"
import type { LowPressureHoseProduct } from "@/lib/low-pressure-hoses"

/** Retains PVC and LP pressure data in the BSP animated technical-table system. */
export function LowPressureHoseSpecificationTable({ hose }: { hose: LowPressureHoseProduct }) {
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

  const headerClass = "px-3 py-3 text-center text-[9px] font-bold uppercase tracking-[.1em] text-[#0e1c35] border-r border-[#e2e8f0]"
  const cellClass = "px-3 py-2.5 text-center text-[11px] text-[#374151] border-r border-b border-[#e2e8f0]"

  return (
    <section ref={ref} className="relative py-14 transition-all duration-700" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4"><span className="h-7 w-1 rounded-full bg-[#e05a2e]" /><h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Products Specification</h2><span className="ml-auto rounded-full border border-[#f4c4aa] bg-[#fff0eb] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c0420a]">{rows.length} variants</span></div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0e1c35]">{hose.partTableType === "pvcbraided" ? "Table - 1 Technical Data of PVC Braided Hose" : "Table - 1 Technical Data of LP Hose"}</h3>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,.06),0_4px_24px_rgba(224,90,46,.06)]">
          {hose.partTableType === "pvcbraided" ? (
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead><tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "2px solid #e05a2e" }}>
                {['Size mm', 'Wall Thickness mm', 'Working Pressure (at 30Â°C kg/cm2)', 'Standard Lengths (mtrs.)'].map((label) => <th key={label} className={headerClass}>{label}</th>)}
              </tr></thead>
              <tbody>{rows.map((row, index) => <tr key={row.sizeMM} className="bsp-table-row" style={{ background: index % 2 === 0 ? "#fff" : "#fafbfc" }}>
                {[row.sizeMM, row.wallThicknessMM, row.workingPressureKgcm2, row.standardLengthsMtrs].map((value, cellIndex) => <td key={cellIndex} className={`${cellClass} ${cellIndex === 0 ? "font-mono font-bold text-[#c0420a]" : ""}`}>{value}</td>)}
              </tr>)}</tbody>
            </table>
          ) : (
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "1px solid #f4c4aa" }}><th className={headerClass}>Hose Type</th><th colSpan={5} className={headerClass}>Hose Size</th></tr>
                <tr style={{ background: "linear-gradient(90deg, #fef8f5 0%, #fffaf8 100%)", borderBottom: "2px solid #e05a2e" }}>{['', ...rows.map((row) => row.size)].map((label, index) => <th key={index} className={headerClass}>{label}</th>)}</tr>
              </thead>
              <tbody>
                <tr className="bsp-table-row" style={{ background: "#fff" }}><td className={`${cellClass} font-bold text-[#c0420a]`}>Low</td>{rows.map((row) => <td key={row.size} className={cellClass}>{row.lowPSI}</td>)}</tr>
                <tr className="bsp-table-row" style={{ background: "#fafbfc" }}><td className={`${cellClass} font-bold text-[#c0420a]`}>High</td>{rows.map((row) => <td key={row.size} className={cellClass}>{row.highPSI}</td>)}</tr>
                <tr className="bsp-table-row" style={{ background: "#fff" }}><td className={`${cellClass} font-bold text-[#c0420a]`}>W</td>{rows.map((row) => <td key={row.size} className={cellClass}>PSI</td>)}</tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  )
}
