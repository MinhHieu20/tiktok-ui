import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
   to,
   href,
   primary = false,
   outline = false,
   small = false,
   large = false,
   text = false,
   rouned = false,
   disabled,
   onClick,
   className,
   leftIcon,
   rightIcon,
   children,
   ...passProps
}) => {
   let Compo = 'button';
   const classes = cx('wrapper', {
      primary,
      outline,
      small,
      large,
      text,
      disabled,
      rouned,
      leftIcon,
      rightIcon,
      [className]: className,
   });
   const props = {
      onClick,
      ...passProps,
   };
   //Remove event listener when btn is disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] !== 'function') {
            delete props[key];
         }
      });
   }
   if (to) {
      props.to = to;
      Compo = Link;
   } else if (href) {
      props.href = href;
      Compo = 'a';
   }
   return (
      <Compo className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Compo>
   );
};

export default Button;
