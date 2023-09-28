import SchoBox from "../components/Scholarships/SchoBox"
import { useState,useEffect } from "react"
import axios from "axios"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia"
import Footer from "../components/Footer/Footer"

const Scholarship = ()=>{
    const [scholarshipData, setScholarshipData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        axios.get('http://localhost:4040/api/scholarships-get')
        .then((response)=>{
            setScholarshipData(response.data)
            setloading(false)
        }).catch(error => console.error(error.message))
    },[])    

    return(
        <>
            <Header />
            
            <div className=" h-screen flex p-4 gap-3 bg-gray-100">
  
                <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                    <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3">
                        { loading ? <div>loading ....</div> :
                        scholarshipData.map( (list) =>(
                            <SchoBox key={list.id}
                            image={list.image}
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
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Scholarship;