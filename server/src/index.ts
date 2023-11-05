import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import startServer from './server'

dotenv.config()
const app = express(); 

app.use(cors()); 
app.use(express.json())

startServer(app);
