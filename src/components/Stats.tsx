import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '%', label: 'Confidencialidad' },
  { value: 24, suffix: '/7', label: 'Atención Personalizada' },
]

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const springValue = useSpring(0, { duration: 2000, bounce: 0 })
  const rounded = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, springValue, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return () => unsubscribe()
  }, [rounded])

  return (
    <span>
      {displayValue}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
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

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
