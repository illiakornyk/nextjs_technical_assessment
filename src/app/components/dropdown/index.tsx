import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

interface IDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  children: React.ReactNode;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  onSelect,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  const handleDropdownOpen = () => {
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={ref} className={cx('dropdown')}>
      <div
        className={cx('dropdown__trigger')}
        onClick={toggleDropdown}
        onMouseEnter={handleDropdownOpen}
      >
        {children}
      </div>
      {isOpen && (
        <ul className={cx('dropdown__list')} onMouseLeave={handleDropdownClose}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={cx('dropdown__list-item')}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
