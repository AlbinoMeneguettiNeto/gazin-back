import express from 'express';
import DeveloperController from './controller';

const router = express.Router();

router.get('/developers', DeveloperController.index);
router.post('/developers', DeveloperController.create);
router.put('/developers/:developerId', DeveloperController.update);
router.get('/developers/:developerId', DeveloperController.findOne);
router.delete('/developers/:developerId', DeveloperController.delete);

export default router;
