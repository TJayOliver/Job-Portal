import One from '../../assets/one.jpg';
import {BiAlarmOff, BiWorld, BiEdit} from 'react-icons/bi'

const SchoBox = ({image, scholarshipname, scholarshiptype, duration, agent, programs, applicant, deadline}) =>{
    return(
       <div className=" max-w-5xl w-[98%] schoboxWidth md:w-[16rem] h-[14rem] md:h-[22rem] rounded-lg bg-white md:flex-auto">
            <div className=" flex md:block">
                <img src={image} alt='scholarship flyer' className=' w-[40%] md:w-full h-[14rem] md:h-[10rem] object-cover bg-center p-2 rounded-lg schoPic' width={100} height={100}/>

                <div className=" text-left p-1">
                    <p className=" font-bold">{scholarshipname}</p>

                    <div className=" flex gap-2 flex-wrap">
                        <p className=" job-hash">{scholarshiptype}</p>
                        <p className=" job-hash">{duration}</p>
                        <p className=" job-hash">{agent}</p>
                    </div>

                    <div className=" flex gap-1 mb-0.5">
                        <BiEdit className=" text-xl mt-0.5"/>
                        <p>{programs}</p>
                    </div>

                    <div className=" flex gap-1 mb-0.5">
                        <BiWorld className=" text-xl mt-0.5"/>
                        <p>{applicant}</p>
                    </div>

                    <div className=" flex gap-1 mb-0.5">
                        <BiAlarmOff className=" mt-0.5 text-xl"/> 
                        <p>{deadline}</p>
                    </div>

                    <button className=" bg-[#2f8561] p-2 relative w-full rounded-sm md:mt-1 ">
                    Click to Apply
                </button>
                </div>
            </div>
           
       </div>
    )
}

SchoBox.defaultProps={
    image:{One},
    scholarshipname:'South Korean Government Scholarships',
    applicant: 'World Wide Students',
    scholarshiptype : 'Fully Sponsored',
    agent : 'No Agent',
    duration : 'One Year',
    programs: 'Bachelors / Masters / Mphil / Phd',
    deadline: 'Expires on 14th May 2023'
}

export default SchoBox