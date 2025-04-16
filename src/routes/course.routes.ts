import { Router } from 'express';
import expressWrapper from '../adapters/expressWrapper';
import * as courseController from '../controllers/course';
import * as lessonController from '../controllers/lesson';
import * as moduleController from '../controllers/module';

const router: Router =Router();

router.post('/api/course', expressWrapper(courseController.create));
router.get('/api/courses', expressWrapper(courseController.courses));
router.get("/api/course/:slug", expressWrapper(courseController.read))


// module course
router.get("/api/course/:courseId/module", expressWrapper(moduleController.listModule))
router.post("/api/course/module/:courseId", expressWrapper(moduleController.addModule));
router.post("/api/course/module/:moduleId", expressWrapper(moduleController.removeModule));
router.put("/api/course/module/:moduleId", expressWrapper(moduleController.updateModule));


// lesson course
router.post("/api/module/lesson/:moduleId", expressWrapper(moduleController.addModule));



const courseRoutes = router;
export default courseRoutes;