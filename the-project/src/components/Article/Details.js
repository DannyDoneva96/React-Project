import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import '../../swiper.scss'
import { EffectCube, Pagination } from "swiper";
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

                    <label className="colour-label" htmlFor="colour">Цвят:</label>
                    <select className="colour-select" id="colour" name="colour">
                        <option value="menta">Мента</option>
                        <option value="beige">Бежов</option>
                        <option value="pink">Розов</option>
                        <option value="grey">Сив</option>
                    </select>
                    {/* custom size template  */}
                    <label class="size-label">S
                        <input type="checkbox"  />
                        <span class="checkmark"></span>
                    </label>

                    <label class="size-label">M
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="size-label">L
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="size-label">XL
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <input type="number"  className="quantity" step="1" min="1"  name="quantity"  inputmode="numeric"/>
                </form>
                <button className="add-button"><i className="fa-brands fa-shopify"></i>Add to Cart</button>
            </div>

            <div className="swiper-container">
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide><img src={img} /></SwiperSlide>
                    <SwiperSlide><img src={img1} /></SwiperSlide>
                    <SwiperSlide><img src={img2} /></SwiperSlide>
                    <SwiperSlide><img src={img3} /></SwiperSlide>

                </Swiper>
                <p>Swipe the image to see the colours</p>
</div>
        </div>)


}