import {IoIosSchool} from 'react-icons/io'
import {GiReceiveMoney, GiWorld} from 'react-icons/gi'
import {MdOutlineLibraryBooks} from 'react-icons/md'

const SchoHome = () =>{
    return(
        <div className=' h-[29rem] md:h-[24rem] bg-white '>
            <div className=' flex justify-center max-w-3xl m-auto relative top-2/4 -translate-y-2/4 p-4'>
                <div className=' flex flex-col gap-4 md:gap-3'>
                    <div>
                        <MdOutlineLibraryBooks className=' text-4xl' />
                        <p>Apply for a university scholarship in a degree subject that interests you
                        </p>
                    </div>
                    <div>
                        <IoIosSchool className=' text-4xl' />
                        <p>Start your scholarship search by choosing a study location and selecting one of over 1000 opportunities
                        </p>
                    </div>
                    <button className=' bg-blue-500 p-2 w-36 rounded-md'>Navigate</button>

                </div>

                <div className=' flex flex-col gap-3'>
                    <div>
                        <GiWorld className=' text-4xl' />
                        <p>Browse comprehensive scholarship lists available for a wide variety of destinations abroad</p>
                    </div>
                    <div>
                        <GiReceiveMoney className=' text-4xl'/>
                        <p>Find other forms of student funding to cover expenses for international Bachelors, Masters and PhDs worldwide
                        </p>
                    </div>
                </div>
            </div>    
        </div> 
        
    )
}

export default SchoHome