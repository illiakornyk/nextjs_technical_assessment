import React from 'react';
import { IIconProps } from '@/types/icon';

const CheckMarkIcon: React.FC<IIconProps> = ({
  color = 'white',
  size = '1rem',
  className,
  ...props
}) => {
  const width = typeof size === 'string' ? size : size.width;
  const height = typeof size === 'string' ? size : size.height;
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
    </svg>
  );
};

export default CheckMarkIcon;
