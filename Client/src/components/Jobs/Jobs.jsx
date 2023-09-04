import LatestBox from "../LatestJobs/latestbox"
import news from "../news"
import FilterJobs from "./FilterJobs"

const Jobs = () =>{
    return(
        
        <div className=" flex p-4 gap-3">
            <FilterJobs />
            <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3 jobsSize duration-75 ease-in">
                    {
                        news.map((news, id)=>(
                            <LatestBox key={id} 
                            image={news.image}
                            salary={news.salary}
                            location={news.location}
                            company={news.company}
                            duration={news.duration}
                            position={news.position}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Jobs