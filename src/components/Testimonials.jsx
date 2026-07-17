import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { TESTIMONIALS } from '../data/site'

const AUTOPLAY = 6000

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (n) => {
    setDir(n > i ? 1 : -1)
    setI((n + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setI((p) => (p + 1) % TESTIMONIALS.length)
    }, AUTOPLAY)
    return () => clearInterval(t)
  }, [i])

  const t = TESTIMONIALS[i]

  return (
    <section id="reviews" className="section-pad bg-ink-50/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by Buyers Worldwide"
          subtitle="From the Gulf to the Americas — here’s what procurement teams say about working with us."
        />

        <div className="relative mx-auto max-w-3xl">
          <Quote className="mx-auto mb-6 h-12 w-12 text-accent/20" />

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-primary text-xl font-medium leading-relaxed text-ink-800 sm:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-8">
                  <div className="font-primary text-lg font-bold text-ink-900">{t.name}</div>
                  <div className="text-sm text-ink-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(i - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-accent hover:bg-accent hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, n) => (
                <button
                  key={n}
                  onClick={() => go(n)}
                  aria-label={`Testimonial ${n + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    n === i ? 'w-8 bg-accent' : 'w-2.5 bg-ink-300 hover:bg-ink-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(i + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-accent hover:bg-accent hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
