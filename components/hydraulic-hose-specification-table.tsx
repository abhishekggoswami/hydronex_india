import type { HoseProduct } from "@/lib/hydraulic-hoses"

type Row = Record<string, string | number | undefined>

const r1Columns: Array<[keyof Row, string]> = [
  ["partNo", "Part No."], ["dn", "DN"], ["hoseIdMm", "Nominal ID (mm)"], ["hoseIdIn", "Nominal ID (In.)"],
  ["hoseOdMm", "Nominal OD (mm)"], ["hoseOdIn", "Nominal OD (In.)"], ["workingPressureBar", "Working Pressure (BAR)"],
  ["workingPressurePsi", "Working Pressure (PSI)"], ["minBendRadiusMm", "Min. Bend Radius (mm)"], ["minBendRadiusIn", "Min. Bend Radius (In.)"], ["uom", "UOM"],
]

const jackColumns: Array<[keyof Row, string]> = [
  ["partNo", "Part No."], ["dn", "DN"], ["hoseIdMm", "Hose ID (mm)"], ["hoseOdMm", "Hose OD (mm)"],
  ["maxWorkingPressureBar", "Max. Working Pressure (BAR)"], ["maxWorkingPressurePsi", "Max. Working Pressure (PSI)"],
  ["minBurstPressureBar", "Min. Burst Pressure (BAR)"], ["minBurstPressurePsi", "Min. Burst Pressure (PSI)"], ["minBendRadiusMm", "Min. Bend Radius (mm)"], ["uom", "UOM"],
]

/** Preserves hydraulic-hose dimensions and pressure data in the BSP specification treatment. */
export function HydraulicHoseSpecificationTable({ hose }: { hose: HoseProduct }) {
  if (!hose.partTable?.length) return null
  const rows = hose.partTable as unknown as Row[]
  const columns = hose.partTableType === "r1" ? r1Columns : jackColumns
  const value = (row: Row, key: keyof Row) => {
    const item = row[key]
    return typeof item === "number" && key.toLowerCase().includes("psi") ? item.toLocaleString() : item ?? "—"
  }

  return (
    <section className="relative py-14" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9f4ef 40%, #f5f8ff 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-7 w-1 rounded-full bg-[#e05a2e]" />
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0e1c35]">Products Specification</h2>
          <span className="ml-auto rounded-full border border-[#f4c4aa] bg-[#fff0eb] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c0420a]">{rows.length} variants</span>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] border-t-[3px] border-t-[#e05a2e] bg-white shadow-[0_1px_4px_rgba(0,0,0,.06),0_4px_24px_rgba(224,90,46,.06)]">
          <table className="w-full min-w-[1000px] border-collapse text-sm">
            <thead>
              <tr style={{ background: "linear-gradient(90deg, #fff0eb 0%, #fff7f3 100%)", borderBottom: "2px solid #e05a2e" }}>
                {columns.map(([key, label], index) => <th key={String(key)} className={`px-3 py-3 text-center text-[9px] font-bold uppercase tracking-[.1em] text-[#0e1c35] ${index < columns.length - 1 ? "border-r border-[#e2e8f0]" : ""}`}>{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => <tr key={String(row.partNo)} className="bsp-table-row" style={{ background: rowIndex % 2 === 0 ? "#fff" : "#fafbfc" }}>
                {columns.map(([key, _label], index) => <td key={String(key)} className={`px-3 py-2.5 text-center text-[11px] ${index < columns.length - 1 ? "border-r border-b border-[#e2e8f0]" : "border-b border-[#e2e8f0]"} ${key === "partNo" ? "font-mono font-bold text-[#c0420a]" : "text-[#374151]"}`}>{value(row, key)}</td>)}
              </tr>)}
            </tbody>
          </table>
        </div>
        {hose.highlight && <p className="mt-4 text-xs italic text-[#64748b]">Highlights: {hose.highlight}</p>}
      </div>
    </section>
  )
}
