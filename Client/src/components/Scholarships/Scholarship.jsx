import SchoBox from "./SchoBox"
import FilterSchoSearch from "./FilterSchoSearch"
import { useState,useEffect } from "react"
import axios from "axios"

const Scholarship = ()=>{
    const [scholarshipData, setScholarshipData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4040/api/scholarships-get')
        .then((response)=>{
            console.log(response)
            setScholarshipData(response.data)
        }).catch(error => console.log(error))
    },[])    
    return(
        <>
        <div className=" flex p-4 gap-3">
            <FilterSchoSearch />
            <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                
                <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3">
                    {
                    scholarshipData.map( (list) =>(
                        <SchoBox key={list.id}
                        image={`data:image/*;base64,${list.image}`}
                        scholarshipname={list.scholarshipname}
                        scholarshiptype={list.scholarshiptype}
                        duration={list.duration}
                        agent={list.agent}
                        programs={list.programs}
                        applicant={list.applicant}
                        deadline={list.deadline}
                        /> ))
                    }
                </div>
            </div>
        </div> 
        </>
    )
}

export default Scholarship;