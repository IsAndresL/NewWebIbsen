import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import gallery images
import g1 from '../assets/img/gallery/gallery_1.jpg';
import g2 from '../assets/img/gallery/gallery_2.jpg';
import g3 from '../assets/img/gallery/gallery_3.jpg';
import g4 from '../assets/img/gallery/gallery_4.jpg';
import g5 from '../assets/img/gallery/gallery_5.jpg';
import g6 from '../assets/img/gallery/gallery_6.jpg';

const galleryImages = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious(e);
    if (e.key === 'ArrowRight') goToNext(e);
  };

  return (
    <section id="gallery" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Galería</h3>
          <h2 className="text-4xl md:text-5xl font-script text-neutral">Instantes de Magia</h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img} 
                alt={`Galería ${index + 1}`} 
                loading="lazy"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {e.target.src=`https://placehold.co/400x${300 + (index % 3) * 100}?text=Gallery+${index+1}`;}}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver imagen
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <FaTimes />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 text-white text-4xl hover:text-primary transition-colors z-10 p-2"
            onClick={goToPrevious}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[currentIndex]} 
              alt={`Galería ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 text-white text-4xl hover:text-primary transition-colors z-10 p-2"
            onClick={goToNext}
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
