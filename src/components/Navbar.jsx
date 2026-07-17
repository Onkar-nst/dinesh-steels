import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Phone, Mail, ChevronDown, Menu, X, ShieldCheck, MessageCircle,
} from 'lucide-react'
import { NAV, COMPANY } from '../data/site'

function Logo({ dark = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 shrink-0">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-white font-primary font-extrabold text-lg shadow-md">
        J
      </span>
      <span className="leading-none">
        <span
          className={`block font-primary text-xl font-extrabold tracking-tight ${
            dark ? 'text-ink-900' : 'text-white'
          }`}
        >
          JYOTHI<span className="text-accent">STEELS</span>
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.28em] ${
            dark ? 'text-ink-400' : 'text-white/60'
          }`}
        >
          Precision Metal Solutions
        </span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // mobile
  const [mobileSub, setMobileSub] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div
        className={`hidden md:block border-b transition-colors duration-300 ${
          solid ? 'border-ink-100 bg-ink-900' : 'border-white/10 bg-ink-900/40 backdrop-blur-sm'
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-400" />
            <span className="uppercase tracking-widest">ISO 9001:2015 Certified Exporter</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          solid ? 'bg-white shadow-[0_6px_30px_-12px_rgba(11,18,32,0.25)]' : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between gap-6">
          <Logo dark={solid} />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? 'text-ink-700 hover:text-accent'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>

                {item.dropdown && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:pt-2">
                    <ul className="overflow-hidden rounded-xl border border-ink-100 bg-white p-2 shadow-card">
                      {item.dropdown.map((d) => (
                        <li key={d}>
                          <a
                            href={item.href}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 transition-colors hover:bg-accent-50 hover:text-accent"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                            {d}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-700 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Get a Quote
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden grid h-10 w-10 place-items-center rounded-lg border transition-colors ${
                solid ? 'border-ink-200 text-ink-800' : 'border-white/30 text-white'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink-900/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm overflow-y-auto bg-white lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
                <Logo dark />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="p-4">
                {NAV.map((item) => (
                  <li key={item.label} className="border-b border-ink-50">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-3.5 font-medium text-ink-800"
                      >
                        {item.label}
                      </a>
                      {item.dropdown && (
                        <button
                          onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                          className="p-3"
                          aria-label="Expand"
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-ink-500 transition-transform ${
                              mobileSub === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.dropdown && mobileSub === item.label && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-2"
                        >
                          {item.dropdown.map((d) => (
                            <li key={d}>
                              <a
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block py-2 pl-4 text-sm text-ink-500"
                              >
                                {d}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" /> Get a Quote
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
