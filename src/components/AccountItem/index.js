import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const AccountItem = () => {
   return (
      <>
         <div className={cx('wrapper')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/583b25b4586f2877d12330eb44b4043a~c5_100x100.jpeg?x-expires=1689663600&x-signature=4BGZEDI4G0z%2BrSE5xYhXWl6yQmo%3D"
            />
            <div className={cx('info')}>
               <h4 className={cx('name')}>
                  <span>dadqwa</span>
                  <FontAwesomeIcon
                     className={cx('checkicon')}
                     icon={faCheckCircle}
                  />
               </h4>
               <span className={cx('username')}>AAAAadfff</span>
            </div>
         </div>
      </>
   );
};

export default AccountItem;
