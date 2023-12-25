import express from 'express';
import { options } from '../../configurations/allowedsites.js';
import { articleUpload, scholarshipUpload, jobsUpload } from '../../configurations/multer.js';
import { ScholarshipCount,ScholarshipGet,ScholarshipPost, ScholarshipDelete, ScholarshipEdit, ScholarshipsUpdate, ScholarshipFeatured, ScholarshipSearch, ScholarshipDescription, GovernmentScholarships, InternationalScholarships, OrganizationalScholarships, ResearchScholarships, PrivateScholarships, SimilarScholarship  } from '../Controllers/scholarshipctrl.js';
import { ArticleCount, ArticleDelete, ArticleEdit, ArticleGet, ArticlePost, ArticlesDescription, ArticlesFeatured, ArticlesMainFeatured, ArticlesMustRead, ArticlesOnDescriptionPage, ArticlesScholarship, ArticleUpdate } from '../Controllers/articlesctrl.js';
import { JobCount, JobCategory,JobDescription, JobGet, JobPost, JobDelete, JobsUpdate, JobsEdit, JobFeatured, JobSearch, JobOnDescriptionPage } from '../Controllers/jobctrl.js';
import { CategoryDelete, CategoryGet, CategoryPost, CategoryEdit, CategoryUpdate } from '../Controllers/categoryctrl.js';
import { SubscribeGet, SubscribePost } from '../Controllers/subscribe.js';
import { Login } from '../Controllers/administrator.js';

export const routes = express.Router();

routes.post('/api/login', Login)

routes.get('/api/articles-get', ArticleGet);
routes.get('/api/articles-description/:id', ArticlesDescription);
routes.get('/api/articles-description-page-get', ArticlesOnDescriptionPage);
routes.get('/api/articles-scholarship', ArticlesScholarship);
routes.get('/api/articles-mainfeatured', ArticlesMainFeatured);
routes.get('/api/articles-featured', ArticlesFeatured);
routes.get('/api/articles-mustread', ArticlesMustRead);
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
routes.get('/api/jobs-featured', JobFeatured);
routes.get('/api/jobs-description-page-get', JobOnDescriptionPage);
routes.get('/api/jobs-description/:id', JobDescription);
routes.post('/api/jobs-post', jobsUpload.single('image'),JobPost);
routes.get('/api/jobs-count', JobCount);
routes.get('/api/jobs-category/:id', JobCategory);
routes.delete('/api/jobs-delete/:id', JobDelete);
routes.get('/api/jobs-edit/:id', JobsEdit);
routes.post('/api/jobs-search', JobSearch);
routes.put('/api/jobs-update/:id', jobsUpload.single('image'), JobsUpdate);

routes.get('/api/scholarships-get', ScholarshipGet);
routes.get('/api/scholarships/:countryname/similar', SimilarScholarship);
routes.get('/api/scholarships-featured', ScholarshipFeatured);
routes.get('/api/scholarships-description/:id', ScholarshipDescription);
routes.post('/api/scholarships-post', scholarshipUpload.single('image'),ScholarshipPost);
routes.post('/api/scholarships-search', ScholarshipSearch);
routes.get('/api/scholarships-count', ScholarshipCount);
routes.delete('/api/scholarships-delete/:id', ScholarshipDelete);
routes.get('/api/scholarships-edit/:id', ScholarshipEdit);
routes.put('/api/scholarships-update/:id',scholarshipUpload.single('image'), ScholarshipsUpdate);
routes.get('/api/scholarships/government', GovernmentScholarships);
routes.get('/api/scholarships/private', PrivateScholarships);
routes.get('/api/scholarships/international', InternationalScholarships);
routes.get('/api/scholarships/organizational', OrganizationalScholarships);
routes.get('/api/scholarships/research', ResearchScholarships);

routes.get('/api/subscribe-get', SubscribeGet);
routes.post('/api/subscribe-post', SubscribePost);

