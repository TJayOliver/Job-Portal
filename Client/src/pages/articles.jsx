import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import FeaturedArticle from "../components/Articles/FeaturedArticle"
import LatestArticles from "../components/Articles/LatestArticles"


const Articles = ()=>{
    return(
        <div className="h-screen relative">
            <Header/>

            <div className="h-96 bg-yellow-300 relative">
                <h1 className=" absolute -translate-y-2/4 top-2/4 text-4xl font-bold px-14 tracking-widest">Learn From The Experts....</h1>
            </div>

            <div className=" bg-white px-8 py-2">
                
                <div className=" p-2 h-full">
                    
                    <FeaturedArticle />
                    <LatestArticles  />
                    
                </div>
            </div>

            <SocialMedia/>
            <Footer/>
        </div>
    )
}

export default Articles