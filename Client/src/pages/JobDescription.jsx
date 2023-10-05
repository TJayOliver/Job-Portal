import Header from "../components/Header/Header";
import one from '../assets/One.jpg';
import JobBox from "../components/Jobs/JobBox"
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../components/Loading/Loading"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import Footer from "../components/Footer/Footer";
import { BsCalendar2CheckFill} from "react-icons/bs";
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
        <section className=" flex justify-between p-4">

            {/* left panel */}
            <div className=" basis-[25%] bg-white rounded-lg h-[28rem] sticky top-16 p-2">
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
            <div className=" basis-[57%]">

                <div className=" rounded-lg drop-shadow-md bg-white flex flex-col gap-4 h-54 p-4">

                    <h1 className="font-medium text-xl">Java Spring boot Microservices Professional</h1>

                    <div className="flex gap-4 relative">
                        <div className="flex gap-1">
                            <BsCalendar2CheckFill className=" mt-1.5" />
                            <p>Job Type</p>
                        </div>
                        <div className="flex gap-1">
                            <PiHandCoinsBold className="mt-1.5" />
                            <p>Salary</p>
                        </div>

                        <div className="bg-red-600 w-20 h-20 rounded-full right-0 absolute -top-1"></div>
                    </div>

                    <div className="flex gap-1">
                        <RiUserLocationFill className=" mt-1.5" />
                        <p>Location</p>
                    </div>

                    <hr></hr>

                    <div className="flex justify-between items-center">
                        <p>Posted on 24th October, 2023</p>
                        <button className=" bg-blue-600 h-12 w-44 rounded-xl hover:bg-blue-500 text-white ">Apply</button>
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

            {/* Right Panel  */}
            <div className=" basis-[15%] bg-white">
                adverts
            </div>
            
        </section>

        <SocialMedia />
        <Footer/>
        </>
    )
}

export default JobDescription;