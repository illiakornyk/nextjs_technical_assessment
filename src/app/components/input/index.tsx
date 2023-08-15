import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id?: string;
  placeholder?: string;
  name?: string;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  title,
  id,
  placeholder,
  name,
  className,
  type = 'text',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={cx('input', className)}>
      {title && (
        <label
          htmlFor={id}
          className={cx('input__label', { 'input__label--focused': isFocused })}
        >
          {title}
        </label>
      )}

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cx('input__field')}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
