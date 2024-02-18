import { useState, useEffect } from "react";
import { FiArrowLeftCircle,FiBarChart2 } from "react-icons/fi";
import { BiTrophy, BiCategory, BiBookReader } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { fetch } from "../request";
import { CgArrowDown } from "react-icons/cg";
import { HiMiniTrash, HiMiniPencil } from "react-icons/hi2";
import Pagination from "../../components/Pagination.jsx/Pagination";
import ConfirmDelete from "../../components/Dashboard/confirmDelete";
import ConfirmEdit from "../../components/Dashboard/confirmEdit";
import ArticleForm from "../../components/Dashboard/PostForms/ArticleForm";
import CategoriesForm from "../../components/Dashboard/PostForms/CategoriesForm";
import JobForm from "../../components/Dashboard/PostForms/JobForm";
import ScholarshipForm from "../../components/Dashboard/PostForms/ScholarshipForm";
import Subscribers from "../../components/Dashboard/subscriberList/subscribersList";
import ArticleEditForm from "../../components/Dashboard/EditForms/ArticleEditForm";
import JobEditForm from "../../components/Dashboard/EditForms/JobEditForm";
import ScholarshipEditForm from "../../components/Dashboard/EditForms/ScholarshipEditForm";

const MenuBox = ({title, icon, onClick}) => {
    return (
        <div 
        onClick={onClick}
        role='button' 
        className={" md:p-3 md:text-md font-medium flex items-center gap-2 hover:bg-gray-50 hover:rounded-md hover:duration-75 hover:ease-out"}>
            {icon}
            <p>{title}</p>
        </div>
    )
}
 
const MenuInfos = ({title, onClick, active}) => {
    return(
        <div role='button' onClick={onClick} className="flex gap-1 cursor-pointer relative items-center text-sm">
            <FiBarChart2 />
            <p className={active}>{title}</p>
        </div>
    )
}

const OverviewBox = ({title, count, logo}) =>{
    return(
        <div className=" h-24 w-full md:w-72 border border-gray-200 rounded-md p-3 flex items-center justify-evenly">
            {logo}
            <div>
                <p>{title}</p>
                <p className=" text-3xl font-medium">{count}</p>
            </div>
        </div>
    )
}

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [overviewInfo, setOverviewInfo] = useState(true);
    const [articleInfo, setArticleInfo] = useState(false);
    const [jobInfo, setJobInfo] = useState(false);
    const [scholarshipInfo, setScholarshipInfo] = useState(false);

    const [articleForm, setArticleForm] = useState(false);
    const [categoryForm, setCategoryForm] = useState(false);
    const [jobForm, setJobForm] = useState(false);
    const [scholarshipForm, setScholarshipForm] = useState(false);
    const [subscribersList, setSubscribersList] = useState(false);

    const handleOverviewInfo = () => {
        setOverviewInfo(true)
        setArticleInfo(false)
        setJobInfo(false)
        setScholarshipInfo(false)
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
    }
    const handleArticleInfo = () => {
        setOverviewInfo(false);
        setArticleInfo(true);
        setJobInfo(false);
        setScholarshipInfo(false);
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
    }
    const handleJobInfo = () => {
        setOverviewInfo(false);
        setArticleInfo(false);
        setJobInfo(true);
        setScholarshipInfo(false);
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
    }
    const handleScholarshipInfo = () => {
        setOverviewInfo(false);
        setArticleInfo(false);
        setJobInfo(false);
        setScholarshipInfo(true);
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
    }

    const handleArticleForm = () => {
        setArticleForm(true);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
        setOverviewInfo(false)
        setArticleInfo(false)
        setJobInfo(false)
        setScholarshipInfo(false)
    }
    const handleCategoryForm = () => {
        setArticleForm(false);
        setCategoryForm(true);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(false);
        setOverviewInfo(false);
        setArticleInfo(false);
        setJobInfo(false);
        setScholarshipInfo(false);
    }
    const handleJobForm = () => {
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(true);
        setScholarshipForm(false);
        setSubscribersList(false);
        setOverviewInfo(false)
        setArticleInfo(false)
        setJobInfo(false)
        setScholarshipInfo(false)
    }
    const handleScholarshipForm = () => {
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(true);
        setSubscribersList(false);
        setOverviewInfo(false)
        setArticleInfo(false)
        setJobInfo(false)
        setScholarshipInfo(false)
    }
    const handleSubscribers = () => {
        setArticleForm(false);
        setCategoryForm(false);
        setJobForm(false);
        setScholarshipForm(false);
        setSubscribersList(true);
        setOverviewInfo(false)
        setArticleInfo(false)
        setJobInfo(false)
        setScholarshipInfo(false)
    }

    const [retrievedArticlesData, setRetrievedArticlesData] = useState([]);
    const [retrievedCategoriesData, setRetrievedCategoriesData] = useState([]);
    const [retrievedJobsData, setRetrievedJobsData] = useState([]);
    const [retrievedscholarshipData, setRetrievedScholarshipData] = useState([]);
    const [retrievedCountArticle, setCountArticle] = useState("");
    const [retrievedCountJobs, setCountJobs] = useState('');
    const [retrievedCountScholarship, setCountScholarship] = useState("");

    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('article', setRetrievedArticlesData, setLoading, signal, setMessage);
        fetch('category', setRetrievedCategoriesData, setLoading, signal, setMessage);
        fetch('job', setRetrievedJobsData, setLoading, signal, setMessage);
        fetch('scholarship', setRetrievedScholarshipData, setLoading, signal, setMessage);
        fetch('article/count', setCountArticle, setLoading, signal, setMessage);
        fetch('job/count', setCountJobs, setLoading, signal, setMessage);
        fetch('scholarship/count', setCountScholarship, setLoading, signal, setMessage);

        return () => {
            controller.abort();
        }
    }, [])

    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1); 

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentArticlePost = retrievedArticlesData.slice(firstPostIndex, lastPostIndex); 
    const currentCategoryPost = retrievedCategoriesData.slice(firstPostIndex, lastPostIndex); 
    const currentJobPost = retrievedJobsData.slice(firstPostIndex, lastPostIndex); 
    const currentScholarshipPost = retrievedscholarshipData.slice(firstPostIndex, lastPostIndex); 

    const [confirmEdit, setConfirmEdit] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleConfirmEdit = (id, title) => {
        setConfirmEdit(true)
        setEditId(id)
        setTitle(title)
    }

    const handleConfirmDelete = (id, title, route) => {
        setConfirmDelete(true)
        setDeleteId(id)
        setTitle(title)
        setRoute(route)
    }

    const [editid, setEditId] = useState('');
    const [deleteid, setDeleteId] = useState('');
    const [title, setTitle] = useState('');
    const [route, setRoute] = useState('');

    const [articleEditForm, setArticleEditForm] = useState(false);
    const [jobEditForm, setJobEditForm] = useState(false);
    const [scholarshipEditForm, setScholarshipEditForm] = useState(false);

    const [a, aa] = useState('')
    const handlechecker = (data) => {
        aa(data)
    }
    console.log(a)

    return (
        <>
            {confirmEdit && <ConfirmEdit ID={editid} title={title} checker={handlechecker}/>}
            {confirmDelete && <ConfirmDelete ID={deleteid} title={title} route={route} />}

            <main className=" relative h-screen flex flex-col md:flex md:flex-row justify- gap-3 p-2 from-blue-600 to-green-500 bg-gradient-to-tr" >
                {/* left panel */}
                <section className="bg-white w-full h-44 md:w-60 md:h-full rounded-lg flex flex-col relative duration-100 ease-out">
                    {/* Heading*/}
                    <div className="p-2 flex justify-between items-center">
                        <h1 className=" text-2xl p-3 font-bold ">Dashboard</h1>

                        <div className="flex md:hidden items-center gap-1">
                            <div className=" h-6 w-6 rounded-full bg-red-600"></div>
                            <p className="text-sm font-bold">T-Jay Oliver</p>
                        </div>
                    </div>

                    <hr></hr>

                    {/* Menus */}
                    <div className="grid grid-cols-2 md:flex md:flex-col p-2 gap-2 md:gap-0">
                        <MenuBox title='Article' icon={<BiBookReader/>} onClick={handleArticleForm}/>
                        <MenuBox title='Category' icon={<BiCategory/>} onClick={handleCategoryForm}/>
                        <MenuBox title='Job' icon={<BsPeople/>} onClick={handleJobForm}/>
                        <MenuBox title='Scholarship' icon={<BiTrophy/>} onClick={handleScholarshipForm}/>
                        <MenuBox title='Subscribers' icon={<CiMail/>} onClick={handleSubscribers}/>
                    </div>

                    {/* Admininistrator's Picture and Name */}
                    <div className=" hidden md:flex absolute bottom-0 border-t border-gray-200  justify-between items-center px-2 py-1 w-full">
                        <div className=" flex gap-2 items-center">
                            <div className=" h-12 w-12 rounded-full bg-red-600"></div>
                            <div className=" flex flex-col text-sm">
                                <p className="font-bold">T-Jay Oliver</p>
                                <small>Administrator</small>
                            </div>
                        </div>
                    </div>

                </section>

                {/* right panel */}
                <section className=" bg-white w-full rounded-lg flex flex-col relative overflow-y-scroll scrollbar p-2">
                    {/* Header */}
                    <div className="p-3 flex justify-between items-center mb-2 sticky -top-2 bg-white duration-100 ease-in z-20">
                        {overviewInfo && <p className="font-bold text-2xl md:text-3xl">Overview</p>}
                        {articleInfo && <p className="font-bold text-2xl md:text-3xl">Article Statistics</p>}
                        {jobInfo && <p className="font-bold text-2xl md:text-3xl">Job Statistics</p>}
                        {scholarshipInfo && <p className="font-bold text-2xl md:text-3xl">Scholarship Statistics</p>}
                        {articleForm && <p className="font-bold text-2xl md:text-3xl">Add Article</p>}
                        {categoryForm && <p className="font-bold text-2xl md:text-3xl">Add Category</p>}
                        {jobForm && <p className="font-bold text-2xl md:text-3xl">Add Job</p>}
                        {scholarshipForm && <p className="font-bold text-2xl md:text-3xl">Add Scholarship</p>}
                        {subscribersList && <p className="font-bold text-2xl md:text-3xl">Subscribers</p>}

                        {/* Log Out */}
                        <small className=" flex gap-0.5">
                            <Link to="/administrator" className=" flex gap-1 hover:text-blue-600">
                            <FiArrowLeftCircle className="mt-1"/>
                            <p>Log Out</p>
                            </Link>
                        </small>
                    </div>

                    {/* Menu Infos */}
                    <div className=" grid grid-cols-2 gap-3 md:flex md:gap-8 sticky top-12 border-b z-20 bg-white">
                       <MenuInfos title='Overview' onClick={handleOverviewInfo} active={overviewInfo ? 'font-bold text-red-500' : ''}/>
                       <MenuInfos title='Article' onClick={handleArticleInfo} active={articleInfo ? 'font-bold text-red-500' : ''}/>
                       <MenuInfos title='Job' onClick={handleJobInfo} active={jobInfo ? 'font-bold text-red-500' : ""}/>
                       <MenuInfos title='Scholarship' onClick={handleScholarshipInfo} active={scholarshipInfo ? 'font-bold text-red-500' : ''}/>
                    </div>

                    {/* Statistics */}
                    <div className="mt-2">
                        {overviewInfo &&
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
                            </div>
                        }

                        {/* Categories Table List */}
                        {overviewInfo && 
                            <div className=" p-3">
                                <div className=" border border-gray-200 rounded-md">
                                    <table className=" min-w-full divide-y divide-gray-200">
                                        <thead className=" bg-gray-50">
                                            <tr>
                                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Category Name <CgArrowDown className="mt-1"/></th>                                   
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
                                                        <td className="px-2 md:px-4 py-4 text-left text-xs font-medium">{data.categoryname}</td>
                                                        <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                                                            <div 
                                                            onClick={ () => handleConfirmEdit(data.id, data.categoryname, 'category') } className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                                <HiMiniPencil />
                                                            </div>
                                                            <div 
                                                            onClick={ () => handleConfirmDelete(data.id, data.categoryname, 'category') } className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
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

                        {articleInfo && 
                            <div className=" md:p-3">
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
                                                        <div 
                                                        onClick={ () => handleConfirmEdit(data.id, data.title, 'article') } 
                                                        className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                            <HiMiniPencil />
                                                        </div>
                                                        <div 
                                                        onClick={ () => handleConfirmDelete(data.id, data.title, 'article') } 
                                                        className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
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
                            </div>    
                        }

                        {jobInfo && 
                            <div className=" md:p-3">
                            <div className=" border border-gray-200 rounded-md">
                                <table className=" min-w-full divide-y divide-gray-200">
                                <thead className=" bg-gray-50">
                                    <tr>
                                        <th className=" px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Job Title <CgArrowDown className="mt-1"/>
                                        </th>
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
                                                        <div 
                                                        onClick={ () => handleConfirmEdit(data.id, data.position, 'job') }  
                                                        className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                            <HiMiniPencil />
                                                        </div>
                                                        <div 
                                                        onClick={ () => handleConfirmDelete(data.id, data.position, 'job') } 
                                                        className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
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
                            </div>
                        }

                        {scholarshipInfo && 
                            <div className=" md:p-3">
                                <div className=" border border-gray-200 rounded-md">
                                    <table className=" min-w-full divide-y divide-gray-200">
                                        <thead className=" bg-gray-50">
                                            <tr>
                                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium flex gap-1" >Scholarship Name <CgArrowDown className="mt-1"/></th>
                                                <th className="px-2 md:px-4 py-3 text-left text-sm font-medium">Location</th>
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
                                                            <div 
                                                            onClick={ () => handleConfirmEdit(data.id, data.scholarshipname, 'scholarship') } 
                                                            className=" hover:bg-blue-300 cursor-pointer p-1 md:p-2 rounded-md">
                                                                <HiMiniPencil />
                                                            </div>
                                                            <div 
                                                            onClick={ () => handleConfirmEdit(data.id, data.scholarshipname, 'scholarship') } 
                                                            className=" hover:bg-red-300 cursor-pointer p-1 md:p-2 rounded-md">
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
                            </div>
                        }
                    </div>

                    {/* Forms and Subscribers */}
                    <div>
                        {articleForm && <ArticleForm />}
                        {categoryForm && <CategoriesForm />}
                        {jobForm && <JobForm />}
                        {scholarshipForm && <ScholarshipForm />}
                        {subscribersList && <Subscribers />}

                        {articleEditForm && <ArticleEditForm />}
                        {jobEditForm && <JobEditForm />}
                        {scholarshipEditForm && <ScholarshipEditForm />}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard;