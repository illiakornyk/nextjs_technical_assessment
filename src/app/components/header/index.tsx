import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './styles.module.scss';
import UserIcon from '@/components/icons/miscellaneous/user';
import CartIcon from '@/components/icons/miscellaneous/cart';
import ArrowIcon from '@/components/icons/miscellaneous/arrow';
import Dropdown from '@/components/dropdown';

let cx = classNames.bind(styles);

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const handleSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  const dropdownOptions = ['Feature 1', 'Feature 2', 'Feature 3'];

  return (
    <header className={cx('header')}>
      <span className={cx('header__logo')}>
        <Link href="/">Logo Here</Link>
      </span>
      <div className={cx('header__menu')}>
        <ul className={cx('header__menu-list')}>
          <li className={cx('header__menu-item')}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={cx('header__menu-item', 'header__menu-item--features')}
          >
            <Link href="/features">Features</Link>
            <Dropdown options={dropdownOptions} onSelect={handleSelect}>
              <ArrowIcon size={'0.78em'} />
            </Dropdown>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/about">About</Link>
          </li>
          <li className={cx('header__menu-item', 'header__menu-item--contact')}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={cx('header__actions')}>
          <button className={cx('header__actions-button')}>
            <UserIcon size={{ width: '16px', height: '17px' }} />
          </button>
          <button className={cx('header__actions-button')}>
            <CartIcon size={'18px'} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
