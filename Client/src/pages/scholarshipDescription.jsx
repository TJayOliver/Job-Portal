import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import { fetch, scholarshipsdescription } from "./request";
import ScholarshipBox from '../components/Scholarships/ScholarshipBox'
import axios from "axios";

const ScholarshipDescription = () =>{
    const params = useParams(), id = params.id, scholarshipname = params.scholarshipname;
    
    const [scholarship, setScholarship] = useState([]);
    const [loading, setloading] = useState(true);

    const [similar, setSimilar] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        scholarshipsdescription(setScholarship, setloading, id, signal)
        return()=>{controller.abort()}
    },[])
    
    // const countryname = [];
    // scholarship.map((count)=>{
    //     countryname.push(count.country)
    // })

    // console.log(countryname)

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const signal = controller.signal;

            const countryPromises = scholarship.map(async (count) => count.country);
            const countryname = await Promise.all(countryPromises);
          try {
            await fetch(`http://localhost:4040/api/scholarships/${countryname}/similar`, setSimilar, setloading, signal);

            return()=>{
                controller.abort();
            }
          } catch (error) {
            console.error(error.message)
          }
        };
      
        if (!loading) {
            // Only fetch data when loading is false
            fetchData();
        }

      }, [scholarship, loading]);

      console.log(similar)
    
    //fetch(`http://localhost:4040/api/scholarships/${countryname}/similar`, setSimilar,setloading)
    
    const link = `http://localhost:5173/scholarships/description/${id}/${scholarshipname}`
    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}

    return(
        <>
            <Header />
            <div className=" flex h-24 bg-gradient-to-r from-blue-900 to-cyan-400 justify-center items-center sticky top-12 duration-100 ease-out">
                <div className="max-w-4xl w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-white h-14 w-14 rounded-full"></div>
                        <div>
                        <p className="text-3xl text-white font-medium">Chevening Scholarships</p>
                        <p>All United Kingdom Universities</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div role='button' className="p-3 h-8 flex items-center bg-white font-medium rounded-xl">Apply</div>
                        <div role='button' className="p-3 h-8 flex items-center bg-white font-medium rounded-xl">Share</div>
                    </div>
                </div>
            </div>
            
            <main className="flex justify-center gap-10 p-2 bg-gray-50">
                {loading ? <Loading/> :
                    scholarship.map((list, id) =>(
                        <section key={id} className="flex flex-col max-w-3xl w-full gap-4 rounded-md p-4 ">
                            <div className="bg-white p-3">
                                <p className="font-medium bg-white">Scholarship Description</p>
                                <div dangerouslySetInnerHTML={{__html:list.description}}/>
                            </div>
                            
                            <div className=" bg-white p-3">
                                <p className=" font-medium">Eligibility Criteria</p>
                                <div dangerouslySetInnerHTML={{__html:list.eligibility}}/>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium">Duration of the scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.duration}}/>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium">Programs offered by the Scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.programsoffered}}/>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium">Benefits of the Scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.benefits}}/>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium">Documents Required</p>
                                <div dangerouslySetInnerHTML={{__html:list.documentsrequired}}/>
                            </div>

                            <div  className="bg-white p-3">
                                <p className="font-medium">Application Information</p>
                                <div dangerouslySetInnerHTML={{__html:list.applicationinformation}}/>
                            </div>                            

                        </section>
                    ))
                }
                <section className="hidden md:flex md:flex-col gap-5 p-2 h-24 w-44">
                    {loading ? <Loading/> :
                        scholarship.map((list, id) =>(
                        <div key={id}>
                            <div className="flex flex-col gap-3 bg-white p-3">
                                <p className="font-medium">Benefits</p>
                                <div dangerouslySetInnerHTML={{__html:list.benefits}}/>
                            </div>

                            <div className='gap-3 flex flex-col'>
                                <p className="font-medium">Host University</p>
                                <div className="bg-white p-3 shadow-sm rounded-md gap-3" dangerouslySetInnerHTML={{__html:list.hostuniversity}}/>
                            </div>
                        </div>
                        ))
                    }
                </section>

            </main>

            <article className="w-full justify-center max-w-3xl">
                <p>Similar Scholarships</p>
                
            </article>

        
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default ScholarshipDescription;