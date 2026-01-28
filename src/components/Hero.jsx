import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-gradient-to-b from-blue-100 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-8 animate-fade-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-dark">
              Asesoría Pedagógica y Psicológica.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray max-w-2xl">
              Apoyo profesional para el desarrollo integral de tus hijos. Construyendo futuros brillantes con amor y experiencia.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white hover:bg-blue-700 rounded-full px-10 py-6 text-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20 inline-flex items-center gap-3 group"
            >
              Agendar Cita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 animate-fade-right delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1696669706026-dcf8c37308aa?crop=entropy&cs=srgb&fm=webp&ixlib=rb-4.1.0&q=60&w=600"
                alt="Psicología infantil"
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
