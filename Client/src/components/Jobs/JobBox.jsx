import {BsCalendar2CheckFill} from 'react-icons/bs'
import one from '../../assets/eight.jpg'
import {CgShare} from 'react-icons/cg';
import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

const JobBox = ({image,description, location, company, duration, position, salary, to}) =>{
    
    return(
        <div className={`rounded-md w-64 h-64 p-3 bg-white hover:bg-red-500 group hover:text-gray-100 duration-150 ease-in  drop-shadow-md flex flex-col gap-2 justify-between`}>
        <div className="flex items-center gap-2">
            <div className="bg-white h-8 w-8 rounded-md shrink-0 flex">
                <img src={one} className="object-cover h-full w-full rounded-md " />
            </div>
            <div className="flex flex-col">
                <p className="font-bold whitespace-nowrap text-sm">{company}</p>
                <small>{location}</small>
            </div>
        </div>
        <p className="font-bold text-xl">{position}</p>
        <p>{duration}</p>
        <small>{parser(description)}...</small>

        <div className="flex justify-between ">
            <div className="flex items-center">
                <p className=" font-bold">GHC{salary}</p>
                <small>/Month</small>
            </div>
            <button className="bg-red-500 group-hover:bg-white shrink-0 group-hover:text-black text-white p-2 rounded-md">
                <a href={to}> Apply Now </a>
            </button>
        </div>
    </div>
    )
}

export default JobBox;