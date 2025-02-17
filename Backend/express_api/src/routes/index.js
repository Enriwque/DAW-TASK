import { Router } from 'express';

import users  from './users.js';
import notas from './notas.js';
import tareas from './tareas.js';

const router = Router();

router.use('/users', users);
router.use('/notas', notas);
router.use('/tareas', tareas);

export default router;