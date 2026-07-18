import { ArrowUpRight } from 'lucide-react'
import { img, IMG } from '../data/images'
import { COMPANY } from '../data/site'

// White "About" section — dark readable text on the left, a smaller framed
// image on the right, using the site-wide uniform section padding.
export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div>
          <span className="eyebrow mb-6">
            <span className="inline-block h-px w-8 bg-accent" />
            About {COMPANY.name}
          </span>
          <h2 className="mb-6 font-primary text-3xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Your trusted partner in{' '}
            <span className="text-accent">steel &amp; metal sourcing</span>.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-ink-500 md:text-lg">
            {COMPANY.name} is a leading stockist, supplier and global exporter of premium
            ferrous and non-ferrous metal products. For over 25 years we have delivered
            certified quality, engineered precision and reliable logistics — from a single
            enquiry to a full project consignment, worldwide.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-700 hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            About Us <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* Framed, smaller image */}
        <div className="relative">
          <img
            src={img(IMG.warehouse, 1200)}
            alt="Jyothi Steels stockyard and warehouse"
            className="aspect-[4/3] w-full rounded-3xl object-cover object-center shadow-card"
          />
        </div>
      </div>
    </section>
  )
}
