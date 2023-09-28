import Header from '../components/Header/Header.jsx'
import Graduates from '../components/Graduates/Graduates.jsx'
import LatestJobs from '../components/LatestJobs/LatestJobs.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Groups from '../components/Homepage/Categories/Groups.jsx'
import SocialMedia from '../components/Homepage/SocialMedia/SocialMedia.jsx'
import InternHome from '../components/Homepage/InternHome/internhome.jsx'
import SchoHome from '../components/Homepage/SchoHome/SchoHome.jsx'
import Information from '../components/Homepage/Information/info.jsx'
import FormInput from '../components/Dashboard/formInputs.jsx'

export default function Home() {
  return (
    <>
    <Header /> 
    <Information />
    <LatestJobs />
    <SchoHome/>
    <Groups />
    <InternHome />
    <SocialMedia />
    <Footer />
    </>
  )
}
