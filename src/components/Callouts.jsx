import { ArrowUpRight } from 'lucide-react'
import { img, IMG } from '../data/images'

// Ported from the provided Airkom "callouts" cards — same 4:5 cards, centered
// contained image, bottom text block, hover scale + arrow. Re-themed (ink/red)
// and re-contented for Jyothi Steels.
const callouts = [
  {
    img: IMG.pipes,
    h: 'Ready Stock, Instant Dispatch',
    p: '8,000+ product lines held in ready inventory — pipes, flanges, fittings and bars shipped to 65+ countries with minimal lead time.',
  },
  {
    img: IMG.flanges,
    h: 'Certified & Fully Traceable',
    p: 'Every consignment ships with EN 10204 3.1 MTC, heat-number traceability and third-party inspection on request.',
  },
  {
    img: IMG.buttweld,
    h: 'Cut, Machined, Ready to Weld',
    p: 'Precision cutting, bevelling, threading and fabrication to your drawings — material arrives project-ready.',
  },
]

export default function Callouts() {
  return (
    <section className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 bg-ink-50 px-6 pb-6 pt-20 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-12 md:pt-28 lg:px-16 xl:grid-cols-3">
      {callouts.map((c) => (
        <a
          key={c.h}
          href="#products"
          className="group flex aspect-[4/5] w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-ink-200/60 bg-white shadow-sm transition-all duration-300 hover:border-ink-300 hover:shadow-md md:w-auto"
        >
          {/* Full-bleed image (fills top, no gaps) */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={img(c.img, 700)}
              alt={c.h}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle top scrim so the arrow stays legible */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent" />
            <span className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink-700 shadow-sm backdrop-blur transition-all duration-300 group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </span>
          </div>

          {/* Text block */}
          <div className="border-t border-ink-100 bg-white p-6 md:p-8">
            <h3 className="mb-1.5 font-primary text-xl font-medium text-ink-900 transition-colors duration-300 group-hover:text-accent md:text-2xl">
              {c.h}
            </h3>
            <p className="max-w-sm text-xs leading-relaxed text-ink-500 md:text-sm">{c.p}</p>
          </div>
        </a>
      ))}
    </section>
  )
}
