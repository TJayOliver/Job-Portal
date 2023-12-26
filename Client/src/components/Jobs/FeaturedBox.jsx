import one from '../../assets/eight.jpg'
import { Link } from 'react-router-dom';


const FeaturedBox = ({image,description, location, company, duration, position, category, salary, to}) =>{
    
    return(
       <div className=' h-24 shrink-0 text-md'>
            <div className=' flex flex-col p-2 shrink-0 grow-0 justify-between'>
                
                <div className=' flex justify-between h-[3.5rem] mb-3 '>
                    <div className=' flex gap-1'>
                        {/* Company Logo and Location */}
                        <div className=' rounded-full h-12 w-12 border-[1px] bg-white drop-shadow-sm flex shrink-0'>
                            <img src={one} loading='lazy' className="h-full w-full object-cover rounded-full"/>
                        </div>

                        {/* Company Name and Location */}
                        <div>
                            <p className=' font-bold text-md'>{company}</p>
                            <small>{location}</small>
                        </div>
                    </div>
                </div>

                {/* Job Title and Description */}
                <p className=' font-medium whitespace-nowrap'>{position}</p>
                <small dangerouslySetInnerHTML={{__html:description}}/>
                
                {/* Apply Button */}
                <div role='button' className='rounded-full mt-1 bg-red-500 hover:bg-red-600 hover:duration-150 hover:ease-out text-white font-bold h-8 flex items-center justify-center w-24 px-2'>
                    <Link to={to}>Apply</Link>
                </div>
                
            </div>
       </div>
    )
}

export default FeaturedBox;