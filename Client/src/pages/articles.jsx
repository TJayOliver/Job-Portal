import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import ArticleBox from "../components/Articles/ArticleBox"
import { useEffect, useState } from "react"
import One from '../assets/five.jpg'
import ArticleSmallFeaturedBox from "../components/Articles/ArticleSmallFeaturedBox"
import { allArticles, featuredArticles, MainFeaturedArticles, mustReadArticles } from "./request"
import Loading from "../components/Loading/Loading"
import Pagination from "../components/Pagination.jsx/Pagination"
import MustReadArticles from "../components/Articles/MustReadArticles"
import MainFeaturedBox from "../components/Articles/MainFeaturedBox"

const Articles = ()=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [featured, setFeatured] = useState([]);
    const [mainfeatured, setMainFeatured] = useState([]);
    const [mustRead, setMustRead] = useState([]);
    
    const [postPerPage, setPostPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        allArticles(setArticles, setLoading, signal)
        featuredArticles(setFeatured, setLoading, signal)
        MainFeaturedArticles(setMainFeatured, setLoading, signal);
        mustReadArticles(setMustRead, setLoading, signal)

        return ()=>{controller.abort()}
    },[])

    const lastPageIndex = currentPage * postPerPage,
    firstPageIndex = postPerPage - lastPageIndex;
    const allpost = articles.slice(firstPageIndex, lastPageIndex);
    
    return(
        <>
            <Header/>

            {/* featured */}
            <div className="flex flex-wrap justify-center gap-4">

                {loading ? <Loading /> : mainfeatured.map((post, id) =>(
                    <MainFeaturedBox key={id}
                        image={One}
                        author={post.author || 'T-Jay Oliver'} 
                        date={post.datecreated}
                        title={post.title}
                        brief={post.briefinfo.replace(/^\d+[.,]/, '').trim().slice(0,40)}  
                        to={`/articles/${post.title}/${post.id}`}
                    />
                ))}
                    
                
                {/* other featured */}
                <div>
                    {loading ? <Loading/> :
                        <div className=" flex flex-col">
                            {featured.map((post, id) =>(
                                <ArticleSmallFeaturedBox key={id} 
                                    image={One}
                                    title={post.title}
                                    author={post.author || 'T-Jay Oliver'}
                                    date={post.datecreated}
                                    to={`/articles/${post.title}/${post.id}`}
                                />  
                            ))}
                        </div>
                    }
                </div>
            </div>

            <p className="font-bold text-xl justify-center flex p-4 ">Must Read</p>

            {/* must read */}
            <div className="p-2">
                {loading ? <Loading /> :
                    <div className="flex flex-wrap justify-center gap-5">
                        {mustRead.map((post, id) =>(
                            <MustReadArticles key={id}
                                image={One}
                                author={post.author || 'T-Jay Oliver'}
                                title={post.title}
                                brief={post.briefinfo}
                                date={post.datecreated}
                                to={`/articles/${post.title}/${post.id}`}
                            />
                        ))}
                   </div>
                }
            </div>
            
            <p className="font-bold text-xl justify-center flex p-4 ">Highlights</p>

            {/* all */}
            <div className="p-2">
                {loading ? <Loading/> :
                    <div className="flex justify-center flex-wrap max-w-7xl m-auto gap-3">
                        {allpost.map((post, id) =>(
                            <ArticleBox key={id}
                                image={One}
                                author={post.author || 'T-Jay Oliver'}
                                brief={post.briefinfo.replace(/^\d+[.,]/, '').trim().slice(0,90)}
                                date={post.datecreated}
                                title={post.title}
                                to={`/articles/${post.title}/${post.id}`}
                            />
                        ))}
                    </div>
                }
                <Pagination totalPost={articles.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>

            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Articles;