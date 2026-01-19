import React from 'react';
import aboutImage from '../assets/img/about_us_side.jpg'; // Placeholder

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2" data-aos="fade-right">
            <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Quiénes Somos</h3>
            <h2 className="text-4xl md:text-5xl font-script text-neutral mb-8">Preservando el Legado</h2>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-neutral mb-2">Nuestra Misión</h4>
              <p className="text-gray-600 leading-relaxed">
                Preservar, difundir y enaltecer la identidad cultural de la Zona Bananera a través de la danza y la música folclórica, manteniendo vivas nuestras raíces para las nuevas generaciones.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-neutral mb-2">Nuestra Visión</h4>
              <p className="text-gray-600 leading-relaxed">
                Ser referentes del folclor en el Magdalena y Colombia, reconocidos por la excelencia artística y el compromiso con la transformación social a través del arte.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative" data-aos="fade-left">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={aboutImage} 
                alt="Bailarines ASOCURID" 
                className="w-full h-auto object-cover"
                onError={(e) => {e.target.src='https://placehold.co/600x800?text=About+Us+Image';}} 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-4 border-primary/20 rounded-lg"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
