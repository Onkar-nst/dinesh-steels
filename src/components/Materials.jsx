import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { MATERIALS } from '../data/site'
import { img } from '../data/images'

// Continuous marquee speed, in pixels per second — matched to the
// "Industries We Serve" row so both bands cruise at the same pace.
const SPEED = 42

export default function Materials() {
  const trackRef = useRef(null)
  const [running, setRunning] = useState(false)

  // The track cruises on every screen size; only a reduced-motion preference
  // stops it.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setRunning(!mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Marquee: nudge scrollLeft every frame and wrap where the duplicated second
  // copy of the cards begins — so the seam is invisible.
  useEffect(() => {
    const track = trackRef.current
    if (!running || !track) return

    let raf
    let prev
    let held = false
    const hold = () => { held = true }
    const release = () => { held = false }

    // Distance after which the track shows the clone in the original's place.
    // Measured off the first clone rather than scrollWidth/2, which sits half a
    // flex gap short of the real seam.
    const loopWidth = () => track.children[MATERIALS.length]?.offsetLeft ?? 0

    // Always begin on the first card, flush to the left edge.
    track.scrollLeft = 0

    const tick = (ts) => {
      if (prev === undefined) prev = ts
      const dt = ts - prev
      prev = ts

      const loop = loopWidth()
      // Pause on hover / while a finger is down, so the marquee never fights the
      // user — and hovering a card holds it still to reveal its grades.
      if (!held && loop > 0) {
        let next = track.scrollLeft + (SPEED * dt) / 1000
        if (next >= loop) next -= loop
        track.scrollLeft = next
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    track.addEventListener('mouseenter', hold)
    track.addEventListener('mouseleave', release)
    track.addEventListener('touchstart', hold, { passive: true })
    track.addEventListener('touchend', release, { passive: true })
    track.addEventListener('touchcancel', release, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('mouseenter', hold)
      track.removeEventListener('mouseleave', release)
      track.removeEventListener('touchstart', hold)
      track.removeEventListener('touchend', release)
      track.removeEventListener('touchcancel', release)
    }
  }, [running])

  return (
    <section id="materials" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Materials We Supply"
          title="Grades for Every Application"
          subtitle="From everyday stainless steel to high-performance exotic alloys — sourced, stocked and certified."
        />

        {/* Carousel track — the list is rendered twice so the continuous scroll
            can wrap seamlessly where the clone takes the original's place. */}
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 overflow-x-auto overflow-y-hidden pb-2"
        >
          {[...MATERIALS, ...MATERIALS].map((m, i) => {
            const isClone = i >= MATERIALS.length
            return (
              <motion.a
                href="#contact"
                key={isClone ? `${m.name}-clone` : m.name}
                data-card
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : undefined}
                initial={{ opacity: 0, y: 30 }}
                // Every card must end up visible — the marquee moves them through
                // the viewport, so a scroll-triggered reveal would leave the
                // off-screen ones stuck at opacity 0.
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 5) * 0.08, duration: 0.5 }}
                className="group relative aspect-[3/4] w-[41%] shrink-0 overflow-hidden rounded-2xl sm:w-[32%] lg:w-[23%] xl:w-[18.5%]"
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
