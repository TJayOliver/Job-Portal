import { useEffect, useState } from 'react';
import {fetch} from '../../../pages/request';
import FeaturedBox from '../../Jobs/FeaturedBox';
import Loading from '../../Loading/Loading';
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'

const FeaturedJobs = () =>{    
    const [featuredjobs, setJobsFeatured] = useState([]);
    const [scholarshipFeatured, setScholarshipFeatured] = useState([])
    const [loading, setLoading] = useState(true);

    const [displayJob, setDisplayJob] = useState(true);
    const [displayScholarship, setDisplayScholarship] = useState(false);

    const leftArrow = () => {
        setDisplayJob(true);
        setDisplayScholarship(false);
    }
    const rightArrow = () => {
        setDisplayJob(false);
        setDisplayScholarship(true);
    }

    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('scholarship/featured', setScholarshipFeatured, setLoading, signal);
        fetch('job/featured', setJobsFeatured, setLoading, signal);

        return () => {controller.abort()}
    }, [])

    return(
        <section className=' flex justify-center gap-4 p-2'>

            {/* Latest Jobs and scholarships */}
            <div className='bg-gray-50 h-[27rem] w-[58rem] rounded-2xl p-2 relative overflow-hidden'>
                {/* Heading */}
                <div className='flex justify-between'>
                    <p className=' font-bold text-xl text-black '>{displayJob ? 'Latest Job' : 'Latest Scholarships'}</p>
                   
                    {/* buttons */}
                    <div className='flex items-center gap-2'>
                        <div onClick={leftArrow} role='button' className='rounded-full h-6 w-6 border-[1px] border-black hover:bg-red-500 hover:border-0 group flex items-center justify-center'>
                            <HiArrowLeft className='text-black group-hover:text-white  duration-100 ease-in'/>
                        </div>
                        <div onClick={rightArrow} role='button' className='rounded-full h-6 w-6 border-[1px] border-black hover:bg-red-500 hover:border-0 group flex items-center justify-center'>
                            <HiArrowRight className='text-black group-hover:text-white  duration-100 ease-in' />
                        </div>
                    </div>
                </div>

                {loading ? <Loading /> :
                <div id='featured'>
                    <div id='job' className={displayJob ? 'grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2 absolute duration-300 ease-in' : 'grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2 absolute duration-300 ease-in translate-x-[58rem]' }>
                        {
                          featuredjobs.map( ( job, id ) => (
                            <FeaturedBox key={id} 
                            image={job.image}
                            location={job.location}
                            company={job.company.slice(0,18)}
                            duration={job.duration}
                            position={job.position.slice(0,17)}
                            category={job.categoryname}
                            salary={job.salary}
                            description={job.responsibility}
                            to={`/job/${job.id}/${job.position}`}
                            />
                            ))  
                        }
                    </div>

                    <div id='scholarship' className={displayScholarship ? 'grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2 absolute duration-300 ease-in translate-x-0' : 'grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2 absolute duration-300 ease-in -translate-x-[58rem]'}>
                        {
                            scholarshipFeatured.map((scholarship, id)=>(
                                <FeaturedBox key={id} 
                                image={scholarship.image}
                                location={scholarship.scholarshiptype}
                                company={scholarship.scholarshipname.slice(0, 17)}
                                position={scholarship.country}
                                category={scholarship.scholarshiptype}
                                description={scholarship.description.slice(0,45)}
                                to={`/job/${scholarship.id}/${scholarship.position}/${scholarship.company}`}
                                />
                            ))
                        }
                    </div>
                </div>
                }
            </div>
        </section>
    )
}

export default FeaturedJobs;