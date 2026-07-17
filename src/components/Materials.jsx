import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { MATERIALS } from '../data/site'
import { img } from '../data/images'

const AUTOPLAY = 3200

export default function Materials() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const step = () => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('[data-card]')
    if (!card) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap || '16') || 16
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

  // Autoplay: advance one card, looping back to the start at the end.
  // Pauses on hover and respects the user's reduced-motion preference.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const track = trackRef.current
    if (!track) return
    const id = setInterval(() => {
      const s = step()
      if (!s) return
      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: s, behavior: 'smooth' })
      }
    }, AUTOPLAY)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="materials" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Materials We Supply"
          title="Grades for Every Application"
          subtitle="From everyday stainless steel to high-performance exotic alloys — sourced, stocked and certified."
        />

        {/* Carousel track */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {MATERIALS.map((m, i) => (
            <motion.a
              href="#contact"
              key={m.name}
              data-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 5) * 0.08, duration: 0.5 }}
              className="group relative aspect-[3/4] w-[45%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[32%] lg:w-[23%] xl:w-[18.5%]"
            >
              <img
                src={img(m.img, 500)}
                alt={m.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/40 to-transparent transition-opacity duration-500 group-hover:from-accent-900/95 group-hover:via-accent-900/40" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-primary text-base font-bold leading-tight text-white">
                    {m.name}
                  </h3>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                {/* Grades reveal */}
                <p className="mt-1 max-h-0 overflow-hidden text-[11px] leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                  {m.grades}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Controls: arrows + dash indicators */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {MATERIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${MATERIALS[i].name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-accent' : 'w-4 bg-ink-300 hover:bg-ink-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollByCards(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
