'use strict';

import express from 'express';

const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import dogs from './controllers/dogs.js';
import about from './controllers/about.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/dogs/:id', dogs.createView)
router.get('/about', about.createView);

router.post('/dashboard/addshelter', dashboard.addShelter);
router.post('/dogs/:id/adddog', dogs.addDog);

router.get('/dashboard/deleteshelter/:id', dashboard.deleteShelter);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
