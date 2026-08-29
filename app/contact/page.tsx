import { Metadata } from "next"
import { ContactSupportSection } from "@/components/contact-support-section"
import { LandingProductFooter, LandingProductNavbar } from "@/components/landing-product-chrome"
import Topography from "@/components/topography"
import StrokeText from "@/components/StrokeText"

export const metadata: Metadata = {
  title: "Contact Hydronex | Hydraulic Support & Enquiries",
  description: "Contact Hydronex for hydraulic product selection, technical support, and bulk-order enquiries.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efefef] text-[#171717]" style={{ fontFamily: "Arial, Helvetica, system-ui, sans-serif" }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f8f6] via-[#fbfcfa] to-white">
        <div className="pointer-events-none absolute inset-0 z-0" style={{ maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.28) 78%, transparent 100%)" }}>
          <Topography className="h-full w-full" lowColor="#9eb8c3" midColor="#f26522" highColor="#ffffff" speed={0.18} morphAmount={1.7} bands={2.65} thickness={0.018} glow={0.22} opacity={0.1} mouseRadius={0.24} mouseStrength={0.34} />
        </div>

        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent pb-2 sm:pb-3">
          <LandingProductNavbar />
          <div className="relative z-10 mx-auto flex w-full max-w-none min-h-0 flex-1 flex-col px-2 pt-12 sm:px-3 sm:pt-16 lg:px-4">
            <div className="mx-auto w-full max-w-[1700px] px-2 sm:px-4" aria-label="Contact Hydronex">
              <StrokeText text="GET IN TOUCH" strokeColor="#f26522" fillColor="#143126" strokeWidth={1.4} drawDuration={1.6} fillDelay={0.2} stagger={0.05} ease="power2.out" trigger="mount" fillMode="wipe" fontSize={112} fontWeight={800} letterSpacing={-7} className="font-heading" style={{ fontFamily: "var(--font-heading)", lineHeight: 0.9 }} />
            </div>

            <div className="relative mt-8 flex min-h-[430px] flex-1 sm:mt-10">
              <div className="relative h-full min-h-[430px] flex-1 overflow-hidden rounded-[1.75rem] bg-[#dbeaf3] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[max(620px,calc(100svh-300px))]">
                <iframe title="Hydronex office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.731401145381!2d72.9470456!3d18.8546071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d978bb9deae3%3A0xb50d93d069df69e0!2sOm%20Sai%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1787789310196!5m2!1sen!2sin" className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2722]/30 via-transparent to-[#0b2722]/5" />

                <div className="absolute inset-x-0 bottom-0 z-10 h-[258px] sm:h-[184px] lg:h-[170px]">
                  <div className="absolute inset-x-0 bottom-0 h-[200px] bg-[#f7f8f6] sm:h-[136px] lg:h-[122px]" aria-hidden="true" />
                  <svg className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 160V12Q0 0 12 0H155C164 0 172 4 179 11L209 38C215 44 222 48 231 48H1430Q1440 48 1440 58V160Q1440 170 1430 170H10Q0 170 0 160Z" /></svg>
                  <svg className="absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 1000 258" preserveAspectRatio="none" aria-hidden="true"><path fill="white" stroke="none" d="M0 232V18Q0 0 30 0H270C288 0 301 8 315 22L342 43C350 51 360 58 375 58H970Q1000 58 1000 76V232Q1000 258 970 258H30Q0 258 0 232Z" /></svg>

                  <p className="absolute left-8 top-3 z-10 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5f756c] sm:left-10 sm:top-3">Hydronex contact</p>
                  <div className="relative z-10 grid h-full grid-cols-1 gap-4 px-6 pb-6 pt-[66px] sm:grid-cols-3 sm:items-end sm:gap-x-3 sm:gap-y-4 sm:px-10 sm:pb-5 sm:pt-[63px] lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:items-center lg:gap-0 lg:px-12 lg:pb-4 lg:pt-[52px]">
                    <p className="max-w-[350px] text-xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#17372c] sm:col-span-3 sm:text-2xl lg:col-span-1">Talk to the team behind every dependable connection.</p>
                    <a href="tel:+919869809811" className="border-l border-[#17372c]/10 px-2 text-center transition-colors hover:text-[#f26522] sm:px-5"><p className="font-heading text-xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-2xl">+91 9869809811</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">direct sales support</p></a>
                    <div className="border-l border-[#17372c]/10 px-2 text-center sm:px-5"><p className="font-heading text-xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-2xl">Uran</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">Karanja Road, Tal Uran</p></div>
                    <div className="border-l border-[#17372c]/10 px-2 text-center sm:px-5"><p className="font-heading text-xl font-extrabold tracking-[-0.05em] text-[#17372c] sm:text-2xl">400702</p><p className="mt-1 text-[9px] font-semibold leading-tight text-[#61786e] sm:text-[11px]">Dist Raigad, Maharashtra</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactSupportSection />
      <LandingProductFooter />
    </main>
  )
}
