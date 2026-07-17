import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, Send } from 'lucide-react'
import { img } from '../data/images'

export default function EnquiryModal({ product, onClose }) {
  const [sent, setSent] = useState(false)
  const open = Boolean(product)

  useEffect(() => {
    if (open) setSent(false)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl bg-white sm:rounded-2xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink-700 shadow transition-colors hover:bg-accent hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Product header */}
            <div className="relative h-32 overflow-hidden">
              <img src={img(product.img, 700)} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 to-ink-900/30" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                  {product.sub}
                </span>
                <h3 className="font-primary text-xl font-bold text-white">{product.name}</h3>
              </div>
            </div>

            {sent ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-accent-50"
                >
                  <CheckCircle2 className="h-9 w-9 text-accent" />
                </motion.div>
                <h4 className="font-primary text-xl font-semibold text-ink-900">Enquiry Sent!</h4>
                <p className="mt-2 text-sm text-ink-500">
                  Thank you. Our team will get back to you with a quote within 24 hours.
                </p>
                <button onClick={onClose} className="btn-dark mt-6">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 p-6">
                <p className="text-sm text-ink-500">
                  Request a quote for <span className="font-semibold text-ink-800">{product.name}</span>.
                  Share your requirement and we’ll respond within 24 hours.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="John Doe" required />
                  <Field label="Phone" placeholder="+91 98XXXXXXXX" required />
                </div>
                <Field label="Email" type="email" placeholder="you@company.com" required />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Requirement (Grade / Size / Qty)
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. SS 316L, 4 inch, Sch 40, 500 meters"
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}
