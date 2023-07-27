import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
const Menu = ({ children, items = [], onChange = defaultFn }) => {
   const [listHistory, setListHistory] = useState([{ data: items }]);
   const current = listHistory[listHistory.length - 1];

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;

         return (
            <MenuItems
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setListHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   return (
      <>
         <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
               <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                  <PopperWrapper className={cx('menu-popper')}>
                     {listHistory.length > 1 && (
                        <Header
                           title="Language"
                           onBack={() => {
                              setListHistory((prev) =>
                                 prev.slice(0, prev.length - 1),
                              );
                           }}
                        />
                     )}
                     {renderItems()}
                  </PopperWrapper>
               </div>
            )}
            onHidden={() => setListHistory((prev) => prev.slice(0, 1))}
         >
            {children}
         </Tippy>
      </>
   );
};

export default Menu;
