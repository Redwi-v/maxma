import { useState } from 'react';
import styles from './emailForm.module.scss';
import Icon from '../Icon';
import clsx from 'clsx';
import Input from '../UI/Input/Input';
import Checkbox from '../UI/Checkbox';

function EmailForm({ windowWidth, buttonText, formSendedCallBack, isOpen, customStyles }) {
    const [formIsOpen, setFormOpen] = useState(false);
    const [value, setValue] = useState('');
    const [status, setStatus] = useState('');
    const [checked, setChecked] = useState(false);

    const openEmailForm = () => {
        setFormOpen(true);
    };

    const sendForm = () => {
        if (!validateEmail(value)) {
            setStatus('err');
        } else {
            setStatus('');
            formSendedCallBack(value);
            setFormOpen(false);
        }
    };

    const onClick = () => {
        sendForm();
    };

    return (
        <div
            className={clsx('cost__box-left-extra', styles.form_wrapper)}
            style={{
                ...customStyles,
            }}
        >
            {formIsOpen || isOpen ? (
                <div className={styles.email_form}>
                    <Input
                        windowWidth={windowWidth}
                        buttonText={buttonText}
                        placeholder="Ваш e-mail"
                        value={value}
                        setValue={setValue}
                        status={status}
                        onClick={onClick}
                    />
                    <Checkbox text={'Соглашаюсь на передачу данных'} checked={checked} setChecked={setChecked} />

                    {status === 'err' && (
                        <p className={clsx('err', styles.err)}>
                            {checked ? 'Проверьте e-mail: в нем есть ошибки' : 'Примите согласие'}
                        </p>
                    )}
                </div>
            ) : (
                <div className={clsx('cost__box-left-extra', styles.form_preview)}>
                    <div className="cost__box-left-extra-notion">
                        <Icon id={'writing'} width={28} height={28} />
                        <p className="cost__box-left-extra-notion-text">Отправим полный расчет на e-mail</p>
                    </div>
                    <button onClick={openEmailForm} className="cost__box-left-extra-button">
                        Получить расчет
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M4 2L9 6L4 10"
                                stroke="#312D48"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

export default EmailForm;
