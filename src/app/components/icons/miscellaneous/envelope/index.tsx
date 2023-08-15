import React from 'react';

type TIconSize = {
  width: string;
  height: string;
};

interface IEnvelopeIconProps {
  color?: string;
  size?: TIconSize | string;
  className?: string;
}
const EnvelopeIcon: React.FC<IEnvelopeIconProps> = ({
  color = 'white',
  size = '1rem',
  className,
}) => {
  const width = typeof size === 'string' ? size : size.width;
  const height = typeof size === 'string' ? size : size.height;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill={color} />
    </svg>
  );
};

export default EnvelopeIcon;
