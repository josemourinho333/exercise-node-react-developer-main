import React from 'react';
import RepoCard from './RepoCard';

interface Props {
  repos: any[] | undefined;
  sortBy: string;
  sortByLang: (lang: string | number) => void;
}

const repoList = ({ repos, sortBy, sortByLang }: Props) => {
  const repoCards = repos
    ?.filter((repo) => {
      if (!sortBy) {
        return repo;
      }
      return repo.language === sortBy;
    })
    .sort((a, b) => {
      return (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
    })
    .map((repo, index) => {
      return (
        <RepoCard
          key={`${repo.id}-${index}`}
          id={repo.id}
          name={repo.name}
          desc={repo.description}
          lang={repo.language}
          forksCount={repo.forks_count}
          creationDate={repo.created_at}
          sortByLang={sortByLang}
        />
      );
    });

  return <div className="repo-list-container">{repoCards}</div>;
};

export default repoList;
