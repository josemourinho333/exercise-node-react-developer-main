import React from 'react';
import Button from './Button';

interface Props {
  langsList: string[];
}

const langList = ({ langsList }: Props) => {
  // using index just for quick key generation, def not an ideal solution.
  const languages = langsList.map((lang: string, index: number) => {
    return <Button key={index} active={true} title="" content={lang} />;
  });

  return <div className="langs-container">{languages}</div>;
};

export default langList;
