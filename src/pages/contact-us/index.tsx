import { useEffect, useState } from 'react';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'validation/schema';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import TwitterIcon from '@/components/icons/socials/twitter';
import InstagramIcon from '@/components/icons/socials/instagram';
import DiscordIcon from '@/components/icons/socials/discord';
import Input from '@/components/form/input';
import RadioButton from '@/components/form/radioButton';
import Button from '@/components/button';
import PhoneIcon from '@/components/icons/miscellaneous/phone';
import EnvelopeIcon from '@/components/icons/miscellaneous/envelope';
import LocationMarkerIcon from '@/components/icons/miscellaneous/locationMarker';
import HoverableIcon from '@/components/icons/hoverableIcon';

let cx = classNames.bind(styles);

export default function ContactUsPage() {
  const {
    handleSubmit,
    reset,
    watch,
    control,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

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
              <LocationMarkerIcon size={'2.3rem'} />
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
          </ul>

          <div className={cx('contact-us__contact-information-socials')}>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <HoverableIcon
                icon={<TwitterIcon />}
                color={styles.white}
                hoverColor={styles.black}
              />
            </div>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <HoverableIcon
                icon={<InstagramIcon />}
                color={styles.white}
                hoverColor={styles.black}
              />
            </div>
            <div
              className={cx(
                'contact-us__contact-information-social-media-block',
              )}
            >
              <HoverableIcon
                icon={<DiscordIcon />}
                color={styles.white}
                hoverColor={styles.black}
              />
            </div>
          </div>
        </div>
        <div className={cx('contact-us__form-section')}>
          <form
            className={cx('contact-us__form')}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={cx('contact-us__form-inputs-block')}>
              <Controller
                render={({ field }) => {
                  return (
                    <Input
                      title="First Name"
                      id="firstName"
                      placeholder="John"
                      {...field}
                    />
                  );
                }}
                control={control}
                name="firstName"
                defaultValue={''}
              />

              <Controller
                render={({ field }) => {
                  return (
                    <Input
                      title="Last Name"
                      id="lastName"
                      placeholder="Doe"
                      {...field}
                    />
                  );
                }}
                control={control}
                name="lastName"
                defaultValue={''}
              />

              <Controller
                render={({ field }) => {
                  return (
                    <Input title="Email" id="email" type="email" {...field} />
                  );
                }}
                control={control}
                name="email"
                defaultValue={''}
              />

              <Controller
                render={({ field }) => {
                  return (
                    <Input
                      title="Phone Number"
                      id="phoneNumber"
                      placeholder="+1 012 3456 789"
                      {...field}
                    />
                  );
                }}
                control={control}
                name="phoneNumber"
                defaultValue={''}
              />
            </div>
            <div className={cx('contact-us__form-radio-buttons-and-message')}>
              <div className={cx('contact-us__form-radio-buttons-section')}>
                <span
                  className={cx('contact-us__form-radio-buttons-section-title')}
                >
                  Select Subject?
                </span>

                <div className={cx('contact-us__form-radio-buttons')}>
                  <Controller
                    render={({ field }) => {
                      return (
                        <RadioButton
                          {...field}
                          className={cx('contact-us__form-radio-button')}
                          title="Select Subject?"
                          id="subject1"
                          label={'General Inquiry'}
                          value={'general1'}
                        />
                      );
                    }}
                    control={control}
                    name="subject"
                  />

                  <Controller
                    render={({ field }) => {
                      return (
                        <RadioButton
                          {...field}
                          className={cx('contact-us__form-radio-button')}
                          title="Select Subject?"
                          id="subject1"
                          label={'General Inquiry'}
                          value={'general2'}
                        />
                      );
                    }}
                    control={control}
                    name="subject"
                  />

                  <Controller
                    render={({ field }) => {
                      return (
                        <RadioButton
                          {...field}
                          className={cx('contact-us__form-radio-button')}
                          title="Select Subject?"
                          id="subject1"
                          label={'General Inquiry'}
                          value={'general3'}
                        />
                      );
                    }}
                    control={control}
                    name="subject"
                  />

                  <Controller
                    render={({ field }) => {
                      return (
                        <RadioButton
                          {...field}
                          className={cx('contact-us__form-radio-button')}
                          title="Select Subject?"
                          id="subject1"
                          label={'General Inquiry'}
                          value={'general4'}
                        />
                      );
                    }}
                    control={control}
                    name="subject"
                  />
                </div>
              </div>

              <Controller
                render={({ field }) => {
                  return (
                    <Input
                      title="Message"
                      id="message"
                      placeholder="Write your message.."
                      className={cx('contact-us__form-message-input')}
                      {...field}
                    />
                  );
                }}
                control={control}
                name="message"
              />
              <Button
                className={cx('contact-us__form-submit-button')}
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
