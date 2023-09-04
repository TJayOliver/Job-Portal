import logo from '../../assets/logo.png'
import Hamburger from './Hamburger'
import { useState } from 'react'
import InsideMenus from './InsideMenus'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiArrowRightCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header=()=>{
    const [animate, setAnimation] = useState(false)
    const animation = () =>{setAnimation(prev => !prev)}

    const incomingSlide = ' md:hidden h-screen bg-gradient-to-tr from-[#1B263C] to-[#203869] absolute top-0 w-full -translate-x-0 left-0 ease-in duration-700 overflow-y-scroll latestJobs'
    const defaultSlide = ' md:hidden h-screen bg-gradient-to-tr from-[#1B263C] to-[#203869]  absolute top-0 w-full -translate-x-[800px] left-0 ease-in duration-700 opacity-10 latestJobs'

    return(
        <header className=" h-14 sticky top-0 z-50 bg-gradient-to-r from-[#1B263C] to-[#203869] 
        ">
            <div className=' px-1 relative'>
      
                <div className=' flex items-center justify-between md:justify-around  ease-linear duration-75'>

                    <div className=' flex items-center gap-3'>
                        <Hamburger animate={animate} animation={animation} />
                        <img src={logo} width={70} className=' ml-2'/>
                    </div>

                    <InsideMenus/>

                    <div className=' ease-out duration-300 flex gap-3 items-center'>
                        <div 
                            role='button' 
                            className=" bg-white p-2 text-center text-black rounded-full hover:bg-[#e7ecea] duration-75 ease-in">UPLOAD CV 
                        </div>
                        <div role='button' className=' text-white'>Log In</div>
                    </div>

                </div>
     
                {/* Mobile Menu */}
                <div className={animate ? incomingSlide : defaultSlide}>
                    <div className=' md:hidden mt-14 flex flex-col gap-0'>
                        <form className=' relative'>
                            <input 
                                type='search'
                                className=' text-3xl text-white py-2 px-10 bg-transparent relative w-full outline-none placeholder:text-xl placeholder:tracking-widest
                                placeholder:text-white
                                placeholder:py-2'
                                placeholder='What are you looking for?'
                            />
                            <AiOutlineSearch className=' text-white absolute top-4 left-2 text-2xl'/>
                        </form>
                        <Link href='/' className=' text-3xl text-white border border-l-0 border-r-0 border-t-0 border-white p-4 relative hover:bg-[#132b35] group'>
                            <FiArrowRightCircle className=' absolute right-8 group-hover:right-0 duration-100 ease-in cursor-pointer'/>
                            <div>Home</div>
                        </Link>
                        <Link href='/scholarships' className=' text-3xl text-white border border-l-0 border-r-0 border-white p-4 relative hover:bg-[#132b35] group'>
                            <FiArrowRightCircle className=' absolute right-8 group-hover:right-0 duration-100 ease-in cursor-pointer'/>
                            <div>Scholarships</div>
                        </Link>
                        <Link href='/internships' className=' text-3xl text-white border border-l-0 border-r-0 border-t-0 border-white p-4 relative hover:bg-[#132b35] group'>
                            <FiArrowRightCircle className=' absolute right-8 group-hover:right-0 duration-100 ease-in cursor-pointer'/>
                            <div>Internships</div>
                        </Link>
                        <div className=' text-3xl text-white border border-l-0 border-r-0 border-t-0 border-white p-4 relative hover:bg-[#132b35] group'>
                            <FiArrowRightCircle className=' absolute right-8 group-hover:right-0 duration-100 ease-in cursor-pointer'/>
                            <div>Study Abroad</div>
                        </div>
                        <div className=' text-3xl text-white border border-l-0 border-r-0 border-t-0 border-white p-4 relative hover:bg-[#132b35] group'>
                            <FiArrowRightCircle className=' absolute right-8 group-hover:right-0 duration-100 ease-in cursor-pointer'/>
                            <div>Remote Jobs</div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header