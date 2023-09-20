import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/home.jsx'
import Scholarships from './pages/scholarships.jsx'
import Internships from './pages/internships.jsx'
import Articles from './pages/articles.jsx'
import GraduateJobs from './pages/graduate jobs/graduate-jobs'
import Administrator from './pages/administrator/administrator.jsx';
import Dash from './pages/Dash.jsx';
import ArticleForm from './components/Dashboard/articleForm.jsx';
import CategoriesForm from './components/Dashboard/CategoriesForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/administrator' element={<Administrator />} />
      <Route path='/graduatejobs' element={<GraduateJobs />} />
      <Route path='/internships' element={<Internships />} />
      <Route path='/scholarships' element={<Scholarships />} />
      <Route path='/dashboard' element={<Dash />} />
      <Route path='/forms/articles' element={<ArticleForm />} />
      <Route path='/forms/categories' element={<CategoriesForm />} />
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
