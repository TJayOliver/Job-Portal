import express from 'express';
import helmet from 'helmet';
import bodyparser from 'body-parser';
import { routes } from './Api/Routers/routes.js';
import { options } from './configurations/allowedsites.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || '4040';
const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('uploads'));
app.use('/', routes)

app.listen(PORT, ()=>{console.log(`Connected on http://localhost:${PORT}`)})

