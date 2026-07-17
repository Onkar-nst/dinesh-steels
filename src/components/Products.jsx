import { useEffect, useMemo, useState, useRef } from 'react'
import {
  Grid,
  Image,
  ChevronDown,
  ShoppingBag,
  ArrowRight,
  Phone,
  X,
  User,
  Mail,
  Building2,
  CheckCircle,
  Loader2,
  Tag,
  Layers,
} from 'lucide-react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { img } from '../data/images'

/* -------------------------------------------------------
   PRODUCT ENQUIRY MODAL
   Ported from ProductsSection.tsx — same layout, red stripe,
   4-field form, validation and success state. No backend here,
   so submit is simulated locally. Re-themed to the brand accent.
---------------------------------------------------------*/
function ProductEnquiryModal({ product, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // No backend in this static build — simulate a successful submission.
    setTimeout(() => setStatus('success'), 900)
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const inputClass = (error) =>
    `w-full pl-10 pr-4 py-3 text-sm text-gray-800 bg-white border outline-none
     transition-colors duration-150 placeholder:text-gray-400 font-primary
     ${error ? 'border-accent-400 focus:border-accent' : 'border-gray-200 focus:border-gray-800'}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Accent top stripe */}
        <div className="h-[3px] w-full bg-accent" />

        {/* Header */}
        <div className="px-8 pt-7 pb-5 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold text-accent tracking-[0.2em] uppercase mb-2 font-primary">
                Product Enquiry
              </p>
              <h2 className="text-xl font-semibold text-gray-900 leading-snug font-primary">
                {product.name}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-primary">
                  <Layers className="w-3.5 h-3.5 flex-shrink-0" />
                  {product.segment}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-primary">
                  <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                  {product.subcategory}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="px-8 py-14 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-accent-50 flex items-center justify-center mb-5">
              <CheckCircle className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-primary">
              Enquiry Submitted!
            </h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-primary">
              We&rsquo;ve received your enquiry for{' '}
              <span className="font-medium text-gray-700">{product.name}</span>. Our team will get
              back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 bg-accent text-white text-sm font-semibold
                         hover:bg-accent-700 transition-colors font-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-8 py-7">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1.5 font-primary">
                  Full Name <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={inputClass(errors.name)}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-accent font-primary">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1.5 font-primary">
                  Email Address <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={inputClass(errors.email)}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-accent font-primary">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1.5 font-primary">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={inputClass(errors.phone)}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-accent font-primary">{errors.phone}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-1.5 font-primary">
                  Company{' '}
                  <span className="text-gray-300 font-normal normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange('company')}
                    className={inputClass()}
                  />
                </div>
              </div>
            </div>

            {/* Error banner */}
            {status === 'error' && (
              <div className="mt-5 px-4 py-3 bg-accent-50 border border-accent-200">
                <p className="text-sm text-accent font-primary">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 w-full py-3.5 bg-accent hover:bg-accent-700 disabled:opacity-60
                         text-white text-sm font-semibold transition-colors font-primary
                         flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>

            <p className="mt-4 text-center text-xs text-gray-400 font-primary">
              Our team will reach out to you shortly.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   MAIN PRODUCTS SECTION
   Ported from ProductsSection.tsx — same dark catalog layout:
   header, category pills, sticky sub-category sidebar, big
   product cards, pagination and mobile dropdowns. Wired to the
   project's static data and re-themed (ink / brand accent).
---------------------------------------------------------*/
export default function Products() {
  const [enquiryProduct, setEnquiryProduct] = useState(null)
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id)
  const [sub, setSub] = useState(CATEGORIES[0].subs[0])
  const [mobileCatOpen, setMobileCatOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const PRODUCTS_PER_PAGE = 9
  const productsRef = useRef(null)
  const triggeredScroll = useRef(false)
  const isInitial = useRef(true)

  const category = useMemo(
    () => CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES[0],
    [categoryId]
  )

  const filteredProducts = useMemo(
    () => PRODUCTS.filter((p) => p.cat === categoryId && p.sub === sub),
    [categoryId, sub]
  )

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  function goToPage(p) {
    if (p < 1 || p > totalPages) return
    triggeredScroll.current = true
    setCurrentPage(p)
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false
      return
    }
    if (!triggeredScroll.current) return
    triggeredScroll.current = false
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }, [sub, categoryId])

  const openEnquiry = (p) => {
    setEnquiryProduct({
      name: p.name,
      subcategory: p.sub,
      segment: category.name,
    })
  }

  return (
    <section
      id="products"
      className="pt-20 pb-10 md:pt-28 md:pb-12 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 relative"
    >
      <div ref={productsRef} className="px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal font-primary text-white mb-5 tracking-tight">
            Industrial Metal Catalog
          </h2>
          <p className="text-white opacity-60 text-lg md:text-xl max-w-2xl mx-auto font-secondary">
            Explore our complete range of pipes, flanges, fittings, bars, sheets and fasteners —
            across stainless, carbon and exotic alloys.
          </p>
        </div>

        {/* CATEGORY PILLS */}
        <div className="hidden lg:flex justify-center flex-wrap font-primary gap-3 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                triggeredScroll.current = true
                setCategoryId(c.id)
                setSub(c.subs[0])
                setCurrentPage(1)
              }}
              className={`px-8 py-3.5 font-medium transition-all duration-300 border border-white/20 ${
                c.id === categoryId
                  ? 'bg-accent text-white shadow-lg hover:bg-accent-700'
                  : 'bg-black/40 text-white/80 hover:text-white hover:bg-black/60'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* MOBILE CATEGORY DROPDOWN */}
        <div className="lg:hidden mb-8 flex flex-col gap-3 font-secondary">
          <div className="relative">
            <button
              onClick={() => setMobileCatOpen(!mobileCatOpen)}
              className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white font-semibold flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-accent-400" />
                {category?.name}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  mobileCatOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileCatOpen && (
              <div className="absolute z-20 w-full mt-2 bg-ink-900 border border-white/10 shadow-2xl max-h-64 overflow-y-auto">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      triggeredScroll.current = true
                      setCategoryId(c.id)
                      setSub(c.subs[0])
                      setMobileCatOpen(false)
                      setCurrentPage(1)
                    }}
                    className={`w-full text-left px-5 py-4 border-b border-white/10 ${
                      c.id === categoryId
                        ? 'bg-accent text-white shadow-lg'
                        : 'bg-black/40 text-white/80 hover:bg-black/60'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SUBCATEGORY */}
          <div className="relative">
            <button
              onClick={() => setMobileSubOpen(!mobileSubOpen)}
              className="w-full px-5 py-4 bg-black/40 border border-white/10 text-white font-semibold flex justify-between items-center"
            >
              <span>{sub}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  mobileSubOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileSubOpen && (
              <div className="absolute z-20 w-full mt-2 bg-ink-900 border border-white/10 shadow-2xl max-h-64 overflow-y-auto">
                {category?.subs.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      triggeredScroll.current = true
                      setSub(s)
                      setMobileSubOpen(false)
                      setCurrentPage(1)
                    }}
                    className="w-full text-left px-5 py-4 border-b border-white/10 bg-accent/30 text-white font-semibold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP GRID — sidebar sticks while the taller product column scrolls,
            then releases and re-aligns with the last product (position: sticky). */}
        <div className="hidden lg:grid grid-cols-5 items-start gap-6">
          <aside className="sticky top-28 flex flex-col self-start border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-6 shadow-2xl">
            <h4 className="text-xl mb-6 font-primary text-white/80 flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2 bg-accent/10 border border-accent/30">
                <Grid className="w-5 h-5 text-accent" />
              </div>
              <span>Sub Categories</span>
            </h4>

            <nav className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto pr-2">
              {category?.subs.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    triggeredScroll.current = true
                    setSub(s)
                    setCurrentPage(1)
                  }}
                  className={`group w-full text-left px-4 py-3.5 font-semibold transition-all flex items-center justify-between ${
                    s === sub
                      ? 'bg-accent text-white shadow-lg hover:bg-accent-700'
                      : 'bg-black/40 text-white/80 hover:bg-black/60'
                  }`}
                >
                  <span>{s}</span>
                  <ArrowRight
                    className={`w-10 h-10 transition-all ${
                      s === sub ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              ))}
            </nav>
          </aside>

          {/* PRODUCT CARDS */}
          <main className="lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedProducts.length === 0 && (
                <div className="col-span-full text-center py-24">
                  <div className="inline-flex flex-col items-center gap-4">
                    <div className="p-6 bg-ink-900 rounded-full border border-white/10">
                      <ShoppingBag className="w-12 h-12 text-gray-600" />
                    </div>
                    <p className="text-gray-500 text-lg font-medium">
                      No products found in this sub category
                    </p>
                  </div>
                </div>
              )}

              {paginatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="group flex flex-col bg-gradient-to-b from-ink-900 to-ink-950 overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-accent-900/20"
                >
                  <div className="relative h-80 bg-ink-950 overflow-hidden">
                    {p.img ? (
                      <img
                        src={img(p.img, 700)}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="320"
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 bg-white"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-700">
                        <Image className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-3xl font-primary font-medium text-white mb-2">{p.name}</h3>
                    <p className="text-md text-white/70 font-secondary mb-5 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>

                    <div className="mt-auto flex w-full gap-3 pt-2 font-secondary">
                      <button
                        onClick={() => openEnquiry(p)}
                        className="flex-1 px-6 py-3.5 font-semibold border border-white/40 bg-accent hover:bg-accent-700 text-white flex items-center justify-center gap-2"
                      >
                        <span>View</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => openEnquiry(p)}
                        className="flex-1 px-6 py-3.5 font-semibold border border-white/40 bg-accent hover:bg-accent-700 text-white flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-12 font-secondary">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-white/20 rounded-md bg-black/50 text-white disabled:opacity-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1
                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2 border rounded-md ${
                        page === currentPage
                          ? 'bg-accent/30 border-accent text-white font-semibold'
                          : 'border-white/20 text-white hover:bg-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  )
                })}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-white/20 rounded-md bg-black/50 text-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>

        {/* MOBILE GRID */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-20">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="p-6 bg-ink-900 border border-white/10">
                  <ShoppingBag className="w-10 h-10 text-gray-600" />
                </div>
                <p className="text-gray-500 font-medium">No products found</p>
              </div>
            </div>
          )}

          {paginatedProducts.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col bg-gradient-to-b from-ink-900 to-ink-950 overflow-hidden border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="relative h-56 bg-ink-950 overflow-hidden">
                {p.img ? (
                  <img
                    src={img(p.img, 700)}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="224"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 bg-white"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-700">
                    <Image className="w-12 h-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl font-medium text-white mb-2">{p.name}</h3>
                <p className="text-md text-gray-400 mb-4 line-clamp-2">{p.desc}</p>

                <div className="mt-auto flex justify-center gap-4">
                  <button
                    onClick={() => openEnquiry(p)}
                    className="flex-1 max-w-[180px] px-5 py-3 bg-accent text-white font-medium hover:bg-accent-700 transition-all border border-white/40 flex items-center justify-center gap-2"
                  >
                    <span>View</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openEnquiry(p)}
                    className="flex-1 max-w-[180px] px-5 py-3 bg-accent text-white font-medium hover:bg-accent-700 transition-all border border-white/40 flex items-center justify-center gap-2"
                  >
                    <span>Enquire</span>
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Enquiry Modal */}
      {enquiryProduct && (
        <ProductEnquiryModal product={enquiryProduct} onClose={() => setEnquiryProduct(null)} />
      )}
    </section>
  )
}
