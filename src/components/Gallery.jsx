import React from 'react';

// Import gallery images
import g1 from '../assets/img/gallery/gallery_1.jpg';
import g2 from '../assets/img/gallery/gallery_2.jpg';
import g3 from '../assets/img/gallery/gallery_3.jpg';
import g4 from '../assets/img/gallery/gallery_4.jpg';
import g5 from '../assets/img/gallery/gallery_5.jpg';
import g6 from '../assets/img/gallery/gallery_6.jpg';

const galleryImages = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Galería</h3>
          <h2 className="text-4xl md:text-5xl font-script text-neutral">Instantes de Magia</h2>
        </div>

        {/* Masonry Grid using Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={img} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {e.target.src=`https://placehold.co/400x${300 + (index % 3) * 100}?text=Gallery+${index+1}`;}}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold text-lg">Ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
