import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import './App.css';
import RepoList from './components/RepoList';
import LangList from './components/LangList';

export function App() {
  const [state, setState] = useState<any[]>();
  const langsList = useMemo(() => {
    const langs = state?.map((repo: Record<string, never>) => {
      return repo?.language;
    });

    const uniqueList = Array.from(new Set(langs));
    return uniqueList;
  }, [state]);

  axiosRetry(axios, { retries: 4 });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        /* eslint-disable-next-line no-console */
        console.log('err', err);
      });
  }, []);

  return (
    <div className="App">
      <LangList langsList={langsList} />
      <RepoList repos={state} />
    </div>
  );
}
