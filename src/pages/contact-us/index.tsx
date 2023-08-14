import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './styles.module.scss';
import TwitterIcon from '@/components/icons/socials/twitter';
import InstagramIcon from '@/components/icons/socials/instagram';
import DiscordIcon from '@/components/icons/socials/discord';
import Input from '@/components/input';

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
            <div>
              <TwitterIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <DiscordIcon />
            </div>
          </div>
        </div>
        <div>
          <form
            action="
			"
          >
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
          </form>
        </div>
      </div>
    </div>
  );
}
