
import { Link } from 'react-router-dom';
import image from '../../../assets/Cyril.jpg'

const ScholarshipPossibility = () =>{
    
    return(
        <section className='md:h-[28rem] p-2 flex mt-2 flex-wrap-reverse justify-center gap-5 items-center '>  
            <div>
                <p className=' text-4xl font-bold mb-1'>A Step <br></br><span className='text-red-500'>Nearer To A Possibility</span> <br></br>Of A Scholarship</p>
                <small>Discover thousands of scholarships with all the details you require. Your moment is now!</small><br></br>
                <Link to={'/scholarships'}>
                    <p className='p-2 w-[10rem] rounded-md whitespace-nowrap bg-gradient-to-r from-rose-400 to-red-500 text-white hover:bg-[#024d4d]'>Search Scholarships</p>
                </Link>
            </div>

            <div>
                <div className=' h-72 w-72 rounded-lg rotate-6 bg-black '>
                    <img src={image} loading='lazy' alt='scholarship possibility' className='  object-cover rounded-lg h-full w-full' />
                </div>
            </div>
        </section>
    )
}

export default ScholarshipPossibility;