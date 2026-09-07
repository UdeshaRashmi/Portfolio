import React from 'react';

interface GraduateLogoProps {
  className?: string;
}

export const GraduateLogo: React.FC<GraduateLogoProps> = ({ className = 'h-10 w-10' }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="5" y="5" width="54" height="54" rx="17" fill="url(#ur-logo-bg)" />
    <rect x="5" y="5" width="54" height="54" rx="17" stroke="url(#ur-logo-stroke)" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="20" fill="#FFFFFF" fillOpacity="0.12" />

    <path d="M19 22.5 32 16.5l13 6-13 6-13-6Z" fill="#F8FAFC" />
    <path d="M24.5 26.5v5.7c0 3.5 3.4 6.3 7.5 6.3s7.5-2.8 7.5-6.3v-5.7" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" />
    <path d="M45 23v9.5" stroke="#BAE6FD" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="45" cy="35.5" r="2.4" fill="#BAE6FD" />

    <text
      x="32"
      y="49"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Inter, Arial, sans-serif"
      fontSize="14"
      fontWeight="800"
      letterSpacing="0"
    >
      UR
    </text>

    <defs>
      <linearGradient id="ur-logo-bg" x1="9" y1="8" x2="55" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.48" stopColor="#6366F1" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="ur-logo-stroke" x1="10" y1="6" x2="53" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" stopOpacity="0.9" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.15" />
      </linearGradient>
    </defs>
  </svg>
);
