import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img from '../../images/w-o-beige.jpg'
import img1 from '../../images/w-o-black.jpg'
import img2 from '../../images/w-o-green.jpg'
import img3 from '../../images/w-o-grey.jpg'



export const Details = () => {



    return (
        <div className="article-details">

            <div className="content-wrapper-details">
                {/* here have to display the path */}
                <p className="label">НАЧАЛО / ДАМСКИ СПОРТНИ ЕКИПИ</p>
                <h2 className="header">Летен екип Nike</h2>
                <div className="prices">
                    <h3 className="price">80.00лв</h3>
                    <h3 className="price-sale">50.00лв</h3>
                </div>
                <form className="details-form">

                    <label classNme="colour-label" htmlFor="colour">Цвят:</label>
                    <select id="colour" name="colour">
                        <option value="menta">Мента</option>
                        <option value="beige">Бежов</option>
                        <option value="pink">Розов</option>
                        <option value="grey">Сив</option>
                    </select>
                    {/* custom size template  */}
                    
                </form>
                <button className="add-button"><i className="fa-brands fa-shopify"></i>Add to Cart</button>
            </div>

            <div className="swiper-container">
                <p>Colours</p>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={img} /></SwiperSlide>
                    <SwiperSlide><img src={img1} /></SwiperSlide>
                    <SwiperSlide><img src={img2} /></SwiperSlide>
                    <SwiperSlide><img src={img3} /></SwiperSlide>

                </Swiper></div>
        </div>)


}