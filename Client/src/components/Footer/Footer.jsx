import { useState } from "react";
import axios from "axios";

const Footer = () =>{
    const [subscribe, setSubscribe] = useState({email:""})

    const SubscribeValues = (e) =>{
        const {name, value} = e.target;
        setSubscribe(prev=>({...prev, [name] : value}))
    }
    const Submit = (e) =>{
        e.preventDefault();
        console.log(subscribe)
        axios.post('http://localhost:4040/api/subscribe-post', subscribe)
        .then(response)
        .catch(error => console.error(error.message))
        window.location.reload()
    }
    const date = new Date()
    const Year = date.getFullYear();
    return(
        <div className="  h-48 md:h-96 flex flex-col justify-center text-md">
            
            <div className=" flex md:flex md:flex-row justify-center text-justify gap-4 md:gap-14 m-auto">
                <p className=" font-AliandoRocky text-2xl md:text-5xl ">Future<br></br>Forte</p>
                
                {/* Terms */}
                <div className=" flex flex-col">
                    <p className=" font-medium text-xl">Terms</p>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>Terms</p>
                </div>

                {/* About */}
                <div className=" flex flex-col">
                    <p className=" font-medium text-xl">About</p>
                    <p>Home</p>
                    <p>Features</p>
                    <p>About</p>
                </div>

                {/* Contact */}
                <div className="hidden  flex-col">
                    <p className=" font-medium text-xl">Contact</p>
                    <p>0203695063</p>
                    <p>tjayoliver99@gmail.com</p>
                </div>

                {/* Subscribe */}
                <div className=" flex flex-col">
                    <p className=" font-medium text-xl">Subscribe</p>
                    <form onSubmit={Submit} className="relative flex flex-wrap justify-center items-center">
                        <button type='submit' className=" h-7 rounded-sm w-7 bg-red-500 absolute right-1 outline-none align-center flex justify-center items-center hover:bg-teal-900">
                            <p className="p-2 text-sm text-white font-medium">GO</p>
                        </button>
                        <input 
                            type='email' 
                            inputMode="email" 
                            placeholder="Enter your e-mail " 
                            name="email" 
                            value={subscribe.email} 
                            onChange={SubscribeValues} 
                            className="p-2 rounded-sm w-full border-2 border-[#004242] outline-[#004242]"
                        />
                    </form>
                </div>
            </div>
            <p className="flex justify-center p-2">&copy;FutureForte {Year}</p>
        </div>
        
    )
}

export default Footer