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
            <div className="h-24 bg-blue-400">
                <div className="max-w-7xl">
                    <p>Scholarship Description</p>
                </div>
                
            </div>

            <main className="flex justify-center gap-10 p-2 bg-gray-50">
                {loading ? <Loading/> :
                    scholarship.map((list, id) =>(
                        <section key={id} className="flex justify-between rounded-md bg-white p-4 w-2/4 h-screen">
                            <div id="heading" className="">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 bg-blue-500 rounded-md"></div>
                                    <div>
                                        <p className="text-2xl font-bold">{list.scholarshipname}</p>
                                        <small>{list.datecreated}</small>
                                    </div>
                                </div>

                                <div id="description">
                                    
                                </div>

                            </div>

                            <br></br>

                            <div className="h-2 bg-black"></div>

                            <div id="apply and share" className="flex gap-2">
                                <div className="bg-blue-500 rounded-md h-8 p-2 text-white justify-center flex items-center">Apply Now
                                </div>
                        
                                <div className=" border-[1px] border-gray-100 rounded-md h-8 p-2 text-blue-500 flex items-center">
                                    Share Job
                                </div>
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