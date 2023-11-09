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
            
             
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Scholarship;