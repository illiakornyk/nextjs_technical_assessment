import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import CheckMarkIcon from '@/components/icons/miscellaneous/check';

let cx = classNames.bind(styles);

type TRadioButtonOption = { label: string; value: string; checked?: boolean };

interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id?: string;
  name?: string;
  className?: string;
  options: TRadioButtonOption[];
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  title,
  id,
  name,
  className,
  options,
}) => {
  const defaultCheckedOption = options.find((option) => option.checked);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultCheckedOption?.value,
  );

  return (
    <div className={cx('radio', className)}>
      {title && (
        <label htmlFor={id} className={cx('radio__label')}>
          {title}
        </label>
      )}

      <div className={cx('radio__block-wrapper')}>
        {options.map((option) => (
          <div key={option.value} className={cx('radio__block')}>
            <input
              type="radio"
              id={`${id}-${option.value}`}
              name={name}
              value={option.value}
              className={cx('radio__option')}
              onChange={() => setSelectedValue(option.value)}
              checked={selectedValue === option.value}
            />
            <label
              htmlFor={`${id}-${option.value}`}
              className={cx('radio__option-label')}
            >
              <span className={cx('radio__custom')}>
                {selectedValue === option.value ? <CheckMarkIcon /> : null}
              </span>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
