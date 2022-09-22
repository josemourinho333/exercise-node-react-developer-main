import React from 'react';
import Button from './Button';
import moment from 'moment';

interface Props {
  name: string;
  desc: string;
  lang: string;
  forksCount: number;
  creationDate: string;
  sortByLang: (lang: string | number) => void;
}

const repoCard = ({
  name,
  desc,
  lang,
  forksCount,
  creationDate,
  sortByLang,
}: Props) => {
  return (
    <div className="card w-96 bg-primary text-primary-content my-2">
      <div className="card-body items-start">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">{desc}</p>
        <div className="card-actions">
          <Button active={false} title="Forks Count:" content={forksCount} />
        </div>
        <div className="card-actions">
          <Button
            active={true}
            title=""
            content={lang}
            sortByLang={sortByLang}
          />
        </div>
        <p>{moment(creationDate).format('LLL')}</p>
      </div>
    </div>
  );
};

export default repoCard;
