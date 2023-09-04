import Header from '../components/Header/Header.jsx'
import Graduates from '../components/Graduates/Graduates.jsx'
import LatestJobs from '../components/LatestJobs/LatestJobs.jsx'
import Footer from '../components/Footer/Footer.jsx'
import JobSearch from '../components/JobSearch.jsx'
import Groups from '../components/Categories/Groups.jsx'
import SocialMedia from '../components/SocialMedia/SocialMedia.jsx'
import InternHome from '../components/InternHome/internhome.jsx'
import SchoHome from '../components/SchoHome/SchoHome.jsx'

export default function Home() {
  return (
    <>
    <Header />
    <JobSearch/>
    <Graduates />
    <LatestJobs />
    <SchoHome/>
    <Groups />
    <InternHome />
    <SocialMedia />
    <Footer />
    </>
  )
}
