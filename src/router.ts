import express from 'express';

const router = express.Router();

const API_V1 = '/api/v1/';

router.get(`${API_V1}version`, (request, response) => {
  // tslint:disable-next-line: no-console
  console.log(request);

  response.send({
    version: 0.1
  });
});

export default router;