import { CLIENTS } from '../data/site'

function Row({ reverse = false }) {
  const items = [...CLIENTS, ...CLIENTS]
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? 'animate-marquee-slow [animation-direction:reverse]' : 'animate-marquee'
        }`}
      >
        {items.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-[68px] shrink-0 items-center rounded-xl border border-ink-100 bg-white px-6 shadow-sm grayscale transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md hover:grayscale-0"
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              loading="lazy"
              draggable="false"
              className="h-10 w-auto select-none"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="border-y border-ink-100 bg-white py-20 md:py-28">
      <div className="container-x mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink-400">
          Trusted by industry leaders across 65+ countries
        </p>
      </div>

      {/* Edge fade masks */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="space-y-4">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  )
}
