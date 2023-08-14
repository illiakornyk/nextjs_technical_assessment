import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './styles.module.scss';

let cx = classNames.bind(styles);

export default function ContactUsPage() {
  return (
    <div className={cx('contact-us-page')}>
      <h2>Contact Us</h2>
      <p>Any question or remarks? Just write us a message!</p>

      <div>
        <div>
          <h3>Contact Information</h3>
          <span>Say something to start a live chat!</span>

          <ul>
            <li>+1012 3456 789</li>
            <li>demo@gmail.com</li>
            <li>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </li>
          </ul>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <form
            action="
			"
          ></form>
        </div>
      </div>
    </div>
  );
}
