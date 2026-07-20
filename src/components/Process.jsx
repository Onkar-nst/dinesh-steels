import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Calculator, SearchCheck, Package, Truck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { PROCESS } from '../data/site'

const ICONS = [FileText, Calculator, SearchCheck, Package, Truck]
const MOBILE_MQ = '(max-width: 639px)'

export default function Process() {
  // On phones the steps render fully formed — no scroll-in animation. Seeded
  // synchronously so the first paint is already static on mobile.
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_MQ).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Drops all entrance-animation props on mobile so the boxes appear at once.
  const anim = (props) => (isMobile ? {} : props)

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="From Enquiry to Delivery"
          subtitle="A proven five-step process that keeps your project on spec, on budget and on schedule."
        />

        <div className="relative">
          {/* Mobile: swipeable snap-carousel. sm+: reverts to the grid. */}
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-10 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i]
              return (
                <motion.div
                  key={p.step}
                  {...anim({
                    initial: { opacity: 0, y: 44 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-40px' },
                    transition: { delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  })}
                  className="group relative w-[38%] shrink-0 snap-start text-center sm:w-auto"
                >
                  {/* Icon badge — springs in, lifts & rotates on hover */}
                  <motion.div
                    {...anim({
                      initial: { scale: 0, rotate: -25 },
                      whileInView: { scale: 1, rotate: 0 },
                      viewport: { once: true },
                      transition: {
                        delay: i * 0.15 + 0.1,
                        type: 'spring',
                        stiffness: 260,
                        damping: 14,
                      },
                    })}
                    whileHover={{ scale: 1.12, rotate: -6, y: -4 }}
                    className="relative z-10 mx-auto grid h-14 w-14 cursor-pointer place-items-center rounded-full border-4 border-white bg-ink-900 text-accent-400 shadow-card transition-colors duration-300 group-hover:bg-accent group-hover:text-white sm:h-[72px] sm:w-[72px]"
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

                    <Icon className="relative h-6 w-6 sm:h-7 sm:w-7" />

                    {/* Step number — pops in after the icon */}
                    <motion.span
                      {...anim({
                        initial: { scale: 0, opacity: 0 },
                        whileInView: { scale: 1, opacity: 1 },
                        viewport: { once: true },
                        transition: {
                          delay: i * 0.15 + 0.35,
                          type: 'spring',
                          stiffness: 400,
                          damping: 12,
                        },
                      })}
                      className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-accent text-[10px] font-bold text-white ring-2 ring-white sm:h-7 sm:w-7 sm:text-[11px] sm:ring-4"
                    >
                      {p.step}
                    </motion.span>
                  </motion.div>

                  {/* Title & description — fade up just after the icon lands */}
                  <motion.h3
                    {...anim({
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.15 + 0.25, duration: 0.5 },
                    })}
                    className="mt-4 font-primary text-sm font-semibold text-ink-900 sm:mt-5 sm:text-lg"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.p
                    {...anim({
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.15 + 0.35, duration: 0.5 },
                    })}
                    className="mx-auto mt-1.5 text-[11px] leading-relaxed text-ink-500 sm:mt-2 sm:max-w-[15rem] sm:text-sm"
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
