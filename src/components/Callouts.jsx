import { ArrowUpRight } from 'lucide-react'
import { img, IMG } from '../data/images'

// Ported from the provided Airkom "callouts" cards — same 4:5 cards, centered
// contained image, bottom text block, hover scale + arrow. Re-themed (ink/red)
// and re-contented for Dinesh Steels.
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
    <section className="grid grid-cols-1 gap-4 bg-ink-50 px-6 pb-6 pt-20 md:grid-cols-2 md:px-12 md:pt-28 lg:px-16 xl:grid-cols-3">
      {callouts.map((c) => (
        <a
          key={c.h}
          href="#products"
          className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-ink-200/60 bg-white shadow-sm transition-all duration-300 hover:border-ink-300 hover:shadow-md"
        >
          {/* Inner image container (centered & bounded) */}
          <div className="absolute inset-x-0 bottom-32 top-6 flex items-center justify-center px-8 py-4">
            <div className="relative h-full w-full max-w-[580px] max-h-[820px]">
              <img
                src={img(c.img, 700)}
                alt={c.h}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text container at the bottom */}
          <div className="absolute inset-x-0 bottom-0 border-t border-ink-100 bg-white p-6 md:p-8">
            <h3 className="mb-1.5 font-primary text-xl font-medium text-ink-900 transition-colors duration-300 group-hover:text-accent md:text-2xl">
              {c.h}
            </h3>
            <p className="max-w-sm text-xs leading-relaxed text-ink-500 md:text-sm">{c.p}</p>
          </div>

          <ArrowUpRight
            className="absolute right-6 top-6 z-20 h-5 w-5 text-ink-400 transition-colors group-hover:text-ink-600"
            strokeWidth={1.5}
          />
        </a>
      ))}
    </section>
  )
}
