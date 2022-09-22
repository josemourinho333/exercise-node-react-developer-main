import React from 'react';

interface Props {
  active: boolean;
  title?: string;
  content: string | number;
}

const button = ({ active, title, content }: Props) => {
  return (
    <button
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
