import express from 'express';
import { options } from '../../configurations/allowedsites.js';
import { articleUpload, scholarshipUpload, jobsUpload } from '../../configurations/multer.js';
import { ScholarshipCount,ScholarshipGet,ScholarshipPost, ScholarshipDelete, ScholarshipEdit, ScholarshipsUpdate  } from '../Controllers/scholarshipctrl.js';
import { ArticleCount, ArticleDelete, ArticleEdit, ArticleGet, ArticlePost, ArticleUpdate } from '../Controllers/articlesctrl.js';
import { JobCount, JobGet, JobPost, JobDelete, JobsUpdate, JobsEdit } from '../Controllers/jobctrl.js';
import { CategoryDelete, CategoryGet, CategoryPost, CategoryEdit, CategoryUpdate } from '../Controllers/categoryctrl.js';

export const routes = express.Router();

routes.get('/api/articles-get', ArticleGet);
routes.post('/api/articles-post', articleUpload.single('image'),ArticlePost);
routes.get('/api/articles-count', ArticleCount);
routes.delete('/api/articles-delete/:id', ArticleDelete);
routes.get('/api/articles-edit/:id', ArticleEdit);
routes.put('/api/articles-update/:id',articleUpload.single('image'), ArticleUpdate);

routes.get('/api/categories-get', CategoryGet);
routes.post('/api/categories-post',CategoryPost);
routes.delete('/api/categories-delete/:id',CategoryDelete);
routes.get('/api/categories-edit/:id', CategoryEdit);
routes.put('/api/categories-update/:id', CategoryUpdate);

routes.get('/api/jobs-get', JobGet);
routes.post('/api/jobs-post', jobsUpload.single('image'),JobPost);
routes.get('/api/jobs-count', JobCount);
routes.delete('/api/jobs-delete/:id', JobDelete);
routes.get('/api/jobs-edit/:id', JobsEdit);
routes.put('/api/jobs-update/:id', jobsUpload.single('image'), JobsUpdate);

routes.get('/api/scholarships-get', ScholarshipGet);
routes.post('/api/scholarships-post', scholarshipUpload.single('image'),ScholarshipPost);
routes.get('/api/scholarships-count', ScholarshipCount);
routes.delete('/api/scholarships-delete/:id', ScholarshipDelete);
routes.get('/api/scholarships-edit/:id', ScholarshipEdit);
routes.put('/api/scholarships-update/:id',scholarshipUpload.single('image'), ScholarshipsUpdate);



