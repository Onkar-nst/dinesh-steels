import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { img, IMG } from '../data/images'

// Airkom "Solar" media band — rounded-3xl full-bleed band with an autoplaying,
// looping background video and a mute/unmute toggle. The showcase image is used
// as the poster, so it renders identically until the video loads.
// Drop your video at: public/showcase.mp4  (served at /showcase.mp4)
export default function Showcase() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const next = !muted
    video.muted = next
    if (!next) {
      // Browsers require a user gesture before playing with sound.
      video.play().catch(() => {})
    }
    setMuted(next)
  }

  return (
    <section className="w-full bg-ink-50 px-6 pb-20 md:px-12 md:pb-28 lg:px-16">
      <div className="relative flex min-h-[500px] items-end overflow-hidden rounded-3xl md:min-h-[600px]">
        <video
          ref={videoRef}
          src="/showcase.mp4"
          poster={img(IMG.showcase, 2400)}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Bottom + left gradients keep the heading crisp over the bright coils */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />

        {/* Mute / unmute toggle */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          aria-pressed={!muted}
          className="absolute bottom-6 right-6 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/60"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>

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
