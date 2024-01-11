import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

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
        <header className=' bg-white sticky top-0 z-50 p-2 border-b-gray-50 border-b-2'>
            <nav className=' flex m-auto max-w-7xl justify-between'>
                <div className='font-AliandoRocky text-3xl whitespace-nowrap'>
                    <Link to='/'>FutureForte</Link>
                </div>
                
                <ul className=' flex gap-4 items-center font-medium '>
                    
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
            </nav>

            <div className={ displayMobileMenu ?'mobileOpener hidden' : 'mobileCloser '}>
                <div className='flex flex-col gap-8 p-8 font-medium text-black/40 '>
                    <Link to='/' >
                        <p className='font-bold text-black'>Home</p>
                    </Link>
                    <Link to='/jobs' >
                        <p className='hover:text-black duration-100 ease-in'>
                            Browse Jobs
                        </p>
                    </Link>
                    <Link to='/scholarships'>
                        <p className='hover:text-black duration-100 ease-in'>
                            Search Scholarships
                        </p>
                    </Link>
                    <Link to='/articles'>
                        <p className='hover:text-black duration-100 ease-in'>
                            Career Guidance
                        </p>
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}

export default Header