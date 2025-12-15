import express from 'express';
import upload from "../utils/upload.js"
import { uploadCV } from  "../controllers/uploadCV.js"

const router = express.Router();

router.post("/upload-cv", upload.single("cv"), uploadCV);

router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})





export default router;