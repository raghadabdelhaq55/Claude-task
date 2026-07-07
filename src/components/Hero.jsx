import SearchCard from './SearchCard'

// Florence / Tuscany skyline at sunset (free-to-use Unsplash photo).
const HERO_IMG =
  'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Warm sunset-toned overlay for mood + text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-black/45 to-black/60" />
      <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />

      {/* Foreground content — heading + card centered as a group so the
          section popovers have room to open below the card. */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-28">
        <div className="text-center">
          <h1 className="font-script text-5xl text-brand drop-shadow-lg sm:text-6xl md:text-7xl">
            Enjoy in the best way!
          </h1>
          <p className="mt-3 text-base font-light tracking-wide text-white/90 sm:text-lg">
            Enjoy our services for your trip anytime
          </p>
        </div>

        <div className="flex w-full max-w-6xl justify-center px-2">
          <SearchCard />
        </div>
      </div>
    </section>
  )
}
