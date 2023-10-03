import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header=()=>{
    const [mobileAnimation, setMobileAnimation] = useState(false);
    const animateMobile = () =>{
        setMobileAnimation(prev => !prev)
    }
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    let div1 = `h-1 w-8 bg-black rounded-md duration-150 ease-in transfrom rotate-45 translate-y-2`,
    div2 = `h-1 w-6 bg-black rounded-md duration-300 ease-in -translate-x-8 opacity-0`,
    div3 = `h-1 w-8 bg-black rounded-md duration-150 ease-in transform -rotate-45 -translate-y-2`;

    const mobileMenu = () =>{
        setDisplayMobileMenu(prev => !prev)
    }
   
   
    return(
        <header className='sticky top-0 z-50 bg-white'>
            <nav className=' flex justify-between items-center p-2'>

                <ul className=' flex gap-4 items-center font-medium'>
                    <li className='font-AliandoRocky text-xl whitespace-nowrap'><Link to='/'>Job Portal</Link></li>
                    <li className='hidden md:block'><Link to='/articles'>Articles</Link></li>
                    <li className='hidden md:block'><Link to='/scholarships'>Scholarships</Link></li>
                    <li className='hidden md:block'><Link to='/jobs'>Jobs</Link></li>
                </ul>

                 {/* mobile button */}
                <div onClick={mobileMenu} className=" flex justify-between md:hidden ">
                    <div onClick={animateMobile} className=" flex flex-col gap-1 justify-center cursor-pointer">
                        <div className={mobileAnimation ? div1 : `h-1 w-8 bg-black rounded-sm duration-75 ease-in`}></div>
                        <div className={mobileAnimation ? div2 : `h-1 w-6 bg-black rounded-sm duration-75 ease-in`}></div>
                        <div className={mobileAnimation ? div3 : `h-1 w-8 bg-black rounded-sm duration-75 ease-in`}></div>
                    </div>
                </div>

                <input type='search' className=' hidden md:block md:h-8 md:drop-shadow-sm md:w-96 md:rounded-md' />

                <ul className=' hidden md:flex md:gap-4 md:items-center md:font-medium'>
                <li>Upload CV</li>
                <li>Post a Job</li>
                <li>Sign In</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header