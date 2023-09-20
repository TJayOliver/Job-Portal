import { useState } from "react";
import { BiTrophy, BiCategory, BiBookReader } from "react-icons/bi";
import { BsPeople, BsMortarboard } from "react-icons/bs";
import {CiGlobe, CiMail} from "react-icons/ci";
import DashboardBox from "./dashboardBox";

const LeftPanel = () =>{
    const [mobileAnimation, setMobileAnimation] = useState(false);
    const animateMobile = () =>{
        setMobileAnimation(prev => !prev)
    }
    let div1 = `h-1 w-8 bg-black rounded-sm duration-150 ease-in transfrom rotate-45 translate-y-2`,
    div2 = `h-1 w-6 bg-black rounded-sm duration-300 ease-in -translate-x-8 opacity-0`,
    div3 = `h-1 w-8 bg-black rounded-sm duration-150 ease-in transform -rotate-45 -translate-y-2`;

    return(
        <div className="  md:w-64 whitespace-nowrap p-2 flex flex-col justify-between border border-b-gray-200 border-r-0 md:border-r-2 md:border-r-gray-200 ">

            <div className=" flex justify-between md:hidden ">
                <h1 className=" text-2xl p-3 font-bold ">Dashboard</h1> 
                <div onClick={animateMobile} className=" flex flex-col gap-1 justify-center cursor-pointer">
                    <div className={mobileAnimation ?div1 : `h-1 w-8 bg-black rounded-sm duration-75 ease-in`}></div>
                    <div className={mobileAnimation ?div2 : `h-1 w-6 bg-black rounded-sm duration-75 ease-in`}></div>
                    <div className={mobileAnimation ? div3 : `h-1 w-8 bg-black rounded-sm duration-75 ease-in`}></div>
                </div>
            </div>
             
            {/* Forms Link */}
            <div className=" hidden md:block">
                <h1 className=" text-2xl p-3 nb-2 font-bold">Dashboard</h1>
                <DashboardBox Title='Add Articles' to="/forms/articles"  icon={<BiBookReader className=" mt-1"/>} />
                <DashboardBox Title='Add Categories' to="/forms/categories" icon={<BiCategory className=" mt-1"/>} />
                <DashboardBox Title='Add Jobs' to="/forms/jobs" icon={<BsPeople className=" mt-1"/>} />
                <DashboardBox Title='Add Internships' to="/forms/internships" icon={<BsMortarboard className=" mt-1"/>} />
                <DashboardBox Title='Add Scholarships' to="forms/scholarships" icon={<BiTrophy className=" mt-1"/>} />
            </div>
            
            {/* Messages and Administrator Picture */}
            <div className=" hidden md:flex md:flex-col gap-2 h">
                <DashboardBox Title='Messages' icon={<CiMail className=" mt-1"/>} />
                <DashboardBox Title='Settings' icon={<CiGlobe className=" mt-1"/>} />

                <div className=" border border-gray-200 rounded-md flex justify-between items-center px-2 py-1">
                    {/* Admininistrator's Picture and Name */}
                    <div className=" flex gap-2 items-center">
                        <div className=" h-12 w-12 rounded-full bg-red-600"></div>
                        <div className=" flex flex-col text-sm">
                            <p>T-Jay Oliver</p>
                            <small>Administrator</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeftPanel;