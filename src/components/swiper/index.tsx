import React, { useState, useEffect } from 'react'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
import { View } from './style'

const ComponentSwiper = (props: any) => {

  const [_swiper, _setSwiper] = useState<any>(null);

  const { bannerList } = props || [];

  useEffect(() => {

    if (bannerList.length && !_swiper) {
      let slideSwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' },
      })

      _setSwiper(slideSwiper)
    }

  }, [bannerList.length, _swiper])

  return (
    <View>
      <div className="before"></div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((item: any) => {
              return (
                <div className="swiper-slide" key={item.imageUrl}>
                  <div className="swiper-nav">
                    <img src={item.imageUrl} width='100%' height='100%' alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </View>
  )
}

export default React.memo(ComponentSwiper);