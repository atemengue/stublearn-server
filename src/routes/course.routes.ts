import { Router } from 'express';
import expressWrapper from '../adapters/expressWrapper';
import * as courseController from '../controllers/course';


const router: Router =Router();


router.post('/api/course', expressWrapper(courseController.create));


const courseRoutes = router;
export default courseRoutes;