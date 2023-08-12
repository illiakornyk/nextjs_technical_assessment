import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import UserIcon from '@/components/icons/user';
import CartIcon from '@/components/icons/cart';

let cx = classNames.bind(styles);

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={cx('header')}>
      <span className={cx('header__logo')}>Logo Here</span>
      <div className={cx('header__menu')}>
        <ul className={cx('header__menu-list')}>
          <li className={cx('header__menu-item')}>Home</li>
          <li className={cx('header__menu-item')}>Features</li>
          <li className={cx('header__menu-item')}>Blog</li>
          <li className={cx('header__menu-item')}>Shop</li>
          <li className={cx('header__menu-item')}>About</li>
          <li className={cx('header__menu-item', 'header__menu-item--contact')}>
            Contact
          </li>
        </ul>
        <div className={cx('header__actions')}>
          <button className={cx('header__actions-button')}>
            <UserIcon />
          </button>
          <button className={cx('header__actions-button')}>
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
