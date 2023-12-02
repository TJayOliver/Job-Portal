import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/home.jsx'
import Jobs from './pages/Jobs';
import Scholarship from './pages/Scholarship.jsx';

import Articles from './pages/articles.jsx'
import Administrator from './pages/administrator/administrator.jsx';
import Dash from './pages/Dash.jsx';
import ArticleForm from './components/Dashboard/PostForms/ArticleForm.jsx';
import ArticleDescription from './pages/articleDescription.jsx';

import CategoriesForm from './components/Dashboard/PostForms/CategoriesForm.jsx';
import JobForm from './components/Dashboard/PostForms/JobForm.jsx';

import ScholarshipForm from './components/Dashboard/PostForms/ScholarshipForm.jsx';
import CategoriesEditForm from './components/Dashboard/EditForms/CategoriesEditForm.jsx';
import ArticleEditForm from './components/Dashboard/EditForms/ArticleEditForm.jsx';
import JobEditForm from './components/Dashboard/EditForms/JobEditForm.jsx';

import ScholarshipEditForm from './components/Dashboard/EditForms/ScholarshipEditForm.jsx';
import JobDescription from './pages/jobdescription.jsx';
import ScholarshipDescription from './pages/scholarshipDescription.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />

      <Route path='/articles'> 
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:title/:id' element={<ArticleDescription />} />
      </Route>

      <Route path='/administrator' element={<Administrator />} />

      <Route path='/jobs' >
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/description/:id/:position/:company' element={<JobDescription />}  />
        <Route path='/jobs/category/:categoriesname' element={<JobDescription />}  />
      </Route>
      
      <Route path='/scholarships'>
        <Route path='/scholarships' element={<Scholarship />} />
        <Route path='/scholarships/description' element={<ScholarshipDescription />} />
      </Route>

      <Route path='/dashboard' element={<Dash />} />

      <Route path='/forms/articles' element={<ArticleForm />} />
      <Route path='/forms/articles-edit/:id' element={<ArticleEditForm />} />

      <Route path='/forms/categories' element={<CategoriesForm />} />
      <Route path='/forms/categories-edit/:id' element={<CategoriesEditForm />} />

      <Route path='/forms/jobs' element={<JobForm />} />
      <Route path='/forms/jobs-edit/:id' element={<JobEditForm />} />
      
      <Route path='/forms/scholarships' element={<ScholarshipForm />} />
      <Route path='/forms/scholarships-edit/:id' element={<ScholarshipEditForm />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
