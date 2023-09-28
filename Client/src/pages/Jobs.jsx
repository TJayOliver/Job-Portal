import LatestBox from "../components/LatestJobs/latestbox"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios";
import Categories from "../components/Jobs/categories"
import { countries } from "../components/Dashboard/countries"
import Loading from "../components/Loading/Loading"

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

        <div className=" bg-gradient-to-r from-[#0066ff] to-[#ff99cc] h-80 w-full">

        </div>

        <div className=" p-2 gap-6">

            {/* Categories */}
            <div className=" flex justify-start p-3 gap-2">
                <Categories  />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
            </div>

            <div className="flex justify-start p-2 gap-4">

                <div className=" h-8 p-2 flex items-center bg-gray-100 rounded-lg font-medium">All</div>
                <div className=" h-8 p-2 flex items-center bg-gray-100 rounded-lg font-medium">Search</div>

                {/* Search Forms */}
                <div className=" flex gap-4">
                    <input 
                    type='text' 
                    placeholder="Search Job Title / Company name"
                    className="border-[1px] border-blue-200 w-72 px-2 rounded-md h-8 outline-none"
                    />

                    <select className="border-[1px] border-blue-200 w-30 px-2 rounded-md h-8 outline-none">
                        <option disabled selected>-- Work Type --</option>
                        <option value='Full Time'>Full Time</option>
                        <option value='Part Time'>Part Time</option>
                    </select>

                    <select className="border-[1px] border-blue-200 w-30 px-2 rounded-md h-8 outline-none">
                        <option selected disabled >-- Select location --</option>
                            {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                    </select>

                </div>

            </div>

            

            {loading ? <Loading /> :
                <div className="justify-start items-center flex flex-col md:flex md:flex-row p-2 gap-2 flex-wrap ">{
                    jobs.map((job, id)=>(
                        <LatestBox key={id} 
                        image={job.image}
                        salary={job.salary}
                        location={job.location}
                        company={job.company}
                        duration={job.duration}
                        position={job.position}
                        />
                    ))}
                    </div>
                }
           

        </div>

        <SocialMedia />
        <Footer />
        </>
    )
}

export default Jobs