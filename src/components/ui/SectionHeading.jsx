import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow mb-4">
          <span className="h-px w-8 bg-accent inline-block" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-primary text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight ${
            light ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg font-secondary leading-relaxed ${
              light ? 'text-white/70' : 'text-ink-500'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
