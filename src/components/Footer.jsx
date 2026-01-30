import { Facebook, Instagram, Twitter } from 'lucide-react'
import logo from '../logo/WhatsApp Image 2026-01-29 at 17.21.54 (1).jpeg'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Happily Fundación" className="h-20 w-auto mb-4 rounded-xl" />
            <p className="text-white/70 leading-relaxed">
              Apoyo profesional para el desarrollo integral de tus hijos.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {['inicio', 'servicios', 'contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white/70 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Facebook className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Happily. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
