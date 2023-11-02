import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import ClientCard from "../Cards/ClientCard";
import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import SwiperNavigation from "../SwiperNavigation";


function Clients(props) {
    const [isOpen, setOpen] = useState(false);
    const swiperInst = useRef(null)



    return (
        <section className="clients">
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 1 }}
                isOpen={isOpen}
                videoId="RjFI_ZBljGk"
                onClose={() => setOpen(false)}
                ratio="9:16"
            />

            {
                isOpen &&
                <button className="video_modal_close" onClick={() => { setOpen(false) }}>
                    <img src="img/icons/other/close.png" alt="close" />
                </button>
            }

            <h2 className={"clients__title"}>Клиенты о нас</h2>
            <SwiperNavigation swiperInst={swiperInst.current} />
            <div className="clients__items">
                <Swiper
                    mousewheel={true}
                    modules={[Mousewheel]}
                    centeredSlides={true}
                    loop={true}
                    onInit={(swiper => {
                        swiperInst.current = swiper

                    })}
                    breakpoints={{
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}>
                    {[...new Array(12)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <ClientCard onClick={() => { setOpen(true) }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;