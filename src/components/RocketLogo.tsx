
import { Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

interface RocketLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const RocketLogo = ({ size = 80, className = "", animated = false }: RocketLogoProps) => {
  const rocketRef = useRef<SVGSVGElement>(null);

  // Animation effect based on scroll
  useEffect(() => {
    if (!animated || !rocketRef.current) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (rocketRef.current) {
        // Create a floating effect based on scroll
        const yPosition = Math.sin(scrollY * 0.01) * 5;
        rocketRef.current.style.transform = `translateY(${yPosition}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <div 
      className={`relative flex items-center justify-center ${className} ${animated ? 'transition-transform duration-700' : ''}`}
    >
      <Rocket
        ref={rocketRef}
        size={size}
        className={`${animated ? 'animate-pulse' : ''}`}
      />
      
      {/* Removed the flame effect/orange dot here */}
    </div>
  );
};

export default RocketLogo;