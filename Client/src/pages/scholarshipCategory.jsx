import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
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

    const s = 'bg-red-500 flex w-full h-[14rem] '
    const colorChange = category === 'government' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex w-full h-[14rem]' 
    : category === 'organizational' ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex w-full h-[14rem]' 
    : category === 'private' ? 'bg-gradient-to-r from-blue-600 to-violet-600 flex w-full h-[14rem]'
    : category === 'international' ? 'bg-gradient-to-r from-violet-500 to-purple-500 flex w-full h-[14rem]'
    : category === 'research' ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 flex w-full h-[14rem]'
    : null;
    return(
        <>
            <Header />

            <main className="max-w-7xl flex flex-col m-auto justify-center ">
                {/* heading */}
                <section className={colorChange}>
                    <div className="w-2/4 rounded-2xl md:px-6 py-10 flex flex-col gap-4">
                        <p className="text-white text-3xl md:text-5xl font-bold p-2">{category.charAt(0).toUpperCase() + category.slice(1)} Scholarships</p>
                        <p className="text-sm md:text-md p-2 ">Browse through thousands of {category.charAt(0).toUpperCase() + category.slice(1)} Scholarships</p>
                    </div>
                    <img loading="lazy" src={category === 'government' ? govImage : category === 'organizational' ? orgImage : category === 'private' ? privImage : category === 'international' ? intImage : category === 'research' ? resImage : null } className="w-2/4 object-cover" />
                </section>

                {/* Scholarships */}
                <section className="flex flex-col justify-center py-3 p-2">
                    <div className="">
                        <p className="font-bold text-4xl mb-2">Explore</p>
                    </div>

                   <div className="flex justify-between gap-2">
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
                                                    description={list.description.slice(0,200)}
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
                                                    description={list.description.slice(0,200)}
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
                                                    description={list.description.slice(0,200)}
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
                                                    description={list.description.slice(0,200)}
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
                                                    description={list.description.slice(0,200)}
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
                                                    description={list.description.slice(0,200)}
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
                                                description={list.description.slice(0,200)}
                                                to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                                            />
                                        ))
                                    }
                                    <Pagination totalPost={scholarships.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                                    </div>}
                                </div>
                            }
                        </div>

                        <div className="basis-[15rem]">
                            <p>Adverts</p>
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
                            image={govImage}
                            to={'/scholarships/government'}
                        />
                        <ScholarshipCategoryBox 
                            category='Organizational'
                            text='Organizational Scholarships'
                            image={orgImage}
                            to={'/scholarships/organizational'}
                        />
                        <ScholarshipCategoryBox 
                            category='International'
                            text='International Scholarships'
                            image={intImage}
                            to={'/scholarships/international'}
                        />
                        <ScholarshipCategoryBox 
                            category='Private'
                            text='Private Scholarships'
                            image={privImage}
                            to={'/scholarships/private'}
                        />
                        <ScholarshipCategoryBox 
                            category='Research'
                            text='Research Scholarships'
                            image={resImage}
                            to={'/scholarships/research'}
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
                                //brief={post.briefinfo.replace(/^\d+[.,]/, '').trim().slice(0,90)}
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