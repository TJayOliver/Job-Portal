import { Link } from "react-router-dom";

const BrowseJobs = () =>{
    return(
        <div className=' h-96 flex flex-col justify-center items-center font-bold gap-4'>
            <div className='flex flex-col justify-center'>
                <p className='text-5xl md:text-6xl text-center'>Land <span className='text-red-500'>The Job</span> 
                </p> 
                <p className='text-5xl md:text-6xl text-center mb-4'>of Your  Dreams</p>
                <small className='font-sm text-center font-normal'>Initiate your quest for the most exceptional and transformative employment prospects in certain fields with ease.
                </small>
            </div>
            <button className=' bg-gradient-to-r from-rose-400 to-red-500 p-4 rounded-md text-white hover:bg-red-600' >
                <Link to='/job'>
                Browse Jobs
                </Link>
            </button>
        </div>
    )
}

export default BrowseJobs;