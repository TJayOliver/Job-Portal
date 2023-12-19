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
    return(
        <>
        <Header />

        {loading ? <Loading /> 
        : articles.map((post, id) =>(
            <main key={id} className="w-full max-w-7xl flex flex-col justify-center m-auto">
                
                <div className="h-96 w-full ">
                    <img src={One} className=' object-cover h-full w-full rounded-2xl' alt="flyer" />
                </div>

                {/* title and authors name and picture */}
                <div className="flex justify-between p-4">
                    <p className="text-4xl font-bold">{post.title}</p>
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full h-10 w-10">
                            <img src={One} className=' rounded-full object-cover h-full w-full'/>
                        </div>
                        <div>
                            <small>AUTHOR</small>
                            <p>{post.author}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between text-justify p-4">
                    <p className="basis-[80%]">{post.post}</p>

                    <div className="bg-red-500 h-96 basis[10%]">

                    </div>
                </div>

                <hr></hr>
                <p className="font-bold text-xl">Related Articles</p>
                
                {
                    loading ? <Loading/> 
                    :ArticlesOnDescriptionPage.map((post, id) =>(
                        <div className="flex flex-wrap justify-center">
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
                
                <hr></hr>
            </main>
        ))
        }

        <SocialMedia />
        <Footer />
        </>
    )
}

export default ArticlePost;