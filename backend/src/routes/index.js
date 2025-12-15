import express from 'express';
import upload from "../utils/upload.js"
import { uploadCV } from  "../controllers/uploadCV.js"
import { getAllPersonas } from "../controllers/getAllPersonas.js"
import { getPersonaById } from "../controllers/getPersonaById.js"



const router = express.Router();

router.post("/upload-cv", upload.single("cv"), uploadCV);
router.get("/personas",getAllPersonas)
router.get("/personas/:id", getPersonaById);

router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})





export default router;