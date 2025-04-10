import { Router } from "express";
import expressWrapper from '../adapters/expressWrapper';
import * as categoryController from '../controllers/category';

const router: Router =Router();

// middlewares
// import { requireSignin, isAdmin } from "../middlewares";
// controller

// use middleware
router.post('/category', expressWrapper(categoryController.create));
router.get('/category', expressWrapper(categoryController.read));
router.put('/category/:slug', expressWrapper(categoryController.update));
router.delete("/category/:slug", expressWrapper(categoryController.remove));
router.get("/categories", expressWrapper(categoryController.categories));

const categoryRoutes = router;
export default categoryRoutes;