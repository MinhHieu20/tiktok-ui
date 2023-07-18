import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);
const Menu = ({ children, items = [] }) => {
   const renderItems = () => {
      return items.map((item, index) => <MenuItems key={index} data={item} />);
   };
   return (
      <>
         <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attr) => (
               <div className={cx('menu-items')} tabIndex="-1" {...attr}>
                  <PopperWrapper className={cx('menu-popper')}>
                     {renderItems()}
                  </PopperWrapper>
               </div>
            )}
         >
            {children}
         </Tippy>
      </>
   );
};

export default Menu;
