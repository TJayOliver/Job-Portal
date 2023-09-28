import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SocialMedia from "../components/Homepage/SocialMedia/SocialMedia.jsx"

import InternBox from "../components/Internships/internBox"

const Internships = () =>{
    const [internData, setinternData] = useState([]);
    const [loading, setloading] = useState(true);

   useEffect( () =>{
        axios.get('http://localhost:4040/api/internships-get')
        .then(response => {
            setinternData(response.data)
            setloading(false)
        }).catch(error => console.error(error.message))
   }, [])

    return(
        <>
            <Header/>
            <div className=" h-screen flex p-4 gap-3 bg-gray-100">

                <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                    <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3 internshipSize">
                        { loading ? <div>Loading....</div> :
                            internData.map((list)=>(
                                <InternBox 
                                    image={list.image}
                                    internshipname={list.internshipname}
                                    briefinfo={list.briefinfo}
                                />
                            ))    
                        }
                    </div>
                </div>
            </div>
            <SocialMedia/>
            <Footer />
        </>
    )
}

export default Internships