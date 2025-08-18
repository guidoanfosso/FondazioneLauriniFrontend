'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type Props = {
  eventi: any[];
};

export default function EventiPassatiSlider({ eventi }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize(date.toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }));
  };

  return (
    <section className="pt-4 pb-4 sezione-eventi-passati">
      <div className="container">
        <h2 className="mb-4">Eventi passati</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={-20} 
          slidesPerView={3}  // default desktop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="eventi-classic-slider"
        >
          {eventi.map((evento, index) => {
            const { Titolo, DataEvento, slug, MainImage } = evento.attributes;
            const imgUrl = MainImage?.data?.attributes?.fullUrl || '/placeholder.jpg';

            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={evento.id} className={isActive ? 'active-slide' : ''}>
                <Link href={`/eventi/${slug}`}>
                  <img
                    src={imgUrl}
                    alt={Titolo}
                    className={`img-fluid mb-2 ${isActive ? 'img-active' : ''}`}
                  />
                </Link>
                <section className="boxContent text-center">
                  <h4 className={`indice-data ${isActive ? 'text-active' : ''}`}>
                    <Link href={`/eventi/${slug}`}>{formatDate(DataEvento)}</Link>
                  </h4>
                  <h3 className={`indice-titolo ${isActive ? 'text-active' : ''}`}>
                    <Link href={`/eventi/${slug}`}>{Titolo}</Link>
                  </h3>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
