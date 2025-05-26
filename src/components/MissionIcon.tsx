
import { useTheme } from 'next-themes';

interface MissionIconProps {
  size?: number;
  className?: string;
}

const MissionIcon = ({ size = 80, className = '' }: MissionIconProps) => {
  const { resolvedTheme } = useTheme();
  
  const iconColor = resolvedTheme === 'dark' ? '#ffffff' : '#0047AB';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Target icon representing precision and goals */}
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  );
};

export default MissionIcon;
