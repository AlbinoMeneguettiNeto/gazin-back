import { Router } from 'express';
import developersRoute from '@api/developers/routes';

const router = Router();

router.use(developersRoute);

export default router;
