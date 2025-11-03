import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/20">
            <Rocket size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">
            nvizna
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-semibold transition-colors border border-white/10"
          >
            Start a project
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-200 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-4">
            <NavLink href="#services" onClick={close}>Services</NavLink>
            <NavLink href="#work" onClick={close}>Work</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <a
              href="#contact"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-semibold transition-colors border border-white/10"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
