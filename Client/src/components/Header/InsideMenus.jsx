import { Link } from 'react-router-dom'

const InsideMenus = ()=>{
   
    return(
        <>
        <div className=' hidden md:flex justify-center gap-3 text-white relative mt-2'>

            <Link to='/' className=' hover:text-green-600'>
                Home
            </Link>

            <Link to='/jobs' className='headers'>
                Graduate Jobs
            </Link>  

            <Link to='/scholarships' className="headers">
                Scholarships
            </Link>

            <Link to='/internships' className=' headers'>
                Internships
            </Link>

            <Link to='/articles' className=' headers'>
                Articles
            </Link>
        </div>
        </>    
    )
}

export default InsideMenus