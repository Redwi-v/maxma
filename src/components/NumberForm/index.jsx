import clsx from 'clsx';
import ReactInputMask from 'react-input-mask';
import Button from '../UI/Button';
import styles from './numberInput.module.scss';
import { useState } from 'react';


function NumberForm(props) {
    const { windowWidth, buttonText, style, loadContent, sendAction } = props;

    const [isFocus, setIsFocus] = useState(false);
    const [status, setStatus] = useState('');
    const [inputValue, setInputValue] = useState('')

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const send = () => {
        sendAction()
    }
    const focus = () => {
        setIsFocus(true);
    };
    const blur = () => {
        setIsFocus(false);
    };

    const onClick = () => {
        console.log(inputValue);
        const numberIsValid = validateNumber(inputValue)

        if (!numberIsValid && status !== 'code' && status !== 'codeErr') {
            setStatus('numberErr')
            return
        }

        if (!status || status === 'numberErr') {
            setStatus('loading')
            setTimeout(() => {
                setStatus('code')
                setInputValue('')

            }, 1000)
        }

        if (status === 'code' || status === 'codeErr') {
            if (inputValue === '1 1 1') {
                setStatus('codeErr')
            } else {
                setStatus('')
                send()
                setInputValue('')
            }
        }


    };


    const renderButtonText = () => {
        if (!status) return buttonText

        if (status === 'loading') {
            return (
                <div className={styles.load}>
                    <span></span>
                    <span></span>
                </div>
            )
        }

        if (status === 'code' || status === 'codeErr') {
            return (
                <div className={styles.load}>
                    <img src="/img/icons/other/checker.svg" alt="checker" />
                </div>
            )
        }

        return buttonText
    }
    console.log(status);

    return (
        <div className={styles.form}>
            <div className={clsx(styles.box, isFocus && styles.focus)}>
                {status !== 'code' && status !== 'codeErr' && <span className={styles.startNumber}>+7</span>}

                {
                    status === 'code' || status === 'codeErr' ? <ReactInputMask
                        onFocus={focus}
                        onBlur={blur}
                        className={styles.input}
                        mask={'9 9 9'}
                        maskChar={'_'}
                        value={inputValue}
                        onChange={changeInputValue}
                        style={
                            {
                                color: '#000',
                                textAlign: 'center'
                            }
                        }
                    /> : <ReactInputMask
                        onFocus={focus}
                        onBlur={blur}
                        className={styles.input}
                        mask={'(999) 999 99 99'}
                        maskChar={null}
                        value={inputValue}
                        onChange={changeInputValue}
                    />
                }

                <div
                    onClick={onClick}
                    className={clsx((status === 'code' || status === 'codeErr') && styles.codeBtn, style === 'black' ? styles.black_button : styles.button, {
                        'display-none': windowWidth <= 440,
                    })}
                >
                    {style === 'black' ? (
                        renderButtonText()
                    ) : (
                        <div >
                            <video autoPlay loop muted playsInline>
                                <source src="/videos/button-gradient.mp4" type="video/mp4" />
                            </video>
                            <span>{renderButtonText()}</span>
                        </div>
                    )}
                </div>
            </div>
            {loadContent && loadContent({ status })}
        </div>
    );
}

function validateNumber(number) {
    return number && number.length >= 10
}


export default NumberForm;
