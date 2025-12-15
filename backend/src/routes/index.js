
import express from 'express';


const router = express.Router();
// backend/routes/health.js
router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

export default router;