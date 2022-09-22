import React from 'react';
import Button from './Button';

interface Props {
  name: string;
  desc: string;
  lang: string;
  forksCount: number;
}

const repoCard = ({ name, desc, lang, forksCount }: Props) => {
  return (
    <div className="card w-96 bg-primary text-primary-content my-2">
      <div className="card-body items-start">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">{desc}</p>
        <div className="card-actions justify-end">
          <Button active={false} title="Forks Count:" content={forksCount} />
        </div>
      </div>
    </div>
  );
};

export default repoCard;
