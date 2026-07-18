import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Fuel, FlaskConical, Ship, Zap, Building2, Factory, Plane, Atom,
} from 'lucide-react'
import { INDUSTRIES } from '../data/site'
import { img } from '../data/images'

// Icon per industry (Laser-Tech "Industry Solutions" line-icon style)
const ICONS = [Fuel, FlaskConical, Ship, Zap, Building2, Factory, Plane, Atom]

// Continuous marquee speed on mobile, in pixels per second.
const SPEED = 42

export default function Industries() {
  const trackRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Only the phone layout cruises; on larger screens the track stays a normal
  // free-scrolling row.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sync = () => setIsMobile(mq.matches && motionOk)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Marquee: nudge scrollLeft every frame and wrap at the halfway point, where
  // the duplicated second copy of the cards begins — so the seam is invisible.
  useEffect(() => {
    const track = trackRef.current
    if (!isMobile || !track) return

    let raf
    let prev
    let held = false
    const hold = () => { held = true }
    const release = () => { held = false }

    // Distance after which the track shows the clone in the original's place.
    // Measured off the first clone rather than scrollWidth/2, which sits half a
    // flex gap short of the real seam.
    const loopWidth = () => track.children[INDUSTRIES.length]?.offsetLeft ?? 0

    // Always begin on the first card, flush to the left edge.
    track.scrollLeft = 0

    const tick = (ts) => {
      if (prev === undefined) prev = ts
      const dt = ts - prev
      prev = ts

      const loop = loopWidth()
      // Pause while a finger is down so the marquee never fights a drag.
      if (!held && loop > 0) {
        let next = track.scrollLeft + (SPEED * dt) / 1000
        if (next >= loop) next -= loop
        track.scrollLeft = next
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    track.addEventListener('touchstart', hold, { passive: true })
    track.addEventListener('touchend', release, { passive: true })
    track.addEventListener('touchcancel', release, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('touchstart', hold)
      track.removeEventListener('touchend', release)
      track.removeEventListener('touchcancel', release)
    }
  }, [isMobile])

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-r from-ink-950 via-accent-800 to-ink-950 py-20 md:py-28"
    >
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

        {/* Carousel track — on mobile the list is rendered twice so the
            continuous scroll can wrap seamlessly at the halfway mark. */}
        <div
          ref={trackRef}
          className={`no-scrollbar flex gap-5 overflow-x-auto pb-2 ${
            isMobile ? '' : 'snap-x snap-mandatory'
          }`}
        >
          {(isMobile ? [...INDUSTRIES, ...INDUSTRIES] : INDUSTRIES).map((ind, i) => {
            const Icon = ICONS[(i % INDUSTRIES.length) % ICONS.length]
            const isClone = i >= INDUSTRIES.length
            return (
              <motion.a
                href="#contact"
                key={isClone ? `${ind.name}-clone` : ind.name}
                data-card
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : undefined}
                initial={{ opacity: 0, y: 24 }}
                // On mobile every card must end up visible — the marquee moves
                // them through the viewport, so a scroll-triggered reveal would
                // leave off-screen cards stuck at opacity 0.
                animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="group relative flex w-[78%] shrink-0 snap-start flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05] sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
              >
                {/* Industry photo — fades in behind the content on hover */}
                <img
                  src={img(ind.img, 700)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                />
                {/* Scrim keeps the icon and text just as legible as before */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/50 to-ink-950/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 mb-6 grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent-400">
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </span>
                <h3 className="relative z-10 font-primary text-lg font-semibold text-white">
                  {ind.name}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/80">
                  {ind.desc}
                </p>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
