import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from '../Cards/BlogCard';
import SwiperNavigation from '../SwiperNavigation';
import { useRef } from 'react';

function Blog(props) {
    const swiperInst = useRef(null);

    return (
        <section id={'anchor-blog'} className={'blog'}>
            <div className="container">
                <h2 className={'blog__title'}>Блог для Ритейлера</h2>
                <div className="blog__items">
                    <SwiperNavigation swiperInst={swiperInst.current} />

                    <Swiper
                        mousewheel={true}
                        modules={[Mousewheel]}
                        slidesPerView={'auto'}
                        spaceBetween={32}
                        centeredSlides={true}
                        loop={true}
                        onInit={(swiper) => {
                            swiperInst.current = swiper;
                        }}
                        breakpoints={{
                            1400: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                                centeredSlides: false,
                            },
                            914: {
                                slidesPerView: 3,
                                centeredSlides: true,
                                spaceBetween: 64,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 32,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {[...new Array(29)].map((_, i) => (
                            <SwiperSlide key={i}>
                                <BlogCard size={i % 2 === 0 ? 'max' : 'min'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Blog;
