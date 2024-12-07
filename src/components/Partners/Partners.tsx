import React from 'react';
import GlowingCircle from '../GlowingCircle';

const partners = [
  { name: 'BITARA', src: '/partners/bitara.png' },
  { name: 'DU Pictures', src: '/partners/du-pictures.png' },
  { name: 'GICTC', src: '/partners/gictc.png' },
  { name: 'DNA', src: '/partners/dna.png' },
  { name: 'ABIM', src: '/partners/abim.png' },
  { name: 'ACA', src: '/partners/aca.png' },
  { name: 'KBI', src: '/partners/kbi.png' },
  { name: 'NBA', src: '/partners/nba.png' },
  { name: 'YAMOTI', src: '/partners/yamoti.png' },
  { name: 'Muhammadiyah', src: '/partners/muhammadiyah.png' },
  { name: 'LBI', src: '/partners/lbi.png' }
];

const Partners = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <GlowingCircle position="top-right" size="large" intensity="medium" />
      <GlowingCircle position="bottom-left" size="medium" intensity="high" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with glow effect */}
        <div className="relative inline-block w-full text-center mb-16">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white">
            Our Partners
          </h2>
        </div>
        
        {/* Partners row */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll-right flex space-x-8 whitespace-nowrap">
            {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
              <div
                key={`${partner.name}-reverse-${index}`}
                className="inline-flex flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-primary/20 p-4 hover:border-primary/40 transition-all"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="w-full h-20 object-contain brightness-125 contrast-125"
                    loading="lazy"
                  />
                  <span className="text-primary text-sm">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="animate-scroll-right flex space-x-8 whitespace-nowrap absolute top-0 right-[100%]">
            {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
              <div
                key={`${partner.name}-reverse-clone-${index}`}
                className="inline-flex flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-primary/20 p-4 hover:border-primary/40 transition-all"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="w-full h-20 object-contain brightness-125 contrast-125"
                    loading="lazy"
                  />
                  <span className="text-primary text-sm">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;