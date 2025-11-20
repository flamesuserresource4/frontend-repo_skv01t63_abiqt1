import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="size-2 rounded-full bg-emerald-400" /> Open to work & collaborations
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Michael Bahati Maneno
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Software Developer with 3 years of experience crafting modern web apps. I love building interactive, playful, and performant experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-blue-500/20 transition-transform hover:scale-[1.02]">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
