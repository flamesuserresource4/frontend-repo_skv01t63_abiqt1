function About() {
  const highlights = [
    '3+ years building web applications',
    'Frontend-focused with full‑stack foundations',
    'Strong UX sense and motion design',
    'Comfortable across React, FastAPI, MongoDB'
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I’m Michael Bahati Maneno, a software developer who loves turning ideas into polished, interactive products.
              I obsess over details, performance, and delightful micro‑interactions.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">{h}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <h3 className="text-white font-semibold">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'FastAPI', 'MongoDB', 'Node', 'Vite'].map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{s}</span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-white/90 font-medium">What I value</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Clean, accessible interfaces</li>
                <li>Meaningful animations (not just decoration)</li>
                <li>Clear communication and iteration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
