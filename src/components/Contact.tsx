import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const contactInfo = [
  {
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    title: 'Dirección',
    content: ['Av. Alcalde Jorge Monckeberg #1721', 'Ñuñoa, Santiago', 'Región Metropolitana, Chile'],
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    title: 'Email',
    content: ['contacto@aequitascapital.cl'],
    isLink: true,
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Horario de Atención',
    content: ['Lunes a Viernes: 9:00 - 18:00', 'Sábado: 10:00 - 14:00'],
  },
]

const serviceOptions = [
  'Seleccione un servicio',
  'Inversión de Capital',
  'Gestión Inmobiliaria',
  'Asesoría Patrimonial',
  'Administración de Recursos',
  'Participación Societaria',
  'Consultoría Financiera',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // TODO: Integrar con servicio real (Formspree, Resend, EmailJS)
    console.log('Form data:', Object.fromEntries(formData))
    setFormSubmitted(true)
    e.currentTarget.reset()
    timerRef.current = setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 gradient-text">
            Contacto
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos aquí para atender sus consultas y brindarle el mejor servicio
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
                    {item.content.map((line, i) =>
                      item.isLink ? (
                        <a key={i} href={`mailto:${line}`} className="text-blue-900 hover:text-blue-700 transition-colors block">
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-600">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl"
            >
              <h3 className="font-bold text-2xl mb-4 text-blue-900">Atención Personalizada</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestro equipo está disponible para brindarle asesoría especializada. Todas las consultas son tratadas con la máxima confidencialidad.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="servicio">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Cuéntenos sobre su consulta..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                {formSubmitted ? '¡Mensaje Enviado!' : 'Enviar Consulta'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
