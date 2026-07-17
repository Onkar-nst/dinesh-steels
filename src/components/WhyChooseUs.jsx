import { ArrowRight, ShieldCheck, Boxes, BadgeCheck, Wrench, Clock } from 'lucide-react'
import { WHY, COMPANY } from '../data/site'
import { img, IMG } from '../data/images'
import Reveal from './ui/Reveal'
import Counter from './ui/Counter'

// "Why Jyothi Steels" — dark conviction section. Two-tone headline + supporting
// image with animated proof stats on the left; icon-led value cards (from the
// WHY data) on the right. Re-themed (ink/red) for Jyothi Steels.
const icons = [Boxes, BadgeCheck, Wrench, Clock]

const proof = [
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
  { value: 100, suffix: '%', label: 'Certified & Traceable' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      {/* Texture + accent glow for depth */}
      <div className="pointer-events-none absolute inset-0 bg-steel-grid [background-size:64px_64px] opacity-70" />
      <div className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-steel-500/20 blur-[150px]" />

      <div className="relative px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          {/* ── Left: pitch, proof image, CTA ── */}
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-400">
                <span className="h-px w-8 bg-accent" />
                Why {COMPANY.name}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-primary text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                The supplier engineers
                <br />
                <span className="text-accent">choose again.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-200">
                We compete on more than price. It&rsquo;s certified quality, deep ready stock and a
                team that treats your deadline as its own.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-ink-950/40">
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

                <div className="absolute inset-x-5 bottom-5 flex items-end gap-8">
                  {proof.map((s, i) => (
                    <div key={s.label} className={i > 0 ? 'border-l border-white/15 pl-8' : ''}>
                      <div className="font-primary text-3xl font-bold leading-none md:text-4xl">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-ink-200">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
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

          {/* ── Right: icon-led value cards ── */}
          <div className="flex flex-col gap-4">
            {WHY.map((w, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={w.title} delay={0.1 + i * 0.08}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 md:p-7">
                    {/* Large faded number watermark */}
                    <span className="pointer-events-none absolute right-4 top-1 select-none font-primary text-6xl font-bold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-accent/15 md:text-7xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Corner glow on hover */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20" />

                    <div className="relative flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent-400 transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 pr-10">
                        <h3 className="mb-2 font-primary text-lg font-semibold text-white md:text-xl">
                          {w.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-200">{w.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
