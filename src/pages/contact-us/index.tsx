import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './styles.module.scss';
import TwitterIcon from '@/components/icons/socials/twitter';
import InstagramIcon from '@/components/icons/socials/instagram';
import DiscordIcon from '@/components/icons/socials/discord';
import Input from '@/components/input';
import RadioButton from '@/components/radioButton';
import Button from '@/components/button';
import PhoneIcon from '@/components/icons/miscellaneous/phone';
import EnvelopeIcon from '@/components/icons/miscellaneous/envelope';
import LocationMarkerIcon from '@/components/icons/miscellaneous/locationMarker';
import { useEffect } from 'react';

let cx = classNames.bind(styles);

export default function ContactUsPage() {
  return (
    <div className={cx('contact-us-page')}>
      <div className={cx('contact-us__header')}>
        <h2 className={cx('contact-us__title')}>Contact Us</h2>
        <p className={cx('contact-us__description')}>
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className={cx('contact-us__form-block')}>
        <div className={cx('contact-us__contact-information')}>
          <h3 className={cx('contact-us__contact-information-title')}>
            Contact Information
          </h3>
          <span className={cx('contact-us__contact-information-subtext')}>
            Say something to start a live chat!
          </span>

          <ul className={cx('contact-us__contact-information-list')}>
            <li className={cx('contact-us__contact-information-list-item')}>
              <PhoneIcon size={styles.iconSize} />
              +1012 3456 789
            </li>
            <li className={cx('contact-us__contact-information-list-item')}>
              <EnvelopeIcon size={styles.iconSize} />
              demo@gmail.com
            </li>
            <li className={cx('contact-us__contact-information-list-item')}>
              <LocationMarkerIcon size={styles.iconSize} />
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
          </ul>

          <div className={cx('contact-us__contact-information-socials')}>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <TwitterIcon color={styles.white} />
            </div>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <InstagramIcon color={styles.white} />
            </div>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <DiscordIcon color={styles.white} />
            </div>
          </div>
        </div>
        <div className={cx('contact-us__form-section')}>
          <form className={cx('contact-us__form')}>
            <div className={cx('contact-us__form-inputs-block')}>
              <Input
                title="First Name"
                id="firstName"
                name="firstName"
                placeholder="John"
              />

              <Input
                title="Last Name"
                id="lastName"
                name="lastName"
                placeholder="Doe"
              />

              <Input title="Email" id="email" name="email" type="email" />

              <Input
                title="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 012 3456 789"
              />
            </div>
            <div className={cx('contact-us__form-radio-buttons-and-message')}>
              <RadioButton
                title="Select Subject?"
                id="subject"
                name="subject"
                options={[
                  { label: 'General Inquiry', value: 'general' },
                  { label: 'Sales Inquiry', value: 'sales' },
                  { label: 'Support Inquiry', value: 'support' },
                ]}
              />

              <Input
                title="Message"
                id="message"
                name="message"
                placeholder="Write your message.."
              />

              <Button className={cx('contact-us__form-submit-button')}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
