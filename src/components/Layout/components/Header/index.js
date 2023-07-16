import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
const Header = () => {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 3000);
   }, []);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} />
            </div>
            <Tippy
               visible={searchResult.length > 0}
               interactive
               render={(attr) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attr}>
                     <PopperWrapper>
                        <h5 className={cx('search-title')}>Accounts</h5>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Tim kiem" />
                  <button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('actions')}>
               <button>Đăng nhập</button>
               <button>option</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
