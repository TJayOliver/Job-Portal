import LatestBox from "../components/LatestJobs/latestbox"
import FilterJobs from "../components/Jobs/FilterJobs"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios";
import Pagination from "../components/Dashboard/Pagination"

const Jobs = () =>{
    const [jobs, setJobs] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        axios.get('http://localhost:4040/api/graduatesjobs-get')
        .then((response) => {
            setJobs(response.data)
            setloading(false);
        }).catch(error => console.error(error.message))
    },[])
 
    
    return(
        <>
        <Header />
        <div className=" flex p-4 gap-3 bg-gray-200">
            <FilterJobs />
            <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3 jobsSize duration-75 ease-in">
                    {loading ? <div>loading...</div> :
                        jobs.map((job, id)=>(
                            <LatestBox key={id} 
                            image={job.image}
                            salary={job.salary}
                            location={job.location}
                            company={job.company}
                            duration={job.duration}
                            position={job.position}
                            />
                        ))
                    }
                </div>
                <Pagination 
                    totalPosts={jobs.length} 
                    postPerPage={postPerPage} 
                    setCurrentPage={setCurrentPage} 
                />
            </div>
        </div>
        <SocialMedia />
        <Footer />
        </>
    )
}

export default Jobs