import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    const container = particlesRef.current
    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full bg-white/10'

      const size = Math.random() * 6 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.bottom = `${Math.random() * 20}%`
      particle.style.animation = `float ${Math.random() * 15 + 10}s linear infinite`
      particle.style.animationDelay = `${Math.random() * 5}s`

      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-primary">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}</style>

      <div ref={particlesRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-serif mb-6"
          >
            AEQUITAS Capital
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Inversión y Administración de Patrimonio
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light opacity-90"
          >
            Gestión profesional de recursos y bienes con enfoque estratégico en inversiones y asesoramiento patrimonial
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contacto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold shadow-lg"
            >
              Solicitar Asesoría
            </motion.a>
            <motion.a
              href="#servicios"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)', color: '#1e3a8a' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold"
            >
              Conocer Servicios
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
