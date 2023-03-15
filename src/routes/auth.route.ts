import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const router: Router = Router();

router.get('/', AuthController.sayhello);

export default router;
