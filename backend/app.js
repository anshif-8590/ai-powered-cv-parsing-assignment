import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors'
import Route from './src/routes/index.js';



const app = express();
const Name = 'CV parsing web app '
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
connectDB()




app.use('/api/v1', Route);

app.listen(PORT, () => {
  console.log(`Server started successfully at http://localhost:${PORT} - ${Name} backend service!`); 
});

