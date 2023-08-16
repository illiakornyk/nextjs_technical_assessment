import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './styles.module.scss';
import UserIcon from '@/components/icons/miscellaneous/user';
import CartIcon from '@/components/icons/miscellaneous/cart';
import ArrowIcon from '@/components/icons/miscellaneous/arrow';
import Dropdown from '@/components/dropdown';
import MenuIcon from '@/components/icons/miscellaneous/menu';
import CrossIcon from '@/components/icons/miscellaneous/cross';
import { getIconSize } from '@/components/header/helper';
import { useWindowWidth } from '@/hooks/useWindowWidth';

let cx = classNames.bind(styles);

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const handleSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  const dropdownOptions = ['Feature 1', 'Feature 2', 'Feature 3'];
  const windowWidth = useWindowWidth();

  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <header className={cx('header')}>
      <span className={cx('header__logo')}>
        <Link href="/">Logo Here</Link>
      </span>
      <MenuIcon
        className={cx('header__menu-icon')}
        size={styles.iconSize}
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <div
        className={cx('header__menu', {
          'header__menu--responsive': showMenu,
        })}
      >
        <CrossIcon
          className={cx('header__close-menu-icon')}
          size={'2rem'}
          onClick={() => {
            setShowMenu(false);
          }}
        />
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
            <UserIcon size={getIconSize(showMenu)} />
          </button>
          <button className={cx('header__actions-button')}>
            <CartIcon size={getIconSize(showMenu)} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
