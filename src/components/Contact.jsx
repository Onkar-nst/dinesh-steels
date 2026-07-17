import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Navigation,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { COMPANY } from '../data/site'

const INFO = [
  { icon: MapPin, label: 'Head Office', value: COMPANY.address },
  { icon: Phone, label: 'Call Us', value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
  { icon: Mail, label: 'Email Us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat · 9:30 AM – 7:00 PM IST' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request a Quote"
          subtitle="Tell us what you need — grade, size, quantity — and our team will respond within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {INFO.map((it) => {
                const Icon = it.icon
                const inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-5 transition-colors hover:border-accent/30 hover:bg-accent-50/40">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-900 text-accent-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        {it.label}
                      </div>
                      <div className="mt-1 text-sm font-medium leading-relaxed text-ink-800">
                        {it.value}
                      </div>
                    </div>
                  </div>
                )
                return it.href ? (
                  <a key={it.label} href={it.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={it.label}>{inner}</div>
                )
              })}
            </div>

            {/* Location card */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-56 overflow-hidden rounded-2xl border border-ink-100"
            >
              {/* map-style backdrop */}
              <div className="absolute inset-0 bg-ink-900" />
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                  backgroundSize: '38px 38px',
                }}
              />
              {/* stylized roads */}
              <div className="absolute -left-10 top-[38%] h-[3px] w-[130%] -rotate-6 bg-white/10" />
              <div className="absolute left-[62%] -top-6 h-[140%] w-[3px] rotate-12 bg-white/10" />
              <div className="absolute -left-6 top-[68%] h-[2px] w-[120%] rotate-3 bg-accent/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />

              {/* marker */}
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg ring-4 ring-accent/25">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                  <MapPin className="relative h-5 w-5" />
                </div>
              </div>

              {/* overlay bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                    Visit Us
                  </div>
                  <div className="text-sm font-medium text-white">Mumbai, Maharashtra, India</div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition-colors group-hover:bg-accent">
                  <Navigation className="h-3.5 w-3.5" /> Directions
                </span>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> Chat with us on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-ink-100 bg-white p-7 shadow-card sm:p-9"
          >
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-accent-50"
                >
                  <CheckCircle2 className="h-11 w-11 text-accent" />
                </motion.div>
                <h3 className="font-primary text-2xl font-semibold text-ink-900">
                  Thank You!
                </h3>
                <p className="mt-3 max-w-sm text-ink-500">
                  Your enquiry has been received. Our team will reach out with a detailed quote
                  within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-dark mt-8">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="John Doe" required />
                  <Field label="Company" placeholder="Company Pvt. Ltd." />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" type="email" placeholder="you@company.com" required />
                  <Field label="Phone" placeholder="+91 98XXXXXXXX" required />
                </div>
                <div>
                  <Label>Product / Material of Interest</Label>
                  <select className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20">
                    <option>Pipes & Tubes</option>
                    <option>Flanges</option>
                    <option>Buttweld / Forged Fittings</option>
                    <option>Sheets & Plates</option>
                    <option>Round Bars</option>
                    <option>Fasteners</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label>Your Requirement</Label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Grade, size, schedule, quantity, destination port…"
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" /> Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Label({ children }) {
  return (
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
      {children}
    </label>
  )
}

function Field({ label, type = 'text', placeholder, required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}
