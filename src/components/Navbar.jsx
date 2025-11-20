import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 shadow shadow-blue-500/30" />
              <span className="text-sm font-semibold tracking-wide text-white/90">Michael Bahati Maneno</span>
            </div>

            <nav className="hidden gap-6 text-sm text-white/80 md:flex">
              <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
              <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition-colors">Download CV</a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-3 text-white/80">
                <button onClick={() => scrollTo('home')} className="text-left hover:text-white">Home</button>
                <button onClick={() => scrollTo('projects')} className="text-left hover:text-white">Projects</button>
                <button onClick={() => scrollTo('contact')} className="text-left hover:text-white">Contact</button>
                <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 text-center text-white hover:bg-white/20 transition-colors">Download CV</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
