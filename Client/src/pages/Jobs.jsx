import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios";
import Categories from "../components/Jobs/Categories"
import Loading from "../components/Loading/Loading"
import Pagination from "../components/Pagination.jsx/Pagination"
import one from '../assets/five.jpg'
import JobBox from "../components/Jobs/JobBox"

const Jobs = () =>{
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setloading] = useState(false);
    
    const catOnetoSeven = categories.slice(0,6), catOthers = categories.slice(6);

    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const [reveal, setReveal] = useState(true);

    const handleReveal = () =>{
        setReveal(prev => !prev)
    }

    useEffect(()=>{
        axios.get('http://localhost:4040/api/graduatesjobs-get')
        .then((response) => {
            setJobs(response.data)
            setloading(false);
        }).catch(error => console.error(error.message))

        axios.get('http://localhost:4040/api/categories-get')
        .then((response)=>{
            setCategories(response.data)
        }).catch(error => console.error(error.message))
    },[])
 
    const lastPageIndex = currentPage * postPerPage, firstPageIndex = lastPageIndex - postPerPage;
    const post = jobs.slice(firstPageIndex, lastPageIndex);
    
    return(
        <>
        <Header />

        <div className=" bg-gradient-to-r from-[#0066ff] to-[#ff99cc] h-80 w-full relative">
            <img src={one} className='w-full h-full object-cover  opacity-20' />
        </div>

        
        <div className=" p-2 gap-6 mt-2">

            {/* Categories */}
            <div className=" flex justify-start overflow-x-scroll scrollbar md:overscroll-none md:justify-center gap-4 mb-2">
                {catOnetoSeven.map((data, id) =>(
                    <Categories key={id} Category={data.categoriesname} />
                ))}
            </div>

            
            {/* Categories 2 */}
            <div className=" flex justify-start gap-4 overflow-x-scroll scrollbar mb-4">
                {catOthers.map((data, id) =>(
                    <Categories key={id} Category={data.categoriesname} />
                ))}
            </div>

            {/* All & Reveal Search left Bar */}
            <div className="flex justify-start p-2 gap-4">

                <div className=" h-8 p-2 flex items-center bg-gray-100 rounded-lg font-medium">All</div>
                <div  onClick={handleReveal} className=" h-8 p-2 flex items-center bg-gray-100 rounded-lg font-medium">Search</div>
            </div>
                
            {loading ? <Loading /> :
                <div className="justify-center lg:justify-start items-center flex flex-col md:flex md:flex-row p-2 gap-3 flex-wrap ">{
                    post.map((job, id)=>(
                        
                        <JobBox key={id} 
                        image={job.image}
                        salary={job.salary}
                        location={job.location}
                        country={job.country}
                        company={job.company}
                        duration={job.duration}
                        position={job.position}
                        category={job.categoriesname}
                        description={job.responsibilities[0,25]}
                        />
                    ))}
                </div>
            }
                
            <Pagination totalPost={jobs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>  

        <SocialMedia />
        <Footer />
        </>
    )
}

export default Jobs