import { Star } from 'lucide-react'

// Ported from the provided Airkom reviews strip — same marquee animation, sizes
// and layout, re-themed (ink → brand red gradient) with Dinesh Steels reviews.
const reviews = [
  { text: 'Duplex flanges delivered ahead of schedule', author: 'Gulf Petrochem, UAE' },
  { text: 'Zero rejections across three years of supply', author: 'Coastal Power, India' },
  { text: 'Right Hastelloy grade, true engineering partners', author: 'Nordic Process, Sweden' },
  { text: 'Sea-worthy packing, zero damage on arrival', author: 'TexMarine, USA' },
]

export default function ReviewsStrip() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-ink-950 via-accent-800 to-ink-950">
      <div className="flex items-center gap-3 px-4 py-4 md:gap-16 md:py-5 md:px-12 lg:px-16">
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
            ))}
          </div>
          <span className="whitespace-nowrap text-sm font-semibold text-white">
            Trusted since <span className="text-yellow-300">1998</span>
          </span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_8s_linear_infinite]">
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <span key={i} className="flex items-center gap-3 px-8 text-sm">
                <span className="font-medium text-white">{r.text}</span>
                <span className="text-white/50">{r.author}</span>
                <span className="ml-2 text-yellow-400/60">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
