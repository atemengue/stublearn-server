import { Router } from 'express';
import * as courseController from '../controllers/course';


const router: Router =Router();


router.post('/api/course', courseController.create);

const courseRoutes = router;
export default courseRoutes;