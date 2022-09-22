import { Router, Request, Response } from 'express';
import localData from '../../data/repos.json';
import axios from 'axios';
import { config as dotenv } from 'dotenv-flow';

dotenv({ default_node_env: 'development', path: `${__dirname}/../../` });

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  axios
    .get(`${process.env.API_URL}`)
    .then((response) => {
      const allData = [...localData, ...response.data];
      const filtered = allData.filter((data) => data.fork === false);
      return res.json(filtered);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error Code:', err.response.status);
      // eslint-disable-next-line no-console
      console.log(
        'Error Message:',
        `Path (${err.response.request.path}) ${err.response.statusText}`
      );
    });
});
