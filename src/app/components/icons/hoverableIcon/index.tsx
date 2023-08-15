import React, { useState, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { getIconColor } from '@/components/icons/hoverableIcon/helper';

let cx = classNames.bind(styles);

interface IHoverableIconProps {
  icon: ReactElement;
  color: string;
  hoverColor: string;
  className?: string;
}

const HoverableIcon: React.FC<IHoverableIconProps> = ({
  icon,
  color,
  hoverColor,
  className,
}) => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsIconHovered(true);
  };

  const handleMouseLeave = () => {
    setIsIconHovered(false);
  };

  return (
    <div
      className={cx('hoverable-icon', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(icon, {
        color: getIconColor(isIconHovered, color, hoverColor),
      })}
    </div>
  );
};

export default HoverableIcon;
