import styles from './css/alert.module.css';
import cn from 'classnames';

export default function AlertCustom({ children, type }) {
  return (
    <div className={cn({ [styles.success]: type === 'success', [styles.error]: type === 'error',})} role="alert">
      {children}
    </div>
  );
}
