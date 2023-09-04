import One from '../../assets/in.jpg'
import { Link } from 'react-router-dom'

const InternHome =()=>{
    return(
        <div className=" flex flex-col md:flex md:flex-row shrink-0">
            <div className=" h-[28rem] bg-white md:w-2/4 relative">
                <div className=" grid place-content-center text-left absolute top-2/4 p-2 text-xl -translate-y-2/4 w-2/4 translate-x-2/4 align-middle gap-4">
                    <p className=" font-bold text-2xl">We assist continue student and graduates with better internship opportunities</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae, </p>
                    <Link href='/internships' className=" bg-green-600 rounded-md p-2 w-2/4 text-center">Explore!</Link>
                </div>
            </div>
            <div className=" h-[28rem] bg-blue-600 w-2/4 hidden md:block">
                <img src={One} alt='internship pic' className=" h-[28rem] w-full object-cover"/>
            </div>
       </div>
    )
}

export default InternHome