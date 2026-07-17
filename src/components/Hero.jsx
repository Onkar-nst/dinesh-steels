import { useState, useEffect } from 'react'
import { img, IMG } from '../data/images'

// Ported from the provided Airkom hero — same slider effect, sizes and animation,
// re-themed (brand red) and re-contented for Dinesh Steels.
const slides = [
  {
    subtitle: 'Stockist · Supplier · Global Exporter',
    title: 'Precision Steel Solutions',
    desc: 'Pipes, flanges, fittings, bars & sheets in stainless, carbon and exotic alloys — ready stock, dispatched to 65+ countries.',
    img: IMG.heroPipes,
  },
  {
    subtitle: 'ISO 9001:2015 Certified',
    title: 'Engineered for Reliability',
    desc: '8,000+ product lines backed by full MTC traceability, third-party inspection and on-time global logistics.',
    img: IMG.heroFactory,
  },
  {
    subtitle: '25+ Years of Trust',
    title: 'From Stockyard to Site',
    desc: 'Precision cutting, fabrication and sea-worthy packing — the complete steel sourcing partner for your project.',
    img: IMG.heroMolten,
  },
  {
    subtitle: 'Ready Stock · 65+ Countries',
    title: 'Metal Supply, Worldwide',
    desc: 'One of India’s largest ready inventories of ferrous and non-ferrous metals, delivered door-to-port, on schedule.',
    img: IMG.warehouse,
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-ink-900"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img(slide.img, 2000)}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Soft elegant vignette overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-12 text-white md:px-12 md:py-16 lg:px-16">
        {/* Slide Content */}
        <div className="flex max-w-2xl flex-1 flex-col justify-center space-y-6">
          <div className="space-y-3 transition-all duration-700">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90 md:text-sm">
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="font-primary text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              {slides[currentSlide].title}
            </h1>
            <p className="max-w-md text-sm font-light leading-relaxed text-white/80 md:text-base">
              {slides[currentSlide].desc}
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-white shadow-md transition-all hover:bg-accent-700"
            >
              Explore Products
              <span className="text-[10px]">➔</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Vertical ENQUIRY tab on right edge (hidden on mobile) */}
      <div className="pointer-events-auto absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 sm:block">
        <a
          href="#contact"
          className="flex cursor-pointer select-none items-center gap-2 rounded-l-2xl border-y border-l border-white/10 bg-accent px-4 py-4 text-xs font-medium uppercase tracking-widest text-white shadow-lg transition-colors [writing-mode:vertical-lr] hover:bg-accent-700"
        >
          ENQUIRY
        </a>
      </div>
    </section>
  )
}
