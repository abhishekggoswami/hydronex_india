export interface DustPlugRow {
  size: string
  dustPlugPartNo: string
  dustCapPartNo: string
}

export interface DustPlugSection {
  title: string
  image: string
  imageAlt: string
  rows: DustPlugRow[]
}

export interface DustPlugProduct {
  name: string
  description: string
  specs: { label: string; value: string }[]
  sections: DustPlugSection[]
}

export const dustPlugProduct: DustPlugProduct = {
  name: "Dust Plug - Used for Coupler (Female Half) / Dust Cap - Used for Nipple (Male Half)",
  description:
    "Protective dust plugs and dust caps designed to keep hydraulic quick couplings clean and contamination-free when not in use. Available in rubber and brass variants to suit all operating environments.",
  specs: [
    { label: "Series", value: "ZE / ZB / TL" },
    { label: "Materials", value: "Rubber / Brass" },
    { label: "Sizes", value: '1/4" – 1"' },
    { label: "Application", value: "ISO 7241 Couplings" },
  ],

  sections: [
    {
      // Section 1 – ZE (ISO-A) red rubber
      title: "Dust Plug & Cap — ZE Series (ISO-A)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSp0uKNzGkzxNA6pxYdSqalgVvZG6s.png",
      imageAlt: "Red rubber dust plugs and caps — ZE series",
      rows: [
        { size: '1/4"', dustPlugPartNo: "CZE-1/4",  dustCapPartNo: "PZE-1/4"  },
        { size: '3/8"', dustPlugPartNo: "CZE-3/8",  dustCapPartNo: "PZE-3/8"  },
        { size: '1/2"', dustPlugPartNo: "CZE-1/2",  dustCapPartNo: "PZE-1/2"  },
        { size: '3/4"', dustPlugPartNo: "CZE-3/4",  dustCapPartNo: "PZE-3/4"  },
        { size: '1"',   dustPlugPartNo: "CZE-1",    dustCapPartNo: "PZE-1"    },
      ],
    },
    {
      // Section 2 – ZB blue rubber
      title: "Dust Plug & Cap — ZB Series",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iZ6N3WOnlgir3xuD6Kn1fKRg76BiJl.png",
      imageAlt: "Blue rubber dust plugs and caps — ZB series",
      rows: [
        { size: '1/4"', dustPlugPartNo: "CZB-1/4",  dustCapPartNo: "PZB-1/4"  },
        { size: '3/8"', dustPlugPartNo: "CZB-3/8",  dustCapPartNo: "PZB-3/8"  },
        { size: '1/2"', dustPlugPartNo: "CZB-1/2",  dustCapPartNo: "PZB-1/2"  },
        { size: '3/4"', dustPlugPartNo: "CZB-3/4",  dustCapPartNo: "PZB-3/4"  },
        { size: '1"',   dustPlugPartNo: "CZB-1",    dustCapPartNo: "PZB-1"    },
      ],
    },
    {
      // Section 3 – TL brass chain
      title: "Dust Plug & Cap — TL Series (Brass)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GAju0LszANIVI28escYaPAPwyAHzEl.png",
      imageAlt: "Brass dust caps with chain — TL series",
      rows: [
        { size: '1/4"', dustPlugPartNo: "CTL-1/4",  dustCapPartNo: "PTL-1/4"  },
        { size: '3/8"', dustPlugPartNo: "CTL-3/8",  dustCapPartNo: "PTL-3/8"  },
      ],
    },
  ],
}
