import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Social = () => {
    const [isWidgetLoaded, setIsWidgetLoaded] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        // Script Injection
        const scriptId = 'curator-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.async = true;
            script.charset = 'UTF-8';
            script.src = 'https://cdn.curator.io/published/64d04632-a113-4f38-9be5-478fb4450a60.js';
            document.body.appendChild(script);
        }

        // Check for widget load
        const checkWidgetLoad = () => {
            if (containerRef.current) {
                // If the container has more than just the initial "Powered by" link
                // or significant height indicative of loaded content
                const hasContent = containerRef.current.getElementsByTagName('div').length > 0 
                    || containerRef.current.children.length > 1
                    || containerRef.current.offsetHeight > 100;
                
                if (hasContent) {
                    setIsWidgetLoaded(true);
                }
            }
        };

        const intervalId = setInterval(checkWidgetLoad, 1000);

        // Cleanup
        return () => clearInterval(intervalId);
    }, []);

  return (
    <section id="social" className="py-20 bg-zinc-50 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-secondary font-bold font-display uppercase tracking-widest mb-2">Social Wall</h3>
        <h2 className="text-4xl md:text-5xl font-script text-neutral mb-12">Síguenos en Redes</h2>

        {/* Social Feed Widget Container */}
        <div 
            id="curator-feed-default-feed-layout" 
            ref={containerRef}
            className="mb-12 min-h-[100px]" // Provide min-height to prevent collapse
        >
            <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag" style={{textDecoration: 'none', color: '#ccc', fontSize: '10px'}}>
                Powered by Curator.io
            </a>
        </div>

        {/* Fallback Buttons - Visible only if widget hasn't loaded */}
        {!isWidgetLoaded && (
            <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <FaInstagram className="mr-3 text-2xl" />
                @asocurid
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <FaFacebookF className="mr-3 text-2xl" />
                Facebook Oficial
              </a>
            </div>
        )}
      </div>
    </section>
  );
};

export default Social;
