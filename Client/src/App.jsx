import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/home.jsx'
import Jobs from './components/Jobs/Jobs';
import Scholarships from './pages/scholarships.jsx'
import Internships from './pages/internships.jsx'
import Articles from './pages/articles.jsx'
import Administrator from './pages/administrator/administrator.jsx';
import Dash from './pages/Dash.jsx';
import ArticleForm from './components/Dashboard/PostForms/ArticleForm.jsx';
import CategoriesForm from './components/Dashboard/PostForms/CategoriesForm.jsx';
import JobForm from './components/Dashboard/PostForms/JobForm.jsx';
import InternshipForm from './components/Dashboard/PostForms/InternshipForm.jsx';
import ScholarshipForm from './components/Dashboard/PostForms/ScholarshipForm.jsx';
import CategoriesEditForm from './components/Dashboard/EditForms/CategoriesEditForm.jsx';
import ArticleEditForm from './components/Dashboard/EditForms/ArticleEditForm.jsx';
import JobEditForm from './components/Dashboard/EditForms/JobEditForm.jsx';
import InternshipEditForm from './components/Dashboard/EditForms/InternshipEditForm.jsx';
import ScholarshipEditForm from './components/Dashboard/EditForms/ScholarshipEditForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/administrator' element={<Administrator />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/internships' element={<Internships />} />
      <Route path='/scholarships' element={<Scholarships />} />
      <Route path='/dashboard' element={<Dash />} />

      <Route path='/forms/articles' element={<ArticleForm />} />
      <Route path='/forms/articles-edit/:id' element={<ArticleEditForm />} />

      <Route path='/forms/categories' element={<CategoriesForm />} />
      <Route path='/forms/categories-edit/:id' element={<CategoriesEditForm />} />

      <Route path='/forms/jobs' element={<JobForm />} />
      <Route path='/forms/jobs-edit/:id' element={<JobEditForm />} />

      <Route path='/forms/internships' element={<InternshipForm />} />
      <Route path='/forms/internships-edit/:id' element={<InternshipEditForm />} />
      
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
