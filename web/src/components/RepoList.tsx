import React from 'react';
import RepoCard from './RepoCard';

interface Props {
  repos: any[] | undefined;
  sortBy: string;
}

const repoList = ({ repos, sortBy }: Props) => {
  const repoCards = repos
    ?.filter((repo) => {
      if (!sortBy) {
        return repo;
      }
      return repo.language === sortBy;
    })
    .map((repo, index) => {
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
