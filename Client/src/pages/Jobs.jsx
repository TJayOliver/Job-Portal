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

    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        allJobs(setJobs, setloading);
        allCategories(setCategories);
    },[])
 
    const lastPageIndex = currentPage * postPerPage, firstPageIndex = lastPageIndex - postPerPage;
    const post = jobs.slice(firstPageIndex, lastPageIndex);

    const [searchInput, setSearchInput] = useState({position:'', location:''})

    const handleSearchInputs = (e) =>{
        const {name, value} = e.target;
        setSearchInput(prev =>({...prev, [name] : value}))
    }

    const submit = (e) =>{
        e.preventDefault();
        axios.get('http://localhost:4040/api/job-search')
        .then(response)
        .catch(error => console.error(error.message))
    }

    return(
        <>
        <Header />

        <div className=" bg-gradient-to-r from-[#474a4e] to-[#765b69] h-80 w-full relative">
            <img src={one} className='w-full h-full object-cover  opacity-20' />
        </div>
        
        <section className="flex justify-center p-3 py-2 max-w-7xl m-auto bg-white gap-2 items-center">
            <form className="flex">
                <div className="relative">
                    <BiSearch className=" absolute text-2xl left-2 top-2.5 " />
                    <input 
                        type='text'
                        name="position"
                        value={searchInput.position}
                        onChange={handleSearchInputs}
                        placeholder="Product Designer" 
                        className=" bg-gray-50 w-[26rem] px-8 rounded-l-lg p-2 outline-none placeholder:relative placeholder:left-2" 
                    />
                </div>

                {/* line divider */}
                <div className="h-8 w-0.5 mt-1 rounded-sm bg-[#004242]"></div>

                {/* Location Search */}
                <div className="relative">
                    <BiMapPin className=" absolute text-2xl left-2 top-2.5 " />
                    <input 
                        type='text'
                        placeholder="Accra" 
                        name="location"
                        value={searchInput.location}
                        onChange={handleSearchInputs}
                        className="bg-gray-50 w-[26rem] px-9 rounded-r-lg p-2 outline-none placeholder:relative placeholder:left-2" 
                    />
                </div>
            </form>

            <button type="search" className="bg-[#004242] hover:bg-[#035353] h-8 flex items-center rounded-lg text-white p-2">
                <p>Search</p>
            </button>

        </section>

        {/* Jobs and Filter */}
        <div className="flex justify-center p-1">
            {/* Filter */}
            <div className=" basis-[20%] flex flex-col bg-gray-50  p-2 rounded-lg">
                <div className=" flex justify-between font-bold mb-2">
                    <p>Filter</p>
                    <p>Clear all</p>
                </div>

                <div className=" flex flex-col justify-between gap-4">
                    {/* Job type */}
                    <form>
                        <p className="font-medium">Job Type</p>
                        <div>
                            <input type='checkbox' name="fulltime" id="fulltime" />
                            <label htmlFor="fulltime">Full Time</label>
                        </div>
                        <div>
                            <input type='checkbox' name="parttime" id="parttime" />
                            <label htmlFor="parttime">Part Time</label>
                        </div>
                    </form>

                    {/* Industry */}
                    <form className="h-56 overflow-y-scroll">
                        <p className="font-medium">Industry</p>
                        {categories.map((cat)=>(
                        <div key={cat.id}>
                            <input type='checkbox' name={cat.categoriesname} id={cat.categoriesname} />
                            <label htmlFor={cat.categoriesname}>{cat.categoriesname}</label>
                        </div>
                        ))
                        }
                    </form>


                </div>
            </div>

            {/* Jobs */}
            <div className="  basis-[75%] p-1 gap-6 mt-2">
                    
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
        </div>

        <SocialMedia />
        <Footer />
        </>
    )
}

export default Jobs