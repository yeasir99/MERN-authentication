import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}`));
