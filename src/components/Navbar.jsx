import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../logo/WhatsApp Image 2026-01-29 at 17.21.54 (1).jpeg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = ['inicio', 'servicios', 'contacto']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Happily Fundación" className="h-16 md:h-15 w-auto  rounded-xl" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray hover:text-primary font-medium transition-colors capitalize"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-primary text-white hover:bg-blue-700 rounded-full px-6 py-3 font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-dark p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-4 shadow-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray hover:text-primary font-medium transition-colors text-left capitalize"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-primary text-white hover:bg-blue-700 rounded-full px-6 py-3 font-medium transition-all w-full"
              >
                Agendar Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
