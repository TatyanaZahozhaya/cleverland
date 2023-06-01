import { FC, memo, useState } from 'react';
import { type Swiper as SwiperType, FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookImageType } from '../../types';

import './index.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

type SliderThumbsType = {
  images: BookImageType[];
  imagesPreviews: BookImageType[];
};
type SliderPaginationType = {
  images: BookImageType[];
};

export const SliderThumbs: FC<SliderThumbsType> = memo(({ images, imagesPreviews }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className='swiper-container'>
      <Swiper
        data-test-id='slide-big'
        spaceBetween={10}
        navigation={true}
        scrollbar={{
          hide: true,
          draggable: true,
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, autoScrollOffset: 2 }}
        modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
        className='mySwiper2'
      >
        {images.map(renderSwiperSlide)}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper1'
      >
        {imagesPreviews.map(renderSwiperSlideMini)}
      </Swiper>
    </div>
  );
});

export const SliderPagination: FC<SliderPaginationType> = memo(({ images }) => (
  <div className='swiper-container__pagination'>
    <Swiper
      data-test-id='slide-big'
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Pagination]}
      className='mySwiper3'
    >
      {images.map(renderSwiperSlide)}
    </Swiper>
  </div>
));

function renderSwiperSlideMini(item: BookImageType) {
  return (
    <SwiperSlide key={item.url}>
      <img data-test-id='slide-mini' src={`${item.url}`} alt='превью изображения страницы книги' />
    </SwiperSlide>
  );
}

function renderSwiperSlide(item: BookImageType) {
  return (
    <SwiperSlide key={item.url}>
      <img src={`${item.url}`} alt='изображение страницы книги' />
    </SwiperSlide>
  );
}

export const Slider: FC<SliderThumbsType> = memo(({ images }) => {
  const desktopView = document.documentElement.clientWidth > 768;

  return desktopView ? <SliderThumbs images={images} imagesPreviews={images} /> : <SliderPagination images={images} />;
});
