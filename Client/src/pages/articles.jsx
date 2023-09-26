import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import ArticleBox from "../components/Articles/articleBox"

const Articles = ()=>{
    return(
        <main >
            <Header/>

            <div className="h-96 mb-4 bg-yellow-300 relative">
                <h1 className=" absolute -translate-y-2/4 top-2/4 text-4xl font-bold px-14 tracking-widest ">Learn From The Experts....</h1>
            </div>

            <div className=" grid-cols-1 grid place-content-center md:grid-cols-2 lg:flex lg:flex-wrap gap-x-10 px-6">
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
            </div>
            
            <SocialMedia/>
            <Footer/>
        </main>
    )
}

export default Articles