import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <header className={cx('footer')}>
      <span className={cx('footer__logo')}>Logo Here</span>

      <div className={cx('footer__content')}>
        <div className={cx('footer__info')}>
          <ul className={cx('footer__info-list')}>
            <span className={cx('footer__info-title')}>Reach us</span>
            <li className={cx('footer__info-item')}>+1012 3456 789</li>
            <li className={cx('footer__info-item')}>demo@gmail.com</li>
            <li className={cx('footer__info-item')}>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
          </ul>
          <ul className={cx('footer__info-list')}>
            <span className={cx('footer__info-title')}>Company</span>
            <li className={cx('footer__info-item')}>About</li>
            <li className={cx('footer__info-item')}>Contact</li>
            <li className={cx('footer__info-item')}>Blogs</li>
          </ul>
          <ul className={cx('footer__info-list')}>
            <span className={cx('footer__info-title')}>Legal</span>
            <li className={cx('footer__info-item')}>Privacy Policy</li>
            <li className={cx('footer__info-item')}>Terms & Services</li>
            <li className={cx('footer__info-item')}>Terms of Use</li>
            <li className={cx('footer__info-item')}>Refund Policy</li>
          </ul>
          <ul className={cx('footer__info-list')}>
            <span className={cx('footer__info-title')}>Quick Links</span>
            <li className={cx('footer__info-item')}>Techlabz Keybox</li>
            <li className={cx('footer__info-item')}>Downloads</li>
            <li className={cx('footer__info-item')}>Forum</li>
          </ul>
        </div>

        <div className={cx('footer__subscription-block')}>
          <span className={cx('footer__subscription-title')}>
            Join Our Newsletter
          </span>
          <div className={cx('footer__subscription-form')}>
            <input type="text" />
            <button>Subscribe</button>
          </div>
          <span className={cx('footer__subscription-note')}>
            * Will send you weekly updates for your better tool management.
          </span>
        </div>
      </div>
    </header>
  );
};

export default Footer;
