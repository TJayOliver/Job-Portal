import Header from "../components/Header/Header";
import one from '../assets/five.jpg';
import JobDescriptionBox from "../components/Jobs/JobDescriptionBox"
import { useState, useEffect } from "react"
import Loading from "../components/Loading/Loading"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import Footer from "../components/Footer/Footer";
import {ImFilesEmpty} from 'react-icons/im';
import { Link, useParams } from "react-router-dom";
import { fetch, jobdescription } from "./request";

const JobDescription = () =>{
    const params = useParams(), id = params.id, position = params.position, company = params.company;
    
    const [jobs, setJobs] = useState([]);

    const [FeaturedJobs,setFeaturedJobs] = useState([]);
    const [BestMatchesJobs,setBestMatchesJobs] = useState([]);
    const [mostRecentJobs,setMostRecentJobs] = useState([]);
    const [loading, setloading] = useState(true);
    
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        jobdescription(setJobs, setloading, id, signal)

        fetch('http://localhost:4040/api/jobs-featured', setFeaturedJobs, setloading, signal);
        return ()=>{controller.abort()}
    },[])
   
    const link = `http://localhost:5173/jobs/description/${id}/${position}/${company}`
    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}

    const [bestMatch, setBestMatch] = useState(true)
    const [feat, setFeat] = useState(false)
    const [mostRecent, setMostRecent] = useState(false)

    const handleBestMatches = () =>{
        setBestMatch(true)
        setFeat(false)
        setMostRecent(false)
    }
    const handleFeatured = () =>{
        setFeat(true)
        setBestMatch(false)
        setMostRecent(false)
    }
    const handleRecent = () =>{
        setMostRecent(true)
        setBestMatch(false)
        setFeat(false)
    }

    return(
        <>
        <div className=" hidden fixed h-screen w-full z-[100] bg-[rgb(0,0,0,0.3)]">
            <div className=" w-2/1 bg-white top-2/4 absolute left-2/4 -translate-x-2/4  rounded-md p-2">
                <p className=" text-center font-medium">Share Job</p>
                <p className="border-b-2 text-md">{link}</p>
                <div onClick={()=>ShareJob(link)} className="bg-blue-600 mt-1 p-1 text-white font-medium text-center cursor-pointer w-2/4 m-auto hover:bg-blue-700 rounded-sm">Copy</div>
            </div>
        </div>

        <Header />

        {/* banner */}
        <div className="flex justify-center">
            <div className="h-56 bg-teal-500 w-full"></div>
        </div>

        {loading ?
            <Loading/>
            :jobs.map((job)=>(
                <div key={job.id} className=" flex flex-col-reverse md:flex md:flex-row p-2 justify-center gap-4">
                    
                    {/* similar jobs */}
                    <div className=" hidden md:flex flex-col gap-4 justify-center h-24">

                        <div className=" h-14 rounded-lg drop-shadow-md items-center justify-between p-2 bg-white w-full md:w-[22rem] flex relative">
                            <p onClick={handleBestMatches} className={bestMatch ?"p-2 bg-[#004242] text-white rounded-md duration-100 ease-out" : 'bg-none'}>Best Matches</p>
                            <p onClick={handleFeatured} className={feat ? "p-2 bg-[#004242] text-white rounded-md duration-100 ease-out" : 'bg-none'}>Featured</p>
                            <p onClick={handleRecent} className={mostRecent ? "p-2 bg-[#004242] text-white rounded-md duration-100 ease-out" : 'bg-none'}>Most Recent</p>
                        </div>
                        <div className="h-6">
                            {loading ? <Loading/> : bestMatch ? FeaturedJobs.map((list,id)=>(
                                <JobDescriptionBox key={id} 
                                image={list.image}
                                location={list.location}
                                company={list.company}
                                duration={list.duration}
                                position={list.position}
                                category={list.categoriesname}
                                salary={list.salary}
                                description={list.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,60)}
                                to={`/jobs/description/${list.id}/${list.position}/${list.company}`}/>)) 
                            : null}

                            {loading ? <Loading/> : feat ? FeaturedJobs.map((list,id)=>(
                                <JobDescriptionBox key={id} 
                                image={list.image}
                                location={list.location}
                                company={list.company}
                                duration={list.duration}
                                position={list.position}
                                category={list.categoriesname}
                                salary={list.salary}
                                description={list.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,60)}
                                to={`/jobs/description/${list.id}/${list.position}/${list.company}`}/>)) 
                            : null}

                            {loading ? <Loading/> : mostRecent ? FeaturedJobs.map((list,id)=>(
                                <JobDescriptionBox key={id} 
                                image={list.image}
                                location={list.location}
                                company={list.company}
                                duration={list.duration}
                                position={list.position}
                                category={list.categoriesname}
                                salary={list.salary}
                                description={list.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,60)}
                                to={`/jobs/description/${list.id}/${list.position}/${list.company}`}/>)) 
                            : null}
                        </div>
                    </div>

                    <div className="flex flex-col md:hidden justify-center gap-4 ">
                        {FeaturedJobs.map((list,id)=>(
                        <JobDescriptionBox key={id} 
                        image={list.image}
                        location={list.location}
                        company={list.company}
                        duration={list.duration}
                        position={list.position}
                        category={list.categoriesname}
                        salary={list.salary}
                        description={list.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,60)}
                        to={`/jobs/description/${list.id}/${list.position}/${list.company}`}/>))
                        }   
                    </div>
                    
                    
                    {/* description */}
                    <div className=" w-full md:w-[50rem] ] flex justify-center flex-col py-2 px-5 bg-gray-50 rounded-lg">
                
                        {/* heading */}
                        <div className="md:py-2">
                            {/* logo and large screen apply*/}
                            <div className=" flex justify-between items-center p-2">

                                <div className="flex gap-2">
                                    {/* company logo */}
                                    <div className=" h-14 w-14 bg-gray-50 rounded-lg">
                                        <img src={one} className='h-full w-full object-cover rounded-lg' />
                                    </div>

                                    {/* position,duration, salary and category */}
                                    <div className=" flex flex-col gap-1 shrink-0">
                                        <p className=" font-bold text-xl md:text-3xl">{job.position}</p>
                                        <div className=" flex gap-3 text-sm md:text-md">
                                            <p className="bg-gray-200 px-1 rounded-md">{job.duration}</p>
                                            <p className="bg-gray-200 px-1 rounded-md">GHC{job.salary}</p>
                                            <p className="bg-gray-200 px-1 rounded-md">{job.categoriesname}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div role='button' className='bg-[#004242] h-8 w-20 md:flex items-center justify-center rounded-md p-1 text-white hidden '>
                                    <Link to={job.website}>Apply</Link>
                                </div>

                            </div>

                            {/* company overview */}
                            <div>
                                <p className="font-bold ">{job.company}</p>
                                
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum sequi numquam eum adipisci laborum velit voluptas facere quam deserunt? At omnis iusto odit ab beatae deleniti quas impedit illo.</p>
                            </div>
                        </div>

                        {/* descriptions */}
                        <div className="flex flex-col gap-3">
                            
                            <div id="responsibilities">
                                <p className="font-medium">Responsibility</p>
                                {job.responsibilities.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.responsibilities}</li>
                                    </ul> : null
                                }
                                {job.responsibilitiestwo.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.responsibilitiestwo}</li>
                                    </ul> : null}
                                {job.responsibilitiesthree.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.responsibilitiesthree}</li>
                                    </ul> : null
                                }
                                {job.responsibilitiesfour.length > 0 ? 
                                <ul className="list-disc p-1">
                                    <li>{job.responsibilitiesthree}</li>
                                </ul> : null}
                            </div>
                            
                            <div id="requirements">
                                <p className="font-medium">Requirements</p>
                                {job.requirements.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.requirements}</li>
                                    </ul> : null
                                }
                                {job.requirementstwo.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.requirementstwo}</li>
                                    </ul> : null}
                                {job.requirementsthree.length > 0 ? 
                                    <ul className="list-disc p-1">
                                        <li>{job.requirementsthree}</li>
                                    </ul> : null
                                }
                                {job.requirementsfour.length > 0 ? 
                                <ul className="list-disc p-1">
                                    <li>{job.requirementsthree}</li>
                                </ul> : null}
                            </div>
                            
                            <div id="otherinformation">
                                <p className="font-medium">Other Information</p>
                                <p>{job.otherinformation}</p>
                            </div>
                            
                            <div id="application">
                                <p className="font-medium">How to apply</p>
                                <p>Visit {job.website} for Further Information</p>
                            </div>
                        </div>
                        
                        {/* share  */}
                        <div className="px-1 py-2">
                            <div className="h-10 w-56 bg-white rounded-lg p-2 flex items-center gap-3">
                                    <p className="whitespace-nowrap overflow-hidden text-sm">{link.slice(0,35)}</p>

                                    <ImFilesEmpty role='button' onClick={()=>ShareJob(link)} className="text-xl"/>

                            </div>
                        </div>
                    </div>
                </div>
            ))
        }


        <SocialMedia />
        <Footer/>
        </>
    )
}

export default JobDescription;