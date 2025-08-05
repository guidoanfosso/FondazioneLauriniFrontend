import React from "react";
import { renderStrapiBlocks } from "../../lib/renderStrapiBlocks";

type StrapiMedia = {
  data?: {
    attributes?: {
      url: string;
      alternativeText?: string;
    };
  };
};

type TextImageBlockProps = {
  text: any[]; // puoi raffinarlo se conosci la struttura dei blocchi testuali
  media?: StrapiMedia;
};

export default function TextImageBlock({ text, media }: TextImageBlockProps) {
  const imageUrl = media?.data?.attributes?.url;
  const fullImageUrl = imageUrl?.startsWith('http')
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`;

  return (
    <section className="text-image-block">
<img
  src={fullImageUrl}
alt={media?.data?.attributes?.alternativeText || ''}
  className="text-image-block__img"
/>
        {renderStrapiBlocks(text)}
    </section>
  );
}
