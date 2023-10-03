import Header from "../components/Header/Header";
import one from '../assets/One.jpg';
import JobBox from "../components/Jobs/JobBox"
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../components/Loading/Loading"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import Footer from "../components/Footer/Footer";
import { BiSolidCategoryAlt} from "react-icons/bi";
import {PiHandCoinsBold} from 'react-icons/pi'
import {RiUserLocationFill} from 'react-icons/ri'

const JobDescription = () =>{
    const [jobs, setJobs] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        axios.get('http://localhost:4040/api/jobs-get')
        .then((response) => {
            setJobs(response.data)
            setloading(false);
        }).catch(error => console.error(error.message))
    },[])
    return(
        <>
        <Header />
        <section className=" flex  gap-5 py-4">

            {/* left panel */}
            <div className=" hidden md:flex md:basis-[20%] h-[50rem] p-3">
            {loading ? <Loading /> :

                <div className=" flex flex-col gap-y-8 verflow-y-scroll overflow-x-hidden  ">{
                    jobs.map((job, id)=>(
                        <JobBox key={id} 
                        image={job.image}
                        location={job.location}
                        company={job.company}
                        duration={job.duration}
                        position={job.position}
                        category={job.categoriesname}
                        description={job.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,90)}
                        />
                    ))} 
                </div>
            }
            </div>

            {/* description body */}
            <div className=" basis-[65%] rounded-lg p-2  ">
                <div className=" flex gap-2 items-center">
                    <div className=' rounded-full h-12 w-12 border-[1px] bg-white drop-shadow-sm flex shrink-0'>
                        <img src={one} className="h-full w-full object-cover rounded-full"/>
                    </div>
                    <p className=" font-bold text-3xl">Company Name</p>
                </div>

                <p>Posted on 24th October, 2023</p>

                {/* Positions, Title and Salary */}
                <div className="bg-white p-1 h-24 w-[26rem] mt-1 rounded-md grid grid-cols-2 text-md font-medium items-center">
                    <div>
                        <p>General Manager</p>
                    </div>
                    <div className="flex gap-1">
                        <PiHandCoinsBold className="mt-1.5" />
                        <p>Salary</p>
                    </div>
                    <div className="flex gap-1">
                        <RiUserLocationFill className=" mt-1.5" />
                        <p>Location</p>
                    </div>
                    <div className="flex gap-1">
                        <BiSolidCategoryAlt className=" mt-1.5" />
                        <p>Category</p>
                    </div>
                </div>

                <div className=" flex flex-col justify-between gap-36 md:gap-14">
                {/* Description */}
                <div className=" mt-2 text-justify justify-center mb-4">
                    <p className=" font-medium">Job Description</p>
                    <div className=" h-44 p-1 w-full bg-white rounded-md">
                        <ul>
                            <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, saepe eaque! Sit corporis molestias blanditiis laudantium, ducimus omnis, eveniet reprehenderit in ipsa inventore dolorem corrupti quos esse illum nostrum laborum.</li>
                            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla quasi iusto necessitatibus esse expedita similique, voluptatum beatae dolorum nihil fugiat libero quisquam obcaecati repudiandae iste quia. Deserunt, officia minus.</li>
                            <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt, dicta neque est a minus recusandae et ut vitae repudiandae necessitatibus repellat saepe. Veritatis dolor natus ut tempora facere reiciendis!</li>
                        </ul>
                    </div>
                </div>

                {/* Requirements */}
                <div className="mt-2 text-justify mb-4">
                    <p className=" font-medium">Job Requirements</p>
                    <div className=" h-44 p-1 w-full">
                        <ul>
                            <li>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis possimus ipsam voluptatum minus, in sed tempora eveniet maxime ab cupiditate corrupti magnam consequatur ut labore, adipisci officiis, facilis quidem molestiae.</li>
                            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id excepturi possimus nihil hic a ducimus provident tempora adipisci, harum vero maxime modi molestiae natus explicabo consectetur doloribus. Omnis, nam!</li>
                            <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id excepturi possimus nihil hic a ducimus provident tempora adipisci, harum vero maxime modi molestiae natus explicabo consectetur doloribus. Omnis, nam!</li>
                        </ul>
                    </div>
                </div>

                {/* Other Information */}
                <div className="mt-2 text-justify mb-4">
                    <p className=" font-medium">Other Information</p>
                    <div className=" h-24 p-1 w-full text-justify">
                        <ul>
                            <li>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis possimus ipsam voluptatum minus, in sed tempora eveniet maxime ab cupiditate corrupti magnam consequatur ut labore, adipisci officiis, facilis quidem molestiae.</li>
                        </ul>
                    </div>
                </div>

                {/* Application */}
                <div className="text-justify">
                    <p className=" font-medium">How to apply</p>
                    <div className=" h-44 p-1 w-full text-justify">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis possimus ipsam voluptatum minus, in sed tempora eveniet maxime ab cupiditate corrupti magnam consequatur ut labore, adipisci officiis, facilis quidem molestiae. work@google.com</li>
                        </ul>
                    </div>
                </div>
                </div>

            </div>

            <div className=" hidden md:flex h-[25rem] w-44 bg-red-400">
                adverts
            </div>
            
        </section>

        <SocialMedia />
        <Footer/>
        </>
    )
}

export default JobDescription;