import { Heart, Target, Award } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Salud Mental',
    description: 'Cuidado emocional y psicológico integral para toda la familia.',
  },
  {
    icon: Target,
    title: 'Enfoque Personalizado',
    description: 'Cada niño es único y merece atención adaptada a sus necesidades.',
  },
  {
    icon: Award,
    title: 'Profesionales Certificados',
    description: 'Equipo con amplia experiencia y formación especializada.',
  },
]

export default function Psychology() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-6">
              <p className="text-primary font-semibold">Salud Mental</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-6">
              Psicología
            </h2>
            <p className="text-lg leading-relaxed text-gray mb-8">
              Ofrecemos servicios de evaluación, diagnóstico y tratamiento psicológico para niños,
              adolescentes y sus familias. Nuestro enfoque integral considera todos los aspectos
              del desarrollo emocional y conductual.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0 h-fit">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="mt-10 bg-primary text-white hover:bg-blue-700 rounded-full px-10 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Agendar cita
            </button>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1588979355313-6711a095465f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                  alt="Familia feliz"
                  className="rounded-3xl shadow-xl w-full h-64 object-cover"
                />
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl">
                  <p className="text-4xl font-bold text-primary mb-2">
                    10+
                  </p>
                  <p className="text-gray">
                    Años de experiencia
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl">
                  <p className="text-4xl font-bold text-primary mb-2">
                    500+
                  </p>
                  <p className="text-gray">
                    Familias atendidas
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1696669706026-dcf8c37308aa?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                  alt="Psicología infantil"
                  className="rounded-3xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
