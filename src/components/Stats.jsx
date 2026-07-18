import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Counter from './ui/Counter'
import { STATS } from '../data/site'

// Full-width steel-blue stats band. Sits between the white About and the dark
// Products sections, adding a pop of brand colour. Counters animate on scroll.
export default function Stats() {
  // One trigger for the whole band — on the 2-column mobile grid the second row
  // would otherwise scroll into view (and start counting) after the first.
  const gridRef = useRef(null)
  const inView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section
      id="stats"
      className="relative w-full overflow-hidden bg-gradient-to-br from-accent-700 via-accent-600 to-accent-800 text-white"
    >
      {/* Subtle texture + soft glows */}
      <div className="absolute inset-0 bg-steel-grid bg-[size:46px_46px] opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-ink-950/20 blur-3xl" />

      {/* Full-bleed grid — edge to edge, no side gutters */}
      <div
        ref={gridRef}
        className="relative grid grid-cols-2 border-t border-white/15 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="group flex flex-col items-center justify-center border-b border-r border-white/15 px-6 py-5 text-center transition-colors duration-300 hover:bg-white/[0.08] md:py-6"
          >
            <h3 className="font-primary text-3xl font-semibold leading-none tracking-tight md:text-4xl lg:text-5xl">
              <Counter to={s.value} duration={1800} suffix={s.suffix} active={inView} />
            </h3>
            {/* Accent underline grows on hover */}
            <span className="mt-3 block h-0.5 w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white" />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 md:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
