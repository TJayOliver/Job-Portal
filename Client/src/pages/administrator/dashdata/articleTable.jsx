import ArticleTableBox from "../../../components/Dashboard/articleTableBox";
import ConfirmDelete from "../../../components/Dashboard/confirmDelete";
import ArticleForm from "../../../components/Dashboard/articleForm";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { FiArrowLeftCircle,FiBarChart2, FiCalendar } from "react-icons/fi";
import axios from 'axios'

const articleTable = () =>{
    let firstmove = `h-0.5 w-12 bg-black absolute -bottom-3 -left-2 duration-100 ease-out`, secondMove = `h-0.5 w-16 bg-black absolute -bottom-3 left-[5.5rem] duration-100 ease-out`, thirdMove = `h-0.5 w-24 bg-black absolute -bottom-3 left-[12.5rem] duration-100 ease-out`;

    const[all, setAll] = useState(true), [today, setToday] = useState(false), [date, setDate] = useState(false), [move, setMove] = useState(firstmove);

    const handleAll = () =>{
        setAll(true);
        setToday(false);
        setDate(false);
        setMove(firstmove)
    }

    const handleToday = () =>{
        setToday(true);
        setAll(false);
        setDate(false);
        setMove(secondMove);
    }

    const handleDate = () =>{
        setDate(true);
        setToday(false);
        setAll(false);
        setMove(thirdMove)
    }

    const [aLL, setaLL] = useState([]), [tODAY, settODAY] = useState([]), [todayCount, setTodayCount] = useState("")

    useEffect(()=>{
        axios.get('http://localhost:4040/api/articles-get')
        .then((response) =>{setaLL(response.data)}) 
        .catch(error => console.log(error))

        axios.get('http://localhost:4040/api/articles-today-count')
        .then((response) => {setTodayCount(response.data)})
    },[])
    
    useEffect(()=>{
        axios.get('http://localhost:4040/api/articles-today')
        .then((response)=>{settODAY(response.data)})
        .catch(error => console.log(error.message));
    },[today])

    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);

    const [iddelete, setidDelete] = useState(null) // holds the id of the article
    const DeleteArticle = (id) =>{
        setidDelete(id);
        setConfirmDeleteBox(true);    
    }
    const CancelDelete = () =>{
        setConfirmDeleteBox(false)
    }
    
    return(
        <div className="  h-screen bg-white relative overflow-x-hidden">

            {confirmDeleteBox && <ConfirmDelete confirmDeleteBox={confirmDeleteBox} Cancel={()=>CancelDelete()} erase={iddelete} /> }

            <div className=" border-b-2 duration-100 ease-in h-[8rem] w-full p-5 sticky top-0 z-10 bg-white">
                
                {/* Back */}
                <small className=" flex gap-0.5">
                    <Link to="/administrator/dashboard" className=" flex gap-1 hover:text-blue-600">
                    <FiArrowLeftCircle className="mt-1"/>
                    <p>Back</p>
                    </Link>
                    
                </small>

                <p className=" font-bold text-3xl mb-5">Articles Data</p>

                {/* navigation */}
                <div className=" flex gap-14 relative">
                    <div className={move}></div>

                    {/* All */}
                    <small onClick={()=>handleAll()} className=" flex gap-1 cursor-pointer">
                        <FiBarChart2 className=" mt-1" />
                        <p>All</p>
                    </small>

                    {/* Today */}
                    <small onClick={()=>handleToday()} className=" flex gap-1 cursor-pointer ">
                        <div className=" h-5 w-5 mt- rounded-full bg-black text-white flex items-center justify-center p-2">
                            {todayCount}
                        </div>
                        <p>Today</p>
                    </small>

                    {/* Select by date */}
                    <small onClick={()=>handleDate()} className=" flex gap-1 cursor-pointer">
                        <FiCalendar className=" mt-1"/>
                        <p className=" whitespace-nowrap">Select by Date</p>
                    </small>
                </div>

            </div>

            <div className="flex rounded-md p-2 md:p-5 relative gap-4">
                {all &&
                    <div className=" flex flex-col md:flex-row md:flex md:flex-wrap gap-x-8 gap-y-2 justify-start">
                        {aLL.length == 0 ? 'No Data Available' :
                            aLL.map((data)=>(
                                <ArticleTableBox key={data.id}
                                    title={data.title}
                                    id={data.id}
                                    Delete={() => DeleteArticle(data.id)}
                                />
                            ))
                        }
                    </div>
                }

                {today &&
                <div className=" flex flex-col md:flex-row md:flex md:flex-wrap gap-x-8 gap-y-2 justify-start">
                    {tODAY.length == 0 ? 'No Data Available' : 
                    
                        tODAY.map((data)=>(
                            <ArticleTableBox key={data.id}
                                title={data.title}
                            />
                        ))
                    
                    }
                </div>}

                {date &&
                <div className=" flex flex-col md:flex-row md:flex md:flex-wrap gap-x-8 gap-y-2 justify-start">
                    <p>Street</p>
                </div>}
            </div>

        </div>
    )
};

export default articleTable;