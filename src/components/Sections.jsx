import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Instagram, ExternalLink, Code2, Rocket, Cpu, Paintbrush, Search, Video, MonitorSmartphone, Boxes, Trophy, Wrench } from 'lucide-react';

const Section = ({ id, title, children, subtle }) => (
  <section id={id} className={`relative py-20 md:py-28 ${subtle ? 'bg-transparent' : ''}`}>
    <div className="container mx-auto px-6 md:px-10">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white/95 mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2] drop-shadow-[0_0_20px_rgba(123,223,255,0.45)]">{title}</span>
        </motion.h2>
      )}
      {children}
    </div>
  </section>
);

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-[#7BDFFF]/40 hover:shadow-[0_0_40px_rgba(123,223,255,0.25)] transition ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" aria-hidden />
    {children}
  </motion.div>
);

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard>
          <div className="flex items-start gap-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxhdmF0YXJ8ZW58MHwwfHx8MTc2MzE2NDUzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="avatar" className="h-20 w-20 rounded-full object-cover ring-2 ring-[#7CFFB2]/40" />
            <div>
              <h3 className="text-xl font-semibold text-white">Yusril (stevyuss)</h3>
              <p className="text-white/70">Introvert • Suka musik Inggris & Jepang • Cita-cita: Fisikawan & Programmer</p>
            </div>
          </div>
          <p className="mt-4 text-white/80">Aktif di robotika, coding, editing, dan desain. Menyukai estetika futuristik dan teknologi yang elegan. Fokus pada pengalaman pengguna, detail visual, dan performa.</p>
        </GlassCard>
        <GlassCard>
          <ul className="grid gap-3 text-white/80">
            <li>• Robotika • Coding • Editing • Desain</li>
            <li>• Anime-style aesthetics • Minimal yet bold</li>
            <li>• Tools favorit: React, Tailwind, Figma, CapCut</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/stevyuss" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"><Github size={18}/> GitHub</a>
            <a href="https://instagram.com/justevyuss" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"><Instagram size={18}/> Instagram</a>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

export function Skills() {
  const items = [
    { group: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'], icon: MonitorSmartphone },
    { group: 'Backend', skills: ['Node.js', 'Express'], icon: Cpu },
    { group: 'Editing', skills: ['CapCut', 'Adobe Premiere'], icon: Video },
    { group: 'Desain', skills: ['Figma', 'Canva'], icon: Paintbrush },
    { group: 'Hobby', skills: ['Roblox Studio', 'Unity (FPS)'], icon: Boxes },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <GlassCard key={it.group} className="group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7BDFFF]/30 to-[#7CFFB2]/30 flex items-center justify-center ring-1 ring-white/20 group-hover:ring-[#7BDFFF]/40 transition">
                  <Icon className="text-white" size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white">{it.group}</h4>
              </div>
              <div className="mt-4 space-y-2">
                {it.skills.map((s) => (
                  <div key={s} className="">
                    <div className="flex justify-between text-white/70 text-sm"><span>{s}</span><span>80%</span></div>
                    <div className="h-2 rounded bg-white/10 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2] shadow-[0_0_20px_rgba(124,255,178,0.4)]" />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  const data = [
    { title: 'UMKM Health Drink', tech: ['React', 'Tailwind'], img: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop', link: '#', src: '#' },
    { title: 'SpieceShop 2.0', tech: ['Next.js', 'Stripe'], img: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1200&auto=format&fit=crop', link: '#', src: '#' },
    { title: 'Robotika Telemetry', tech: ['Arduino', 'Web'], img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', link: '#', src: '#' },
    { title: 'GiveChain Hackathon', tech: ['Web3', 'React'], img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop', link: '#', src: '#' },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((p) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={p.img} alt={p.title} className="h-40 w-full object-cover opacity-90 group-hover:scale-[1.03] transition duration-500" />
            <div className="p-5">
              <h4 className="text-white font-semibold">{p.title}</h4>
              <p className="text-white/70 text-sm">{p.tech.join(' • ')}</p>
              <div className="mt-4 flex gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-[#7BDFFF] hover:text-white transition"><ExternalLink size={16}/> Preview</a>
                <a href={p.src} className="inline-flex items-center gap-1 text-[#7CFFB2] hover:text-white transition"><Code2 size={16}/> Source Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const items = [
    'Robotika MAN 3 Jember',
    'GiveChain Web3 Hackathon',
    'Divisi Avionics Telemetry FOS Rocket Team',
    'UMKM Health Drink Website',
    'Online Shop “SpieceShop 2.0”',
    'Duta GenRe 2024 preparation',
  ];
  return (
    <Section id="experience" title="Experience & Achievement">
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#7BDFFF] via-white/20 to-[#7CFFB2]" aria-hidden />
        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.div key={it} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative pl-10">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-[#7BDFFF] to-[#7CFFB2] shadow-[0_0_18px_rgba(123,223,255,0.6)]" />
              <GlassCard>
                <p className="text-white/90">{it}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  const items = [
    { title: 'Jasa Pembuatan Website', icon: Rocket },
    { title: 'SEO Optimization', icon: Search },
    { title: 'Editing Video', icon: Video },
    { title: 'UI/UX Design', icon: Paintbrush },
    { title: 'Robot programming basic', icon: Wrench },
  ];
  return (
    <Section id="services" title="Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ title, icon: Icon }) => (
          <GlassCard key={title} className="group hover:scale-[1.02] transition">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7BDFFF]/30 to-[#7CFFB2]/30 flex items-center justify-center ring-1 ring-white/20 group-hover:ring-[#7BDFFF]/40 transition">
                <Icon className="text-white" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white">{title}</h4>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white/70">Nama</label>
              <input className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-[#7BDFFF]/50" placeholder="Yusril" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-[#7BDFFF]/50" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Pesan</label>
              <textarea rows="4" className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-[#7BDFFF]/50" placeholder="Halo..." />
            </div>
            <button type="button" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#05121f]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2]" aria-hidden />
              <span className="relative">Kirim</span>
            </button>
          </form>
        </GlassCard>
        <div className="grid gap-4">
          <GlassCard>
            <a href="https://instagram.com/justevyuss" className="inline-flex items-center gap-3 text-white/90 hover:text-white transition"><Instagram/> Instagram @justevyuss</a>
          </GlassCard>
          <GlassCard>
            <a href="mailto:stevyuss@example.com" className="inline-flex items-center gap-3 text-white/90 hover:text-white transition"><Mail/> stevyuss@example.com</a>
          </GlassCard>
          <GlassCard>
            <a href="https://github.com/stevyuss" className="inline-flex items-center gap-3 text-white/90 hover:text-white transition"><Github/> github.com/stevyuss</a>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative py-10 text-center text-white/70">
      <p>Crafted with <span className="text-[#7CFFB2]">❤</span> by stevyuss (Yusril)</p>
    </footer>
  );
}
