import { Brain, BookOpen, Users } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Psicología Infantil',
    description: 'Atención especializada para niños, adolescentes y adultos mayores.',
    image: 'https://images.unsplash.com/photo-1695381834704-6bd3bb87644c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    icon: Brain,
    colSpan: 'md:col-span-2',
  },
  {
    id: 2,
    title: 'Pedagogía',
    description: 'Evaluación y tratamiento para niños y adolescentes en edad escolar.',
    image: 'https://images.unsplash.com/photo-1758612898701-e2f2958f219d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    icon: BookOpen,
    colSpan: 'md:col-span-1',
  },
  {
    id: 3,
    title: 'Talleres para Padres',
    description: 'Herramientas y estrategias para el acompañamiento familiar efectivo.',
    icon: Users,
    colSpan: 'md:col-span-3',
    isHorizontal: true,
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 px-6 md:px-12 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg leading-relaxed text-gray max-w-2xl mx-auto">
            Soluciones personalizadas para cada etapa del desarrollo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.colSpan} bg-white/80 backdrop-blur-md border border-white/50 shadow-md rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
            >
              {service.isHorizontal ? (
                <div className="p-8 md:p-12 flex items-center gap-8">
                  <div className="bg-primary/10 rounded-2xl p-6 flex-shrink-0">
                    <service.icon className="text-primary" size={48} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray">
                      {service.description}
                    </p>
                  </div>
                  <button className="bg-primary text-white hover:bg-blue-700 rounded-full px-6 py-3 font-medium transition-all flex-shrink-0">
                    Ver más
                  </button>
                </div>
              ) : (
                <div>
                  {service.image && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                        <service.icon className="text-primary" size={32} />
                      </div>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray mb-6">
                      {service.description}
                    </p>
                    <button className="bg-primary text-white hover:bg-blue-700 rounded-full px-6 py-3 font-medium transition-all hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
