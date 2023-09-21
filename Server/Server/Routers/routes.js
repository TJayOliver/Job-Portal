import express from 'express';
import cors from 'cors';
import { options } from '../../configurations/allowedsites.js';
import multer from 'multer';
import { ScholarshipCount,ScholarshipGet,ScholarshipPost, ScholarshipDelete, ScholarshipEdit, ScholarshipsUpdate  } from '../Controllers/scholarshipctrl.js';
import { InternshipsCount, InternshipsGet, InternshipsPost, InternshipsDelete, InternshipsEdit, InternshipsUpdate } from '../Controllers/internshipctrl.js';
import { ArticleCount, ArticleDelete, ArticleEdit, ArticleGet, ArticlePost, ArticleUpdate } from '../Controllers/articlesctrl.js';
import { GraduateJobCount, GraduateJobGet, GraduateJobPost, GraduateJobDelete, GraduateJobsUpdate, GraduateJobsEdit } from '../Controllers/graduatejobctrl.js';
import { CategoryDelete, CategoryGet, CategoryPost, CategoryEdit, CategoryUpdate } from '../Controllers/categoryctrl.js';

const storage = multer.memoryStorage();
const upload = multer({storage:storage});


export const routes = express.Router();

routes.get('/api/articles-get', ArticleGet);
routes.post('/api/articles-post', upload.single('image'),ArticlePost);
routes.get('/api/articles-count', ArticleCount);
routes.delete('/api/articles-delete/:id', ArticleDelete);
routes.get('/api/articles-edit/:id', ArticleEdit);
routes.put('/api/articles-update', ArticleUpdate);

routes.get('/api/categories-get', CategoryGet);
routes.post('/api/categories-post',CategoryPost);
routes.delete('/api/categories-delete/:id',CategoryDelete);
routes.get('/api/categories-edit/:id', CategoryEdit);
routes.put('/api/categories-update', CategoryUpdate);

routes.get('/api/graduatesjobs-get', GraduateJobGet);
routes.post('/api/graduatejobs-post', upload.single('image'),GraduateJobPost);
routes.get('/api/graduatesjobs-count', GraduateJobCount);
routes.delete('/api/graduatesjobs-delete/:id', GraduateJobDelete);
routes.get('/api/graduatesjobs-edit/:id', GraduateJobsEdit);
routes.put('/api/graduatesjobs-update', GraduateJobsUpdate);

routes.get('/api/internships-get', InternshipsGet);
routes.post('/api/internships-post', upload.single('image'),InternshipsPost);
routes.get('/api/internships-count', InternshipsCount);
routes.delete('/api/internships-delete/:id', InternshipsDelete);
routes.get('/api/internships-edit/:id', InternshipsEdit);
routes.put('/api/internships-update', InternshipsUpdate);

routes.get('/api/scholarships-get', ScholarshipGet);
routes.post('/api/scholarships-post', upload.single('image'),ScholarshipPost);
routes.get('/api/scholarships-count', ScholarshipCount);
routes.delete('/api/scholarships-delete/:id', ScholarshipDelete);
routes.get('/api/scholarships-edit/:id', ScholarshipEdit);
routes.put('/api/scholarships-update', ScholarshipsUpdate);



