import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.15),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.15),transparent_35%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60">
          © {new Date().getFullYear()} Michael Bahati Maneno — Built with love and good vibes.
        </div>
      </footer>
    </div>
  )
}

export default App
