import React from 'react';
import RepoCard from './RepoCard';

interface Props {
  repos: any[] | undefined;
}

const repoList = ({ repos }: Props) => {
  const repoCards = repos?.map((repo, index) => {
    return (
      <RepoCard
        key={`${repo.id}-${index}`}
        name={repo.name}
        desc={repo.description}
        lang={repo.language}
        forksCount={repo.forks_count}
      />
    );
  });

  return <div className="repo-list-container">{repoCards}</div>;
};

export default repoList;
