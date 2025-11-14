import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const LIGHT_BLUE = '#7BDFFF';
const MINT_GREEN = '#7CFFB2';
const DARK = '#0A0F1F';

function useTyping(words, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((v) => v + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, pause]);

  return useMemo(() => ({ text: words[index % words.length].slice(0, subIndex), deleting }), [index, subIndex, words, deleting]);
}

export default function Hero() {
  const titles = useMemo(() => [
    'Web Developer',
    'UI/UX Designer',
    'Editor',
    'Programmer Pemula',
  ], []);
  const { text } = useTyping(titles);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(123,223,255,0.20),rgba(124,255,178,0.06)_35%,transparent_60%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-[0_0_40px_rgba(123,223,255,0.35)]">
              <p className="text-xs md:text-sm tracking-wide text-white/70">Modern Futuristic Anime Tech</p>
            </div>

            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold text-white drop-shadow-[0_0_30px_rgba(124,255,178,0.35)] md:text-6xl">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2]">Yusril (stevyuss)</span>
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-white/80">Creative Developer • Designer • Anime Lover</p>

            <div className="mt-4 h-8 md:h-10">
              <p className="text-[#7BDFFF] font-mono text-lg md:text-2xl">
                <span className="opacity-70">&gt; </span>{text}
                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-[#7CFFB2] align-middle md:h-6" />
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#05121f] transition">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2] blur-[1px]" aria-hidden></span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7BDFFF] to-[#7CFFB2] opacity-90" aria-hidden></span>
                <span className="relative">View Portfolio</span>
              </a>
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md transition hover:border-[#7BDFFF]/50">
                <span className="absolute -inset-0.5 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(123,223,255,0.25),rgba(124,255,178,0.25),transparent_70%)] opacity-0 blur-[6px] transition-opacity group-hover:opacity-100" aria-hidden></span>
                <span className="relative">Contact Me</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" style={{
        background: `radial-gradient(600px 600px at ${mousePos.x}px ${mousePos.y}px, rgba(124,255,178,0.14), transparent 60%)`
      }} />

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="h-12 w-7 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-start justify-center p-1"
        >
          <span className="mt-1 block h-2 w-1 rounded bg-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
