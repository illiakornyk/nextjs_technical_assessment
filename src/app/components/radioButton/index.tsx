import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import CheckMarkIcon from '@/components/icons/miscellaneous/check';

let cx = classNames.bind(styles);

interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id?: string;
  name?: string;
  className?: string;
  options: { label: string; value: string }[];
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  title,
  id,
  name,
  className,
  options,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  return (
    <div className={cx('radio')}>
      {title && (
        <label htmlFor={id} className={cx('radio__label')}>
          {title}
        </label>
      )}

      {options.map((option) => (
        <div key={option.value} className={cx('radio__block', className)}>
          <input
            type="radio"
            id={`${id}-${option.value}`}
            name={name}
            value={option.value}
            className={cx('radio__option', className)}
            onChange={() => setSelectedValue(option.value)}
          />
          <label
            htmlFor={`${id}-${option.value}`}
            className={cx('radio__option-label', className)}
          >
            <span className={cx('radio__custom')}>
              {selectedValue === option.value && <CheckMarkIcon />}
            </span>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
