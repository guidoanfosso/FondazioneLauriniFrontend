'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type Props = {
  eventi: any[];
  currentSlug: string;
};

export default function TuttiEventiSlider({ eventi, currentSlug }: Props) {
  const activeIndex = eventi.findIndex(e => e.attributes.slug === currentSlug);

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
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={3}
      centeredSlides={true}
      initialSlide={activeIndex}
      breakpoints={{
        0: { slidesPerView: 1, centeredSlides: false, initialSlide: activeIndex },
        768: { slidesPerView: 2, centeredSlides: false, initialSlide: activeIndex },
        992: { slidesPerView: 3, centeredSlides: true, initialSlide: activeIndex },
      }}
    >
      {eventi.map((evento) => {
        const { Titolo, DataEvento, slug, MainImage } = evento.attributes;
        const imgUrl = MainImage?.data?.attributes?.fullUrl || '/placeholder.jpg';
        const isActive = slug === currentSlug;

        return (
          <SwiperSlide key={evento.id}>
            <Link href={`/eventi/${slug}`}>
              <div className={`card ${isActive ? 'evento-attivo' : ''}`}>
                <img src={imgUrl} alt={Titolo} className="img-fluid mb-2" />
                <section className="boxContent text-center">
                  <h4 className="indice-data">{formatDate(DataEvento)}</h4>
                  <h3 className="indice-titolo">{Titolo}</h3>
                </section>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}