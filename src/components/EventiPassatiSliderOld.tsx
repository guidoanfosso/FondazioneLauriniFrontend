'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type Props = {
  eventi: any[];  // ho rinominato da "passati" → "eventi" per renderlo più riusabile
};

export default function EventiPassatiSlider({ eventi }: Props) {
  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="pt-4 pb-4 sezione-eventi-passati">
      <div className="container">
        <h2 className="mb-4">Eventi passati</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {eventi.map((evento) => {
            const { Titolo, DataEvento, slug, MainImage } = evento.attributes;
            const imgUrl = MainImage?.data?.attributes?.fullUrl || '/placeholder.jpg';

            return (
              <SwiperSlide key={evento.id}>
                <Link href={`/eventi/${slug}`}>
                  <img
                    src={imgUrl}
                    alt={Titolo}
                    className="img-fluid mb-2"
                  />
                </Link>
                <section className="boxContent text-center">
                  <h4 className="indice-data">
                    <Link href={`/eventi/${slug}`}>{formatDate(DataEvento)}</Link>
                  </h4>
                  <h3 className="indice-titolo">
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