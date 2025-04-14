import { Router } from 'express';
import expressWrapper from '../adapters/expressWrapper';
import * as lessonTypeController from '../controllers/lesson-type';


const router: Router = Router();

router.post('/api/lesson-type', expressWrapper(lessonTypeController.addType));

const lessonTypeRoutes = router;
export default lessonTypeRoutes;