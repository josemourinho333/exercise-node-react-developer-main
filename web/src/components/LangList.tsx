import React from 'react';
import Button from './Button';

interface Props {
  langsList: string[];
  sortByLang: (lang: string | number) => void;
}

const langList = ({ langsList, sortByLang }: Props) => {
  // using index just for quick key generation, def not an ideal solution.
  const languages = langsList.map((lang: string, index: number) => {
    return (
      <Button
        key={index}
        active={true}
        title=""
        content={lang}
        sortByLang={sortByLang}
      />
    );
  });

  return <div className="langs-container">{languages}</div>;
};

export default langList;
