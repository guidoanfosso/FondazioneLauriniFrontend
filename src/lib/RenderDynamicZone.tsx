import React from 'react';
import ImageGallery from "../components/blocks/ImageGallery";
import TextImageBlock from "../components/blocks/TextImageBlock";
import TextBlock from "../components/blocks/TextBlock";

type Props = {
  blocks: any[];
};

export function RenderDynamicZone({ blocks }: Props) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.__component}-${index}`;

        switch (block.__component) {
	case 'common.text-block':
	  return (
	    <TextBlock
	      key={key}
	      title={block.title}
	      body={block.body}
	    />
	  );

case 'media.video-with-caption':
  return (
    <section key={key} className="media-with-caption">
      {block.image?.data?.attributes?.url && (
        <>
          <img
            src={
              block.image.data.attributes.url.startsWith('http')
                ? block.image.data.attributes.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image.data.attributes.url}`
            }
            alt={block.image.data.attributes.alternativeText || ''}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {block.image.data.attributes.caption && (
            <p className="caption">{block.image.data.attributes.caption}</p>
          )}
        </>
      )}
    </section>
  );


          case 'media.video-embed-with-caption':
            return (
              <section key={key} className="video-embed-with-caption">
                <div
                  className="embed"
                  dangerouslySetInnerHTML={{ __html: block.EmbedCode }}
                />
                {block.Caption && <p>{block.Caption}</p>}
              </section>
            );

          case 'common.link-item':
            return (
              <section key={key} className="link-item">
                <a href={block.URL} target="_blank" rel="noopener noreferrer">
                  {block.Title}
                </a>
              </section>
            );

          case "media.image-gallery":
            return (
              <ImageGallery
                key={key}
                images={block.Image?.data || []}
              />
            );

          case "common.text-image-block":
            return (
              <TextImageBlock
                key={key}
                text={block.Text}
                media={block.Media}
              />
            );

          default:
            return (
              <section key={key}>
                <p>Blocco non gestito: {block.__component}</p>
              </section>
            );
        }
      })}
    </>
  );
}
