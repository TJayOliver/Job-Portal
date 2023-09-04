import {BsFillCalendar2CheckFill, BsPinMapFill, BsCash} from 'react-icons/bs'

const LatestBox = ({image, salary, location, company, duration, position}) =>{
    return(
        <div className=' flex-none rounded-md bg-white h-[24rem] w-64'>
            <img src={image} loading='lazy' alt='Job Flyer' className=" h-44 w-80 bg-white object-cover rounded-t-2xl p-2 bg-center duration-100" />

            {/* Information */}
            <div className=' flex flex-col p-2'>
                <h1 className=' text-xl'>{position}</h1>

                <p className=' mb-2'>{company}</p>

                <p className='flex gap-2'> <BsPinMapFill className=' mt-1'/> {location}</p>

                <p className='flex gap-2'><BsFillCalendar2CheckFill className=' mt-1'/>{duration}</p>

                <p className='flex gap-2'><BsCash className=' mt-1'/>GHC {salary}</p>
            </div>

            <div className=' flex justify-center gap-4'>
                <div className=' border border-zinc-300 p-2 rounded-md hover:bg-blue-600 hover:text-white duration-150 ease-out'>View Description</div>
                <div className=' bg-teal-600 text-white py-2 px-3 rounded-md'>Apply</div>
            </div>
        </div> 
    )
}

LatestBox.defaultProps = {
    position : 'Vacant Position',
    company : 'Company Name',
    location : 'Location',
    duration : 'Duration',
    salary : 'Amount'
}

export default LatestBox