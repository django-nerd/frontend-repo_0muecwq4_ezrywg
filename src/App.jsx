import React from 'react'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import Hero from './components/Hero'
import { About, Skills, Projects, Experience, Services, Contact, Footer } from './components/Sections'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import './index.css'

export default function App() {
  return (
    <Layout>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_600px_at_10%_-10%,rgba(123,223,255,0.15),transparent_60%)]" />
        <Hero />
        <div className="relative z-10">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    </Layout>
  )
}
