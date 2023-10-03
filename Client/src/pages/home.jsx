import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import SocialMedia from '../components/Homepage/SocialMedia/SocialMedia.jsx'
import InternHome from '../components/Homepage/InternHome/internhome.jsx'
import SchoHome from '../components/Homepage/SchoHome/SchoHome.jsx'
import Information from '../components/Homepage/Information/info.jsx'

export default function Home() {
  return (
    <>
    <Header /> 
    <Information />
    <SchoHome/>
    <SocialMedia />
    <Footer />
    </>
  )
}
