import { Router, Request, Response } from 'express';
import localData from '../../data/repos.json';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // console.log('hello', localData);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  axios
    .get('https://api.github.com/users/silverorange/repos/44')
    .then((response) => {
      response.data;
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
  res.json([]);
});
