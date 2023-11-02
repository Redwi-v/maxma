import styles from './swiperNavigation.module.scss';

function SwiperNavigation({ swiperInst }) {
    // const swiper = useSwiper()

    return (
        <div className={styles.navigation}>
            <button className={styles.next} onClick={() => swiperInst.slideNext()}>
                <img src="/img/icons/other/slider_arrow.png" alt="next" />
            </button>

            <button className={styles.prev} onClick={() => swiperInst.slidePrev()}>
                <img src="/img/icons/other/slider_arrow.png" alt="prev" />
            </button>
        </div>
    );
}

export default SwiperNavigation;
