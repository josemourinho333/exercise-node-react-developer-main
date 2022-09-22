import React from 'react';

interface Props {
  active: boolean;
  title?: string;
  content: string | number;
  sortByLang?: (lang: string | number) => void;
}

const button = ({ active, title, content, sortByLang }: Props) => {
  return (
    <button
      onClick={() => {
        if (active) {
          sortByLang?.(content);
        }
      }}
      className={`m-1 btn btn-sm ${
        active
          ? 'btn-active btn-primary'
          : 'btn-active btn-ghost cursor-default'
      }`}
    >
      {title ? title : ''}
      <span className="text-primary-content ml-1">{content}</span>
    </button>
  );
};

export default button;
