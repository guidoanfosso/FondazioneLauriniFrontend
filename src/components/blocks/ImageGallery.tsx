// components/blocks/ImageGallery.tsx
import React from "react";

export default function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images?.map((image) => {
        const url = image.attributes.formats?.medium?.url || image.attributes.url;
        return (
          <img
            key={image.id}
            src={url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
            alt={image.attributes.alternativeText || ''}
            className="gallery-image"
            style={{ width: '100%', marginBottom: '10px' }}
          />
        );
      })}
    </div>
  );
}
