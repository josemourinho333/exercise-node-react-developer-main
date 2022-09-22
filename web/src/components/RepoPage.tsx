import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';
import moment from 'moment';
import axios from 'axios';

interface Props {
  repos: any[] | undefined;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const RepoPage = ({ repos }: Props) => {
  // bringing in name due to duplicate id in repos.json
  const { id, name } = useParams();
  const [repoPage, setRepoPage] = useState<any>(null);

  useEffect(() => {
    if (!repos) {
      setRepoPage(null);
    } else {
      const repo = repos?.filter(
        (data) =>
          data.id === Number(id) &&
          data.name.toLowerCase() === name?.toLowerCase()
      );

      axios
        .get(
          `https://raw.githubusercontent.com/josemourinho333/scraps/master/README.MD`
        )
        .then((res) => {
          const newRepoObj = {
            ...repo[0],
            readMe: res.data,
          };

          setRepoPage(newRepoObj);
        })
        /* eslint-disable-next-line no-console */
        .catch((err) => console.log('err', err));
    }
  }, [repos, id, name]);

  if (!repoPage) {
    return <div>Loading...</div>;
  }
  return (
    <div className="repo-page-container">
      <Link to="/">
        <Button active={true} content="Back Home" />
      </Link>
      <div className="repo-page flex flex-col">
        <div className="header font-bold text-4xl">Recent Commit Info</div>
        <div className="recent-commit-info flex flex-col my-3 items-start">
          <div className="commit-date mx-2">
            Last Commit: {moment(repoPage.updated_at).format('LLL')}
          </div>
          <div className="commit-author mx-2">
            Author: {repoPage.owner.login}
          </div>
          <div className="commit-message mx-2">
            Message: json file doesn't have this key
          </div>
        </div>
        <div className="divider">README.md</div>

        <div className="read-me whitespace-pre-wrap text-left">
          {repoPage.readMe}
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
