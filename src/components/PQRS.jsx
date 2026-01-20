import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const PQRS = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Credenciales EmailJS
    const serviceID = 'service_u5s1pbr';
    const templateID = 'template_nocvl9e';
    const publicKey = 'qfOH1co_0NZDp1q8c';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setLoading(false);
          form.current.reset(); // Limpiar formulario
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setLoading(false);
      });
  };

  return (
    <section id="pqrs" className="py-20 bg-neutral/5 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
                <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Contáctanos</h3>
                <h2 className="text-4xl md:text-5xl font-script text-neutral">Módulo de PQRS</h2>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                    Tu opinión es fundamental para nosotros. Envíanos tus peticiones, quejas, reclamos o sugerencias.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="p-8 md:p-12">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                        </div>

                        {/* Tipo de Solicitud */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Solicitud</label>
                            <select 
                                name="request_type" 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors appearance-none cursor-pointer"
                            >
                                <option value="Peticion">Petición</option>
                                <option value="Queja">Queja</option>
                                <option value="Reclamo">Reclamo</option>
                                <option value="Sugerencia">Sugerencia</option>
                                <option value="Felicitacion">Felicitación</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                            <textarea 
                                name="message" 
                                required 
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                                placeholder="Escribe aquí los detalles de tu solicitud..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className={`
                                    w-full md:w-auto px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3
                                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-neutral'}
                                `}
                            >
                                {loading ? (
                                    <span>Enviando...</span>
                                ) : (
                                    <>
                                        <span>Enviar Solicitud</span>
                                        <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="mt-4 flex items-center text-green-600 font-semibold animate-fade-in">
                                    <FaCheckCircle className="mr-2" />
                                    <span>¡Mensaje enviado correctamente! Te responderemos pronto.</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 flex items-center text-red-600 font-semibold animate-fade-in">
                                    <FaExclamationCircle className="mr-2" />
                                    <span>Hubo un error al enviar. Por favor intenta nuevamente.</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PQRS;
