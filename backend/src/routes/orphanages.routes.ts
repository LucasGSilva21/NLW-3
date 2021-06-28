import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';

const routes = Router();

routes.get('/', OrphanagesController.index);
routes.get('/:id', OrphanagesController.show);
routes.post('/', OrphanagesController.create);

export default routes;