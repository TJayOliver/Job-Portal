import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import ArticleBox from "../components/Articles/articleBox"
import { useEffect, useState } from "react"
import axios from 'axios'

const Articles = ()=>{
    const [articleData, setArticleData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const retrieve = async() =>{
            try{
                const response = await axios.get('http://localhost:4040/api/articles-get')
                const rep = response.data;
                setArticleData(rep);
                setLoading(false);
            }catch(error){
                console.error(error.message)
            }
        }
        retrieve();
    },[])
    
    return(
        <>
            <Header/>
            <div className="h-96  bg-yellow-300 relative">
                <h1 className=" absolute -translate-y-2/4 top-2/4 text-4xl font-bold px-14 tracking-widest ">Learn From The Experts....</h1>
            </div>

            <div className=" grid-cols-1 grid place-content-center md:grid-cols-2 lg:flex lg:flex-wrap gap-x-10 px-6">
                {loading ? '<div>loading....</div>' 
                    : articleData.map((list)=>(
                        <ArticleBox key={list.id}
                            image={list.image}
                            post={list.post}
                        />
                    ))}
            </div>
            
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Articles