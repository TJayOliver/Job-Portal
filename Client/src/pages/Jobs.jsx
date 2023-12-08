import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import Loading from "../components/Loading/Loading"
import Pagination from "../components/Pagination.jsx/Pagination"
import one from '../assets/five.jpg'
import JobBox from "../components/Jobs/JobBox"
import { allCategories, allJobs } from "./request";
import {BiSearch, BiMapPin} from 'react-icons/bi'
import axios from "axios"

const Jobs = () =>{
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setloading] = useState(true);

    const [postPerPage, setPostPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        allJobs(setJobs, setloading, signal);
        allCategories(setCategories,signal);

        return ()=>{controller.abort()}
    },[])
 
    const lastPageIndex = currentPage * postPerPage, 
    firstPageIndex = lastPageIndex - postPerPage;
    const post = jobs.slice(firstPageIndex, lastPageIndex);

    const [searchInput, setSearchInput] = useState({position:'', location:''})

    const handleSearchInputs = (e) =>{
        const {name, value} = e.target;
        setSearchInput(prev =>({...prev, [name] : value}))
    }

    const [searchResults, setSearchResults] = useState([]);
    const [SResultsVerifier, setSResultsVerifier] = useState(false)

    const submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/api/jobs-search', searchInput)
        .then(response =>{
            setSResultsVerifier(true)
            setSearchResults(response.data)
        } )
        .catch(error => console.error(error.message))
    }

    const [JobTypeFilter, setJobTypeFilter] = useState({fulltime:false, parttime:false})
    const handleJobTypeFilter = (e) =>{
        const {name, value, type, checked} = e.target;
        setJobTypeFilter(prev =>({...prev, [name] : type === 'checkbox' ? checked : value}))
    }

    const filter = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/api/jobs-search', JobTypeFilter)
        .catch(response => console.log(response)).then(error => console.error(error.message))
    }
    return(
        <>
        <Header />

        <div className=" bg-gradient-to-r from-[#474a4e] to-[#765b69] h-80 w-full relative">
            <img src={one} className='w-full h-full object-cover  opacity-20' />
        </div>
        
        {/* Search  */}
        <section className="flex justify-center p-3 py-2 max-w-7xl m-auto bg-white gap-2 items-center">
            <form onSubmit={submit} className="flex">
                <div className="relative">
                    <BiSearch className=" absolute text-2xl left-2 top-2.5 " />
                    <input 
                        type='text'
                        name="position"
                        value={searchInput.position}
                        onChange={handleSearchInputs}
                        placeholder="Designer" 
                        className=" bg-gray-50 w-full md:w-[26rem] px-8 rounded-l-lg p-2 outline-none placeholder:relative placeholder:left-2 placeholder:text-sm border-r-gray-200 border-r-2" 
                    />
                </div>

                {/* Location Search */}
                <div className="relative">
                    <BiMapPin className=" absolute text-2xl left-2 top-2.5 " />
                    <input 
                        type='text'
                        placeholder="Accra" 
                        name="location"
                        value={searchInput.location}
                        onChange={handleSearchInputs}
                        className="bg-gray-50 w-full md:w-[26rem] px-9 rounded-r-lg p-2 outline-none placeholder:relative placeholder:left-2 placeholder:text-sm" 
                    />
                </div>

                <button type="search" className="bg-[#004242] hover:bg-[#035353] h-8 flex items-center rounded-lg text-white p-2 ml-1 mt-1">
                <p>Search</p>
                </button>

            </form>

        </section>

        <p className={SResultsVerifier ? 'flex justify-center font-bold text-3xl' : 'hidden'}>Displaying Search Results for {searchInput.position} {searchInput.location}</p>

        {/*  Jobs and Filter */}
        <div className="flex justify-center p-1">
            {/* Filter */}
            <div className=" hidden max-w-[18rem] w-[20rem] whitespace-nowrap md:flex flex-col bg-gray-50 p-3 rounded-lg">
                <form className=" flex flex-col justify-between gap-4">
                    {/* heading */}
                    <div className=" flex justify-between font-bold mb-2">
                        <p>Filter</p>
                        <input type='reset'  />
                    </div>

                    {/* Job type */}
                    <div>
                        <p className="font-medium">Job Type</p>
                        <div  className="flex gap-2">
                            <input 
                                type='checkbox' 
                                name="fulltime"
                                onChange={handleJobTypeFilter} 
                                checked={JobTypeFilter.fulltime} 
                                id="fulltime" 
                                className=" accent-[#004242]"/>
                            <label htmlFor="fulltime">Full Time</label>
                        </div>

                        <div className="flex gap-2">
                            <input 
                                type='checkbox'
                                name="parttime"
                                onChange={handleJobTypeFilter} 
                                checked={JobTypeFilter.parttime} 
                                id="parttime"
                                className=" accent-[#004242]" />
                            <label htmlFor="parttime">Part Time</label>
                        </div>
                    </div>

                    <hr></hr>

                    {/* Industry */}
                    <div>
                        <p className="font-medium">Industry</p>
                        <form >
                            {categories.map((cat)=>(
                            <div key={cat.id} className="flex gap-2">
                                <input type='checkbox' name={cat.categoriesname} id={cat.categoriesname} className=" accent-[#004242]" />
                                <label htmlFor={cat.categoriesname}>{cat.categoriesname}</label>
                            </div>
                            ))
                            }
                        </form>
                    </div>
                    
                    <hr></hr>

                    {/* Experience Level */}
                    <div>
                        <p className="font-medium">Experience Level</p>
                        <div className="flex gap-2">
                            <input type='checkbox' name="lessthanoneyear" id="lessthanoneyear" className=" accent-[#004242]"/>
                            <label htmlFor="lessthanoneyear">Less than 1 year</label>
                        </div>
                        <div className="flex gap-2">
                            <input type='checkbox' name="onetothreeyears" id="onetothreeyears" className=" accent-[#004242]"/>
                            <label htmlFor="onetothreeyears">1 - 3 years</label>
                        </div>
                        <div className="flex gap-2">
                            <input type='checkbox' name="threetofiveyears" id="threetofiveyears" className=" accent-[#004242]"/>
                            <label htmlFor="threetofiveyears">3 - 5 years</label>
                        </div>
                        <div className="flex gap-2">
                            <input type='checkbox' name="morethanfiveyears" id="morethanfiveyears" className=" accent-[#004242]"/>
                            <label htmlFor="morethanfiveyears">More than 5 years</label>
                        </div>
                    </div>
                </form>
            </div>
            
            {SResultsVerifier ? 
                // Search Results
                <div className=" p-1 gap-6 mt-2">
                    {loading ? <Loading /> :  
                    <div className=" flex flex-wrap justify-center gap-3">
                        {searchResults.map((job, id)=>(
                            <JobBox key={id} 
                            image={job.image}
                            location={job.location}
                            company={job.company}
                            duration={job.duration}
                            position={job.position}
                            category={job.categoriesname}
                            salary={job.salary}
                            description={job.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,90)}
                            to={`/jobs/description/${job.id}/${job.position}/${job.company}`}
                            />
                        ))} 
                    </div>
                    }
                        
                    <Pagination totalPost={jobs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div> 
                :
                // all jobs display
                <div className=" p-1 gap-6 mt-2">
                    {loading ? <Loading /> :
                        <div className=" flex flex-wrap justify-center gap-3">{
                            post.map((job, id)=>(
                                
                                <JobBox key={id} 
                                image={job.image}
                                location={job.location}
                                company={job.company}
                                duration={job.duration}
                                position={job.position}
                                category={job.categoriesname}
                                salary={job.salary}
                                description={job.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,90)}
                                to={`/jobs/description/${job.id}/${job.position}/${job.company}`}
                                />
                            ))} 
                        </div>
                    }
                        
                    <Pagination totalPost={jobs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            }
            
        </div>

        <SocialMedia />
        <Footer />
        </>
    )
}

export default Jobs