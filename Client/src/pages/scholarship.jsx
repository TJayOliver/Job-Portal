import { useState,useEffect } from "react"
import image from '../assets/eight.jpg'
import  orgImage from '../assets/organizational.png'
import  resImage from '../assets/research.jpg'
import  govImage from '../assets/government.jpg'
import  privImage from '../assets/private.jpg'
import  intImage from '../assets/international.jpg'
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

const Scholarship = ()=>{
    const [scholarships, setScholarship] = useState([])
    const [scholarshipsarticle, setArticleScholarship] = useState([])
    const [loading, setloading] = useState(true);
    const [postPerPage, setPostPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:4040/scholarships', setScholarship, setloading, signal);
        fetch('http://localhost:4040/article/category/scholarship', setArticleScholarship, setloading, signal);

        return ()=>{controller.abort()}
    },[])    

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

    const submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/scholarship/search', searchInput)
        .then(response =>{
            setSResultsVerifier(true)
            setSearchResults(response.data)
        } )
        .catch(error => console.error(error.message))
    }

    const lastPageIndex = currentPage * postPerPage,
    firstPageIndex = lastPageIndex - postPerPage ;
    const schols = scholarships.slice(firstPageIndex, lastPageIndex);
    const searchRes = searchResults.slice(firstPageIndex, lastPageIndex)
    

    return(
        <>
            <Header />

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
                            to={'/scholarships/government'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Organizational'
                            text='Organizational Scholarships'
                            image={orgImage}
                            to={'/scholarships/organizational'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='International'
                            text='International Scholarships'
                            image={intImage}
                            to={'/scholarships/international'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Private'
                            text='Private Scholarships'
                            image={privImage}
                            to={'/scholarships/private'}
                            color='bg-gradient-to-r from-cyan-500 to-blue-500'
                        />
                        <ScholarshipCategoryBox 
                            category='Research'
                            text='Research Scholarships'
                            image={resImage}
                            to={'/scholarships/research'}
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
                        <div className=" flex flex-col gap-4">
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
                                    {loading ? <Loading className='justify-center m-auto' /> :
                                        <div className="flex flex-col gap-4">{
                                            searchResults.length === 0 ? `No Scholarships for ${searchInput.country} Found` :

                                            searchRes.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.description.slice(0,50)}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
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
                                            schols.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    description={list.description.slice(3, 200)}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
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
                <div className="flex flex-col justify-center py-8">
                    <div className="p-4">
                        <p className="font-bold text-4xl mb-2">Quick Scholarship Tip </p>
                    </div>

                    {loading ? <Loading /> :
                        <div className="flex flex-wrap gap-2 justify-between p-3 shrink-0">{
                            scholarshipsarticle.map((post, id) =>(
                            <ArticleBox key={id}
                                image={image}
                                author={post.author}
                                title={post.title}
                                to={`/articles/${post.title}/${post.id}`}
                            /> 
                        ))
                        }</div>
                    }
                </div>
                
            </main>
             
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Scholarship;