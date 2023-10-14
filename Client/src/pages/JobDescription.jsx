import Header from "../components/Header/Header";
import one from '../assets/One.jpg';
import JobBox from "../components/Jobs/JobBox"
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../components/Loading/Loading"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import Footer from "../components/Footer/Footer";
import { BsCalendar2CheckFill} from "react-icons/bs";
import {PiHandCoinsBold} from 'react-icons/pi';
import {RiUserLocationFill} from 'react-icons/ri';
import { useParams } from "react-router-dom";
import { jobdescription } from "./request";

const JobDescription = () =>{
    const params = useParams(), id=params.id, position = params.position, company = params.company;
    const link = `http://localhost:5173/jobs/description/${id}/${position}/${company}`

    const [jobs, setJobs] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        jobdescription(setJobs, setloading, id)
    },[])

    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}
    
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
        <section className=" flex justify-center md:justify-between p-4 relative">

            {/* left panel */}
            <div className=" hidden  md:block basis-[25%] bg-white rounded-lg h-[28rem] sticky top-16 p-2">
                <h1 className="font-bold p-2">Jobs you might be interested in</h1>
                
                <div className="p-1 mb-2 relative">
                    <h1 className=" font-medium">Node js Backend Developer</h1>
                    <p>Google Foundations</p>
                    <div>
                        <p>Category</p>
                    </div>
                    <div className=" flex justify-between mb-1 whitespace-nowrap">
                        <p>Sunyani</p>
                        <p>Posted on 5th October,2023</p>
                    </div>
                    <div className="bg-red-600 h-8 w-8 rounded-full absolute right-0 top-0"></div>
                    <hr></hr>
                </div>

                <div className="p-1 mb-2 relative">
                    <h1 className=" font-medium">Node js Backend Developer</h1>
                    <p>Google Foundations</p>
                    <div>
                        <p>Category</p>
                    </div>
                    <div className=" flex justify-between mb-1 whitespace-nowrap">
                        <p>Sunyani</p>
                        <p>Posted on 5th October,2023</p>
                    </div>
                    <div className="bg-red-600 h-8 w-8 rounded-full absolute right-0 top-0"></div>
                    <hr></hr>
                </div>

                <div className="p-1 mb-2 relative">
                    <h1 className=" font-medium">Node js Backend Developer</h1>
                    <p>Google Foundations</p>
                    <div>
                        <p>Category</p>
                    </div>
                    <div className=" flex justify-between mb-1 whitespace-nowrap">
                        <p>Sunyani</p>
                        <p>Posted on 5th October,2023</p>
                    </div>
                    <div className="bg-red-600 h-8 w-8 rounded-full absolute right-0 top-0"></div>
                    <hr></hr>
                </div>

                <button className=" border-[1px] border-blue-600 rounded-xl w-full hover:bg-blue-600 hover:text-white  h-10">View All</button>
            </div>

            {/* description body */}
            {jobs.map((list)=>(
                <div key={list.id} className=" md:basis-[57%]">

                    {/* Heading */}
                    <div className="  rounded-lg drop-shadow-md bg-white flex flex-col gap-4 h-54 p-4 mb-4">
                        
                        <h1 className="font-medium text-xl">{list.position}</h1>

                        <div className="flex gap-4 relative">
                            <div className="flex gap-1">
                                <BsCalendar2CheckFill className=" mt-1.5" />
                                <p>{list.duration}</p>
                            </div>
                            <div className="flex gap-1">
                                <PiHandCoinsBold className="mt-1.5" />
                                <p>GHC {list.salary}</p>
                            </div>

                            <div className="bg-red-600 w-20 h-20 rounded-full right-0 absolute -top-1">
                                <img src={one} className=' bg-cover object-cover h-full w-full' />
                            </div>
                        </div>

                        <div className="flex gap-1">
                            <RiUserLocationFill className=" mt-1.5" />
                            <p>{list.location}</p>
                        </div>

                        <hr></hr>

                        <div className="flex justify-between items-center">
                            <p>Posted on {list.datecreated}</p>
                            <button className=" bg-blue-600 h-10 p-1 rounded-sm hover:bg-blue-500 text-white ">Visit Company Website</button>
                        </div>
                        
                    </div>
                    
                    {/* Responsibility / Requirements / Other Information / Application */}
                    <div className=" bg-white rounded-lg p-4 relative">

                        <h1 className=" font-medium">Responsibilities</h1>
                        <hr></hr>

                        {/* Responsibility */}
                        <div className=" text-justify ">
                            <ul className="list-disc p-3">
                                <li>{list.responsibilities}</li>
                                <li>{list.responsibilitiestwo}</li>
                                <li>{list.responsibilitiesthree}</li>
                                <li>{list.responsibilitiesfour}</li>
                            </ul>
                            
                        </div>

                        <h1 className=" font-medium">Requirements</h1>
                        <hr></hr>

                        {/* Requirements */}
                        <div className=" text-justify">
                            <ul className="list-disc p-3">
                                <li>{list.requirements}</li>
                                <li>{list.requirementstwo}</li>
                                <li>{list.requirementsthree}</li>
                                <li>{list.requirementsfour}</li>
                            </ul>
                            
                        </div>

                        <h1 className=" font-medium">Other Information</h1>
                        <hr></hr>

                        {/* Other Information */}
                        <div className=" text-justify mb-4">
                            <p>{list.otherinformation}</p>
                        </div>

                        <h1 className=" font-medium">Apply</h1>
                        <hr></hr>

                        {/* Application */}
                        <p>Send CV to @ghana.com</p>

                        <div className=" flex justify-center">
                            <div className=" bg-blue-600 w-2/5 p-2 rounded-sm items-center text-white text-center hover:bg-blue-500">Share Job</div>
                        </div>
                    </div>
                
                </div>
            ))}

            {/* Right Panel  */}
            <div className="hidden md:block basis-[15%] bg-white sticky top-16 rounded-lg h-[35rem] p-2">
                <p>Google Adverts</p>
            </div>
            
        </section>
        <SocialMedia />
        <Footer/>
        </>
    )
}

export default JobDescription;