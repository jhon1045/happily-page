import { useState } from 'react'
import { Mail, User, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulación de envío - reemplazar con API real si es necesario
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Formulario enviado:', formData)
      setSubmitStatus('success')
      setFormData({ nombre: '', correo: '', mensaje: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      console.error('Error al enviar:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 px-6 md:px-12 bg-slate-400"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            ¡Comunícate con nosotros!
          </h2>
          <p className="text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos pronto.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
                <Mail className="text-primary" size={40} />
              </div>
              <p className="text-lg text-gray">
                Envíanos un mensaje
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-dark font-medium mb-2"
                >
                  Nombre
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray" size={20} />
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl h-14 pl-12 pr-6 text-lg shadow-sm transition-all outline-none"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label
                  htmlFor="correo"
                  className="block text-dark font-medium mb-2"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray" size={20} />
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl h-14 pl-12 pr-6 text-lg shadow-sm transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-dark font-medium mb-2"
                >
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray" size={20} />
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl pl-12 pr-6 py-4 text-lg shadow-sm transition-all outline-none resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>
              </div>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-blue-700 rounded-full px-8 py-6 text-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
                <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
