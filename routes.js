'use strict';

import express from 'express';

const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import info from './controllers/info.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
router.get('/info', info.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
