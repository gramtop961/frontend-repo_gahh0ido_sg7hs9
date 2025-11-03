import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">nvizna</p>
            <p className="text-slate-400 text-sm mt-1">Software development and services.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@nvizna.com"
              className="p-2 rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com" target="_blank" rel="noreferrer"
              className="p-2 rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com" target="_blank" rel="noreferrer"
              className="p-2 rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} nvizna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
