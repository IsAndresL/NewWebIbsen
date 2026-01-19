import { FaMapMarkedAlt, FaClock } from 'react-icons/fa';

const Location = () => {
  return (
    <section id="location" className="relative h-[500px] w-full bg-gray-200">
      {/* Map Iframe with grayscale filter for style */}
      <iframe
        title="Ubicación ASOCURID"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.0!2d-74.1747!3d10.9025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzA5LjEiTiA3NMKwMTAnMjkuMCJX!5e0!3m2!1ses!2sco!4v1600000000000!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
        allowFullScreen=""
        loading="lazy"
        className="absolute inset-0 z-0"
      ></iframe>

      {/* Floating Card */}
      <div className="absolute bottom-8 left-4 md:bottom-16 md:left-16 z-10 bg-white p-8 rounded-xl shadow-2xl max-w-sm border-l-4 border-secondary animate-fade-in-up">
        <h3 className="text-2xl font-display font-bold text-neutral mb-4">Nuestra Sede</h3>
        
        <div className="flex items-start mb-4">
            <FaMapMarkedAlt className="text-secondary mt-1 mr-3 text-xl" />
            <p className="text-gray-600">
                Zona Bananera, Magdalena<br/>
                Calle Principal #12-34<br/>
                Colombia
            </p>
        </div>

        <div className="flex items-start">
            <FaClock className="text-secondary mt-1 mr-3 text-xl" />
            <p className="text-gray-600">
                <strong>Horario de Ensayos:</strong><br/>
                Lun - Vie: 4:00 PM - 8:00 PM<br/>
                Sáb: 9:00 AM - 1:00 PM
            </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
