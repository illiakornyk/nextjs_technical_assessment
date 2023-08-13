import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './styles.module.scss';
import EnvelopeIcon from '@/components/icons/envelope';
import LocationMarkerIcon from '@/components/icons/locationMarker';
import PhoneIcon from '@/components/icons/phone';

let cx = classNames.bind(styles);

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <header className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <span className={cx('footer__logo')}>Logo Here</span>

        <div className={cx('footer__content')}>
          <div className={cx('footer__info')}>
            <div className={cx('footer__info-section')}>
              <span className={cx('footer__info-title')}>Reach us</span>
              <ul className={cx('footer__info-list')}>
                <li className={cx('footer__info-item')}>
                  <PhoneIcon size="1.5rem" />
                  +1012 3456 789
                </li>
                <li className={cx('footer__info-item')}>
                  <EnvelopeIcon size="1.5rem" />
                  demo@gmail.com
                </li>
                <li className={cx('footer__info-item')}>
                  <LocationMarkerIcon size="1.5rem" />
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                  States
                </li>
              </ul>
            </div>
            <div className={cx('footer__info-section')}>
              <span className={cx('footer__info-title')}>Company</span>
              <ul className={cx('footer__info-list')}>
                <li className={cx('footer__info-item')}>About</li>
                <li className={cx('footer__info-item')}>Contact</li>
                <li className={cx('footer__info-item')}>Blogs</li>
              </ul>
            </div>
            <div className={cx('footer__info-section')}>
              <span className={cx('footer__info-title')}>Legal</span>
              <ul className={cx('footer__info-list')}>
                <li className={cx('footer__info-item')}>Privacy Policy</li>
                <li className={cx('footer__info-item')}>Terms & Services</li>
                <li className={cx('footer__info-item')}>Terms of Use</li>
                <li className={cx('footer__info-item')}>Refund Policy</li>
              </ul>
            </div>
            <div className={cx('footer__info-section')}>
              <span className={cx('footer__info-title')}>Quick Links</span>
              <ul className={cx('footer__info-list')}>
                <li className={cx('footer__info-item')}>Techlabz Keybox</li>
                <li className={cx('footer__info-item')}>Downloads</li>
                <li className={cx('footer__info-item')}>Forum</li>
              </ul>
            </div>
          </div>

          <div className={cx('footer__subscription-block')}>
            <span className={cx('footer__subscription-title')}>
              Join Our Newsletter
            </span>
            <form className={cx('footer__subscription-form')}>
              <input
                type="text"
                className={cx('footer__subscription-input')}
                placeholder="Your email address"
              />
              <button className={cx('footer__subscription-button')}>
                Subscribe
              </button>
            </form>
            <span className={cx('footer__subscription-note')}>
              * Will send you weekly updates for your <br /> better tool
              management.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
