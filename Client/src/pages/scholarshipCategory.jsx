import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import image from '../assets/eight.jpg'
import one from '../assets/eight.jpg'
import axios from "axios"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import ScholarshipCategoryBox from "../components/Scholarships/ScholarshipCat"
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'
import { BiSearch } from "react-icons/bi"
import {fetch} from "./request"
import Loading from '../components/Loading/Loading';
import ArticleBox from '../components/Articles/ArticleBox';
import ScholarshipBox from "../components/Scholarships/ScholarshipBox"
import Pagination from "../components/Pagination.jsx/Pagination"

const Scholarship = ()=>{
    const params = useParams(), category = params.category;

    const [scholarships, setScholarship] = useState([]),
    [scholarshipsarticle, setArticleScholarship] = useState([]);

    const [governmentScholarship, setGovernmentScholarships] = useState([]),
    [organizationalScholarship, setOrganizationalScholarships] = useState([]),
    [privateScholarship, setPrivateScholarships] = useState([]),
    [researchScholarship, setResearchScholarships] = useState([]),
    [internationalScholarship, setInternationalScholarships] = useState([]);

    const [loading, setloading] = useState(true);
    const [postPerPage, setPostPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:4040/api/scholarships-get', setScholarship, setloading, signal);
        fetch('http://localhost:4040/api/scholarships/government', setGovernmentScholarships, setloading, signal);
        fetch('http://localhost:4040/api/scholarships/organizational', setOrganizationalScholarships, setloading, signal);
        fetch('http://localhost:4040/api/scholarships/private', setPrivateScholarships, setloading, signal);
        fetch('http://localhost:4040/api/scholarships/research', setResearchScholarships, setloading, signal);
        fetch('http://localhost:4040/api/scholarships/international', setInternationalScholarships, setloading, signal);
        fetch('http://localhost:4040/api/articles-scholarship', setArticleScholarship, setloading, signal);

        return()=>{controller.abort()}
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
            setSResultsVerifier(true)
            setSearchResults(response.data)
        } )
        .catch(error => console.error(error.message))
    }

    const lastPageIndex = currentPage * postPerPage,
    firstPageIndex = lastPageIndex - postPerPage ;

    const allScholars = scholarships.slice(firstPageIndex, lastPageIndex),
    gov = governmentScholarship.slice(firstPageIndex, lastPageIndex),
    org = organizationalScholarship.slice(firstPageIndex, lastPageIndex),
    priv = privateScholarship.slice(firstPageIndex, lastPageIndex),
    res = researchScholarship.slice(firstPageIndex, lastPageIndex),
    int = internationalScholarship.slice(firstPageIndex, lastPageIndex);

    const searchRes = searchResults.slice(firstPageIndex, lastPageIndex)

    return(
        <>
            <Header />

            <main className="max-w-7xl flex flex-col m-auto justify-center p-1">
                {/* heading */}
                <section className=" bg-red-500 flex w-full h-[14rem] ">
                    <div className="w-2/4 rounded-2xl md:px-6 py-10 flex flex-col gap-4">
                        <p className="text-white text-3xl md:text-5xl font-bold">{category.charAt(0).toUpperCase() + category.slice(1)} Scholarships</p>
                        <p className="text-sm md:text-md ">Browse through thousands of {category.charAt(0).toUpperCase() + category.slice(1)} Scholarships</p>
                    </div>
                    <img src={image} className="w-2/4 object-cover" />
                </section>

                {/* Scholarships */}
                <section className="flex flex-col justify-center py-3 p-2">
                    <div className="">
                        <p className="font-bold text-4xl mb-2">Explore</p>
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
                                <p>Search</p>
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
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={searchResults.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div>
                                    }  
                                </div> 
                            : 
                                // display all scholarships by category
                                <div>
                                    {category === 'government' ? 
                                        <div className="flex flex-col gap-4">
                                        {
                                            gov.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={governmentScholarship.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div> : 
                                    category === 'organizational' ? 
                                        <div className="flex flex-col gap-4">
                                        {
                                            org.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={organizationalScholarship.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div> :
                                    category === 'private' ? 
                                        <div className="flex flex-col gap-4">
                                        {
                                            priv.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={privateScholarship.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div> : 
                                    category === 'research' ? 
                                        <div className="flex flex-col gap-4">
                                        {
                                            res.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={researchScholarship.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div> : 
                                    category === 'international' ? 
                                        <div className="flex flex-col gap-4">
                                        {
                                            int.map((list, id)=>(
                                                <ScholarshipBox key={id}
                                                    image={image}
                                                    scholarshiptype={list.scholarshiptype}
                                                    agent={list.agent}
                                                    date={list.datecreated}
                                                    location={list.country}
                                                    scholarshipname={list.scholarshipname}
                                                    about={list.aboutscholarship}
                                                    to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                                />
                                            ))
                                        }
                                        <Pagination totalPost={internationalScholarship.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                        </div> : 
                                    <div className="flex flex-col gap-4">
                                    {
                                        allScholars.map((list, id)=>(
                                            <ScholarshipBox key={id}
                                                image={image}
                                                scholarshiptype={list.scholarshiptype}
                                                agent={list.agent}
                                                date={list.datecreated}
                                                location={list.country}
                                                scholarshipname={list.scholarshipname}
                                                about={list.aboutscholarship}
                                                to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                            />
                                        ))
                                    }
                                    <Pagination totalPost={scholarships.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                    </div>}
                                </div>
                            }
                        </div>
                   </div>
                    
                </section>
                
                {/* categories and slide buttons */}
                <section>
                    <div id="heading-and-buttons" className="flex justify-between p-2">
                        <p className="font-bold text-2xl md:text-4xl">Browse Other Categories</p>
                        <div className="text-3xl flex gap-4 items-center over">
                            <BsArrowLeftSquare id="leftbtn" onClick={handleLeftClick}/>
                            <BsArrowRightSquare id="rightbtn" onClick={handleRightClick}/>
                        </div>
                    </div>

                    <div id="container" className="flex justify-between p-2 gap-2 overflow-x-scroll scrollbar duration-100 ease-in shrink-0">
                        <ScholarshipCategoryBox 
                            category='Government'
                            text='Government Scholarships'
                            image={one}
                        />
                        <ScholarshipCategoryBox 
                            category='Organizational'
                            text='Organizational Scholarships'
                            image={one}
                        />
                        <ScholarshipCategoryBox 
                            category='International'
                            text='International Scholarships'
                            image={one}
                        />
                        <ScholarshipCategoryBox 
                            category='Private'
                            text='Private Scholarships'
                            image={one}
                        />
                        <ScholarshipCategoryBox 
                            category='Research'
                            text='Research Scholarships'
                            image={one}
                        />
                        
                    </div>
                </section>

                {/* Quick Scholarship Tip */}
                <section className="flex flex-col justify-center py-2 p-2">
                    <div className="p-4">
                        <p className="font-bold text-2xl md:text-4xl mb-2">Quick Scholarship Tip </p>
                    </div>

                    {loading ? <Loading /> :
                        <div className="flex flex-wrap gap-2 justify-between shrink-0 ">{
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
                </section>
            </main>
             
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Scholarship;