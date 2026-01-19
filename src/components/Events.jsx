import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import eventPoster from '../assets/img/event_poster.jpg'; // Placeholder

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Gran Parada de Tradición",
      date: "20 Febrero, 2026",
      location: "Santa Marta, Magdalena",
      image: eventPoster
    },
    {
      id: 2,
      title: "Festival del Banano",
      date: "15 Marzo, 2026",
      location: "Riofrío, Zona Bananera",
      image: eventPoster
    },
    {
      id: 3,
      title: "Clausura Cultural 2026",
      date: "10 Diciembre, 2026",
      location: "Teatro Cajamag",
      image: eventPoster
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Agenda</h3>
          <h2 className="text-4xl md:text-5xl font-script text-neutral">Próximos Encuentros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.src='https://placehold.co/600x400?text=Event+Poster';}}
                />
                <div className="absolute top-4 right-4 bg-primary text-neutral font-bold px-3 py-1 rounded shadow">
                  {event.date.split(',')[0]}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-neutral mb-3">{event.title}</h3>
                
                <div className="flex items-center text-gray-500 mb-2">
                  <FaCalendarAlt className="mr-2 text-secondary" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-6">
                  <FaMapMarkerAlt className="mr-2 text-secondary" />
                  <span className="text-sm">{event.location}</span>
                </div>

                <button className="w-full py-2 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-colors">
                  Añadir a Calendario
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
