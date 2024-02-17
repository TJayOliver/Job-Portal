import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import { fetch, fetchByID } from "./request";
import ScholarshipBox from '../components/Scholarships/ScholarshipBox';
import parser from 'html-react-parser';
import Platforms from '../components/Platforms/Platforms';

const ScholarshipDescription = () =>{
    const params = useParams();
    const id = params.id;
    const scholarshipname = params.scholarshipname;
    
    const [scholarship, setScholarship] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState([]);

    const [similar, setSimilar] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        fetchByID('scholarship/read',id, setScholarship, setLoading, setMessage, signal);
        return()=>{controller.abort()}
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const signal = controller.signal;

            const countryPromises = scholarship.map(async (count) => count.country);
            const countryname = await Promise.all(countryPromises);
          try {
            await fetch(`http://localhost:4040/scholarship/country/${countryname}`, setSimilar, setLoading, signal);

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
    
    const link = `http://localhost:5173/scholarship/${scholarshipname}/${id}`;
    const ShareJob = (link) =>{navigator.clipboard?.writeText && navigator.clipboard.writeText(link)}
    
    return(
        <>
            <Header />

            <Subscribe SubscribeState={SubscribeState} SetSubscribeState={SetSubscribeState} onChange={handleSubscribe} value={subcribeEmail.email} onClick={submitSubscribe} checkSubscribeResponse={checkSubscribeResponse} subscribeResponse={subscribeResponse} />
  
            <aside className=" flex h-24 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center sticky top-[6.4rem] duration-100 ease-out">
            {scholarship.map((list, id) => (
                <div key={id} className="max-w-4xl w-full flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-white h-14 w-14 rounded-full">
                            <img src={`http://localhost:4040/scholarship/read/${list.id}/${list.image}`} className='w-full h-full rounded-full object-cover' />
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
                                <div> {parser(list.description)}</div>
                            </div>
                            
                            <div className=" bg-white p-3">
                                <p className=" font-medium text-xl mb-2">Eligibility Criteria</p>
                                <div> {parser(list.eligibility)}</div>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium text-xl mb-2">Duration of the scholarship</p>
                                <div> {parser(list.duration)}</div>
                            </div>

                            <div className=" bg-white p-3">
                                <p className="font-medium text-xl mb-2">Programs offered by the Scholarship</p>
                                <div> {parser(list.programsoffered)}</div>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Benefits of the Scholarship</p>
                                <div> {parser(list.benefits)}</div>
                            </div>

                            <div className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Documents Required</p>
                                <div> {parser(list.documentsrequired)}</div>
                            </div>

                            <div  className="bg-white p-3">
                                <p className="font-medium text-xl mb-2">Application Information</p>
                                <div> {parser(list.applicationinformation)}</div>
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

            <Platforms platformsState={platformsState} setPlatformsState={setPlatformsState} />

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
                            to={`/scholarship/${list.scholarshipname}/${list.id}`}
                        />
                    ))
                    }
                </div>
            </aside>

            <SocialMedia/>
            <Footer onClick={ () => SetSubscribeState(true)} />
        </>
    )
}

export default ScholarshipDescription;