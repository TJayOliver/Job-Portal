import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {fetch, articlesDescription } from "./request";
import { useState } from "react";
import Loading from "../components/Loading/Loading";;
import Platforms from "../components/Platforms/Platforms";
import Subscribe from "../components/Subscribe/Subscribe";
import axios from "axios";
import parse from 'html-react-parser'

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
    return(
        <>
        <Header />
        
        <Subscribe SubscribeState={SubscribeState} SetSubscribeState={SetSubscribeState} onChange={handleSubscribe} value={subcribeEmail.email} onClick={submitSubscribe} checkSubscribeResponse={checkSubscribeResponse} subscribeResponse={subscribeResponse} />

        {loading ? <Loading /> 
        : articles.map((post, id) =>(
            <main key={id} className="w-full max-w-7xl flex flex-col justify-center m-auto p-2">

                {/* article headings */}
                <section className="p-10 justify-center flex flex-col gap-8 h-96 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-justify">
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
                            <div className="h-24 p-3 bg-teal-600 flex items-center rounded-md text-white justify-between">
                                <div>
                                    <p className="text-2xl font-medium mb-2">Never Miss an Article!</p>
                                </div>
                                <div onClick={()=>SetSubscribeState(true)} role='button' className="p-3 flex items-center bg-white text-black rounded-md">Subscribe</div>
                                
                            </div>
                        </div>

                        <div>{parse(post.post)}</div>
                    </div>

                </section>
    
                <p className="font-bold text-xl">Related Articles</p>
                
                <section className="flex flex-wrap justify-start">
                    {loading ? <Loading /> :  ArticlesOnDescriptionPage.map((post, id)=>(
                        <div className="flex flex-wrap gap-4">
                            
                        </div>
                    ))
                    }
                </section>
                
            </main>
        ))
        }

        <Platforms platformsState={platformsState} setPlatformsState={setPlatformsState} />

        <SocialMedia />
        <Footer />
        </>
    )
}

export default ArticlePost;