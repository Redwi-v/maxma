import { useState } from 'react';
import Button from '../Button/index';
import ReactInputMask from 'react-input-mask';
import styles from './input.module.scss';
import clsx from 'clsx';

function Input({ windowWidth, buttonText, placeholder, value, setValue, status, onClick }) {
    const [isFocus, setFocus] = useState(false);

    const focus = () => {
        setFocus(true);
    };
    const blur = () => {
        setFocus(false);
    };
    console.log();
    return (
        <div className={styles.form_input}>
            <div className={clsx(styles.box, isFocus && styles.focus, status === 'err' && styles.err)}>
                <ReactInputMask
                    onFocus={focus}
                    onBlur={blur}
                    className={styles.input}
                    type="email"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />

                <div
                    onClick={onClick}
                    className={clsx(styles.button, {
                        'display-none': windowWidth <= 440,
                    })}
                    style={{
                        display: windowWidth <= 440 ? 'none' : 'flex',
                    }}
                >
                    <span>{buttonText || 'text'}</span>
                </div>
            </div>
            <div
                onClick={onClick}
                className={clsx(styles.button)}
                style={{
                    display: windowWidth <= 440 ? 'flex' : 'none',
                    marginTop: 16,
                    textAlign: 'center',
                }}
            >
                <span>{buttonText || 'text'}</span>
            </div>
        </div>
    );
}

export default Input;
