import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Boxes, BadgeCheck, Wrench, Clock, Plus } from 'lucide-react'
import { WHY, COMPANY } from '../data/site'
import { img, IMG } from '../data/images'
import Reveal from './ui/Reveal'
import Counter from './ui/Counter'

// "Why Jyothi Steels" — light conviction section. Two-tone headline + supporting
// image with animated proof stats on the left; icon-led value cards (from the
// WHY data) on the right.
const icons = [Boxes, BadgeCheck, Wrench, Clock]

const proof = [
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
  { value: 100, suffix: '%', label: 'Certified & Traceable' },
]

export default function WhyChooseUs() {
  // Mobile-only accordion: collapsed rows that expand one at a time.
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft accent glows for depth */}
      <div className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-steel-500/10 blur-[150px]" />

      <div className="relative px-6 pb-8 pt-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          {/* ── Left: pitch, proof image, CTA ── */}
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Why {COMPANY.name}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-primary text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-5xl">
                The supplier engineers
                <br />
                <span className="text-accent">choose again.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500">
                We compete on more than price. It&rsquo;s certified quality, deep ready stock and a
                team that treats your deadline as its own.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <div className="group relative overflow-hidden rounded-2xl ring-1 ring-ink-100 shadow-card">
                <img
                  src={img(IMG.whyChoose, 1800)}
                  alt="Ready stock of stainless steel tubes at the Jyothi Steels facility"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink-950/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/15 backdrop-blur">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent-400" strokeWidth={2} />
                  ISO 9001:2015
                </span>

                <div className="absolute inset-x-5 bottom-5 flex items-end gap-8 text-white">
                  {proof.map((s, i) => (
                    <div key={s.label} className={i > 0 ? 'border-l border-white/15 pl-8' : ''}>
                      <div className="font-primary text-3xl font-bold leading-none md:text-4xl">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-white/70">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* ── Right: icon-led value cards ──
              lg:mt-10 offsets the eyebrow (16px) + its mt-6 (24px) so the first
              card's top aligns with the "The supplier engineers" headline. */}
          {/* Mobile accordion — collapsed rows, tap to reveal the detail */}
          <div className="flex flex-col gap-3 md:hidden">
            {WHY.map((w, i) => {
              const Icon = icons[i % icons.length]
              const isOpen = openIndex === i
              return (
                <Reveal key={w.title} delay={0.06 + i * 0.06}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-gradient-to-br from-ink-50 to-white transition-colors duration-300 ${
                      isOpen ? 'border-accent/40 shadow-lg shadow-accent/10' : 'border-ink-100'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="relative flex w-full items-center gap-4 px-5 py-5 text-left"
                    >
                      <span className="pointer-events-none absolute right-16 top-1 select-none font-primary text-5xl font-bold leading-none text-ink-900/[0.05]">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? 'border-accent bg-accent text-white'
                            : 'border-ink-100 bg-accent/10 text-accent'
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>

                      <h3 className="relative flex-1 font-primary text-base font-semibold leading-snug text-ink-900">
                        {w.title}
                      </h3>

                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-accent bg-accent text-white'
                            : 'border-ink-200 text-ink-500'
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <div className="rounded-xl border border-ink-100 bg-white/70 p-4">
                              <p className="text-sm leading-relaxed text-ink-500">{w.desc}</p>
                              <a
                                href="#contact"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
                              >
                                Enquire
                                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Tablet & desktop — unchanged icon-led cards */}
          <div className="hidden flex-col gap-4 md:flex lg:mt-10">
            {WHY.map((w, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={w.title} delay={0.1 + i * 0.08} className="lg:flex-1">
                  <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 md:p-7">
                    {/* Large faded number watermark */}
                    <span className="pointer-events-none absolute right-4 top-1 select-none font-primary text-6xl font-bold leading-none text-ink-900/[0.06] transition-colors duration-300 group-hover:text-accent/20 md:text-7xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Corner glow on hover */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10" />

                    <div className="relative flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 pr-10">
                        <h3 className="mb-2 font-primary text-lg font-semibold text-ink-900 md:text-xl">
                          {w.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-500">{w.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* CTA sits below the grid so the cards can end level with the image */}
        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-600 hover:shadow-accent/40"
          >
            Partner with us
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
