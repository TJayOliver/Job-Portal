import cyril from '../../../assets/cyril.jpg';
import { BiTrophy, BiCategory, BiBookReader } from "react-icons/bi";
import {FcGraduationCap} from 'react-icons/fc'

const Information =()=>{
    return(
        <section className=' h-full relative grid place-content-center p-3 bg-gradient-to-b
        from-[rgba(0,0,0,.1)]
        to-[rgba(0,0,0)]
        md:bg-gradient-to-r
        md:from-[rgba(0,0,0, 4)],
        md:from-[rgba(0,0,0,.1)]
        md:to-[rgba(0,0,0)]
        '>
            <div className=' flex flex-col md:flex md:flex-row justify-evenly p-3 items-center gap-14 '>

                <div className=' h-96 w-full md:w-[35rem] bg-orange-500 rounded-2xl'>
                    <img src={cyril} className='h-full w-full object-cover rounded-2xl' alt='homepage pictures' />
                </div>

                <div className=' flex flex-col gap-4 py-2'>
                
                    <div className=' flex'>
                        <FcGraduationCap className='text-3xl mt-2' />

                        <div className=' flex flex-col items-center justify-center'>
                            <p className=' text-3xl font-bold flex items-center'>Find Scholarships</p>
                            <p>Find all the scholarships you need</p>
                    </div>
                    
                    </div>

                    <div className=' flex'>
                    <div className=' h-24 w-24 bg-orange-500 rounded-md'></div>

                    <div className=' flex flex-col items-center justify-center'>
                        <p className=' text-3xl font-bold flex items-center'>Find Scholarships</p>
                        <p>Find all the scholarships you need</p>
                    </div>
                    
                    </div>

                    <div className=' flex'>
                    <div className=' h-24 w-24 bg-orange-500 rounded-md'></div>

                    <div className=' flex flex-col items-center justify-center'>
                        <p className=' text-3xl font-bold flex items-center'>Find Scholarships</p>
                        <p>Find all the scholarships you need</p>
                    </div>
                    
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Information;