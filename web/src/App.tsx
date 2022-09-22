import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import './App.css';
import RepoList from './components/RepoList';
import LangList from './components/LangList';
import RepoPage from './components/RepoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  const [sortBy, setSortBy] = useState<string>('');
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

  const sortByLang = (lang: string | number) => {
    if (lang === 'All') {
      setSortBy('');
    } else {
      setSortBy(lang.toString());
    }
  };

  return (
    <div className="App flex flex-col items-center my-5">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              path=""
              element={
                <>
                  <LangList langsList={langsList} sortByLang={sortByLang} />
                  <RepoList
                    repos={state}
                    sortBy={sortBy}
                    sortByLang={sortByLang}
                  />
                </>
              }
            />
            <Route
              path="/repos/:id/:name"
              element={<RepoPage repos={state} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
