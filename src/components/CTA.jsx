import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { img, IMG } from '../data/images'
import { COMPANY } from '../data/site'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <img
        src={img(IMG.heroMolten, 1800)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-accent-900/60" />
      <div className="absolute inset-0 bg-steel-grid bg-[size:48px_48px] opacity-10" />

      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-5 text-accent-400"
          >
            <span className="h-px w-8 bg-accent inline-block" /> Ready When You Are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-primary text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Let’s source your next{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent bg-clip-text text-transparent">
              steel consignment
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-white/70"
          >
            Send us your specification today and get a detailed, competitive quotation within
            24 hours — with full documentation and worldwide dispatch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${COMPANY.phoneHref}`} className="btn-ghost">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
