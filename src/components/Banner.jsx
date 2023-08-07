import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


export const Banner = () => {
  return (
    <>
    <Swiper
    modules={{Pagination}}
    spaceBetween={50}
    slidesPerView={1}
    className='container'
    loop={true}
    >
    <SwiperSlide>
        <div className="item">
            <div className="image object-cover">
                <img src="src/assets/slider/slider0.jpg" alt=""/>
            </div>
            <div className="text-content flexcol">
                <h4>Shoes Fashion</h4>
                <h2><span>Come and Get it!</span><br/><span>Brand New Shoes</span></h2>
                <a href="#" className="primary-button">Shop Now</a>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="item">
            <div className="image object-cover">
                <img src="src/assets/slider/slider1.jpg" alt=""/>
            </div>
            <div className="text-content flexcol">
                <h4>Shoes Fashion</h4>
                <h2><span>Come and Get it!</span><br/><span>Brand New Shoes</span></h2>
                <a href="#" className="primary-button">Shop Now</a>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="item">
            <div className="image object-cover">
                <img src="src/assets/slider/slider2.jpg" alt=""/>
            </div>
            <div className="text-content flexcol">
                <h4>Shoes Fashion</h4>
                <h2><span>Come and Get it!</span><br/><span>Brand New Shoes</span></h2>
                <a href="#" className="primary-button">Shop Now</a>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="item">
            <div className="image object-cover">
                <img src="src/assets/slider/slider3.jpg" alt=""/>
            </div>
            <div className="text-content flexcol">
                <h4>Shoes Fashion</h4>
                <h2><span>Come and Get it!</span><br/><span>Brand New Shoes</span></h2>
                <a href="#" className="primary-button">Shop Now</a>
            </div>
        </div>
    </SwiperSlide>
  </Swiper>
    </>
  )
}
