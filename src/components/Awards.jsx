import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaAward, FaCrown, FaGem } from 'react-icons/fa';

const Awards = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [hoveredAward, setHoveredAward] = useState(null);

  const awards = [
    {
      year: 2024,
      title: "Mejor Agrupación Folclórica",
      event: "Festival Nacional de Danzas",
      location: "Bogotá, Colombia",
      icon: <FaTrophy />,
      color: "from-yellow-400 to-amber-500",
      description: "Primer lugar en la categoría de danzas tradicionales del Caribe colombiano."
    },
    {
      year: 2023,
      title: "Excelencia Cultural",
      event: "Gobernación del Magdalena",
      location: "Santa Marta",
      icon: <FaMedal />,
      color: "from-blue-400 to-blue-600",
      description: "Reconocimiento por la labor de preservación del folclor regional."
    },
    {
      year: 2022,
      title: "Premio Iberoamericano de Danzas",
      event: "Festival Internacional de Panamá",
      location: "Ciudad de Panamá",
      icon: <FaCrown />,
      color: "from-purple-400 to-purple-600",
      description: "Máximo galardón como mejor agrupación internacional invitada."
    },
    {
      year: 2021,
      title: "Patrimonio Cultural Vivo",
      event: "Ministerio de Cultura",
      location: "Colombia",
      icon: <FaGem />,
      color: "from-teal-400 to-teal-600",
      description: "Declaratoria como patrimonio cultural inmaterial de la región."
    },
    {
      year: 2019,
      title: "Mejor Coreografía",
      event: "Festival del Caimán Cienaguero",
      location: "Ciénaga, Magdalena",
      icon: <FaStar />,
      color: "from-orange-400 to-red-500",
      description: "Premio especial por innovación en la puesta en escena tradicional."
    },
    {
      year: 2018,
      title: "Embajadores Culturales",
      event: "Alcaldía Zona Bananera",
      location: "Riofrío",
      icon: <FaAward />,
      color: "from-green-400 to-emerald-600",
      description: "Nombramiento oficial como embajadores culturales del municipio."
    }
  ];

  return (
    <section id="awards" className="py-24 bg-gradient-to-b from-neutral to-gray-900 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl text-primary animate-pulse"><FaTrophy /></div>
        <div className="absolute bottom-20 right-10 text-8xl text-secondary animate-pulse delay-1000"><FaStar /></div>
        <div className="absolute top-1/2 left-1/3 text-7xl text-white/20 animate-bounce"><FaMedal /></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-primary font-bold font-display uppercase tracking-widest mb-2">Nuestros Logros</h3>
          <h2 className="text-4xl md:text-6xl font-script text-white mb-4">Galardones y Reconocimientos</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Años de dedicación y pasión por el folclor colombiano nos han llevado a recibir estos prestigiosos reconocimientos.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden md:block"></div>

          {awards.map((award, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              {/* Content Card */}
              <div 
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                onMouseEnter={() => setHoveredAward(index)}
                onMouseLeave={() => setHoveredAward(null)}
                onClick={() => setActiveYear(activeYear === index ? null : index)}
              >
                <div 
                  className={`
                    bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 
                    transition-all duration-500 cursor-pointer
                    ${hoveredAward === index || activeYear === index 
                      ? 'scale-105 bg-white/10 shadow-2xl shadow-primary/20' 
                      : 'hover:bg-white/10'}
                  `}
                >
                  {/* Year Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r ${award.color} text-white font-bold text-sm mb-3`}>
                    <span>{award.year}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {award.title}
                  </h4>

                  {/* Event & Location */}
                  <p className="text-primary font-semibold">{award.event}</p>
                  <p className="text-gray-400 text-sm">{award.location}</p>

                  {/* Expandable Description */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-500 
                      ${activeYear === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                      {award.description}
                    </p>
                  </div>

                  {/* Click hint */}
                  <p className="text-xs text-gray-500 mt-3 italic">
                    {activeYear === index ? 'Clic para cerrar' : 'Clic para más detalles'}
                  </p>
                </div>
              </div>

              {/* Center Icon (Desktop) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                <div 
                  className={`
                    w-14 h-14 rounded-full bg-gradient-to-r ${award.color} 
                    flex items-center justify-center text-white text-2xl shadow-lg
                    transition-all duration-300
                    ${hoveredAward === index || activeYear === index ? 'scale-125 rotate-12' : ''}
                  `}
                >
                  {award.icon}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" data-aos="fade-up">
          {[
            { number: "15+", label: "Premios Nacionales", icon: <FaTrophy /> },
            { number: "6", label: "Reconocimientos Internacionales", icon: <FaMedal /> },
            { number: "25+", label: "Años de Trayectoria", icon: <FaStar /> },
            { number: "100+", label: "Presentaciones", icon: <FaAward /> }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl text-primary mb-2 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Awards;
