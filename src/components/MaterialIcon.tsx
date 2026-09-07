import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  className = 'text-[18px]',
  filled = false,
}) => (
  <span
    className={`material-symbols-rounded inline-flex items-center justify-center leading-none ${className}`}
    style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 500, 'GRAD' 0, 'opsz' 24` }}
    aria-hidden="true"
  >
    {name}
  </span>
);
