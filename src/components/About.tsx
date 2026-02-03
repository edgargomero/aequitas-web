import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const leftColumnVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
}

const rightColumnVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut' as const,
    },
  },
}

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + index * 0.1,
      ease: 'easeOut' as const,
    },
  }),
}

const valueVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + index * 0.15,
      ease: 'easeOut' as const,
    },
  }),
}

const values = [
  {
    title: 'Confianza',
    description: 'Relaciones basadas en transparencia y ética profesional',
  },
  {
    title: 'Excelencia',
    description: 'Compromiso con los más altos estándares de calidad',
  },
  {
    title: 'Seguridad',
    description: 'Protección integral de activos y confidencialidad garantizada',
  },
]

const features = [
  'Gestión Profesional',
  'Estrategias Personalizadas',
  'Total Confidencialidad',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 gradient-text">
              Sobre AEQUITAS Capital
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos una sociedad por acciones especializada en la inversión y administración profesional de recursos y bienes, con domicilio en Santiago de Chile.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nuestro enfoque se centra en la adquisición, tenencia, administración y enajenación estratégica de activos, incluyendo acciones, valores mobiliarios, instrumentos de inversión y bienes raíces.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Con un compromiso firme hacia la excelencia y la confidencialidad, ofrecemos soluciones personalizadas que se adaptan a las necesidades específicas de nuestros clientes.
            </p>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full"
                >
                  <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values Card */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-white shadow-2xl"
            >
              <h3 className="text-3xl font-bold font-serif mb-8">Nuestros Valores</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    custom={index}
                    variants={valueVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group cursor-default"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">{value.title}</h4>
                      <p className="text-white/90">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
