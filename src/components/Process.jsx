import { motion } from 'framer-motion'
import { FileText, Calculator, SearchCheck, Package, Truck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { PROCESS } from '../data/site'

const ICONS = [FileText, Calculator, SearchCheck, Package, Truck]

export default function Process() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="From Enquiry to Delivery"
          subtitle="A proven five-step process that keeps your project on spec, on budget and on schedule."
        />

        <div className="relative">
          {/* Base connector line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-ink-100 lg:block" />

          {/* Accent line that draws in on scroll */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-accent to-accent/20 lg:block"
          />

          {/* Glowing pulse dot that continuously travels along the line */}
          <motion.span
            aria-hidden
            className="absolute top-9 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_3px_rgba(47,111,179,0.7)] lg:block"
            initial={{ left: '0%', opacity: 0 }}
            whileInView={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{
              duration: 2.6,
              ease: 'easeInOut',
              delay: 1.3,
              repeat: Infinity,
              repeatDelay: 1.4,
            }}
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i]
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 44 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative text-center"
                >
                  {/* Icon badge — springs in, lifts & rotates on hover */}
                  <motion.div
                    initial={{ scale: 0, rotate: -25 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.1,
                      type: 'spring',
                      stiffness: 260,
                      damping: 14,
                    }}
                    whileHover={{ scale: 1.12, rotate: -6, y: -4 }}
                    className="relative z-10 mx-auto grid h-[72px] w-[72px] cursor-pointer place-items-center rounded-full border-4 border-white bg-ink-900 text-accent-400 shadow-card transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
                  >
                    {/* Continuous soft pulse ring */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-accent/40"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
                      transition={{
                        duration: 2.2,
                        ease: 'easeOut',
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />

                    <Icon className="relative h-7 w-7" />

                    {/* Step number — pops in after the icon */}
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15 + 0.35,
                        type: 'spring',
                        stiffness: 400,
                        damping: 12,
                      }}
                      className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-bold text-white ring-4 ring-white"
                    >
                      {p.step}
                    </motion.span>
                  </motion.div>

                  {/* Title & description — fade up just after the icon lands */}
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.25, duration: 0.5 }}
                    className="mt-5 font-primary text-lg font-semibold text-ink-900"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.35, duration: 0.5 }}
                    className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-ink-500"
                  >
                    {p.desc}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
