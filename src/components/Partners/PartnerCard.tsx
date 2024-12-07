import React from 'react';

interface PartnerCardProps {
  src: string;
  name: string;
  index: number;
}

const PartnerCard = ({ src, name, index }: PartnerCardProps) => (
  <div className="relative flex-none mx-4">
    {/* Enhanced glow effect */}
    <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl opacity-75" />
    <div className="absolute -inset-2 bg-primary/30 rounded-lg blur-lg opacity-50" />
    
    {/* Card content */}
    <div className="relative w-40 h-40 bg-black/60 backdrop-blur-sm rounded-lg border border-primary/50 p-4 hover:border-primary/60 transition-all duration-300">
      {/* Permanent light effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent rounded-lg" />
      
      {/* Logo container */}
      <div className="relative h-full flex flex-col items-center justify-center gap-3">
        <div className="w-full h-24 flex items-center justify-center bg-black/40 rounded-lg p-3">
          <img
            src={src}
            alt={name}
            className="w-full h-full object-contain brightness-150 contrast-125 filter"
            loading={index < 6 ? "eager" : "lazy"}
          />
        </div>
        <div className="text-primary text-sm font-medium text-center">
          {name}
        </div>
      </div>
    </div>
  </div>
);

export default PartnerCard;