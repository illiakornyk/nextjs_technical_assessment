import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

type TButtonVariant = 'dark' | 'light';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariant;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant = 'dark',
  ...props
}) => {
  return (
    <button
      className={cx(['button', className], {
        [`button-${variant}`]: variant,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
