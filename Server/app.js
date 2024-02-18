import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

import articleRouter from './src/article/router/articleRouter.js';
import administratorRouter from './src/admin/router/adminstratorRouter.js';
import scholarshipRouter from './src/scholarship/router/scholarshipRouter.js';
import subscriberRouter from './src/subscribers/router/subscriberRouter.js';
import jobRouter from './src/job/router/jobRouter.js';
import categoryRouter from './src/category/router/categoryRouter.js';
import messageRouter from './src/messages/router/messageRouter.js';

const app = express();

const PORT = process.env.PORT || '4040';

app.use(cors( { origin : ['http://localhost:5173'], credentials : true } ));
app.use(helmet());
app.use(morgan('dev'));

app.use(cookieParser())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

app.use(articleRouter);
app.use(administratorRouter);
app.use(scholarshipRouter);
app.use(subscriberRouter);
app.use(jobRouter);
app.use(categoryRouter);
app.use(messageRouter);

app.listen(PORT, ()=>{console.log(`Connected on http://localhost:${PORT}`)})


