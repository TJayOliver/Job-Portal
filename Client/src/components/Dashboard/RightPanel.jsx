import DashBoardHeader from "./DashBoardHeader";
import OverviewBox from "./OverviewBox";
import { BiTrophy, BiCategory, BiBookReader } from "react-icons/bi";
import {BsPeople, BsMortarboard} from "react-icons/bs";
import { HiMiniTrash, HiMiniPencil } from "react-icons/hi2";
import {CgArrowDown} from "react-icons/cg"
import { useState, useEffect } from "react";
import axios from "axios";


const RightPanel = () =>{
    
    const [retrievedArticlesData, setRetrievedArticlesData] = useState([]),
    [retrievedCategoriesData, setRetrievedCategoriesData] = useState([]),
    [retrievedJobsData, setRetrievedJobsData] = useState([]),
    [retrievedInternshipData, setRetrievedInternshipData] = useState([]),
    [retrievedscholarshipData, setRetrievedScholarshipData] = useState([]),
    [retrievedCountArticle, setCountArticle] = useState(""),
    [retrievedCountJobs, setCountJobs] = useState(""),
    [retrievedCountInternship, setCountInternship] = useState(""),
    [retrievedCountScholarship, setCountScholarship] = useState("");

    const [overView, setOverview] = useState(true),
    [articleDataView, setArticleDataView] = useState(false),
    [jobsDataView, setJobsDataView] = useState(false),
    [internshipsDataView, setInternshipsDataView] = useState(false),
    [scholarshipDataView, setScholarshipsDataView] = useState(false);
    
    const handleOverView = () =>{
        setOverview(true); setArticleDataView(false); setJobsDataView(false); setInternshipsDataView(false); setScholarshipsDataView(false); setMove(firstmove);
    }
    const handleArticleTable = () =>{
        setArticleDataView(true); setOverview(false); setJobsDataView(false); setInternshipsDataView(false);setScholarshipsDataView(false); setMove(secondMove);
    }
    const handleJobsTable = () =>{
        setJobsDataView(true); setOverview(false); setArticleDataView(false); setInternshipsDataView(false);setScholarshipsDataView(false); setMove(thirdMove);
    }
    const handleInternshipsTable = () =>{
        setInternshipsDataView(true); setOverview(false); setArticleDataView(false); setJobsDataView(false);setScholarshipsDataView(false); setMove(fouthMove);
    }
    const handleScholarshipTable = () =>{
        setScholarshipsDataView(true); setInternshipsDataView(false); setOverview(false); setArticleDataView(false); setJobsDataView(false);setMove(fifthMove);
    }

    useEffect(() =>{
        axios.get('http://localhost:4040/api/articles-get').then(response => setRetrievedArticlesData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/categories-get').then(response => setRetrievedCategoriesData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/internships-get').then(response => setRetrievedInternshipData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/graduatesjobs-get').then(response => setRetrievedJobsData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/scholarships-get').then(response => setRetrievedScholarshipData(response.data)).catch(error => console.error(error.message));
        
        axios.get('http://localhost:4040/api/articles-count').then(response => setCountArticle(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/graduatesjobs-count').then(response => setCountJobs(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/internships-count').then(response => setCountInternship(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/scholarships-count').then(response => setCountScholarship(response.data)).catch(error => console.error(error.message));
    }, [])

    let firstmove = `h-0.5 w-[5.0rem] bg-black absolute -bottom-3.5 -left-1 duration-100 ease-out `, 
    secondMove = `h-0.5 w-16 bg-black absolute -bottom-3.5 left-[8.0rem] duration-100 ease-out`, 
    thirdMove = `h-0.5 w-24 bg-black absolute -bottom-3.5 left-[15rem] duration-100 ease-out`,
    fouthMove = `h-0.5 w-[5.1rem] bg-black absolute -bottom-3.5 left-[24.5rem] duration-100 ease-out `, 
    fifthMove = `h-0.5 w-[5.1rem] bg-black absolute -bottom-3.5 left-[33.3rem] duration-100 ease-out`;

    const [move,setMove] = useState(firstmove), [Delete, setDelete] = useState(false);

    const handledelete = () =>{setDelete(prev => !prev)};

    return(
        <div className=" w-full">

            <DashBoardHeader handleArticleTable={handleArticleTable} handleOverView={handleOverView} handleJobsTable={handleJobsTable} handleInternshipsTable={handleInternshipsTable} handleScholarshipTable={handleScholarshipTable} move={move} />

            {/* Overview Data List */}
            
            {overView &&
                <div className=" p-3 flex flex-wrap gap-3 duration-100 ease-out">
                    <OverviewBox 
                        logo={<BiBookReader className=" text-4xl"/>} 
                        title={retrievedArticlesData.length > 1 ? 'Articles Posted' : 'Article Posted' } 
                        count={retrievedCountArticle} 
                    />
                    <OverviewBox 
                        logo={<BsPeople className=" text-4xl"/>} 
                        title={retrievedJobsData.length > 1 ? 'Graduate Jobs Posted' : 'Graduate Jobs Posted' }
                        count={retrievedCountJobs}
                    />
                    <OverviewBox 
                        logo={<BsMortarboard className=" text-4xl"/>} 
                        title={retrievedInternshipData.length > 1 ? 'Internships Posted' : 'Internship Posted' } 
                        count={retrievedCountInternship} 
                    />
                    <OverviewBox 
                        logo={<BiTrophy className=" text-4xl"/>} 
                        title={retrievedscholarshipData.length > 1 ? 'Scholarships Posted' : 'Scholarship Posted' } 
                        count={retrievedCountScholarship}
                    />
                </div>}

            {/* Categories Table List */}

            {overView && <div className=" p-3">
                    <div className=" border border-gray-200 rounded-md">
                        <table class=" min-w-full divide-y divide-gray-200">
                            <thead className=" bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-medium flex gap-1" >Category Name <CgArrowDown className="mt-1"/></th>
                                    <th class="px-6 py-3 text-left text-sm font-medium">Jobs</th>
                                    <th class="px-6 py-3 text-left text-sm font-medium" ></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                {
                                    retrievedCategoriesData.length === 0 ? 
                                    <tr><td>No Data Available</td></tr> 
                                    : 
                                    retrievedCategoriesData.map(data=>(
                                        <tr className=" hover:bg-gray-50">
                                            <td class="px-6 py-4 text-left text-xs font-medium">{data.categoriesname}</td>
                                            <td class="px-6 py-4 text-left text-xs font-medium">400</td>
                                            <td className="flex gap-2 px-6 py-4 text-left text-md font-medium">
                                                <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                    <HiMiniPencil />
                                                </div>
                                                <div onClick={Delete} className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                    <HiMiniTrash/>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            } 

            {/* Article Panel */}
            {articleDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table class=" min-w-full divide-y divide-gray-200">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-medium flex gap-1" >Article Title <CgArrowDown className="mt-1"/></th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Date Posted</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Author</th>
                                <th class="px-6 py-3 text-left text-sm font-medium" ></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            {
                                retrievedArticlesData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                retrievedArticlesData.map(data=>(
                                    <tr className=" hover:bg-gray-50">
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.categoriesname}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.author}</td>
                                        <td className="flex gap-2 px-6 py-4 text-left text-md font-medium">
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>} 

            {/* Graduate Job Panel */}
            {jobsDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table class=" min-w-full divide-y divide-gray-200">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-medium flex gap-1" >Job Position <CgArrowDown className="mt-1"/></th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Company</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Location</th>
                                <th class="px-6 py-3 text-left text-sm font-medium" >Date Posted</th>
                                <th class="px-6 py-3 text-left text-sm font-medium" >Posted By</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            {
                                retrievedJobsData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                retrievedJobsData.map(data=>(
                                    <tr className=" hover:bg-gray-50">
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.position}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.company}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.location}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td className="flex gap-2 px-6 py-4 text-left text-md font-medium">
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>} 

            {/* Internship Panel */}
            {internshipsDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table class=" min-w-full divide-y divide-gray-200">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-medium flex gap-1" >Internship Name <CgArrowDown className="mt-1"/></th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Internship Location</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Date Posted</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Posted By</th>
                                <th class="px-6 py-3 text-left text-sm font-medium" ></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            {
                                retrievedInternshipData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                retrievedInternshipData.map(data=>(
                                    <tr className=" hover:bg-gray-50">
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.internshipname}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.location}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.author}</td>
                                        <td className="flex gap-2 px-6 py-4 text-left text-md font-medium">
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>} 

            {/* Scholarship Panel */}
            {scholarshipDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table class=" min-w-full divide-y divide-gray-200">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-sm font-medium flex gap-1" >Scholarship Name <CgArrowDown className="mt-1"/></th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Scholarship Type</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Scholarship Location</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Date Posted</th>
                                <th class="px-6 py-3 text-left text-sm font-medium">Author</th>
                                <th class="px-6 py-3 text-left text-sm font-medium" ></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            {
                                retrievedscholarshipData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                retrievedscholarshipData.map(data=>(
                                    <tr className=" hover:bg-gray-50">
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.scholarshipname}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.scholarshiptype}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.country}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td class="px-6 py-4 text-left text-xs font-medium">{data.author}</td>
                                        <td className="flex gap-2 px-6 py-4 text-left text-md font-medium">
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div className=" bg-gray-100 cursor-pointer p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>} 
            
        </div>
    )
}

export default RightPanel;