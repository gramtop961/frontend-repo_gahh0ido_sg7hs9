import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-6">
          <Sparkles size={14} className="text-indigo-300" />
          Introducing nvizna — software crafted for impact
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Building standout
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent"> software experiences</span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300">
          We design, build, and ship mobile apps and digital platforms that scale. From concept to launch, nvizna is your partner for modern engineering and end‑to‑end product delivery.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
