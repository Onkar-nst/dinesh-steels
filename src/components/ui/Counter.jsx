import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Animated count-up that fires once when scrolled into view (FDC stats).
// Every counter should visibly stop ticking at the same moment, whatever its
// magnitude. A shared easing curve can't do that: a counter to 25 rounds to its
// final integer as soon as it is within 0.5, which a fast curve reaches far
// earlier than a counter to 8,000 does. So each counter gets its own ease-out
// exponent, solved so that `to - 0.5` is reached at FINISH_AT for all of them.
const FINISH_AT = 0.95

const easeExponent = (to) => {
  if (!to || to <= 1) return 1
  return Math.log(0.5 / to) / Math.log(1 - FINISH_AT)
}

export default function Counter({ to = 0, duration = 2000, suffix = '', className = '', active }) {
  const ref = useRef(null)
  const selfInView = useInView(ref, { once: true, margin: '-60px' })
  // `active` lets a parent start a whole group of counters on one trigger.
  const inView = active === undefined ? selfInView : active
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const k = easeExponent(to)
    let raf
    let start
    const step = (ts) => {
      if (start === undefined) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(1 - progress, k)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
