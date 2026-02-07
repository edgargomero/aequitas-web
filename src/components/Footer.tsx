const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.52-1.13-7.5-5.33-7.5-9.5V8.3l7.5-3.75 7.5 3.75v1.7c0 4.17-2.98 8.37-7.5 9.5z" />
              </svg>
              <span className="text-xl font-bold font-serif">AEQUITAS Capital</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Inversión y administración profesional de patrimonio con compromiso y excelencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Inversiones AEQUITAS Capital SPA</li>
              <li>Sociedad por Acciones</li>
              <li>Domicilio: Ñuñoa, Santiago</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Inversiones AEQUITAS Capital SPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
