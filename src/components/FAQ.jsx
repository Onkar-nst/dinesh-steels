import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, MessageCircle } from 'lucide-react'
import Reveal from './ui/Reveal'
import { FAQ as FAQS } from '../data/site'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section-pad bg-ink-50/60">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="span" className="eyebrow mb-4">
            <span className="h-px w-8 bg-accent inline-block" /> FAQ
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-primary text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Questions? <br />
              <span className="text-accent">We’ve Got Answers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Everything you need to know about ordering, quality and delivery. Can’t find your
              answer?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-primary mt-6">
              <MessageCircle className="h-4 w-4" /> Ask Our Team
            </a>
          </Reveal>
        </div>

        {/* Right: accordion */}
        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`font-primary text-lg font-semibold transition-colors ${
                      isOpen ? 'text-accent' : 'text-ink-900'
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-accent bg-accent text-white'
                        : 'border-ink-200 text-ink-500'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-500">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
