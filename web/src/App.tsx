import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import RepoList from './components/RepoList';

export function App() {
  const [state, setState] = useState();
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className="App">
      {error ? (
        <h1 className="text-3xl font-bold underline text-red-500">
          Try refreshing
        </h1>
      ) : (
        <RepoList repos={state} />
      )}
    </div>
  );
}
