import './Header.scss';
import Button from '../UI/Button';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Icon from '../Icon';

const variantsDesktopMenu = {
    open: { opacity: 1, y: '100%', zIndex: 10, pointerEvents: 'all' },
    close: { opacity: 0, y: '0%', zIndex: '-1000', pointerEvents: 'none' },
};

const variantsMobileMenu = {
    open: { opacity: 1, transform: 'scale(1) translateX(0) translateY(0)', pointerEvents: 'all' },
    close: { opacity: 0, transform: 'scale(0.65) translateX(50%) translateY(-50%)', pointerEvents: 'none' },
};

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const [openLanguageMenu, setOpenLanguageMenu] = useState(false);

    const [openPlatformMenu, setOpenPlatformMenu] = useState(false);
    const [itemsForShowPlatformMenu, setItemsForShowPlatformMenu] = useState(6);

    /* Флаги для мобильного меню */
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openMobileMenuModules, setOpenMobileMenuModules] = useState(false);
    const [openMobileMenuIntegrations, setOpenMobileMenuIntegrations] = useState(false);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (windowWidth <= 480 && openMobileMenu) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';
        }
    }, [openMobileMenu, windowWidth]);

    return (
        <header className={'header'}>
            <div className={'header__left'}>
                {(windowWidth > 565 || (windowWidth <= 565 && !openMobileMenuModules && !openMobileMenuIntegrations)) && (
                    <a className={'header__left-logo'} href="/">
                        <img width={95} height={29} src="/img/logos/logo-[94x28].svg" alt="Логотип MAXMA" />
                    </a>
                )}
                <div
                    className={'header__left-item'}
                    onClick={() => {
                        setOpenPlatformMenu(!openPlatformMenu);
                        if (itemsForShowPlatformMenu > 6) {
                            setItemsForShowPlatformMenu((prevState) => prevState - 4);
                        }
                    }}
                >
                    <span className={'header__left-item-text'}>Платформа</span>
                    <svg
                        style={{
                            transform: `rotateZ(${openPlatformMenu ? '-180deg' : '0deg'})`,
                            transition: 'transform 0.25s',
                        }}
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Vector 2"
                            opacity="0.3"
                            d="M1 1.5L4 4.5L7 1.5"
                            stroke="#312D48"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className={'header__left-item'}>
                    <a href={'#anchor-blog'} className={'header__left-item-text'}>
                        Блог
                    </a>
                </div>
                <div className={'header__left-item'}>
                    <a href={'#anchor-prices'} className={'header__left-item-text'}>
                        Цены
                    </a>
                </div>
            </div>
            <div className={'header__right'}>
                <a className={'header__right-social'} href="#">
                    <Icon id={'telegram'} width={24} height={24} className={'animation-scale-1-1'} />
                </a>
                <a className={'header__right-social'} href="#">
                    <Icon id={'whatsapp'} width={24} height={24} className={'animation-scale-1-1'} />
                </a>
                <div
                    className={'header__right-social header__right-social--email'}
                    onClick={() => {
                        navigator.clipboard.writeText('hello@maxma.com').then(() => toast.success('Скопировано в буфер обмена'));
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                            <g id="Group">
                                <path
                                    id="Vector"
                                    d="M2 12C2 8.229 2 6.343 3.172 5.172C4.343 4 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C22 6.343 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.657 20 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2 17.657 2 15.771 2 12Z"
                                    stroke="#312D48"
                                    strokeWidth="1.7"
                                />
                                <path
                                    id="Vector_2"
                                    d="M6 8L8.159 9.8C9.996 11.33 10.914 12.095 12 12.095C13.086 12.095 14.005 11.33 15.841 9.799L18 8"
                                    stroke="#312D48"
                                    strokeWidth="1.7"
                                />
                            </g>
                        </g>
                    </svg>
                    <span className={'header__right-social-text'}>hello@maxma.com</span>
                </div>
                <div className={'header__right-language'} onClick={() => setOpenLanguageMenu(!openLanguageMenu)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                            <g id="Group">
                                <path
                                    id="Vector"
                                    d="M3 12H21M15.6 12C15.6 13.1817 15.5064 14.3526 15.3255 15.4443C15.1455 16.536 14.88 17.5278 14.5452 18.3639C14.2113 19.2 13.8144 19.8624 13.3779 20.3151C12.9405 20.7669 12.4725 21 12 21C11.5275 21 11.0595 20.7669 10.623 20.3151C10.1856 19.8624 9.7887 19.1991 9.4548 18.3639C9.12 17.5278 8.8545 16.5369 8.6736 15.4443C8.48907 14.3055 8.39757 13.1536 8.4 12C8.4 10.8183 8.4927 9.6474 8.6736 8.5557C8.8545 7.464 9.12 6.4722 9.4548 5.6361C9.7887 4.8 10.1856 4.1376 10.6221 3.6849C11.0595 3.234 11.5275 3 12 3C12.4725 3 12.9405 3.2331 13.377 3.6849C13.8144 4.1376 14.2113 4.8009 14.5452 5.6361C14.88 6.4722 15.1455 7.4631 15.3255 8.5557C15.5064 9.6474 15.6 10.8183 15.6 12Z"
                                    stroke="#312D48"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                                <path
                                    id="Vector_2"
                                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                                    stroke="#312D48"
                                    strokeWidth="1.7"
                                />
                            </g>
                        </g>
                    </svg>
                    <div className={'header__right-language-box'}>
                        <span className={'header__right-language-box-text'}>РУ</span>
                        <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                transform: `rotateZ(${openLanguageMenu ? '-180deg' : '0deg'})`,
                                transition: 'transform 0.25s',
                            }}
                        >
                            <path
                                id="Vector 2"
                                opacity="0.3"
                                d="M1 1.5L4 4.5L7 1.5"
                                stroke="#312D48"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                {windowWidth > 700 ? (
                    <Button text={'Демо'} />
                ) : (
                    <Button
                        isDisableHover
                        variant={openMobileMenu && 'white'}
                        onClick={() => {
                            setOpenMobileMenu(!openMobileMenu);
                            setOpenMobileMenuModules(false);
                            setOpenMobileMenuIntegrations(false);
                        }}
                        icon={openMobileMenu ? '/img/icons/24x24/close.svg' : '/img/icons/24x24/burger.svg'}
                    />
                )}
                <motion.div
                    initial={false}
                    className={'header__right-menu'}
                    transition={{ duration: 0.2 }}
                    variants={variantsMobileMenu}
                    animate={windowWidth <= 700 && openMobileMenu ? 'open' : 'close'}
                >
                    {(openMobileMenuModules || openMobileMenuIntegrations) && (
                        <div
                            className={'header__right-menu-back'}
                            onClick={() => {
                                setOpenMobileMenuModules(false);
                                setOpenMobileMenuIntegrations(false);
                                setItemsForShowPlatformMenu(6);
                            }}
                        >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 13L7 7L0.999999 1"
                                    stroke="#312D48"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    )}
                    {!openMobileMenuModules && !openMobileMenuIntegrations && (
                        <>
                            <div className={'header__right-menu-box'}>
                                <h6 className={'header__right-menu-box-title'}>Платформа</h6>
                                <div onClick={() => setOpenMobileMenuModules(true)} className={'header__right-menu-box-item'}>
                                    <span className={'header__right-menu-box-item-text'}>Модули</span>
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 13L7 7L0.999999 1"
                                            stroke="#312D48"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div
                                    onClick={() => setOpenMobileMenuIntegrations(true)}
                                    className={'header__right-menu-box-item'}
                                >
                                    <span className={'header__right-menu-box-item-text'}>Интеграции</span>
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 13L7 7L0.999999 1"
                                            stroke="#312D48"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <a
                                href={'#anchor-blog'}
                                onClick={() => setOpenMobileMenu(false)}
                                className={'header__right-menu-link'}
                            >
                                Блог
                            </a>
                            <a
                                href={'#anchor-prices'}
                                onClick={() => setOpenMobileMenu(false)}
                                className={'header__right-menu-link'}
                            >
                                Цены
                            </a>
                            <button className={'header__right-menu-button'}>Демо</button>
                            <div className={'header__right-menu-socials'}>
                                <div
                                    className={'header__right-menu-socials-email header__right-social--email'}
                                    onClick={() => {
                                        navigator.clipboard
                                            .writeText('hello@maxma.com')
                                            .then(() => toast.success('Скопировано в буфер обмена'));
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Frame">
                                            <g id="Group">
                                                <path
                                                    id="Vector"
                                                    d="M2 12C2 8.229 2 6.343 3.172 5.172C4.343 4 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C22 6.343 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.657 20 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2 17.657 2 15.771 2 12Z"
                                                    stroke="#312D48"
                                                    strokeWidth="1.7"
                                                />
                                                <path
                                                    id="Vector_2"
                                                    d="M6 8L8.159 9.8C9.996 11.33 10.914 12.095 12 12.095C13.086 12.095 14.005 11.33 15.841 9.799L18 8"
                                                    stroke="#312D48"
                                                    strokeWidth="1.7"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <span className={'header__right-menu-socials-social-text'}>hello@maxma.com</span>
                                </div>
                                <div className={'header__right-menu-socials-other'}>
                                    <a className={'header__right-menu-socials-other-social'} href="#">
                                        <Icon id={'telegram'} width={24} height={24} className={'animation-scale-1-1'} />
                                    </a>
                                    <a className={'header__right-menu-socials-other-social'} href="#">
                                        <Icon id={'whatsapp'} width={24} height={24} className={'animation-scale-1-1'} />
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                    {openMobileMenuModules && (
                        <>
                            <h2 className={'header__right-menu-title'}>Модули</h2>
                            <div className={'header__right-menu-itemsModules'}>
                                {[
                                    {
                                        icon: 'heart',
                                        title: 'Лояльность',
                                        text: 'Бонусы, скидки, уровни',
                                    },
                                    {
                                        icon: 'wallet',
                                        title: 'Wallet',
                                        text: 'Карты лояльности для iPhone и Android',
                                    },
                                    {
                                        icon: 'percent',
                                        title: 'Акции',
                                        text: 'Конструктор любых акций',
                                    },
                                    {
                                        icon: 'mailing',
                                        title: 'Рассылки',
                                        text: 'SMS, push, e-mail и мессенджеры',
                                    },
                                    {
                                        icon: 'analytic',
                                        title: 'Аналитика',
                                        text: '100+ метрик в гибком конструкторе отчетов',
                                    },
                                    {
                                        icon: 'cart',
                                        title: 'Брошенные корзины',
                                        text: 'Более 15 триггеров для вашего сайта',
                                    },
                                    {
                                        icon: 'cdp',
                                        title: 'CDP',
                                        text: 'SMS, push, e-mail и мессенджеры',
                                    },
                                    {
                                        icon: 'form',
                                        title: 'Форма захвата',
                                        text: '100+ метрик в гибком конструкторе отчетов',
                                    },
                                    {
                                        icon: 'friend',
                                        title: 'Приведи друга',
                                        text: 'Карты лояльности для iPhone и Android',
                                    },
                                    {
                                        icon: 'free-cards',
                                        title: 'Подарочные карты',
                                        text: '100+ метрик в гибком конструкторе отчетов',
                                    },
                                ]
                                    .slice(0, itemsForShowPlatformMenu)
                                    .map(({ icon, title, text }) => (
                                        <div className={'header__menu-modules-items-item'} key={icon}>
                                            <div className={'header__menu-modules-items-item-icon'}>
                                                <img
                                                    width={32}
                                                    height={32}
                                                    src={`/img/header-menu-icons/${icon}.svg`}
                                                    alt={'Иконка модуля'}
                                                />
                                            </div>
                                            <div>
                                                <h6 className={'header__menu-modules-items-item-title'}>{title}</h6>
                                                <p className={'header__menu-modules-items-item-text'}>{text}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {itemsForShowPlatformMenu !== 10 && (
                                <button
                                    className={'header__menu-modules-button'}
                                    onClick={() => setItemsForShowPlatformMenu((prevState) => prevState + 4)}
                                >
                                    Показать все
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            id="Vector 2"
                                            opacity="0.3"
                                            d="M1 1.5L4 4.5L7 1.5"
                                            stroke="#312D48"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            )}
                        </>
                    )}
                    {openMobileMenuIntegrations && (
                        <>
                            <h2 className={'header__right-menu-title'}>Интеграции</h2>
                            <div className={'header__right-menu-itemsIntegrations'}>
                                {[
                                    {
                                        icon: 'site',
                                        title: 'Касса или сайт',
                                        text: '50+ готовых модулей',
                                    },
                                    {
                                        icon: 'api',
                                        title: 'API',
                                        text: 'Подключение напрямую',
                                    },
                                    {
                                        icon: 'sky',
                                        title: 'Надежность',
                                        text: 'Сертификаты и Uptime',
                                    },
                                ].map(({ icon, title, text }) => (
                                    <div
                                        key={icon}
                                        className={
                                            'header__right-menu-itemsIntegrations-item header__menu-integrations-items-item'
                                        }
                                    >
                                        <div className={'header__menu-integrations-items-item-icon'}>
                                            <img
                                                width={22}
                                                height={22}
                                                src={`/img/header-menu-icons/${icon}.svg`}
                                                alt={'Иконка интеграций'}
                                            />
                                        </div>
                                        <div className={'header__menu-integrations-items-item-box'}>
                                            <h6 className={'header__menu-integrations-items-item-box-title'}>{title}</h6>
                                            <p className={'header__menu-integrations-items-item-box-text'}>{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
            <motion.nav
                initial={false}
                className="header__menu"
                variants={variantsDesktopMenu}
                animate={openPlatformMenu ? 'open' : 'close'}
            >
                <div className="header__menu-container">
                    <div className={'header__menu-modules'}>
                        <h5 className={'header__menu-modules-title'}>Модули</h5>
                        <div className={'header__menu-modules-items'}>
                            {[
                                {
                                    icon: 'heart',
                                    title: 'Лояльность',
                                    text: 'Бонусы, скидки, уровни',
                                },
                                {
                                    icon: 'wallet',
                                    title: 'Wallet',
                                    text: 'Карты лояльности для iPhone и Android',
                                },
                                {
                                    icon: 'percent',
                                    title: 'Акции',
                                    text: 'Конструктор любых акций',
                                },
                                {
                                    icon: 'mailing',
                                    title: 'Рассылки',
                                    text: 'SMS, push, e-mail и мессенджеры',
                                },
                                {
                                    icon: 'analytic',
                                    title: 'Аналитика',
                                    text: '100+ метрик в гибком конструкторе отчетов',
                                },
                                {
                                    icon: 'cart',
                                    title: 'Брошенные корзины',
                                    text: 'Более 15 триггеров для вашего сайта',
                                },
                                {
                                    icon: 'cdp',
                                    title: 'CDP',
                                    text: 'SMS, push, e-mail и мессенджеры',
                                },
                                {
                                    icon: 'form',
                                    title: 'Форма захвата',
                                    text: '100+ метрик в гибком конструкторе отчетов',
                                },
                                {
                                    icon: 'friend',
                                    title: 'Приведи друга',
                                    text: 'Карты лояльности для iPhone и Android',
                                },
                                {
                                    icon: 'free-cards',
                                    title: 'Подарочные карты',
                                    text: '100+ метрик в гибком конструкторе отчетов',
                                },
                            ]
                                .slice(0, itemsForShowPlatformMenu)
                                .map(({ icon, title, text }) => (
                                    <div className={'header__menu-modules-items-item'} key={icon}>
                                        <div className={'header__menu-modules-items-item-icon'}>
                                            <img
                                                width={32}
                                                height={32}
                                                src={`/img/header-menu-icons/${icon}.svg`}
                                                alt={'Иконка модуля'}
                                            />
                                        </div>
                                        <h6 className={'header__menu-modules-items-item-title'}>{title}</h6>
                                        <p className={'header__menu-modules-items-item-text'}>{text}</p>
                                    </div>
                                ))}
                        </div>

                        <button
                            className={'header__menu-modules-button'}
                            onClick={() => {
                                setItemsForShowPlatformMenu((prevState) => (itemsForShowPlatformMenu >= 10 ? 6 : prevState + 4));
                            }}
                        >
                            {itemsForShowPlatformMenu !== 10 ? 'Показать все' : 'Оставить популярные'}
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    id="Vector 2"
                                    opacity="0.3"
                                    d="M1 1.5L4 4.5L7 1.5"
                                    stroke="#312D48"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={'header__menu-integrations'}>
                        <h5 className={'header__menu-integrations-title'}>Интеграции</h5>
                        <div className={'header__menu-integrations-items'}>
                            {[
                                {
                                    icon: 'site',
                                    title: 'Касса или сайт',
                                    text: '50+ готовых модулей',
                                },
                                {
                                    icon: 'api',
                                    title: 'API',
                                    text: 'Подключение напрямую',
                                },
                                {
                                    icon: 'sky',
                                    title: 'Надежность',
                                    text: 'Сертификаты и Uptime',
                                },
                            ].map(({ icon, title, text }) => (
                                <div className={'header__menu-integrations-items-item'} key={icon}>
                                    <div className={'header__menu-integrations-items-item-icon'}>
                                        <img
                                            width={22}
                                            height={22}
                                            src={`/img/header-menu-icons/${icon}.svg`}
                                            alt={'Иконка интеграций'}
                                        />
                                    </div>
                                    <div className={'header__menu-integrations-items-item-box'}>
                                        <h6 className={'header__menu-integrations-items-item-box-title'}>{title}</h6>
                                        <p className={'header__menu-integrations-items-item-box-text'}>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>
        </header>
    );
};

export default Header;
