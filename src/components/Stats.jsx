import Counter from './ui/Counter'
import { STATS } from '../data/site'

// Ported from the provided Airkom stats band — same bordered grid, counter
// animation, sizes and hover, re-themed (near-black ink) with Dinesh figures.
export default function Stats() {
  return (
    <section id="stats" className="w-full bg-ink-950 px-6 text-white md:px-12 lg:px-16">
      <div className="grid grid-cols-2 border-l border-t border-white/30 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col justify-between border-b border-r border-white/30 p-6 text-center transition-colors duration-300 hover:bg-white/[0.06] md:p-8 md:text-left"
          >
            <h3 className="mb-2 font-primary text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              <Counter to={s.value} duration={1800} suffix={s.suffix} />
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-white/60 md:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
