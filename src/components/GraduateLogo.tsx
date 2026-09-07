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
    <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#logo-bg)" />
    <path
      d="M20 28.5c0-6.6 5.4-12 12-12s12 5.4 12 12v1.2c0 6.6-5.4 12-12 12s-12-5.4-12-12v-1.2Z"
      fill="#EAF6FF"
    />
    <path
      d="M18.5 50c1.8-7 6.7-10.6 13.5-10.6S43.7 43 45.5 50"
      stroke="#EAF6FF"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path d="M14 19.5 32 12l18 7.5L32 27 14 19.5Z" fill="#0F172A" />
    <path d="M22 23v6.5c0 3.4 4.5 6.2 10 6.2s10-2.8 10-6.2V23" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M49 20v12" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="49" cy="35" r="2.5" fill="#38BDF8" />
    <defs>
      <linearGradient id="logo-bg" x1="7" y1="8" x2="57" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.48" stopColor="#6366F1" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
  </svg>
);
