import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { MATERIALS } from '../data/site'
import { img } from '../data/images'

export default function Materials() {
  return (
    <section id="materials" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Materials We Supply"
          title="Grades for Every Application"
          subtitle="From everyday stainless steel to high-performance exotic alloys — sourced, stocked and certified."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {MATERIALS.map((m, i) => (
            <motion.a
              href="#contact"
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={img(m.img, 600)}
                alt={m.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/40 to-transparent transition-opacity duration-500 group-hover:from-accent-900/95 group-hover:via-accent-900/40" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-primary text-lg font-bold text-white">{m.name}</h3>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {/* Grades reveal */}
                <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                  {m.grades}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
