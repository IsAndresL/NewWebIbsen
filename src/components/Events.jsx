import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import eventImage1 from '../assets/img/events/event_1.jpg';
import eventImage2 from '../assets/img/events/event_2.jpg';
import eventImage3 from '../assets/img/events/event_3.jpg';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Gran Parada de Tradición",
      date: "20 Febrero, 2026",
      isoDate: "20260220T140000",
      location: "Santa Marta, Magdalena",
      image: eventImage1,
      description: "Acompaña a ASOCURID en la tradicional Gran Parada folclórica."
    },
    {
      id: 2,
      title: "Festival del Banano",
      date: "15 Marzo, 2026",
      isoDate: "20260315T090000",
      location: "Riofrío, Zona Bananera",
      image: eventImage2,
      description: "Celebración cultural en el corazón de la zona bananera."
    },
    {
      id: 3,
      title: "Clausura Cultural 2026",
      date: "10 Diciembre, 2026",
      isoDate: "20261210T180000",
      location: "Teatro Cajamag",
      image: eventImage3,
      description: "Gala de cierre de actividades anuales de ASOCURID."
    }
  ];

  const addToGoogleCalendar = (event) => {
      const title = encodeURIComponent(event.title);
      const details = encodeURIComponent(event.description);
      const location = encodeURIComponent(event.location);
      // Constructing Google Calendar URL
      // Dates format: YYYYMMDDTHHMMSSZ (UTC) or floating time
      // Simple approximation: using floating time (no Z)
      const startDate = event.isoDate; 
      const endDate = String(Number(event.isoDate) + 20000); // +2 hours roughly (dummy logic for numbers strings)
      // Correct logic: manually construct end time or just use start time + 2 hours
      // Let's use specific pre-calculated strings or a cleaner JS manipulation if complex.
      // For simplicity in this static array, I'll pass simple strings.
      // Actually, let's fix the End Date logic properly below.
      
      // Let's assume duration is 3 hours for all events
      // Correct way: Parse ISO, add 3 hours, reformat. 
      // Fast way for this snippet:
      // event.isoDate is "20260220T140000". 
      // End date: "20260220T170000".
      const endDateVal = event.isoDate.replace(/T(\d{2})/, (match, p1) => `T${String(Number(p1)+3).padStart(2, '0')}`);

      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDateVal}&details=${details}&location=${location}&sf=true&output=xml`;
      
      window.open(url, '_blank');
  };

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
                  loading="lazy"
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

                <button 
                  onClick={() => addToGoogleCalendar(event)}
                  className="w-full py-2 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-colors"
                >
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
