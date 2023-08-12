import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

export default function ThumbnailPage() {
  return (
    <div className={cx('thumbnail-page')}>
      <div className={cx('thumbnail-page__content')}>
        <div className={cx('thumbnail-page__wrapper')}>
          <div className={cx('thumbnail-page__thumbnail')}>
            <div className={cx('thumbnail-page__text-block')}>
              <h1 className={cx('thumbnail-page__title')}>Contact Page UIUX</h1>
              <ul className={cx('thumbnail-page__list')}>
                <li className={cx('thumbnail-page__list-item')}>Modren UIUX</li>
                <li className={cx('thumbnail-page__list-item')}>Free</li>
                <li className={cx('thumbnail-page__list-item')}>
                  {'Drop Some Love <3'}
                </li>
              </ul>
            </div>
            <div className={cx('thumbnail-page__images')}>
              <div className={cx('thumbnail-page__laptop-image')}>
                <Image
                  src="/thumbnail_laptop.png"
                  alt="My Image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={cx('thumbnail-page__smartphone-image')}>
                <Image
                  src="/thumbnail_phone.png"
                  alt="My Image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          <span className={cx('thumbnail-page__author')}>Ali Hassan</span>
        </div>
      </div>
    </div>
  );
}
