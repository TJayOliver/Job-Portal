import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import Loading from "../components/Loading/Loading"
import Pagination from "../components/Pagination.jsx/Pagination"
import JobBox from "../components/Jobs/JobBox"
import { fetch } from "./request";
import {BiSearch, BiMapPin} from 'react-icons/bi'
import axios from "axios"
import Subscribe from "../components/Subscribe/Subscribe"
import Platforms from "../components/Platforms/Platforms"
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'
import ArticleBox from "../components/Articles/ArticleBox"
import { countries } from "../components/Dashboard/countries"

const Jobs = () =>{
    const [jobs, setJobs] = useState([]);
    const [featuredjobs, setFeaturedJobs] = useState([]);
    const [jobTip, setJobTip] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const [postPerPage, setPostPerPage] = useState(18);
    const [currentPage, setCurrentPage] = useState(1);

    const [message, setMessage] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('job', setJobs, setLoading, signal, setMessage);
        fetch('job/featured', setFeaturedJobs, setLoading, signal, setMessage);
        fetch('article/category/Job', setJobTip, setLoading, signal, setMessage);
        fetch('category', setCategories, setLoading, signal, setMessage);

        return ()=>{controller.abort()}
    },[])
 
    const lastPageIndex = currentPage * postPerPage, 
    firstPageIndex = lastPageIndex - postPerPage;
    const post = jobs.slice(firstPageIndex, lastPageIndex);

    const submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/api/jobs-search', searchInput)
        .then(response =>{
            setSResultsVerifier(true)
            setSearchResults(response.data)
        } )
        .catch(error => console.error(error.message))
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

    const container = document.getElementById('container')

    const handleLeftClick = () =>{
        const scrollNumber = 100;
        container.scrollLeft -= scrollNumber
    }
    const handleRightClick = () =>{
        const scrollNumber = 100;
        container.scrollLeft += scrollNumber
    }

    const [filterSearch, setFilterSearch] = useState({position:'', duration:'', jobcategory:'',location:''})
    const [searchResults, setSearchResults] = useState([]);
    const [searchVerifier, setSearchVerifier] = useState(false);
    
    const handleSearch = (e) => {
        const {name, value}= e.target;
        setFilterSearch( prev => ({
            ...prev, [name] : value
        }))
    }
    
    const submitSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4040/job/search', filterSearch);
            const data = response.data.data;
            setSearchResults(data);
            setSearchVerifier(true);
        } catch (error) {
            console.error(error.message)
        }
    }
        
    return(
        <>
        <Header />
        
        <Subscribe SubscribeState={SubscribeState} SetSubscribeState={SetSubscribeState} onChange={handleSubscribe} value={subcribeEmail.email} onClick={submitSubscribe} checkSubscribeResponse={checkSubscribeResponse} subscribeResponse={subscribeResponse} />

        <main className="max-w-6xl flex flex-col m-auto justify-center ">
            

            {/* Search  */}
            <form onSubmit={submitSearch} className="flex justify-between gap-2 p-2"> 
                <input 
                    type='text'
                    name='position'
                    onChange={handleSearch}
                    value={filterSearch.position}
                    placeholder="Search Job by title"
                    className="border-gray-100 border-[1px] rounded-md p-1 w-full outline-gray-200"
                /> 

                <select 
                name="duration"
                onChange={handleSearch}
                value={filterSearch.duration}
                className="border-gray-100 border-[1px] rounded-md p-1 w-full outline-gray-200">
                    <option disabled  >Work Type</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                </select>

                <select 
                name="jobcategory"
                onChange={handleSearch}
                value={filterSearch.jobcategory}
                className="border-gray-100 border-[1px] rounded-md p-1 w-full outline-gray-200">
                    <option disabled>Category</option>
                    {categories.map( (category, id) => (
                        <option key={id} value={category.categoryname}>{category.categoryname}</option>
                    ))}
                </select>

                <select 
                name="location"
                onChange={handleSearch}
                value={filterSearch.location}
                className="border-gray-100 border-[1px] rounded-md p-1 w-full outline-gray-200">
                    <option disabled >Country</option>
                    {countries.map( (country, id) => (
                        <option key={id} value={country}>{country}</option>
                    ))}
                </select>

                <button type="submit">Search</button>

            </form>

            {/* subscribe */}
            <section className={ searchVerifier ? "hidden" : "flex justify-between p-1 bg-gray-100 items-center rounded-md mt-1 mb-2"}>
                <div>
                    <p className="text-3xl font-medium">Job Alert E-mails </p>
                    <small>Keep track of positions that you're interested in by signing up for job alert emails</small>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-rose-400 to-red-500 flex flex-col items-center justify-center gap-4 h-48 p-1 ">
                    <p>Keep Me Updated</p>
                    <small>We will notify you when a job is posted</small>
                    <button className="p-2 bg-white rounded-md">Notify Me</button>
                </div>
            </section>
            
            {
                searchVerifier && searchResults.length > 0 ? 
                <section className="flex flex-col justify-center items-center p-1"> 
                    <p className="text-2xl font-bold mb-2">Search Results</p>
                    <div className="flex gap-2">
                        {
                            searchResults.map( (job, id) => (
                            <JobBox key={id} 
                            image={job.image}
                            location={job.location}
                            company={job.company}
                            duration={job.duration}
                            position={job.position}
                            category={job.categoryname}
                            salary={job.salary}
                            description={job.responsibility.slice(0,50)}
                            to={`/job/${job.id}/${job.position}/${job.company}`}
                            />))  
                        }
                    </div>
                </section> 
                : searchVerifier === true && searchResults.length < 0 ? <p>No Results for the Query</p> : null 
            }
            
            {/* featured  */}
            <section className={ searchVerifier ? "hidden" : " flex flex-col justify-center p-2 py-1"}>

                <div className="flex justify-between mb-2">
                    <p className="font-bold text-4xl mb-2">Explore Popular Jobs</p>
                    <div className="text-3xl flex gap-4 md:hidden">
                        <BsArrowLeftSquare id="leftbtn" onClick={handleLeftClick} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer'/>
                        <BsArrowRightSquare id="rightbtn" onClick={handleRightClick} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer'/>
                    </div>
                </div>
                

                <div id="container" className="flex justify-between p-2 gap-2 overflow-x-scroll scrollbar duration-100 ease-in shrink-0">
                {featuredjobs.map((job, id)=>(
                    <JobBox key={id} 
                    image={job.image}
                    location={job.location}
                    company={job.company}
                    duration={job.duration}
                    position={job.position}
                    category={job.categoryname}
                    salary={job.salary}
                    description={job.responsibility.slice(0,50)}
                    to={`/job/${job.id}/${job.position}/${job.company}`}
                    />
                ))}
                </div>
            </section>

            {/*  Jobs */}
            <section className={searchVerifier ? "hidden" : "flex justify-center p-1"}>
                
                <div className=" p-1 gap-6 mt-2">
                    {loading ? <Loading /> :
                        <div>
                            <div className="flex flex-col gap-4 justify-center items-center text-3xl mb-4 font-bold"> 
                                <p>Various Career Opportunities </p>
                                <p>Waiting for You!</p>
                            </div>
                            <div className=" flex flex-wrap justify-center gap-3">
                                {
                                post.map((job, id)=>(
                                    <JobBox key={id} 
                                    image={job.image}
                                    location={job.location}
                                    company={job.company}
                                    duration={job.duration}
                                    position={job.position}
                                    category={job.categoryname}
                                    salary={job.salary}
                                    description={job.responsibility.slice(0,50)}
                                    to={`/job/${job.id}/${job.position}/${job.company}`}
                                    />
                                ))} 
                            </div>
                        </div>
                    }
                        
                    <Pagination totalPost={jobs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
                
            </section>

            {/* Job Tip */}
            <section className={searchVerifier ? 'hidden' : 'block'}>
                <p className="font-bold text-3xl mb-2">Quick Job Tip</p>
                <div className="flex gap-2">
                    {
                        jobTip.map( (tip, id) => (
                            <ArticleBox key={id}
                                date={tip.datecreated}
                                title={tip.title}
                                category={tip.categoryname}
                                author={tip.author}
                                to={`article/${post.title}/${post.id}`}
                            />
                        ) )
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

export default Jobs