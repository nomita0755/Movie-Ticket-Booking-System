import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const HomeSlider = () => {

    const [banners, setBanners]= useState([
        {
            imgUrl: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1755602172105_sinnersflashsaleweb.jpg"
        },
        {
            imgUrl: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1755763132646_21staugplaycarddesktophpc.jpg"
        }
    ])
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
            banners.map((banner, index)=>{
                return(
                    <SwiperSlide key ={index}>
                        <img
                            src={banner.imgUrl}
                            alt=""
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "300px"
                            }}
                        />
                    </SwiperSlide>
                )

            })
        }
      </Swiper>
    </>
  );
}
