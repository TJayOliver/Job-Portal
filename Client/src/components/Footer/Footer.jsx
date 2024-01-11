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
        axios.post('http://localhost:4040/api/subscribe-post', subscribe)
        .then(response)
        .catch(error => console.error(error.message))
        window.location.reload()
    }
    const date = new Date()
    const Year = date.getFullYear();
    return(
        <section className="  h-full p-8 flex flex-col justify-center text-md bg-black/90 text-white/80">
            
            <div className="flex flex-col justify-center m-auto max-w-5xl w-full gap-10">
                <div className="flex justify-between items-center ">
                    <p className=" font-AliandoRocky text-4xl text-white">Future Forte</p>
                    <div className="flex items-center gap-1">
                        <p>Subscribe to our newsletter</p>
                        <div role='button' className="p-2 bg-teal-500 rounded-md">Subscribe</div>
                    </div>
                </div>

                <hr></hr>

                <div className="flex gap-20">
                    {/* about and address */}
                    <div className="flex flex-col gap-4">
                        {/* about */}
                        <div>
                            <p className="font-bold">About</p>
                            <small className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit</small>
                        </div>

                        {/* address */}
                        <div>
                            <p className="font-bold">Address</p>
                            <small>futureforte@gmail.com</small>
                        </div>

                        <small className="flex">&copy;FutureForte {Year}</small>
                    </div>
                    
                    {/* quick link */}
                    <div>
                        <p className="mb-2 font-bold">Quick Links</p>
                        <div className="flex flex-col gap-2">
                            <small>Help & Support</small>
                            <small>Privacy</small>
                            <small>Terms & Conditions</small>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <p className="font-bold">Tags</p>
                        <div className="md:flex md:flex-col flex flex-row text-center justify-center flex-wrap gap-3 mt-1">
                            <small className="p-1 bg-white/50 rounded-md">Job Search</small>
                            <small className="p-1 bg-white/50 rounded-md">Scholarships</small>
                            <small className="p-1 bg-white/50 rounded-md">Internships</small>
                            <small className="p-1 bg-white/50 rounded-md">Career Guidance</small>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
    )
}

export default Footer