import { Router } from 'express';

import Orphanage from './orphanages.routes';

const routes = Router();

routes.use('/orphanages', Orphanage);

export default routes;
