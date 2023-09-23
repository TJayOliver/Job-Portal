import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import FeaturedArticle from "../components/Scholarships/FeaturedArticle"
import Scholarship from "../components/Scholarships/Scholarship"
import SchoHeader from "../components/Scholarships/SchoHeader"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"

const Scholarships = () =>{

    return(
        <>
            <Header/>
            <SchoHeader />
            <FeaturedArticle />
            <Scholarship />   
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Scholarships