import { Router } from 'express';
import expressWrapper from '../adapters/expressWrapper';
import * as authController from '../controllers/auth';


const router: Router =Router();

router.post('/api/register', expressWrapper(authController.register));

const courseRoutes = router;
export default courseRoutes;