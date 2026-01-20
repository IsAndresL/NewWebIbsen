import React, { useState, useRef, useEffect } from 'react';
import heroVideoMp4 from '../assets/video/hero_background.mp4';
import heroVideoWebm from '../assets/video/hero_background.webm';
import heroPoster from '../assets/img/hero_poster.jpg';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  // Parallax Effect
  useEffect(() => {
    const handleParallax = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  React.useEffect(() => {
    // Scroll Volume Logic
    const handleScroll = () => {
      if (videoRef.current) {
        const heroHeight = videoRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Calculate dynamic fade factor (0 to 1)
        // 1 at top, 0 when scrolled past 90% of hero
        let fadeFactor = 1 - (scrollPosition / (heroHeight * 0.9));
        fadeFactor = Math.max(0, Math.min(1, fadeFactor));

        // Map fade factor to volume range [0.1, 1.0]
        // If fadeFactor is 1 (top), volume is 1.0
        // If fadeFactor is 0 (bottom), volume is 0.1
        const minVolume = 0.1;
        const maxVolume = 1.0;
        const newVolume = minVolume + ((maxVolume - minVolume) * fadeFactor);
        
        videoRef.current.volume = newVolume;
      }
    };

    // Visibility Change Logic
    // Mute/Unmute based on tab visibility AND user preference (isMuted state)
    // We cannot access atomic state 'isMuted' easily inside this event listener if it's not a dependency,
    // ensuring we don't mute if the user wanted it mute anyway is handled by the 'muted' prop,
    // but the 'muted' prop is reactive.
    // The safest way for "Tab Unfocused -> Muted" is modifying the DOM property directly,
    // but we must respect the user's choice when returning.
    const handleVisibilityChange = () => {
        if (videoRef.current) {
            if (document.hidden) {
                // Always mute when hidden
                videoRef.current.muted = true;
            } else {
                // Restore mute state based on React state when visible
                // Note: We need to access the LATEST 'isMuted' value here.
                // Since this effect runs once, isMuted is stale (closure).
                // We should use a ref for isMuted or add isMuted to dependency array.
                // However, adding isMuted to dependency will re-attach listeners often.
                // Better approach: Check the button's intended state via a Ref tracking it.
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Logic updated below to handle state dependency correctly

  // We need a separate effect or ref to track 'isMuted' for the visibility handler without re-binding everything
  const isMutedRef = useRef(isMuted);
  React.useEffect(() => {
      isMutedRef.current = isMuted; // Keep ref synced
      
      // Also apply immediate mute state
      if(videoRef.current) {
          videoRef.current.muted = isMuted;
      }
  }, [isMuted]);

  // Re-bind visibility listener that uses the Ref
  React.useEffect(() => {
      const handleVisibilityChange = () => {
          if (videoRef.current) {
              if (document.hidden) {
                  videoRef.current.muted = true;
              } else {
                  // If document becomes visible, restore to what the USER wanted
                  videoRef.current.muted = isMutedRef.current;
              }
          }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted={isMuted}
        playsInline 
        preload="metadata"
        poster={heroPoster}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideoMp4} type="video/mp4" />
        <source src={heroVideoWebm} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div> {/* Overlay */}

      {/* Content with Parallax Effect */}
      <div 
        className="relative z-20 text-center text-white px-4" 
        data-aos="fade-up" 
        data-aos-duration="1000"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
      >
        <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] mb-4 text-primary">Asociación Cultural </h2>
        <h1 className="text-5xl md:text-7xl font-script mb-6 leading-tight">
  Ibsen Díaz Viloria <br/>
  <span className="text-primary text-3xl md:text-5xl">Fortaleciendo la identidad cultural</span>
</h1>
        
        <a 
          href="#events" 
          className="inline-block px-8 py-3 mt-8 bg-primary text-neutral font-bold rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg"
        >
          Ver Próximos Eventos
        </a>
      </div>

       {/* Ambient Sound Control */}
       <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-30 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all shadow-lg group"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <FaVolumeMute className="text-xl" />
        ) : (
          <FaVolumeUp className="text-xl" />
        )}
      </button>

    </section>
  );
};

export default Hero;
