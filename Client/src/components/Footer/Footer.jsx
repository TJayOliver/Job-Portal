import {AiOutlineCopyright } from "react-icons/ai"

const Footer = () =>{
    const date = new Date()
    const Year = date.getFullYear();
    return(
        <div className=" px-4 py-14 text-white
        bg-gradient-to-tr from-[#1B263C] to-[#203869]
        ">
            <div className=" flex flex-col justify-center md:flex md:flex-row md:justify-around mb-4 gap-4 justify">

                <div>
                    <h1 className=" text-[#09AE79] font-bold">Employers</h1>
                    <p>Post a Job</p>
                    <p>Advertisement</p>
                </div>

                <div>
                    <h1 className=" text-[#09AE79] font-bold">Resources</h1>
                    <p>About BrandsMii</p>
                    <p>Privacy Center</p>
                    <p>Terms of Use</p>
                </div>
            </div>

            <div className=" py-3 flex-col md:flex md:flex-row justify-around">
                
                <div className=" flex gap-6 ">
                    <h1>Send Us a Mail : BrandsMiiCo@gmail.com</h1>
                </div>

                <div className=" flex gap-1">
                    <AiOutlineCopyright className=" mt-1"/> 
                    BrandsMii {Year} 
                </div>
            </div>
        </div>
    )
}

export default Footer