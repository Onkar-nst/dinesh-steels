import { img, IMG } from '../data/images'

// Ported from the provided Airkom "Solar" media band — same rounded-3xl full-bleed
// band, min-heights, bottom gradient and overlaid heading/description. The source
// used a <video> + mute toggle; with no video asset here it uses an image (same
// layout). Re-themed (ink) and re-contented for Dinesh Steels.
export default function Showcase() {
  return (
    <section className="w-full bg-ink-50 px-6 pb-20 md:px-12 md:pb-28 lg:px-16">
      <div className="relative flex min-h-[500px] items-end overflow-hidden rounded-3xl md:min-h-[600px]">
        <img
          src={img(IMG.showcase, 2400)}
          alt="Dinesh Steels stockyard — rows of ready steel coil inventory"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Bottom + left gradients keep the heading crisp over the bright coils */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

        <div className="relative z-20 max-w-2xl px-8 py-12 text-white md:px-12 md:py-16">
          <h2 className="mb-4 font-primary text-4xl font-medium leading-tight md:text-6xl">
            Steel You Can Build On
          </h2>
          <p className="max-w-md text-white/80">
            From stockyard to site — deep ready inventory, in-house cutting and fabrication,
            and sea-worthy global logistics, combined into one dependable supply partner.
          </p>
        </div>
      </div>
    </section>
  )
}
