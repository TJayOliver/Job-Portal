import { useEffect, useState } from 'react';
import {fetch} from '../../../pages/request';
import FeaturedBox from '../../Jobs/FeaturedBox';
import Loading from '../../Loading/Loading';
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'

const FeaturedJobs = () =>{
    const [Slide, setSlide] = useState(false)
    
    const [featuredjobs, setJobsFeatured] = useState([]);
    const [scholarshipFeatured, setScholarshipFeatured] = useState([])
    const [loading, setloading] = useState(true);

    const leftArrow = () =>{setSlide(prev => !prev)}
    const rightArrow = () =>{setSlide(prev => !prev)}

    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:4040/scholarship/featured', setScholarshipFeatured, setloading, signal);
        fetch('http://localhost:4040/jobs/featured', setJobsFeatured, setloading, signal);

        return ()=>{controller.abort()}
    }, [])

    return(
        <section className=' flex justify-center gap-4 p-2'>

            {/* Latest Jobs and scholarships */}
            <div className='bg-gray-50 h-[27rem] w-[58rem] rounded-2xl p-2 relative overflow-hidden'>
                {/* Heading */}
                <div className='flex justify-between'>
                    <p className=' font-bold text-xl text-black '>{Slide ?"Latest Scholarships" : "Latest Jobs"}</p>
                   
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

                {/* Job opportunity */}
                <div className={Slide ? 'opacity-0 translate-x-[26rem] duration-300 ease-out grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 absolute': 'grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2 absolute duration-300 ease-in'}>
                    {loading ? <Loading className=' flex justify-center'/> : featuredjobs.map((job, id)=>(
                        <FeaturedBox key={id} 
                        image={job.image}
                        location={job.location}
                        company={job.company}
                        duration={job.duration}
                        position={job.position}
                        category={job.categoriesname}
                        salary={job.salary}
                        description={job.responsibilities.replace(/^\d+[.,]/, '').trim().slice(0,38)}
                        to={`/jobs/description/${job.id}/${job.position}/${job.company}`}
                        />
                    ))}
                </div>
                
                {/* Scholarship opportunity */}
                <div className={Slide ? 'translate-x-0 opacity-100 duration-300 ease-out grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-14 p-2' :' -translate-x-[26rem] opacity-0 grid grid-cols-2 md:grid-cols-4  gap-y-24 gap-14 p-2 absolute duration-300 ease-out'}>
                {loading ? <Loading className='flex justify-center'/> : scholarshipFeatured.map((scholarship, id)=>(
                    <FeaturedBox key={id} 
                    image={scholarship.image}
                    location={scholarship.scholarshiptype}
                    company={scholarship.scholarshipname}
                    position={scholarship.country}
                    category={scholarship.scholarshiptype}
                    description={scholarship.description.slice(0,50)}
                    to={`/jobs/description/${scholarship.id}/${scholarship.position}/${scholarship.company}`}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedJobs;