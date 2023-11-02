import clsx from 'clsx';
import styles from './notification.module.scss'
function Notification(props) {
    const { text, isOpen } = props

    return (
        <div className={clsx(styles.notification, isOpen && styles.animate, !isOpen && styles.hide,)}>
            <p className={styles.text}>
                {text || 'hi'}
            </p>
            <img src="/img/icons/other/checker.svg" alt="check" />
        </div>
    );
}

export default Notification;