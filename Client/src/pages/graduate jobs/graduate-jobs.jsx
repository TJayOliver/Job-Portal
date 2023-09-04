import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SocialMedia from "../../components/SocialMedia/SocialMedia"

const JobInfo = ()=>{
    return(
        <>
            <Header/>
            <div className="p-4">
                <div className=" lg:max-w-8xl h-screen lg:w-[60%] m-auto p-3 bg-white rounded-md">
                    <h1 className=" text-2xl font-bold">Job Description</h1>
                </div>
            </div>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default JobInfo