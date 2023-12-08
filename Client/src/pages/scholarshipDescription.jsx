import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import one from '../assets/five.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scholarshipsdescription } from "./request";

const ScholarshipDescription = () =>{
    const params = useParams(), id = params.id, scholarshipname = params.scholarshipname;
    
    const [scholarship, setScholarship] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        scholarshipsdescription(setScholarship, setloading, id, signal)

        return()=>{controller.abort()}
    },[])

    const link = `http://localhost:5173/scholarships/description/${id}/${scholarshipname}`
    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}


    return(
        <>
            <Header />
            <div className="h-36 p-2 flex items-center relative bg-teal-400">
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

            <main className="flex justify-center gap-10 p-2">
                {loading ? <Loading/> :
                    scholarship.map((list, id) =>(
                        <section key={id} className="flex justify-between rounded-md bg-slate-300 p-2 w-[50rem]">
                            <div id="heading" className="">
                                <p className="text-3xl font-bold">{list.scholarshipname}</p>
                                <small>{list.datecreated}</small>

                                <div id="summary-list" className="p-2 flex flex-wrap justify-start bg-blue-50 mt-1 gap-8">
                                    <div>
                                        <p>{list.country}</p>
                                        <p>{list.programs}</p>
                                    </div>
                                    
                                    <div>
                                        <p>scholarship type</p>
                                        <p>scholarship type</p>
                                    </div>
                                </div>

                                <div id="description">
                                    
                                </div>

                            </div>

                            <div className="flex flex-col">
                                <button className="bg-red-600">Apply Now
                                </button>
                                <small>Apply on employer's website</small>
                                <button className="bg-red-600">
                                    Share Job
                                </button>
                            </div>
                        </section>
                    ))
                }
                <article>
                    <div id="similar-jobs p-1 border-2 border-gray-50">
                        <p>Similar Jobs</p>
                        <hr></hr>
                        <div>
                            <p>hello</p>
                        </div>
                        <hr></hr>
                        <div>
                            <p>hello</p>
                        </div>
                    </div>
                </article>
            </main>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default ScholarshipDescription;