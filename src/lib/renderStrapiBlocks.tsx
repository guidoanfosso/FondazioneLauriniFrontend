import React from 'react';

function renderText(child: any, index: number) {
  let content: React.ReactNode = child.text;

  if (child.code) {
    content = <code key={`code-${index}`}>{content}</code>;
  }
  if (child.bold) {
    content = <strong key={`bold-${index}`}>{content}</strong>;
  }
  if (child.italic) {
    content = <em key={`italic-${index}`}>{content}</em>;
  }
  if (child.underline) {
    content = <u key={`underline-${index}`}>{content}</u>;
  }
  if (child.strikethrough) {
    content = <s key={`strike-${index}`}>{content}</s>;
  }

  return content;
}

export function renderStrapiBlocks(blocks: any[]) {
  if (!blocks) return null;

  return blocks.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={`paragraph-${index}`}>
            {block.children.map((child: any, i: number) => {
              if (child.type === 'link' && child.url) {
                const isExternal = /^https?:\/\//.test(child.url);
                const isFile = /\.(pdf|docx?|xlsx?|pptx?)$/i.test(child.url) 
                  || child.url.startsWith('/documenti/')
                  || child.url.startsWith('/uploads/');

                return (
                  <a
                    key={`link-${index}-${i}`}
                    href={child.url}
                    target={(isExternal || isFile) ? '_blank' : undefined}
                    rel={(isExternal || isFile) ? 'noopener noreferrer' : undefined}
                  >
                    {child.children?.map((linkChild: any, li: number) => renderText(linkChild, li))}
                  </a>
                );
              } else {
                return renderText(child, i);
              }
            })}
          </p>
        );

      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={`list-${index}`}>
            {block.children.map((item: any, itemIndex: number) => (
              <li key={`list-item-${index}-${itemIndex}`}>
                {item.children.map((child: any, ci: number) => renderText(child, ci))}
              </li>
            ))}
          </ListTag>
        );

      case 'heading':
        const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={`heading-${index}`}>
            {block.children.map((child: any, ci: number) => renderText(child, ci))}
          </HeadingTag>
        );

      case 'quote':
        return (
          <blockquote key={`quote-${index}`}>
            {block.children.map((child: any, ci: number) => renderText(child, ci))}
          </blockquote>
        );

      case 'code':
        return (
          <pre key={`codeblock-${index}`}>
            <code>
              {block.children.map((child: any, ci: number) => child.text).join('')}
            </code>
          </pre>
        );

case 'image':
  const url = block.image?.url?.startsWith('http')
    ? block.image.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image?.url}`;
  return (
    <img
      key={`image-${index}`}
      src={url}
      alt={block.image?.alternativeText || ''}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );

      default:
        return null;
    }
  });
}