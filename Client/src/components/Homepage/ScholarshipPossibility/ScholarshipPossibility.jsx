import image from '../../../assets/Cyril.jpg'
import { lazy } from 'react';

const ScholarshipPossibility = () =>{
    
    return(
        <div className='md:h-[28rem] p-2 flex mt-2 flex-wrap-reverse justify-center gap-5 items-center '>
            
           
            <input type='search' placeholder={'Search by Country'} className='p-2 border-red-500 border-2 outline-none focus:bg-black focus:border-black focus:text-white duration-300 ease-in rounded-3xl'/>
            
            
            <div>
                <p className=' text-4xl font-bold mb-1'>A Step <br></br><span className='text-red-500'>Nearer To A Possibility</span> <br></br>Of A Scholarship</p>
                <small>Discover thousands of scholarships with all the details you require. Your moment is now!</small>
            </div>

            <div>
                <div className=' h-72 w-72 rounded-lg rotate-6 bg-black '>
                    <img src={image} loading='lazy' alt='scholarship possibility' className='  object-cover rounded-lg h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default ScholarshipPossibility;