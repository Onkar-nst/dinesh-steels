import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Fuel, FlaskConical, Ship, Zap, Building2, Factory, Plane, Atom, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { INDUSTRIES } from '../data/site'

// Icon per industry (Laser-Tech "Industry Solutions" line-icon style)
const ICONS = [Fuel, FlaskConical, Ship, Zap, Building2, Factory, Plane, Atom]

export default function Industries() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const step = () => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('[data-card]')
    if (!card) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap || '20') || 20
    return card.offsetWidth + gap
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const s = step()
    if (s) setActive(Math.round(track.scrollLeft / s))
  }

  const scrollByCards = (dir) => {
    trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })
  }

  const goTo = (i) => {
    trackRef.current?.scrollTo({ left: i * step(), behavior: 'smooth' })
  }

  useEffect(() => {
    const t = trackRef.current
    if (!t) return
    t.addEventListener('scroll', onScroll, { passive: true })
    return () => t.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="industries" className="relative overflow-hidden bg-ink-950 py-20 md:py-28">
      {/* Diagonal red-line accent (top-right) */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-40"
        style={{
          background:
            'repeating-linear-gradient(115deg, transparent 0 16px, rgba(47,111,179,0.35) 16px 17px)',
          maskImage: 'linear-gradient(to left, black, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-steel-grid bg-[size:52px_52px] opacity-[0.04]" />

      <div className="container-x relative">
        {/* Heading */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4 justify-center text-accent-400"
          >
            <span className="h-px w-8 bg-accent inline-block" /> Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-primary text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-white/50"
          >
            Tailor-made metal solutions for every industry and application scenario — where
            reliability is non-negotiable.
          </motion.p>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.a
                href="#contact"
                key={ind.name}
                data-card
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="group flex w-[78%] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05] sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
              >
                <span className="mb-6 grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent-400">
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </span>
                <h3 className="font-primary text-lg font-semibold text-white">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{ind.desc}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Controls: arrows + dash indicators */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-accent hover:bg-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {INDUSTRIES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${INDUSTRIES[i].name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollByCards(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-accent hover:bg-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
