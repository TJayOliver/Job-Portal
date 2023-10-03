import DashBoardHeader from "../DashboardHeaders/DashBoardHeader";
import OverviewBox from "../OverviewBox";
import { BiTrophy, BiBookReader } from "react-icons/bi";
import {BsPeople, BsMortarboard} from "react-icons/bs";
import { HiMiniTrash, HiMiniPencil } from "react-icons/hi2";
import {CgArrowDown} from "react-icons/cg"
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import axios from "axios";

const RightPanel = ({Delete, Edit}) =>{
    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1); 
    
    const [retrievedArticlesData, setRetrievedArticlesData] = useState([]),
    [retrievedCategoriesData, setRetrievedCategoriesData] = useState([]),
    [retrievedJobsData, setRetrievedJobsData] = useState([]),
    [retrievedscholarshipData, setRetrievedScholarshipData] = useState([]),
    [retrievedCountArticle, setCountArticle] = useState(""),
    [retrievedCountJobs, setCountJobs] = useState(""),
    [retrievedCountScholarship, setCountScholarship] = useState("");

    const [overView, setOverview] = useState(true),
    [articleDataView, setArticleDataView] = useState(false),
    [jobsDataView, setJobsDataView] = useState(false),
    [scholarshipDataView, setScholarshipsDataView] = useState(false);
    
    const handleOverView = () =>{
        setOverview(true); setArticleDataView(false); setJobsDataView(false); setScholarshipsDataView(false); setMove(firstmove);
    }
    const handleArticleTable = () =>{
        setArticleDataView(true); setOverview(false); setJobsDataView(false);setScholarshipsDataView(false); setMove(secondMove);
    }
    const handleJobsTable = () =>{
        setJobsDataView(true); setOverview(false); setArticleDataView(false);setScholarshipsDataView(false); setMove(thirdMove);
    }
    const handleScholarshipTable = () =>{
        setScholarshipsDataView(true); setOverview(false); setArticleDataView(false); setJobsDataView(false);setMove(fourthMove);
    }

    useEffect(() =>{
        axios.get('http://localhost:4040/api/articles-get').then(response => setRetrievedArticlesData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/categories-get').then(response => setRetrievedCategoriesData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/jobs-get').then(response => setRetrievedJobsData(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/scholarships-get').then(response => setRetrievedScholarshipData(response.data)).catch(error => console.error(error.message));
        
        axios.get('http://localhost:4040/api/articles-count').then(response => setCountArticle(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/jobs-count').then(response => setCountJobs(response.data)).catch(error => console.error(error.message));

        axios.get('http://localhost:4040/api/scholarships-count').then(response => setCountScholarship(response.data)).catch(error => console.error(error.message));
    }, [])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentArticlePost = retrievedArticlesData.slice(firstPostIndex, lastPostIndex); 
    const currentCategoryPost = retrievedCategoriesData.slice(firstPostIndex, lastPostIndex); 
    const currentJobPost = retrievedJobsData.slice(firstPostIndex, lastPostIndex); 
    const currentScholarshipPost = retrievedscholarshipData.slice(firstPostIndex, lastPostIndex); 

    let firstmove = ` hidden md:block md:h-0.5 md:w-[4rem] md:bg-black md:absolute md:-bottom-0.5 md:left-[1.5rem] md:duration-100 md:ease-out`, 
    secondMove = `hidden md:block md:h-0.5 md:w-16 md:bg-black md:absolute md:-bottom-0.5 left-[8.9rem] md:duration-100 md:ease-out`, 
    thirdMove = `hidden md:block md:h-0.5 md:w-10 md:bg-black md:absolute md:-bottom-0.5 md:left-[16.5rem] md:duration-100 md:ease-out`, 
    fourthMove = `hidden md:block md:h-0.5 md:w-[5.1rem] md:bg-black md:absolute md:-bottom-0.5 md:left-[22.5rem] md:duration-100 md:ease-out`;

    const [move,setMove] = useState(firstmove);

    return(
        <div className=" w-full md:ml-64 h-full">

            <DashBoardHeader handleArticleTable={handleArticleTable} handleOverView={handleOverView} handleJobsTable={handleJobsTable} handleScholarshipTable={handleScholarshipTable} move={move} />

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
                        logo={<BiTrophy className=" text-4xl"/>} 
                        title={retrievedscholarshipData.length > 1 ? 'Scholarships Posted' : 'Scholarship Posted' } 
                        count={retrievedCountScholarship}
                    />
                </div>}

            {/* Categories Table List */}
            {overView && <div className=" p-3">
                    <div className=" border border-gray-200 rounded-md">
                        <table className=" min-w-full divide-y divide-gray-200">
                            <thead className=" bg-gray-50">
                                <tr>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Category Name <CgArrowDown className="mt-1"/></th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Jobs</th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm font-medium" ></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    retrievedCategoriesData.length === 0 ? 
                                    <tr><td className="px-2 md:px-4 py-4 text-left text-xs font-medium">No Data Available</td></tr> 
                                    :   
                                    currentCategoryPost.map(data=>(
                                        <tr key={data.id} className=" hover:bg-gray-50">
                                            <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.categoriesname}</td>
                                            <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">400</td>
                                            <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                                                <div onClick={()=>Edit(data.id, 'categories-edit', "Category")} className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                    <HiMiniPencil />
                                                </div>
                                                <div onClick={()=>Delete(data.id, 'categories-delete', "Categories")} className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                    <HiMiniTrash/>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination 
                        totalPosts={retrievedCategoriesData.length} 
                        postPerPage={postPerPage} 
                        setCurrentPage={setCurrentPage} 
                    />
                </div>
            } 

            {/* Article Panel */}
            {articleDataView && <div className=" p-2 rounded-md">
                <div className=" border border-gray-200 rounded-md">
                    <table className=" min-w-full divide-y divide-gray-200 ">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th className=" px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Article Title <CgArrowDown className="mt-1"/></th>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Date Posted</th>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Author</th>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium" ></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                retrievedArticlesData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                currentArticlePost.map(data=>(
                                    <tr key={data.id} className=" hover:bg-gray-50">
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.title}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.author || "oliver"}</td>
                                        <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                                            <div onClick={()=>Edit(data.id, 'articles-edit', "Article")} className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div onClick={()=>Delete(data.id, 'articles-delete', "Article")} className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination 
                    totalPosts={retrievedArticlesData.length} 
                    postPerPage={postPerPage} 
                    setCurrentPage={setCurrentPage}
                    />
            </div>} 

            {/* Job Panel */}
            {jobsDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table className=" min-w-full divide-y divide-gray-200">
                    <thead className=" bg-gray-50">
                        <tr>
                            <th className=" px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Job Title <CgArrowDown className="mt-1"/></th>
                            <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Company</th>
                            <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Date Posted</th>
                            <th className="px-2 md:px-4 py-3 text-left text-sm font-medium" ></th>
                        </tr>
                    </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                retrievedJobsData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                currentJobPost.map(data=>(
                                    <tr key={data.id} className=" hover:bg-gray-50">
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.position}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.company}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                                            <div onClick={()=>Edit(data.id, 'jobs-edit')} className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div onClick={()=>Delete(data.id, 'graduatesjobs-delete', "Jobs")} className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination 
                    totalPosts={retrievedJobsData.length} 
                    postPerPage={postPerPage} 
                    setCurrentPage={setCurrentPage}
                    />
            </div>} 

            {/* Scholarship Panel */}
            {scholarshipDataView && <div className=" p-3">
                <div className=" border border-gray-200 rounded-md">
                    <table className=" min-w-full divide-y divide-gray-200">
                        <thead className=" bg-gray-50">
                            <tr>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Scholarship Name <CgArrowDown className="mt-1"/></th>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Scholarship Location</th>
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Date Posted</th>    
                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium" ></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                retrievedscholarshipData.length === 0 ? 
                                <tr className=" flex justify-center p-3"><td>No Data Available</td></tr> 
                                : 
                                currentScholarshipPost.map(data=>(
                                    <tr key={data.id} className=" hover:bg-gray-50">
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.scholarshipname}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.country}</td>
                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.datecreated}</td>
                                        <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                                            <div onClick={()=>Edit(data.id, 'scholarships-edit', "Scholarship")} className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniPencil />
                                            </div>
                                            <div onClick={()=>Delete(data.id, 'scholarships-delete', "Scholarship")} className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                <HiMiniTrash/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination 
                    totalPosts={retrievedscholarshipData.length} 
                    postPerPage={postPerPage} 
                    setCurrentPage={setCurrentPage}
                    />
            </div>} 
            
        </div>
    )
}

export default RightPanel;