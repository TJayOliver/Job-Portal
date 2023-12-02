import { useState,useEffect } from "react"
import image from '../assets/eight.jpg'
import axios from "axios"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import ScholarshipCategoryBox from "../components/Scholarships/ScholarshipCat"
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'
import { BiSearch } from "react-icons/bi"
import { allScholarships, articleScholarship } from "./request"
import Loading from '../components/Loading/Loading';
import ArticleBox from '../components/Articles/ArticleBox';
import ScholarshipBox from "../components/Scholarships/ScholarshipBox"
import Pagination from "../components/Pagination.jsx/Pagination"

const Scholarship = ()=>{
    const [scholarships, setScholarship] = useState([])
    const [scholarshipsarticle, setArticleScholarship] = useState([])
    const [loading, setloading] = useState(true);
    const [postPerPage, setPostPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        allScholarships(setScholarship, setloading)
        articleScholarship(setArticleScholarship, setloading)
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
        axios.post('http://localhost:4040/api/scholarships-search', searchInput)
        .then(response =>{
            console.log(searchInput)
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

            <div className="h-36 p-2 flex items-center relative bg-blue-400">
                <p className=" text-2xl font-bold text-white">Every Bright Student Deserves a Scholarship!</p>
                <div className="">
                    <div className="absolute -right-2">
                        <div className=" h-12 bg-white w-20 -rotate-12"></div>
                    </div>
                    <div className="absolute right-20 -top-2">
                        <div className=" h-12 bg-blue-100 w-24 -rotate-45"></div>
                    </div>
                    <div className="absolute -right-1 top-32 -rotate-12">
                        <div className=" h-10 bg-black w-44 "></div>
                    </div>
                    <div className="absolute right-32 rotate-45">
                        <div className=" h-10 bg-black w-64 "></div>
                    </div>
                    <div className="absolute right-96 top-0 -rotate-45">
                        <div className=" h-10 bg-black w-40 "></div>
                    </div>
                    <div className="absolute right-64 bottom-0 rotate-45">
                        <div className=" h-10 bg-blue-200 w-36 "></div>
                    </div>
                    <div className="absolute right-[26rem] -bottom-2 -rotate-45">
                        <div className=" h-10 bg-white w-20 "></div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl flex flex-col m-auto justify-center ">
                <div className=" bg-red-500 hidden w-full h-[8rem] ">
                    <div className="w-2/4 rounded-2xl px-6 py-10 flex flex-col gap-4">
                        <p className="text-white text-5xl font-bold">Every Bright Student Deserves a Scholarships</p>
                        <p>Bigger Scholarship packages to achieve your dreams, we provide all of these great things for you</p>
                    </div>
                    <img src={image} className="w-2/4 object-cover rounded-r-2xl" />
                </div>

                {/* Scholarship Categories */}
                <div className=" flex flex-col justify-center py-8">
                    <div className="p-4">
                        <p className="font-bold text-4xl mb-2">Scholarship Categories</p>

                        <div className="flex justify-between">
                            <p>Many categories are presented, each containing numerous scholarships and ready for you to browse through</p>
                            <div className="text-3xl flex gap-4 ">
                                <BsArrowLeftSquare id="leftbtn" onClick={handleLeftClick}/>
                                <BsArrowRightSquare id="rightbtn" onClick={handleRightClick}/>
                            </div>
                        </div>
                    </div>

                    <div id="container" className="flex justify-between p-2 gap-2 overflow-x-scroll scrollbar duration-100 ease-in shrink-0 ">
                        <ScholarshipCategoryBox 
                            category='Government'
                            text='Government Scholarships'
                            image={image}
                        />
                        <ScholarshipCategoryBox 
                            category='Organizational'
                            text='Organizational Scholarships'
                            image={image}
                        />
                        <ScholarshipCategoryBox 
                            category='International'
                            text='International Scholarships'
                            image={image}
                        />
                        <ScholarshipCategoryBox 
                            category='Private'
                            text='Private Scholarships'
                            image={image}
                        />
                        <ScholarshipCategoryBox 
                            category='Research'
                            text='Research Scholarships'
                            image={image}
                        />
                        
                    </div>
                </div>

                {/* all Scholarships */}
                <div className="flex flex-col justify-center py-3 p-2">
                    <div className="p-4">
                        <p className="font-bold text-4xl mb-2">Explore </p>
                    </div>

                   <div className="flex justify-between gap-2">
                        {/* filter */}
                        <form className=" hidden md:block basis-[20rem] h-[28rem] p-2 border-[1px] border-gray-100  rounded-lg">
                            <div className=" flex justify-between font-bold mb-2">
                                <p>Filter</p>
                                <input type='reset'  />
                            </div>

                            <hr></hr>

                            <div className="p-2">
                                <p className="font-medium">Degree Level</p>
                                <div id="all-levels" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="all"
                                        
                                        id="all" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="all">All</label>
                                </div>
                                <div id="bachelors" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="bachelorsdegree"
                                        
                                        id="bachelorsdegree" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="bachelorsdegree">Bachelors</label>
                                </div>
                                <div id="masters" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="masters"
                                        
                                        id="masters" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="masters">Masters</label>
                                </div>
                                <div id="doctorate" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="doctorate"
                                        
                                        id="doctorate" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="doctorate">Doctorate</label>
                                </div>
                                <div id="pgd" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="pgd"
                                        
                                        id="pgd" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="pgd">Post Graduate Diploma</label>
                                </div>
                            </div>

                            <hr></hr>

                            <div className="p-2">
                                <p className="font-medium">Funding Type</p>
                                <div id="fullyfunded" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="fullyfunded"
                                        
                                        id="fullyfunded" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="fullyfunded">Fully Funded</label>
                                </div>
                                <div id="partial" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="partial"
                                        
                                        id="partial" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="partial">Partial</label>
                                </div> 
                            </div>

                            <div className="p-2">
                                <p className="font-medium">Category</p>
                                <div id="government" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="government"
                                        
                                        id="government" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="government">Government</label>
                                </div>
                                <div id="private" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="private"
                                        
                                        id="private" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="private">Private</label>
                                </div> 
                                <div id="organizational" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="organizational"
                                        
                                        id="organizational" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="organizational">Organizational</label>
                                </div> 
                                <div id="research" className="flex gap-2">
                                    <input 
                                        type='checkbox' 
                                        name="research"
                                        
                                        id="research" 
                                        className=" accent-[#004242]"
                                    />
                                    <label htmlFor="research">Research</label>
                                </div> 
                            </div>

                        </form>
                        
                        {/* scholarships and search by country results */}
                        <div className=" basis-[60rem] flex flex-col gap-4">
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

                                <button type="search" className="bg-[#004242] hover:bg-[#035353] h-8 flex items-center rounded-lg text-white p-2 ml-1 mt-1 whitespace-nowrap">
                                <p>Find Scholarships</p>
                                </button>

                            </form>

                            {SResultsVerifier ? 
                                // search results
                                <div className="flex flex-col gap-4">
                                    {loading ? <Loading /> :
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
                                                    about={list.aboutscholarship}
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
                                    {loading ? <Loading /> :
                                        <div className="flex flex-col gap-4">{
                                            schols.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={scholarships.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div>
                                    }
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
                        <div className="flex flex-wrap gap-2 justify-between shrink-0">{
                            scholarshipsarticle.map((post, id) =>(
                            <ArticleBox key={id}
                                image={image}
                                author={post.author}
                                title={post.title}
                                brief={post.briefinfo.replace(/^\d+[.,]/, '').trim().slice(0,90)}
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