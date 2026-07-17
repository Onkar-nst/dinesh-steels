import { ArrowUpRight } from 'lucide-react'
import { img, IMG } from '../data/images'
import { COMPANY } from '../data/site'

// Ported from the provided Airkom "About" split panel — same layout, sizes and
// image treatment, re-themed (brand red block) with Dinesh Steels content.
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-accent-700 text-white">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="flex min-h-[560px] flex-col justify-between px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <span className="mb-8 inline-flex w-fit items-center gap-2 self-start rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            About {COMPANY.name}
          </span>
          <div>
            <h2 className="mb-6 font-primary text-4xl font-medium leading-[1.05] md:text-6xl">
              Your trusted partner in steel &amp; metal sourcing.
            </h2>
            <p className="mb-8 text-base text-white/70">
              {COMPANY.name} is a leading stockist, supplier and global exporter of premium
              ferrous and non-ferrous metal products. For over 25 years we have delivered
              certified quality, engineered precision and reliable logistics — from a single
              enquiry to a full project consignment, worldwide.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-700 shadow-sm transition-colors hover:bg-white/90"
            >
              About Us <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="relative min-h-[400px] bg-white md:min-h-full">
          <img
            src={img(IMG.warehouse, 1200)}
            alt="Dinesh Steels stockyard and warehouse"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
