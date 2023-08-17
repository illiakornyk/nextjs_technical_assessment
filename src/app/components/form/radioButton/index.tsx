import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import CheckMarkIcon from '@/components/icons/miscellaneous/check';

let cx = classNames.bind(styles);

interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  className?: string;
  label: string;
  value: string;
  checked?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  id,
  name,
  className,
  value,
  label,
  checked,
  ...props
}) => {
  return (
    <div className={cx('radio', className)}>
      <div className={cx('radio__block-wrapper')}>
        <div key={value} className={cx('radio__block')}>
          <input
            type="radio"
            id={`${id}-${value}`}
            name={name}
            value={value}
            className={cx('radio__option')}
            checked={checked}
            {...props}
          />
          <label
            htmlFor={`${id}-${value}`}
            className={cx('radio__option-label')}
          >
            <span className={cx('radio__custom')}>
              {checked ? <CheckMarkIcon /> : null}
            </span>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
