import React, { useEffect } from 'react';
import festivalPoster from '../assets/img/festival_poster.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Festival = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="festival" className="py-24 bg-white overflow-hidden relative">
            {/* Background Decorative Elements - Minimalist but Vibrant */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-bottom-right z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="relative group perspective">
                            {/* Card Container for 3D effect hint */}
                            <div className="relative rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-primary/30">
                                <img 
                                    src={festivalPoster} 
                                    alt="Afiche Festival Nacional e Internacional de Danzas Ibsen Díaz" 
                                    className="w-full h-auto object-cover"
                                />
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </div>
                            
                            {/* Decorative framing abstract */}
                            <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-secondary/30 rounded-xl"></div>
                            <div className="absolute -z-20 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-xl"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-0.5 bg-secondary"></span>
                            Evento Anual
                        </h3>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-neutral mb-6 leading-tight">
                            Festival Nacional e Internacional <br/>
                            <span className="text-primary">de Danzas Ibsen Díaz</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                            <p>
                                Cada año, <strong>Riofrío, Zona Bananera</strong>, se convierte en el epicentro de la tradición y el folclor.
                            </p>
                            <p>
                                Nuestro festival reúne a las mejores agrupaciones folclóricas nacionales e internacionales en un escenario de hermandad, color y alegría. Un homenaje vivo a nuestras raíces que celebra la diversidad cultural a través de la danza.
                            </p>
                        </div>

                        {/* Highlight Box */}
                        <div className="bg-zinc-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg shadow-sm text-left">
                            <p className="font-display font-semibold text-neutral text-xl mb-1">
                                Próxima Edición
                            </p>
                            <p className="text-secondary font-medium">
                                Agosto 2026 • Riofrío, Magdalena
                            </p>
                        </div>

                        <a 
                            href="#contact" 
                            className="inline-flex items-center px-8 py-4 bg-neutral text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-neutral/90 transition-all transform hover:-translate-y-1"
                        >
                            <span>Más Información</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Festival;
