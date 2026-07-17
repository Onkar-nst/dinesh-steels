import {
  MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Youtube, ArrowRight, Send,
} from 'lucide-react'
import { COMPANY } from '../data/site'

const QUICK = ['Home', 'About', 'Products', 'Materials', 'Industries', 'Contact']
const PRODUCTS = [
  'Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Round Bars', 'Fasteners',
]
const MATS = [
  'Stainless Steel', 'Carbon Steel', 'Nickel Alloys', 'Hastelloy', 'Titanium', 'Copper & Brass',
]
const SOCIAL = [Linkedin, Facebook, Instagram, Youtube]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="absolute inset-0 bg-steel-grid bg-[size:48px_48px] opacity-[0.05]" />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-10 lg:flex-row">
          <div>
            <h3 className="font-primary text-2xl font-bold text-white">
              Stay updated with Jyothi Steels
            </h3>
            <p className="mt-1 text-sm text-white/50">
              Product updates, new stock arrivals and technical notes — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
            <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-accent-700">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Columns */}
      <div className="relative container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent font-primary text-lg font-extrabold text-white">
              J
            </span>
            <span className="font-primary text-xl font-extrabold text-white">
              JYOTHI<span className="text-accent">STEELS</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            {COMPANY.tagline}. Premium stockist, supplier & global exporter of steel and metal
            products to 65+ countries.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <FooterCol title="Quick Links" items={QUICK} />
        <FooterCol title="Products" items={PRODUCTS} />
        <FooterCol title="Materials" items={MATS} />

        {/* Contact */}
        <div>
          <h4 className="mb-5 font-primary text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="leading-relaxed text-white/60">{COMPANY.address}</span>
            </li>
            <li>
              <a href={`tel:${COMPANY.phoneHref}`} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-white/60">{COMPANY.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-white/60">{COMPANY.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#home" className="flex items-center gap-1 hover:text-white">
              Back to top <ArrowRight className="h-3 w-3 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-5 font-primary text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((it) => (
          <li key={it}>
            <a
              href={`#${it.toLowerCase().split(' ')[0]}`}
              className="group inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-accent"
            >
              <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
