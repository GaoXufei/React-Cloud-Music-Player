import React, { useEffect, useState } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import {
  HorizenWrapper,
  HorizenTitle,
  HorizenList
} from './style'


const Horizen = (props: any) => {
  // { title: string } { list: [{}] }
  const {
    title,
    list,
    cls,
    handleHorizenClick
  }: { title: string, list: any, cls: string, handleHorizenClick: any } = props;
  // swiper state { Element }
  const [_swiper, _setSwiper] = useState<any>(null);
  // swiper width { number }
  const [_swiperWidth, _setSwiperWidth] = useState<any>(0);
  // swiper maxTranslate { number }
  const [_swiperTranslate, _setSwiperTranslate] = useState<any>(0);
  // swiper maxWidth { number }
  const [_swiperMaxWidth, _setSwiperMaxWidth] = useState(0);

  useEffect(() => {
    // 判断数据是否准备完成
    // 判断是否有state => _swiper是否有值
    if (list.length && !_swiper) {
      // 实例化swiper
      const mySwiper: any = new Swiper(`.${cls}`, {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto'
      })
      // 将swiper实例传回state => _swiper
      _setSwiper(mySwiper);
      _setSwiperWidth(mySwiper.width);
      _setSwiperTranslate(mySwiper.maxTranslate());
      _setSwiperMaxWidth(-mySwiper.maxTranslate() + mySwiper.width / 2);
    }
  }, [list.length, _swiper, cls])


  // 定义点击事件
  // 参数 index { number } 当前item的下标
  const handleClick = (index: number, item: any) => {
    const slide = _swiper.slides[index];
    const slideLeft = slide.offsetLeft;
    const slideWidth = slide.clientWidth;
    const slideCenter = slideLeft + slideWidth / 2;

    _swiper.setTransition(300);

    if (slideCenter <= _swiperWidth / 2) {
      _swiper.setTranslate(0);
    } else if (slideCenter > _swiperMaxWidth) {
      _swiper.setTranslate(_swiperTranslate);
    } else {
      const nowTranslate = slideCenter - _swiperWidth / 2;
      _swiper.setTranslate(-nowTranslate);
    }
    // 遍历slides 清除当前选中状态
    _swiper.slides.each((index: number, item: any) => item.classList.remove('active'));
    // 添加选择状态
    slide.classList.add('active');
    // 将选中的参数传出去
    handleHorizenClick(item)
  }

  return (
    <HorizenWrapper>
      <HorizenTitle>{title}</HorizenTitle>
      {/* 获取swiper dom */}
      <HorizenList className={cls}>
        <div className="swiper-wrapper">
          {
            // 遍历列表
            list.map(
              // 列表参数中有name { string } 、 key { string }
              (item: { name: string, key: string }, index: number) => (<div className="swiper-slide" key={item.key} onClick={() => handleClick(index, item)}>{item.name}</div>)
            )
          }
        </div>
      </HorizenList>
    </HorizenWrapper>
  );
}

export default Horizen;