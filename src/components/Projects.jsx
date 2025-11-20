function Projects() {
  const items = [
    {
      title: 'Realtime Chat App',
      desc: 'Socket-powered chat with typing indicators, read receipts, and modern UI.',
      stack: ['React', 'FastAPI', 'WebSockets'],
      link: '#'
    },
    {
      title: 'E-commerce Dashboard',
      desc: 'Admin analytics with charts, role-based access, and order management.',
      stack: ['Vite', 'MongoDB', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Portfolio Engine',
      desc: 'Config-driven portfolio generator with themes and content schema.',
      stack: ['Next.js', 'Framer Motion'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A few highlights from the past 3 years.</p>
          </div>
          <a href="#" className="hidden rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 md:block">View all</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <a key={idx} href={p.link} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-emerald-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 h-36 w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10" />
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
