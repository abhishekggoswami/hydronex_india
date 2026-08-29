type TableRow = Record<string, string | number | undefined>

interface ISOATechnicalSectionsProps {
  nippelTable?: TableRow[]
  partTable?: TableRow[]
  performanceTable?: TableRow[]
  dustProtectionTable?: TableRow[]
  nippelDiagramImage?: string
  couplerDiagramImage?: string
  tableNote?: string
}

const labelFor = (key: string) =>
  key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, (character) => character.toUpperCase())

function TechnicalTable({ rows }: { rows: TableRow[] }) {
  const columns = Array.from(new Set(rows.flatMap((row) => Object.keys(row).filter((key) => row[key] !== undefined))))

  return (
    <div className="overflow-x-auto rounded-md border border-[#d5e6f5] bg-white shadow-[0_10px_28px_rgba(13,41,73,0.08)]">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[linear-gradient(90deg,#fff0eb_0%,#fff7f3_100%)]">
            {columns.map((column) => <th key={column} className="whitespace-nowrap border-b border-r border-[#f3c6ae] px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.11em] text-[#0d2949] last:border-r-0">{labelFor(column)}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bsp-table-row transition-colors hover:bg-[#fff7f2]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafcff" }}>
              {columns.map((column) => <td key={column} className="whitespace-nowrap border-b border-r border-[#e1eaf3] px-4 py-2.5 text-[#38526f] last:border-r-0">{row[column] ?? "—"}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TechnicalPanel({ title, diagram, rows }: { title: string; diagram?: string; rows?: TableRow[] }) {
  if (!rows?.length && !diagram) return null

  return (
    <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]"/><h2 className="font-heading text-2xl font-bold text-[#0d2949]">{title}</h2></div>
        {diagram && <div className="group mb-8 flex justify-center overflow-hidden rounded-md border border-[#d5e6f5] bg-white p-6 shadow-[0_10px_28px_rgba(13,41,73,0.08)]"><img src={diagram} alt={`${title} diagram`} className="max-h-[360px] max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"/></div>}
        {rows?.length ? <TechnicalTable rows={rows} /> : null}
      </div>
    </section>
  )
}

function colourValue(value: unknown) {
  switch (String(value ?? "").trim().toLowerCase()) {
    case "green": return "#22c55e"
    case "yellow": return "#eab308"
    case "red": return "#ef4444"
    case "orange": return "#f97316"
    case "blue": return "#3b82f6"
    case "black": return "#1f2937"
    case "white": return "#ffffff"
    default: return "#d1d5db"
  }
}

function ColourDot({ colour }: { colour: unknown }) {
  const label = String(colour ?? "").trim() || "Not specified"
  return (
    <span
      role="img"
      aria-label={`${label} colour`}
      title={label}
      className="inline-block h-5 w-5 rounded-full border border-slate-300 shadow-sm"
      style={{ backgroundColor: colourValue(colour) }}
    />
  )
}

function DustProtectionPanel({ rows }: { rows?: TableRow[] }) {
  if (!rows?.length) return null

  return (
    <section className="bg-anim-section-dots border-b border-[#d0e4f5]/40 bg-[linear-gradient(135deg,#f8fcff_0%,#e7f4fd_100%)] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3"><span className="h-7 w-1 rounded-full bg-[#e05a2e]"/><h2 className="font-heading text-2xl font-bold text-[#0d2949]">Dust Protection</h2></div>
        <div className="overflow-x-auto rounded-md border border-[#d5e6f5] bg-white shadow-[0_10px_28px_rgba(13,41,73,0.08)]">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#10a9df] text-white">
              <tr>
                <th rowSpan={2} className="whitespace-nowrap border-r border-white/20 px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.11em]">mm</th>
                <th rowSpan={2} className="whitespace-nowrap border-r border-white/20 px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.11em]">inch</th>
                <th colSpan={2} className="border-r border-white/20 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.11em]">PVC</th>
                <th colSpan={2} className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.11em]">Aluminum</th>
              </tr>
              <tr>
                <th className="whitespace-nowrap border-r border-white/20 px-4 py-2 text-left text-[10px] font-bold uppercase tracking-[0.11em]">Part Number</th>
                <th className="whitespace-nowrap border-r border-white/20 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.11em]">Colour</th>
                <th className="whitespace-nowrap border-r border-white/20 px-4 py-2 text-left text-[10px] font-bold uppercase tracking-[0.11em]">Part Number</th>
                <th className="whitespace-nowrap px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.11em]">Colour</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="bsp-table-row transition-colors hover:bg-[#fff7f2]" style={{ background: index % 2 === 0 ? "#ffffff" : "#fafcff" }}>
                  <td className="whitespace-nowrap border-b border-r border-[#e1eaf3] px-4 py-2.5 text-[#38526f]">{row.size ?? "â€”"}</td>
                  <td className="whitespace-nowrap border-b border-r border-[#e1eaf3] px-4 py-2.5 text-[#38526f]">{row.inch ?? "â€”"}</td>
                  <td className="whitespace-nowrap border-b border-r border-[#e1eaf3] px-4 py-2.5 text-[#38526f]">{row.partNoPVC ?? "â€”"}</td>
                  <td className="border-b border-r border-[#e1eaf3] px-4 py-2.5 text-center"><ColourDot colour={row.colorPVC} /></td>
                  <td className="whitespace-nowrap border-b border-r border-[#e1eaf3] px-4 py-2.5 text-[#38526f]">{row.partNoAluminum ?? "â€”"}</td>
                  <td className="border-b border-[#e1eaf3] px-4 py-2.5 text-center"><ColourDot colour={row.colorAluminum} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function ISOATechnicalSections({ nippelTable, partTable, performanceTable, dustProtectionTable, nippelDiagramImage, couplerDiagramImage, tableNote }: ISOATechnicalSectionsProps) {
  return (
    <>
      <TechnicalPanel title="Nipple Female Thread / Male" diagram={nippelDiagramImage} rows={nippelTable} />
      <TechnicalPanel title="Couplers Female Thread / Female" diagram={couplerDiagramImage} rows={partTable} />
      {tableNote && <div className="bg-[#f8fcff] px-4 py-4 text-center text-sm italic text-[#58718e]">{tableNote}</div>}
      <TechnicalPanel title="Performance Specifications" rows={performanceTable} />
      <DustProtectionPanel rows={dustProtectionTable} />
    </>
  )
}
