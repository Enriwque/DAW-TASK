import { Router } from "express";
import { fetchTareas, posTareas, deleteTareas } from "../controllers/tareas.js";
const router = Router();

router.get("/", fetchTareas);
router.post("/create", posTareas);
router.delete("/delete:id", deleteTareas);

export default router;