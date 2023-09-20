import { FiArrowLeftCircle,FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashBoardHeader = ({handleArticleTable, handleOverView, handleJobsTable, handleInternshipsTable,handleScholarshipTable, move}) =>{
   
    return(
        <div className=" border-b-2 duration-100 ease-in h-[8rem] w-full p-5 sticky top-0 z-10 bg-white">
                
            {/* Back */}
            <small className=" flex gap-0.5">
                <Link to="/administrator/dashboard" className=" flex gap-1 hover:text-blue-600">
                <FiArrowLeftCircle className="mt-1"/>
                <p>Back</p>
                </Link>
            </small>

            <p className=" font-bold text-3xl mb-5">Data Grid</p>

            {/* navigation */}
            <div className=" flex gap-2 md:gap-14 relative scrollbar whitespace-nowrap ">

                <div className={move}></div>
               
                {/* Overview */}
                <small onClick={handleOverView} className=" flex gap-1 cursor-pointer relative">
                    <FiBarChart2 className=" mt-1" />
                    <p>Overview</p>
                </small>

                {/* Articles */}
                <small onClick={handleArticleTable} className=" flex gap-1 cursor-pointer">
                    <FiBarChart2 className=" mt-1" />
                    <p>Articles</p>
                </small>
               
                {/* Graduate Jobs */}
                <small onClick={handleJobsTable} className=" flex gap-1 cursor-pointer">
                    <FiBarChart2 className=" mt-1" />
                    <p>Graduate Jobs</p>
                </small>

                {/* Internships */}
                <small onClick={handleInternshipsTable} className=" flex gap-1 cursor-pointer">
                    <FiBarChart2 className=" mt-1" />
                    <p>Internships</p>
                </small>

                {/* Scholarships */}
                <small onClick={handleScholarshipTable} className=" flex gap-1 cursor-pointer">
                    <FiBarChart2 className=" mt-1" />
                    <p>Scholarships</p>
                </small>
            </div>

        </div>
    )
}

export default DashBoardHeader;