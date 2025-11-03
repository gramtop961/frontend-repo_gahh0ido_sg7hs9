import { Smartphone, Code2, Cloud, Shield, Rocket, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross‑platform apps built with performance and UX at the core.',
  },
  {
    icon: Code2,
    title: 'Web Applications',
    desc: 'Robust, scalable web platforms using modern stacks and best practices.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'CI/CD, infrastructure as code, and cloud architectures that scale with you.',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    desc: 'Research, design systems, and prototypes that make your product shine.',
  },
  {
    icon: Shield,
    title: 'QA & Automation',
    desc: 'Automated testing, QA pipelines, and quality gates for reliable releases.',
  },
  {
    icon: Rocket,
    title: 'Dedicated Teams',
    desc: 'Flexible squads that embed with your team to deliver faster and smarter.',
  },
];

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
      </div>
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 text-white">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What we do</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              From concept to production, we deliver world‑class software with a focus on craftsmanship, reliability, and speed.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
          >
            Let’s talk
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div id="work" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8">
          <h3 className="text-white font-semibold text-lg">Recent highlights</h3>
          <ul className="mt-4 space-y-3 text-slate-300 text-sm list-disc list-inside">
            <li>Launched a fintech mobile app to 100k+ users with a 4.8★ rating</li>
            <li>Migrated a legacy monolith to a modern cloud‑native architecture</li>
            <li>Built an internal design system that sped up delivery by 35%</li>
          </ul>
        </div>

        <div id="contact" className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-xl">Have an idea? Let’s build it.</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Tell us about your goals and timeline. We’ll reply within 1 business day.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <a
                href="mailto:hello@nvizna.com?subject=Project%20inquiry%20from%20website"
                className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
