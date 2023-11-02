import 'swiper/scss';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './Home.scss';
import PlatformSection from '../../components/PlatformSection';
import Clients from '../../components/Clients';
import Blog from '../../components/Blog';
import Notification from '../../components/Notification';
import WelcomeSection from '../../components/Welcome';
import CostSection from '../../components/CostSection/CostSection';
import PricesSection from '../../components/PricesSection';
import MailingSection from '../../components/MailingSection';

const Homepage = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [notificationText, setNotificationText] = useState('');
    const [notificationIsOpen, setNotificationOpen] = useState(false);

    const openNotification = (text, time = 5000) => {
        setNotificationText(text);
        setNotificationOpen(true);

        setTimeout(() => {
            setNotificationOpen(false);
        }, time);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        // Логика искусственной задержки перед отображением страницы, чтобы шрифты уже встали на свои места
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        document.getElementById('root').style.opacity = '0%';
        setTimeout(() => {
            document.getElementById('root').style.transition = 'opacity 0.15s';
            document.getElementById('root').style.opacity = '100%';
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';
            document.getElementsByTagName('body')[0].style.scrollBehavior = 'smooth';
            document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
        }, 1800);
    }, []);

    return (
        <>
            <Notification isOpen={notificationIsOpen} text={notificationText} />
            <Header />
            <WelcomeSection windowWidth={windowWidth} openNotification={openNotification} />
            <PlatformSection />
            <Clients />
            <CostSection windowWidth={windowWidth} openNotification={openNotification} />
            <PricesSection windowWidth={windowWidth} openNotification={openNotification} />
            <Blog />
            <MailingSection openNotification={openNotification} windowWidth={windowWidth} />
            <Footer />
        </>
    );
};

export default Homepage;
