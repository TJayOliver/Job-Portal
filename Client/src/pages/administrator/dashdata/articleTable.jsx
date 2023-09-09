import ArticleTableBox from "../../../components/Dashboard/articleTableBox";
import ConfirmDelete from "../../../components/Dashboard/confirmDelete";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { FiArrowLeftCircle,FiBarChart2, FiCalendar } from "react-icons/fi";
import axios from 'axios'

const articleTable = () =>{
    let firstmove = `h-0.5 w-12 bg-black absolute -bottom-3 -left-2 duration-100 ease-out`
    let secondMove = `h-0.5 w-16 bg-black absolute -bottom-3 left-[5.5rem] duration-100 ease-out`
    let thirdMove = `h-0.5 w-24 bg-black absolute -bottom-3 left-[12.5rem] duration-100 ease-out`

    const[all, setAll] = useState(true);
    const[today, setToday] = useState(false);
    const[date, setDate] = useState(false);
    const [move, setMove] = useState(firstmove)

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

    const [aLL, setaLL] = useState([]);
    const [tODAY, settODAY] = useState([]);
    const [todayCount, setTodayCount] = useState("")

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
        .catch(error => console.error(error));
    },[today])

    return(
        <div className=" h-screen md:grid md:place-content-center bg-gray-300 relative">

            {/* <ConfirmDelete /> */}

            <div className="flex flex-col h-[40rem] w-[68rem] bg-white rounded-md p-2 md:p-5 overflow-x-hidden relative gap-4">

                <div className=" border-b-2 duration-100 ease-in h-28 p-2 sticky -top-2 z-10 bg-white">
                    
                    {/* Back */}
                    <small className=" flex gap-0.5">
                        <Link to="/administrator/dashboard" className=" flex gap-1 hover:text-blue-600">
                        <FiArrowLeftCircle className="mt-1"/>
                        <p>Back</p>
                        </Link>
                        
                    </small>

                    <p className=" font-bold text-3xl mb-4">Articles Data</p>

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
                            <p>Select by Date</p>
                        </small>
                    </div>

                </div>
                
                {all &&
                    <div className=" flex flex-col md:flex-row md:flex md:flex-wrap gap-x-8 gap-y-2 justify-start">
                        {aLL.length == 0 ? 'No Data Available' :
                            aLL.map((data)=>(
                                <ArticleTableBox key={data.id}
                                    title={data.title}
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