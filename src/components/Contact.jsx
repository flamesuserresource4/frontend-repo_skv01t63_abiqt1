import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to send right now. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something</h2>
            <p className="mt-4 text-white/80">Tell me about your project, product, or idea. I’ll reply within 24–48 hours.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <p className="text-white mb-2 font-medium">Prefer email?</p>
              <a href="mailto:michael@portfolio.dev" className="underline decoration-white/30 underline-offset-4 hover:text-white">michael@portfolio.dev</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/70" htmlFor="name">Name</label>
                <input id="name" name="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70" htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows="5" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell me a bit about what you need" />
              </div>
              <button type="submit" className="rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 px-4 py-2 font-semibold text-slate-900 shadow shadow-emerald-400/20">Send message</button>
              {status && <p className="text-sm text-white/80">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
