import React from 'react';

interface Props {
  name: string;
  desc: string;
  lang: string;
  forksCount: number;
}

const repoCard = ({ name, desc, lang, forksCount }: Props) => {
  return (
    <div className="repo-card">
      <div>{name}</div>
      <div>{desc}</div>
      <div>{lang}</div>
      <div>{forksCount}</div>
    </div>
  );
};

export default repoCard;
