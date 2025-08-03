import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  title?: string;
  body?: string;
};

const TextBlock: React.FC<Props> = ({ title, body }) => {
  return (
    <section className="text-block">
      {title && <div className="text-block-title">{title}</div>}
      {body && <ReactMarkdown>{body}</ReactMarkdown>}
    </section>
  );
};

export default TextBlock;
