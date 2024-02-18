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
import ScholarshipCategory from './pages/scholarshipCategory.jsx';

import SubscribersList from './components/Dashboard/subscriberList/subscribersList.jsx';
import Dashboard from './pages/administrator/dashboard.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />

      <Route path='/article'> 
        <Route path='/article' element={<Articles />} />
        <Route path='/article/:title/:id' element={<ArticleDescription />} />
      </Route>

      <Route path='/administrator' element={<Administrator />} />

      <Route path='/job' >
        <Route path='/job' element={<Jobs />} />
        <Route path='/job/:id/:position' element={<JobDescription />} />
        <Route path='/job/:categoriesname' element={<JobDescription />} />
      </Route>
      
      <Route path='/scholarship'>
        <Route path='/scholarship' element={<Scholarship />} />
        <Route path='/scholarship/:category' element={<ScholarshipCategory />} />
        <Route path='/scholarship/:scholarshipname/:id' element={<ScholarshipDescription />} />
      </Route>

      <Route path='/dashboard' element={<Dash />} />
      <Route path='/dash' element={<Dashboard />} />

      <Route path='/form/article' element={<ArticleForm />} />
      <Route path='/form/article/edit/:id' element={<ArticleEditForm />} />

      <Route path='/form/category' element={<CategoriesForm />} />
      <Route path='/form/category/edit/:id' element={<CategoriesEditForm />} />

      <Route path='/form/job' element={<JobForm />} />
      <Route path='/form/job/edit/:id' element={<JobEditForm />} />
      
      <Route path='/form/scholarship' element={<ScholarshipForm />} />
      <Route path='/form/scholarship/edit/:id' element={<ScholarshipEditForm />} />

      <Route path='/subscribers' element={<SubscribersList />} />
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
