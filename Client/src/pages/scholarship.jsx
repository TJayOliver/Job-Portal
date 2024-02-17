import { useState,useEffect } from "react"
import image from '../assets/eight.jpg'
import orgImage from '../assets/organizational.png'
import resImage from '../assets/research.jpg'
import govImage from '../assets/government.jpg'
import privImage from '../assets/private.jpg'
import intImage from '../assets/international.jpg'
import axios from "axios"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import ScholarshipCategoryBox from "../components/Scholarships/ScholarshipCat"
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'
import { BiSearch } from "react-icons/bi"
import { fetch } from "./request"
import Loading from '../components/Loading/Loading';
import ArticleBox from '../components/Articles/ArticleBox';
import ScholarshipBox from "../components/Scholarships/ScholarshipBox"
import Pagination from "../components/Pagination.jsx/Pagination"
import { TypeAnimation } from 'react-type-animation';
import Platforms from "../components/Platforms/Platforms";
import Subscribe from '../components/Subscribe/Subscribe';

const Scholarship = ()=>{
    const [scholarships, setScholarship] = useState([])
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true);
    const [postPerPage, setPostPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('scholarship', setScholarship, setLoading, signal, setMessage);
        fetch('article/category/scholarship', setArticle, setLoading, signal, setMessage);

        return ()=>{controller.abort()}
    },[]);
    
    const container = document.getElementById('container')

    const handleLeftClick = () =>{
        const scrollNumber = 100;
        container.scrollLeft -= scrollNumber
    }
    const handleRightClick = () =>{
        const scrollNumber = 100;
        container.scrollLeft += scrollNumber
    }

    const [searchInput, setSearchInput] = useState({country:''})

    const handleSearchInputs = (e) =>{
        const {name, value} = e.target;
        setSearchInput(prev =>({...prev, [name] : value}))
    }
    const [searchResults, setSearchResults] = useState([]);
    const [SResultsVerifier, setSResultsVerifier] = useState(false)

    const submit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4040/scholarship/search', searchInput);
            setSResultsVerifier(true)
            setSearchResults(response.data.data)
        } catch (error) {
            console.error(error.message)
        }
    }

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

    const lastPageIndex = currentPage * postPerPage;
    const firstPageIndex = lastPageIndex - postPerPage ;
    const scholarshipSlicedData = scholarships.slice(firstPageIndex, lastPageIndex);
    const searchResultsData = searchResults.slice(firstPageIndex, lastPageIndex);
    
    return(
        <>
            <Header />

            <Subscribe SubscribeState={SubscribeState} SetSubscribeState={SetSubscribeState} onChange={handleSubscribe} value={subcribeEmail.email} onClick={submitSubscribe} checkSubscribeResponse={checkSubscribeResponse} subscribeResponse={subscribeResponse} />

            <aside className="h-36 flex items-center relative bg-gradient-to-r from-cyan-500 to-blue-500 m-auto ">
                <div className="m-auto max-w-7xl w-full text-4xl font-medium text-white">
                    
                    <div className="">
                        <TypeAnimation sequence={['Every One Deserves a Scholarship','Your Time is Now', 'Apply']} speed={300} repeat={Infinity} />
                    </div>
                </div>
                
            </aside>

            <main className="max-w-7xl flex flex-col m-auto justify-center ">
                <div className=" bg-red-500 hidden w-full h-[8rem] ">
                    <div className="w-2/4 rounded-2xl px-6 py-10 flex flex-col gap-4">
                        <p className="text-white text-5xl font-bold">Every Bright Student Deserves a Scholarships</p>
                        <p>Bigger Scholarship packages to achieve your dreams, we provide all of these great things for you</p>
                    </div>
                    <img src={image} className="w-2/4 object-cover rounded-r-2xl" />
                </div>

                {/* Scholarship Categories */}
                <div className=" flex flex-col justify-center py-1">
                    <div className="p-4">
                        <p className="font-bold text-4xl mb-2">Scholarship Categories</p>

                        <div className="flex justify-between">
                            <p>Many categories are presented, each containing numerous scholarships and ready for you to browse through</p>
                            <div className="text-3xl flex gap-4 ">
                                <BsArrowLeftSquare id="leftbtn" onClick={handleLeftClick} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer'/>
                                <BsArrowRightSquare id="rightbtn" onClick={handleRightClick} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer'/>
                            </div>
                        </div>
                    </div>

                    <div id="container" className="flex justify-between p-2 gap-2 overflow-x-scroll scrollbar duration-100 ease-in shrink-0 ">
                        <ScholarshipCategoryBox 
                            category='Government'
                            text='Government Scholarships'
                            image={govImage}
                            to={'/scholarship/Government'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Organizational'
                            text='Organizational Scholarships'
                            image={orgImage}
                            to={'/scholarship/Organizational'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='International'
                            text='International Scholarships'
                            image={intImage}
                            to={'/scholarship/International'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Private'
                            text='Private Scholarships'
                            image={privImage}
                            to={'/scholarship/Private'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Research'
                            text='Research Scholarships'
                            image={resImage}
                            to={'/scholarship/Research'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        
                    </div>
                </div>

                {/* all Scholarships */}
                <div className="flex flex-col justify-center py-3 p-2">
                    <div className="p-4">
                        <p className="font-bold text-4xl mb-2">Explore</p>
                    </div>

                   <div className="flex justify-center gap-2">
                        
                        {/* scholarships and search by country results */}
                        <div className=" flex flex-col gap-4 w-full">
                            <form onSubmit={submit} className="flex justify-between border-gray-100 border-2 rounded-lg">

                                {/* Location Search */}
                                <div className="relative w-full">
                                    <BiSearch className=" absolute text-2xl left-2 top-2.5 " />
                                    <input 
                                        type='text'
                                        placeholder="search by country" 
                                        name="country"
                                        value={searchInput.country}
                                        onChange={handleSearchInputs}
                                        className="px-9 w-full rounded-r-lg p-2 outline-none placeholder:relative placeholder:left-2 placeholder:text-sm" 
                                    />
                                </div>

                                <button type="search" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-700 h-8 flex items-center rounded-lg text-white p-2 ml-1 mt-1 whitespace-nowrap">
                                <p>Find Scholarships</p>
                                </button>

                            </form>

                            {SResultsVerifier ? 
                                // search results
                                <div className="flex flex-col gap-4">
                                    {loading ? 
                                        <Loading className='justify-center m-auto' /> 
                                        :
                                        <div className="flex flex-wrap gap-4">{
                                            searchResults.length === 0 ? `No Scholarships for ${searchInput.country} Found` :

                                            searchResultsData.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    description={list.description.slice(0, 200)}
                                                    to={`/scholarship/${list.scholarshipname}/${list.id}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={searchResults.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div>
                                    }  
                                </div> 
                            :  
                                // all scholarships
                                <div>
                                    {loading ? <Loading className='justify-center m-auto' /> :
                                        <div className="grid md:grid-cols-2 gap-4">{
                                            scholarshipSlicedData.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    description={list.description.slice(0, 200)}
                                                    to={`/scholarship/${list.scholarshipname}/${list.id}`}
                                                />
                                            ))
                                        }
                                        
                                        </div>
                                    }
                                    <Pagination totalPost={scholarships.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                </div>
                            }
                        </div>
                   </div>
                    
                </div>

                {/* Quick Scholarship Tip */}
                <section className="flex flex-col justify-center py-2 p-2">
                    <div className="p-4">
                        <p className="font-bold text-2xl md:text-4xl mb-2">Quick Scholarship Tip </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-between shrink-0 ">
                    {loading ? <Loading /> :
                        article.map( (post, id) => (
                            <ArticleBox key={id}
                                image = {post.image}
                                date = {post.datecreated}
                                title = {post.title}
                                category = {post.category}
                                author = {post.author}
                                to = {`/article/${post.title}/${post.id}`}
                            />
                        ))
                    }
                    </div>
                </section>
                
            </main>

            <Platforms platformsState={platformsState} setPlatformsState={setPlatformsState} />
             
            <SocialMedia />
            <Footer onClick={ () => SetSubscribeState(true)} />
        </>
    )
}

export default Scholarship;