import DashboardBox from "../../components/Dashboard/dashboardBox"
import { useState } from "react";
import { BiTrophy, BiCategory, BiBookReader } from "react-icons/bi";
import { BsFillGrid3X3GapFill, BsBoxArrowDownRight, BsPersonFillGear, BsPeople, BsMortarboard, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import {CiGlobe, CiMail, CiSettings} from "react-icons/ci";
import ArticleForm from "../../components/Dashboard/articleForm";
import GraduateJobForm from "../../components/Dashboard/graduateJobForm";
import ScholarshipForm from "../../components/Dashboard/scholarshipForm";
import InternshipForm from "../../components/Dashboard/internshipForm";
import CategoriesForm from "../../components/Dashboard/CategoriesForm";
import Statistics from "../../components/Dashboard/statistics";
import ViewData from "../../components/Dashboard/viewData";
import axios from "axios";

const Dashboard = () =>{
    const [stats, Setstats] = useState(true);
    const [articlePanel, SetarticlePanel] = useState(false);
    const [categoryPanel, SetcategoryPanel] = useState(false);
    const [graduateJobPanel, SetgraduateJobPanel] = useState(false);
    const [internshippanel, SetinternshipPanel] = useState(false);
    const [scholarshipPanel, SetscholarshipPanel] = useState(false);

    const article = () =>{
        SetarticlePanel(prev => !prev),
        SetcategoryPanel(false),
        SetgraduateJobPanel(false),
        SetinternshipPanel(false),
        SetscholarshipPanel(false),
        Setstats(articlePanel ? true : false)
    }
    const categories = () =>{
        SetcategoryPanel(prev => !prev),
        SetarticlePanel(false),
        SetgraduateJobPanel(false), 
        SetinternshipPanel(false), 
        SetscholarshipPanel(false),
        Setstats(categoryPanel ? true : false)
    }
    const graduateJob = () =>{
        SetgraduateJobPanel(prev => !prev),
        SetarticlePanel(false),
        SetcategoryPanel(false), 
        SetinternshipPanel(false), 
        SetscholarshipPanel(false),
        Setstats(graduateJobPanel ? true : false)
    }
    const internship = () =>{
        SetinternshipPanel(prev => !prev),
        SetarticlePanel(false),
        SetcategoryPanel(false),
        SetgraduateJobPanel(false), 
        SetscholarshipPanel(false),
        Setstats(internshippanel ? true : false)
    }
    const scholarship = () =>{
        SetscholarshipPanel(prev => !prev),
        SetarticlePanel(false),
        SetcategoryPanel(false),
        SetgraduateJobPanel(false), 
        SetinternshipPanel(false),
        Setstats(scholarshipPanel ? true : false)
    }

    const [listMenu, setListMenu] = useState(false);
    const mobileMenu = () =>{
        setListMenu(prev => !prev)
    }
    const mobileOut = () =>{
        setListMenu(false)
    }
    
    const [aCount, setACount] = useState("");
    const [gCount, setGCount] = useState("");
    const [sCount, setScount] = useState("");
    const [iCount, setIcount] = useState("");

    const articleCount = () =>{
        return axios.get('http://localhost:4040/api/articles-count');
    };
    const graduateJobsCount = () =>{
        return axios.get('http://localhost:4040/api/graduatesjobs-count')
    };
    const scholarshipCount = () =>{
        return axios.get('http://localhost:4040/api/scholarships-count')
    };
    const internshipCount = () =>{
        return axios.get('http://localhost:4040/api/internships-count')
    };

    Promise.all([articleCount(), graduateJobsCount(), scholarshipCount(), internshipCount()])
    .then(response =>{
        const articleC = response[0].data;
        setACount(articleC);
        const graduateJobsC = response[1].data;
        setGCount(graduateJobsC);
        const scholarshipC = response[2].data;
        setScount(scholarshipC);
        const internshipC = response[3].data;
        setIcount(internshipC);
    }).catch(error => console.error(error));


    const oldlistClass = `hidden flex-col absolute right-0 top-[4rem] bg-blue-600 drop-shadow-md h-0 md:drop-shadow-none md:flex md:flex-col md:relative md:top-0 md:bg-transparent mt-2`
    const newListClass = `flex flex-col absolute right-0 top-[4rem] bg-blue-600 drop-shadow-md h-84 md:h-full md:drop-shadow-none md:flex md:flex-col md:relative md:top-0 md:bg-transparent mt-2 z-50`

    const defaultClass = `opacity-0 scale-50 h-1 -translate-y-[500rem] duration-300 ease-out`;
    const newClass = `flex p-3 flex-col gap-4 m-auto translate-y-0 duration-300 ease-out`

    return(
        
        <div className="  h-screen md:grid md:place-content-center bg-gray-300">

            <div className=" flex flex-col md:flex md:flex-row md:h-[40rem] md:w-[68rem] ">
            
                {/* Left side panel */}
                <div className=" sticky top-0 bg-blue-600 whitespace-nowrap w-full md:w-80 md:rounded-r-none md:rounded-md z-50">

                    <div className=" flex px-3 py-1 md:py-0 md:px-0 md:block items-center justify-between md:justify-center relative">
                        
                        {/* Profile Image */}
                        <div className=" grid place-content-center mt-2">
                            <div className=" h-14 w-14 md:h-24 bg-white md:w-24 rounded-full grid place-content-center overflow-clip">
                                <FcManager className=" h-14 w-28 mt-2 md:w-32 md:h-28"/>
                            </div>
                        </div>
                        
                        {/* User Name */}
                        <div className=" flex relative text-center text-white justify-between md:block ">
                            <div>
                            <p className=" text-xl">Welcome</p>
                            <p>Cyril Asiedu Nketiah</p>
                            </div>
                        </div>
                        
                        {/* Hamburger */}
                        <BsFillGrid3X3GapFill onClick={()=>mobileMenu()} className=" text-4xl text-white cursor-pointer md:hidden"/>
                        
                        {/* List */}
                        <div onMouseLeave={()=>mobileOut()}  className={listMenu ? `${newListClass}` : `${oldlistClass}`}>
                            <DashboardBox onClick={()=>article()} Title='Add Articles' icon={<BiBookReader className=" mt-1"/>} />

                            <DashboardBox onClick={()=>categories()} Title='Add Categories' icon={<BiCategory className=" mt-1"/>} />

                            <DashboardBox onClick={()=>graduateJob()} Title='Add Graduate Jobs' icon={<BsPeople className=" mt-1"/>} />

                            <DashboardBox onClick={()=>internship()} Title='Add Internships' icon={<BsMortarboard className=" mt-1"/>} />

                            <DashboardBox onClick={()=>scholarship()} Title='Add Scholarships' icon={<BiTrophy className=" mt-1"/>} />

                            <div className=" mb-0 md:mb-[10.3rem]"></div>
         
                            <DashboardBox Title='Log Out' icon={<BsBoxArrowDownRight className=" mt-1"/>} />                          

                        </div>

                    </div>
                    
                </div>

                {/* Right Side Panel */}
                <div className=" bg-white w-full  md:h-full md:overflow-y-scroll -z-0">

                    {/* Home Data */}
                    <div className={stats ? `block` : `hidden`}>
                        <div className=" flex flex-wrap justify-center py-4">
                            <Statistics 
                                data={aCount}
                                name='Articles Posted'
                                logo={<BiBookReader className=" text-blue-600 text-3xl" />}
                            />

                            <Statistics 
                                data={gCount}
                                name='Graduate Jobs Posted'
                                logo={<BsPeople className=" text-blue-600 text-3xl" />}
                            />

                            <Statistics 
                                data={sCount}
                                name='Scholarships Posted'
                                logo={<BiTrophy className=" text-blue-600 text-3xl" />}
                            />

                            <Statistics 
                                data={iCount}
                                name='Internships Posted'
                                logo={<BsMortarboard className=" text-blue-600 text-3xl" />}
                            />
                        </div>

                        <div className=" flex flex-wrap justify-center mt-8">
                            <ViewData data='Messages' logo={<CiMail className=" text-white text-3xl"/>}/>
                            <ViewData data='Site Settings' logo={<CiGlobe className=" text-white text-3xl"/>}/>
                            <ViewData data='Administrators' logo={<CiSettings className=" text-white text-3xl"/>}/>
                        </div>
                    </div>

                    <ArticleForm className={articlePanel ? ` ${newClass}` : `${defaultClass}`} />
                    <CategoriesForm className={categoryPanel ? ` ${newClass}` : `${defaultClass}`} />
                    <GraduateJobForm className={graduateJobPanel ? ` ${newClass}` : `${defaultClass}`} />
                    <InternshipForm className={internshippanel ? ` ${newClass}` : `${defaultClass}`} />
                    <ScholarshipForm className={scholarshipPanel ? ` ${newClass}` : `${defaultClass}`} />

                </div>

            </div>
            
        </div>
        
    )
}

export default Dashboard;