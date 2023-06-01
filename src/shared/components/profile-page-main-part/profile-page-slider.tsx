import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProfilePageHistoryBookCard } from './profile-page-history-book-card';

import './index.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export const SliderPaginationForHistory = ({ arr }: any) => (
  <div className='slider-for-history-container'>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        240: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
        },
        441: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false,
        },
        630: {
          slidesPerView: 3,
          spaceBetween: 35,
          centeredSlides: false,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: false,
        },
      }}
      modules={[Pagination]}
      className='mySwiper mySwaper-history'
    >
      {arr.map(renderSwiperSlideHistory)}
    </Swiper>
  </div>
);

export function renderSwiperSlideHistory(item: any) {
  return (
    <SwiperSlide data-test-id='history-slide' key={item.id}>
      <ProfilePageHistoryBookCard {...item} />
    </SwiperSlide>
  );
}
