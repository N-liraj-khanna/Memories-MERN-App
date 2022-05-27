// Imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Constants
const PORT=5000
const app = express();

// Config
app.listen(PORT, ()=>{console.log(`Server up and running at ${PORT}`)});