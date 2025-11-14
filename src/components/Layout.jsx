import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, Home, User, Sparkles, Briefcase, Layers, Mail } from 'lucide-react';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen w-full bg-[#0A0F1F] text-white selection:bg-[#7BDFFF] selection:text-[#05121f]">
      <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1F]/70 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white">stevyuss</a>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark((v) => !v)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Menu size={18} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="container mx-auto px-6 py-4 grid gap-3 text-white/80">
              {['about','skills','projects','experience','services','contact'].map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="hover:text-white transition">{id[0].toUpperCase()+id.slice(1)}</a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
      {children}
    </div>
  );
}
