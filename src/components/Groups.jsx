import React, { useState } from 'react';
import grupoPrincipal from '../assets/img/groups/grupo_principal.jpg';
import grupoPrejuvenil from '../assets/img/groups/grupo_prejuvenil.jpg';
import grupoInfantil from '../assets/img/groups/grupo_infantil.jpg';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('principal');

  const groups = {
    principal: {
      name: 'Grupo Principal',
      subtitle: 'Jóvenes y Adultos',
      description: 'Nuestro grupo estelar, conformado por jóvenes y adultos experimentados que representan a ASOCURID en eventos nacionales e internacionales. Con años de dedicación, llevan el folclor colombiano a escenarios de todo el mundo.',
      image: grupoPrincipal,
      members: '+25 integrantes',
      age: '18+ años'
    },
    prejuvenil: {
      name: 'Grupo Prejuvenil',
      subtitle: 'Adolescentes',
      description: 'La nueva generación de artistas folclóricos. Jóvenes llenos de energía y talento que se preparan para dar el salto al grupo principal, cultivando desde temprana edad el amor por nuestras tradiciones.',
      image: grupoPrejuvenil,
      members: '+20 integrantes',
      age: '13-17 años'
    },
    infantil: {
      name: 'Grupo Infantil',
      subtitle: 'Semillero',
      description: 'El semillero de ASOCURID. Los más pequeños aprenden los primeros pasos de nuestras danzas tradicionales en un ambiente lúdico y formativo, desarrollando disciplina, trabajo en equipo y orgullo por su cultura.',
      image: grupoInfantil,
      members: '+30 integrantes',
      age: '6-12 años'
    }
  };

  const currentGroup = groups[activeTab];

  return (
    <section id="groups" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Nuestras Familias</h3>
          <h2 className="text-4xl md:text-5xl font-script text-neutral">Grupos por Edad</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            ASOCURID forma artistas desde la infancia. Conoce nuestros tres grupos que representan diferentes etapas del desarrollo artístico y folclórico.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner">
            {Object.keys(groups).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-primary text-neutral shadow-md'
                    : 'text-gray-600 hover:text-neutral'
                }`}
              >
                {groups[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" data-aos="fade-up" data-aos-delay="200">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src={currentGroup.image} 
                  alt={currentGroup.name}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-4 border-secondary/30 rounded-2xl"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
              {currentGroup.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral mb-4">
              {currentGroup.name}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {currentGroup.description}
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{currentGroup.members}</div>
                <div className="text-sm text-gray-500">Integrantes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{currentGroup.age}</div>
                <div className="text-sm text-gray-500">Edad</div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="https://wa.me/573135650328?text=Hola,%20me%20gustaría%20inscribir%20a%20alguien%20en%20el%20grupo%20de%20danzas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-neutral text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-neutral/90 transition-all transform hover:-translate-y-1"
            >
              <span>¡Quiero inscribirme!</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Groups;
