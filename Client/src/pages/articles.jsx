import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import { useEffect, useState } from "react"
import main from '../assets/cyril.jpg'
import { fetch} from "./request"
import Loading from "../components/Loading/Loading"
import Pagination from "../components/Pagination.jsx/Pagination"
import ArticleBox from "../components/Articles/ArticleBox"
import Platforms from '../components/Platforms/Platforms'
import MustReadArticles from "../components/Articles/MustReadArticles"
import FeaturedArticleBox from "../components/Articles/FeaturedArticleBox"
import MainArticle from "../components/Articles/MainArticle"
import Subscribe from "../components/Subscribe/Subscribe"
import axios from "axios"
import {MdNavigateNext} from 'react-icons/md'

const Articles = ()=>{
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [featured, setFeatured] = useState([]);
    const [mainfeatured, setMainFeatured] = useState([]);
    const [mustRead, setMustRead] = useState([]);
    
    const [postPerPage, setPostPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:4040/article', setArticles, setloading, signal);
        fetch('http://localhost:4040/article/featured', setFeatured, setloading, signal);
        fetch('http://localhost:4040/article/mainfeatured', setMainFeatured, setloading, signal);
        fetch('http://localhost:4040/article/mustread', setMustRead, setloading, signal);

        return ()=>{controller.abort()}
    },[])

    const lastPageIndex = currentPage * postPerPage,
    firstPageIndex = postPerPage - lastPageIndex;
    const allpost = articles.slice(firstPageIndex, lastPageIndex);

    const [subscribeResponse, setSubscribeResponse] = useState('');
    const [subcribeEmail, setSubscribeEmail] = useState({email: ''})
    const [checkSubscribeResponse, setCheckSubscribeResponse] = useState(false);

    const handleSubscribe = (e)=>{
        const{name, value} = e.target;
        setSubscribeEmail(prev =>({...prev, [name] : value}));
    }
    const submitSubscribe = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:4040/subscribe', subcribeEmail);
            const data = response.data.message;
            setSubscribeResponse(data)
            setCheckSubscribeResponse(true)
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }catch(error){
            setSubscribeResponse(error.message)
        } 
    }
    
    const [SubscribeState, SetSubscribeState] = useState(false)
    const [platformsState, setPlatformsState] = useState(false)

    const [newIndex, setNewIndex] = useState(0);
    const shuffleFeatured =()=>{
        if(newIndex < mustRead.length - 1){
        setNewIndex(prev => prev + 1)
        console.log(newIndex)
        }else{
            setNewIndex(0)
        } 
    }
    
    setInterval(() => {
        shuffleFeatured()
    }, 10000);
   
    return(
        <>
            <Header/>

            <Subscribe SubscribeState={SubscribeState} SetSubscribeState={SetSubscribeState} onChange={handleSubscribe} value={subcribeEmail.email} onClick={submitSubscribe} checkSubscribeResponse={checkSubscribeResponse} subscribeResponse={subscribeResponse} />

            <main className="flex flex-col justify-center m-auto max-w-4xl gap-10">
                {mainfeatured.map((post, id)=>(
                    <MainArticle key={id}
                        title={post.title}
                        category={post.category}
                        post={post.post}
                    />
                ))
                }

                {/* subscribe */}
                <section>
                    <div className="h-24 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center rounded-md text-white justify-between">
                        <div>
                            <p className="text-2xl font-medium mb-2">Never Miss an Article!</p>
                        </div>
                        <div onClick={()=>SetSubscribeState(true)} role='button' className="p-3 flex items-center bg-white text-black rounded-md">Subscribe</div>
                    </div>
                </section>

                {/* all articles */}
                <section >
                    <p className="font-bold text-xl mt-4 mb-2 justify-center md:justify-normal flex">Recent Topics</p>
                    <div className="flex items-center justify-center md:justify-start gap-8 flex-wrap ">
                        {loading ? <Loading/> : 
                        allpost.map((post,id)=>(
                            <ArticleBox key={id}
                                date={post.datecreated}
                                title={post.title}
                                author={post.author}
                                category={post.category}
                                to={`articles/${post.title}/${post.id}`}
                            />
                        ))  
                        }
                        {loading ? null : <Pagination totalPost={articles.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
                    </div>
                </section>

                {/* featured articles */}
                <section className="relative">
                    <p className="text-xl font-bold mb-8 flex justify-center md:flex-none">Featured Article</p>

                    <div onClick={shuffleFeatured} className="rounded-full bg-gray-50 h-6 w-6 mb-1 flex items-center justify-center text-xl cursor-pointer">
                        <MdNavigateNext />
                    </div>

                    <div className="absolute h-[27rem] md:h-96  bg-white opacity-10 rounded-lg w-full "></div>
                        
                    {/* the article */}
                    <div className="h-[27rem] md:h-96 relative">
                        {loading ? <Loading/> :
                        featured.map((post, index)=>{
                            if(index === newIndex){
                                return(
                                    <FeaturedArticleBox key={index}
                                        title={post.title}
                                        date={post.datecreated}
                                        post={post.post}
                                        onClick={shuffleFeatured}
                                        category={post.category}
                                    />
                                )
                            }
                        })}
                    </div>
                    
                </section>
                
                {/* must read articles */}
                <section>
                    <p className="font-bold text-xl mb-2 justify-center flex md:justify-start">Must Read Topics</p>
                    <div className=" flex flex-wrap gap-4 justify-center md:justify-start">
                        {loading ? <Loading/> 

                        : mustRead.map((post, id) =>(
                            <MustReadArticles key={id}
                            date={post.datecreated}
                            title={post.title}
                            author={post.author}
                            category={post.category}
                            to={`articles/${post.title}/${post.id}`}
                        />
                        ))   
                        }                       
                    </div>
                </section>

            </main>

            <Platforms platformsState={platformsState} setPlatformsState={setPlatformsState} />

            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Articles;