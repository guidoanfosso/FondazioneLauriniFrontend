'use client';
import React from 'react';
import Link from 'next/link';
import type { SlideType } from '@/types/tipi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

type Props = {
  slides: SlideType [];
};

export default function SingleslideSlider({ slides }: Props) {

  return (
<div className="slider-container">
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
  	    effect="fade"
	    fadeEffect={{ crossFade: true }} // facoltativo: effetto incrociato
            autoplay={{
	    delay: 6000, // tempo in millisecondi tra una slide e l'altra
	    disableOnInteraction: false, // se vuoi che continui anche dopo interazione
  }}spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            992: { slidesPerView: 1 },
          }}
        >
          {slides.map((slide) => {
            const { Titolo, UrlLink, Image } = slide.attributes;
            const imgUrl = Image?.data?.attributes?.fullUrl || '/placeholder.jpg';

            return (
              <SwiperSlide key={slide.id}>
                <Link href={`${UrlLink}`}>
                  <img
                    src={imgUrl}
                    alt={Titolo}
                    className="img-singleslider mb-2"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
 
  );
}
