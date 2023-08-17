import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

import UserIcon from '@/components/icons/miscellaneous/user';
import CartIcon from '@/components/icons/miscellaneous/cart';
import ArrowIcon from '@/components/icons/miscellaneous/arrow';
import Dropdown from '@/components/dropdown';
import MenuIcon from '@/components/icons/miscellaneous/menu';
import CrossIcon from '@/components/icons/miscellaneous/cross';
import { getIconColor, getIconSize } from '@/components/header/helper';
import { useWindowWidth } from '@/hooks/useWindowWidth';

let cx = classNames.bind(styles);

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const windowWidth = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);

  const dropdownOptions = ['Feature 1', 'Feature 2', 'Feature 3'];

  useEffect(() => {
    if (Number(windowWidth) > 1023 && showMenu) {
      setShowMenu(false);
    }
    if (showMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showMenu, windowWidth]);

  const handleSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={cx('header', {
        'header--responsive': showMenu,
      })}
    >
      <span className={cx('header__logo')}>
        <Link href="/">Logo Here</Link>
      </span>
      <MenuIcon
        className={cx('header__menu-icon')}
        size={styles.iconSize}
        onClick={showMenuHandler}
      />

      <div
        className={cx('header__menu', {
          'header__menu--responsive': showMenu,
        })}
      >
        <div className={cx('header__top-bar')}>
          <span className={cx('header__logo', 'header__logo--responsive')}>
            <Link href="/">Logo Here</Link>
          </span>

          <CrossIcon
            className={cx('header__close-menu-icon')}
            size={'1.5rem'}
            color={getIconColor(showMenu, styles)}
            onClick={closeMenuHandler}
          />
        </div>
        <ul className={cx('header__menu-list')}>
          <li className={cx('header__menu-item')}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={cx('header__menu-item', 'header__menu-item--features')}
          >
            <Link href="/features">Features</Link>
            <Dropdown options={dropdownOptions} onSelect={handleSelect}>
              <ArrowIcon
                size={'0.78em'}
                color={getIconColor(showMenu, styles)}
              />
            </Dropdown>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={cx('header__menu-item')}>
            <Link href="/thumbnail">About</Link>
          </li>
          <li className={cx('header__menu-item', 'header__menu-item--contact')}>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
        <div className={cx('header__actions')}>
          <button className={cx('header__actions-button')}>
            <UserIcon
              size={getIconSize(showMenu)}
              color={getIconColor(showMenu, styles)}
            />
          </button>
          <button className={cx('header__actions-button')}>
            <CartIcon
              size={getIconSize(showMenu)}
              color={getIconColor(showMenu, styles)}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
