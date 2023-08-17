import React from 'react';
import { IIconProps } from '@/types/icon';

const CrossIcon: React.FC<IIconProps> = ({
  color = '#000',
  size = '1rem',
  className,
  ...props
}) => {
  const width = typeof size === 'string' ? size : size.width;
  const height = typeof size === 'string' ? size : size.height;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -0.5 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...props}
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-419.000000, -240.000000)" fill={color}>
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <polygon
              id="close-[#1511]"
              points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CrossIcon;
