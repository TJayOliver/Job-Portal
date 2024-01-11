import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import { fetch, scholarshipsdescription } from "./request";
import ScholarshipBox from '../components/Scholarships/ScholarshipBox'

const ScholarshipDescription = () =>{
    const params = useParams(), id = params.id, scholarshipname = params.scholarshipname;
    
    const [scholarship, setScholarship] = useState([]);
    const [schoImage, setSchoImage] = useState('')
    const [loading, setloading] = useState(true);

    const [similar, setSimilar] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        scholarshipsdescription(setScholarship, setloading, id, signal)
        return()=>{controller.abort()}
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const signal = controller.signal;

            const countryPromises = scholarship.map(async (count) => count.country);
            const countryname = await Promise.all(countryPromises);
          try {
            await fetch(`http://localhost:4040/scholarship/${countryname}/similar`, setSimilar, setloading, signal);

            return()=>{controller.abort();}
          } catch (error) {
            console.error(error.message)
          }
        };
      
        if (!loading) {
            // Only fetch data when loading is false
            fetchData();
        }

    }, [scholarship, loading]);
    
    const link = `http://localhost:5173/scholarships/description/${id}/${scholarshipname}`
    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}
    
    return(
        <>
            <Header />
  
            <aside className=" flex h-24 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center sticky top-[3.4rem] duration-100 ease-out">
            {scholarship.map((list, id)=>(
                <div key={id} className="max-w-4xl w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-white h-14 w-14 rounded-full">
                            <img src={list.image} className='w-full h-full rounded-full object-cover' />
                        </div>
                        <div>
                        <p className="text-3xl text-white font-medium">{list.scholarshipname}</p>
                        <p className="text-white">{list.country}</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 md:p-0 md:flex md:flex-row items-center gap-4">
                        <div role='button' className="p-3 h-8 flex items-center bg-white font-medium rounded-xl">Apply</div>
                        <div role='button' className="p-3 h-8 flex items-center bg-white font-medium rounded-xl">Share</div>
                    </div> 
                </div>
                ))}
            </aside>
            
            <main className="flex justify-center gap-10 p-2 bg-gray-50">
                {loading ? <Loading/> :
                    scholarship.map((list, id) =>(
                        <section key={id} className="flex flex-col max-w-3xl w-full gap-4 rounded-md p-4 ">
                            <div className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Scholarship Description</p>
                                <div dangerouslySetInnerHTML={{__html:list.description}}/>
                            </div>
                            
                            <div className=" bg-white p-3">
                                <p className=" font-medium text-xl mb-2">Eligibility Criteria</p>
                                <div dangerouslySetInnerHTML={{__html:list.eligibility}}/>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium text-xl mb-2">Duration of the scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.duration}}/>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium text-xl mb-2">Programs offered by the Scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.programsoffered}}/>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Benefits of the Scholarship</p>
                                <div dangerouslySetInnerHTML={{__html:list.benefits}}/>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Documents Required</p>
                                <div dangerouslySetInnerHTML={{__html:list.documentsrequired}}/>
                            </div>

                            <div  className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Application Information</p>
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
                                <div>Adverts</div>
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

            <aside className="w-full p-3 justify-center m-auto max-w-5xl">
                <p className="text-2xl font-medium mb-2">Similar Scholarships</p>
                <div className="flex gap-4">
                    {loading ? <Loading /> : 
                    similar.map((list, id)=>(
                        <ScholarshipBox key={id}
                            image={list.image}
                            scholarshiptype={list.scholarshiptype}
                            agent={list.agent}
                            date={list.datecreated}
                            location={list.country}
                            scholarshipname={list.scholarshipname}
                            description={list.description.slice(0,120)}
                            to={`/scholarships/description/${list.id}/${list.scholarshipname}`}
                        />
                    ))
                    }
                </div>
            </aside>

            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default ScholarshipDescription;