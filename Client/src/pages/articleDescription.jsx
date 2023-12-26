import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import One from '../assets/six.jpg';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {fetch, articlesDescription } from "./request";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
import ArticleBox from "../components/Articles/ArticleBox";
import {HiX} from 'react-icons/hi'

const ArticlePost = () =>{
    const params = useParams(), title = params.title, id = params.id;

    const [articles, setArticles] = useState([]);
    const [ArticlesOnDescriptionPage,setArticlesOnDescriptionPage] = useState([]);
    const [loading, setloading] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal

        articlesDescription(setArticles, setloading, id, signal)
        fetch('http://localhost:4040/api/articles-description-page-get', setArticlesOnDescriptionPage, setloading, signal);

        return ()=>{controller.abort()}
    },[])
    const [anime, setanime] = useState(false)
    return(
        <>
        <Header />
        <aside className={anime ? " backdrop-blur-sm z-50 absolute h-screen w-full top-0 p-3" : null}>
            <div className={anime ? 'subscribe' : 'closeSubscribe'}>
                <div className="flex items-center justify-between p-4">
                    <p className="text-xl">Join Our Newsletter</p>
                    <HiX className="text-3xl" onClick={()=>setanime(false)}/>
                </div>
            </div>
        </aside>

        {loading ? <Loading /> 
        : articles.map((post, id) =>(
            <main key={id} className="w-full max-w-7xl flex flex-col justify-center m-auto p-2">
                
                <section className="p-10 justify-center flex flex-col gap-8 h-96 w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg text-justify">
                    <div className="max-w-4xl">
                        <small>{post.datecreated}</small>
                        <p className=" text-5xl font-bold text-white mb-8">{post.title}</p>
                        <div className="flex items-center gap-3 text-white">
                            <div className="rounded-full bg-white h-12 w-12 shrink-0"></div>
                            <div>
                                <p className="font-medium">{post.author || 'Cyril Asiedu Nketiah'}</p>
                                <small className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat similique voluptas pariatur eligendi laborum praesentium laudantium maxime? Quaerat repudiandae ex iste minus in earum, nulla temporibus? Quae praesentium non odit.</small>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex justify-between text-justify p-4">
                    <div className="p-2 h-96 basis-[30%]">
                        <p className="font-medium text-xl">Other Articles</p>

                        <div className="border-l-[1px] border-black ">
                        {ArticlesOnDescriptionPage.map((list, id)=>(
                            <div key={id} className="hover:bg-gray-50  hover:border-l-blue-600 p-4 hover:border-l-[1px]  duration-75 ease-in ">
                                <p>{list.title}</p>
                            </div>
                        ))
                        }
                        </div>
                    </div>

                    <div className="basis-[80%]">
                        <div>
                            <div className="h-24 p-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 flex items-center rounded-md text-white justify-between">
                                <div>
                                    <p className="text-2xl font-medium mb-2">Never Miss an Article!</p>
                                </div>
                                <div onClick={()=>setanime(prev => !prev)} role='button' className="p-3 flex items-center bg-white text-black rounded-md">Subscribe</div>
                                
                            </div>
                        </div>

                        <div dangerouslySetInnerHTML={{__html:post.post}} />
                    </div>

                </section>
    
                <p className="font-bold text-xl">Related Articles</p>
                
                <section className="flex flex-wrap justify-start">
                    {loading ? <Loading /> :  ArticlesOnDescriptionPage.map((post, id)=>(
                        <div className="flex flex-wrap gap-4">
                            <ArticleBox key={id}
                                image={One}
                                brief={post.briefinfo}
                                date={post.datecreated}
                                title={post.title}
                                author={post.author || 'T-Jay Oliver'}
                                to={`/articles/${post.title}/${post.id}`}
                            />
                        </div>
                    ))
                    }
                </section>
                
            </main>
        ))
        }

        <SocialMedia />
        <Footer />
        </>
    )
}

export default ArticlePost;