import express from 'express';
import cors from 'cors';
import { options } from '../../configurations/allowedsites.js';
import multer from 'multer';
import { ScholarshipCount,ScholarshipGet,ScholarshipPost } from '../Controllers/scholarshipctrl.js';
import { InternshipsCount, InternshipsGet, InternshipsPost } from '../Controllers/internshipctrl.js';
import { ArticleCount, ArticleDelete, ArticleEdit, ArticleGet, ArticlePost, ArticleToday, ArticleTodayCount, ArticleUpdate } from '../Controllers/articlesctrl.js';
import { GraduateJobCount, GraduateJobGet, GraduateJobPost } from '../Controllers/graduatejobctrl.js';
import { CategoryDelete, CategoryGet, CategoryPost } from '../Controllers/categoryctrl.js';

const storage = multer.memoryStorage();
const upload = multer({storage:storage});


export const routes = express.Router();

routes.get('/api/articles-get', ArticleGet);
routes.post('/api/articles-post', upload.single('image'),ArticlePost);
routes.get('/api/articles-count', ArticleCount);
routes.get('/api/articles-delete/:id', ArticleDelete);
routes.get('/api/articles-today', ArticleToday);
routes.get('/api/articles-today-count', ArticleTodayCount);
routes.get('/api/articles-edit/:id', ArticleEdit);
routes.put('/api/articles-update/:id', ArticleUpdate);

routes.get('/api/categories-get', CategoryGet);
routes.post('/api/categories-post',CategoryPost);
routes.delete('/api/categories-delete/:id',CategoryDelete);

routes.get('/api/graduatesjobs-get', GraduateJobGet);
routes.post('/api/graduatejobs-post', upload.single('image'),GraduateJobPost);
routes.get('/api/graduatesjobs-count', GraduateJobCount);

routes.get('/api/internships-get', InternshipsGet);
routes.post('/api/internships-post', upload.single('image'),InternshipsPost);
routes.get('/api/internships-count', InternshipsCount);

routes.get('/api/scholarships-get', ScholarshipGet);
routes.post('/api/scholarships-post', upload.single('image'),ScholarshipPost);
routes.get('/api/scholarships-count', ScholarshipCount)



