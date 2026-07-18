import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { TESTIMONIALS } from '../data/site'

const AUTOPLAY = 3000
const MOBILE_MQ = '(max-width: 767px)'

export default function Testimonials() {
  // One review at a time on phones, a pair from md up. Seeded synchronously so
  // mobile never paints two cards before the media query is read.
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_MQ).matches ? 1 : 2
  )
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const sync = () => setPerView(mq.matches ? 1 : 2)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const pages = Math.ceil(TESTIMONIALS.length / perView)

  // Rotating on a different page count invalidates the current index.
  useEffect(() => setPage(0), [perView])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setDir(1)
      setPage((p) => (p + 1) % pages)
    }, AUTOPLAY)
    return () => clearInterval(t)
  }, [paused, pages])

  // Always render a full page — wraps around if the last one is short
  const items = Array.from(
    { length: perView },
    (_, k) => TESTIMONIALS[(page * perView + k) % TESTIMONIALS.length]
  )

  return (
    <section id="reviews" className="section-pad bg-ink-50/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by Buyers Worldwide"
          subtitle="From the Gulf to the Americas — here’s what procurement teams say about working with us."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid min-h-[300px] gap-6 md:grid-cols-2"
            >
              {items.map((t, k) => (
                <div
                  key={`${page}-${k}`}
                  className="flex h-full flex-col rounded-2xl border border-ink-200/60 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
                >
                  <Quote className="mb-4 h-8 w-8 shrink-0 text-accent/25" />

                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="flex-1 font-primary text-lg leading-relaxed text-ink-800">
                    “{t.quote}”
                  </p>

                  <div className="mt-6 border-t border-ink-100 pt-5">
                    <div className="font-primary text-base font-bold text-ink-900">{t.name}</div>
                    <div className="text-sm text-ink-500">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
