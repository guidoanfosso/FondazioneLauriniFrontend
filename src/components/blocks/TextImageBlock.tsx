import React from "react";
import { renderStrapiBlocks } from "../../lib/renderStrapiBlocks";

export default function TextImageBlock({ text, media }) {
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
