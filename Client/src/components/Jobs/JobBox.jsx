import {BsPinMapFill, BsCash, BsCalendar2CheckFill} from 'react-icons/bs'
import one from '../../assets/eight.jpg'
import {CgShare} from 'react-icons/cg';
import { BiCategory } from "react-icons/bi";

const JobBox = ({image,description, salary, location,country, company, duration, position, category}) =>{
    return(
       <div className=' bg-white drop-shadow-md w-80 rounded-md'>
            <div className=' flex flex-col p-2 gap-3'>

                <div className=' flex justify-between'>
                    <div className=' flex gap-3'>
                        {/* Company Logo and Location */}
                        <div className=' rounded-full h-12 w-12 border-[1px] bg-white drop-shadow-sm'>
                            <img src={image || one} className="h-full w-full object-cover rounded-full"/>
                        </div>

                        {/* Company Name and Location */}
                        <div>
                            <p className=' font-bold'>{company}</p>
                            <small>{country}</small>
                        </div>
                    </div>

                    {/* Share icon */}
                    <div className=' float-left bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center text-xl cursor-pointer'>
                        <CgShare />
                    </div>
                </div>

                {/* Job Title and Description */}
                <div>
                    <p className=' font-bold'>{position}</p>
                    <small>{description}</small>
                </div>

                <div className=' flex justify-between gap-1 flex-wrap font-medium'>
                    <div className=' flex gap-1 bg-gray-200 rounded-md px-2 py-1'>
                        <BiCategory className=' mt-1' />
                        <p>{category}</p>
                    </div>

                    <div className=' flex gap-1 bg-gray-200 rounded-md px-2 py-1'>
                        <BsPinMapFill className='mt-1' />
                        <p>{location}</p>
                    </div>

                    <div className=' flex gap-1 bg-gray-200 rounded-md px-2 py-1'>
                        <BsCash className='mt-1' />
                        <p>GHC {salary}</p>
                    </div>

                    <div className=' flex gap-1 bg-gray-200 rounded-md px-2 py-1'>
                        <BsCalendar2CheckFill className='mt-1' />
                        <p>{duration}</p>
                    </div>
                </div>
                
                {/* Apply and View Buttons */}
                <div className=' flex justify-start gap-3'>
                    <div role='button' className='rounded-lg bg-[#453a3a] hover:bg-[#2b2424] hover:duration-150 hover:ease-out  text-white font-bold h-12 flex items-center justify-center w-2/4 px-2'>Apply Now</div>

                    <div role='button' className='rounded-lg border-[1px] border-black  hover:duration-150 hover:ease-out flex items-center justify-center px-2 w-2/4'>View Details</div>
                </div>
            </div>
       </div>
    )
}

export default JobBox;