import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

/// make sure to fix backend and use models for the api shit
// Display a list of repositories. Include the repository name, description, language, and forks count in the list.

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
      <h1 className="text-3xl font-bold underline text-red-500">hey</h1>
    </div>
  );
}
