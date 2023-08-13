import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

export default function ContactUsPage() {
  return <div className={cx('contact-us-page')}></div>;
}
