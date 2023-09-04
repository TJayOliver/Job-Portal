import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/home.jsx'
import Scholarships from './pages/scholarships.jsx'
import Internships from './pages/internships.jsx'
import Articles from './pages/articles.jsx'
import GraduateJobs from './pages/graduate jobs/graduate-jobs'
import Administrator from './pages/administrator/administrator.jsx';
import Dashboard from './pages/administrator/dashboard.jsx';
import ArticleTable from './pages/administrator/dashdata/articleTable.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/administrator' element={<Administrator />} />
      <Route path='/administrator/dashboard' element={<Dashboard />} />
      <Route path='/administrator/dashboard/article' element={<ArticleTable />} />
      <Route path='/graduatejobs' element={<GraduateJobs />} />
      <Route path='/internships' element={<Internships />} />
      <Route path='/scholarships' element={<Scholarships />} />
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
