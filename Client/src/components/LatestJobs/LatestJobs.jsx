import LatestBox from "./latestbox"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs';
import news from '../news'
import { swiperSettings } from "../../settings/swiperSettings";

const Latest = () =>{
     
    return(
        <div className=" relative h-[29rem] bg-gradient-to-r from-[#0D3747] to-[#6a1e4e] overflow-x-hidden">

            <div className=" flex gap-3 relative justify-end p-3">

                <div className=" text-xl text-white absolute left-4 tracking-widest">Latest Jobs</div>

                <BsFillArrowLeftSquareFill 
                className=" text-white text-3xl prevBtn"
                role='button'
                />
                <BsFillArrowRightSquareFill 
                className=" text-white text-3xl nextBtn"
                role='button'
                />
            </div>

            <div className=" pl-3">
                <Swiper {...swiperSettings}  
                navigation={{nextEl:'.nextBtn', prevEl:'.prevBtn'}}
                modules={[Navigation]}>
                    {
                        news.map( (list, id) => (
                            <SwiperSlide key={id}> 
                                <LatestBox 
                                image={list.image}
                                salary={list.salary} 
                                company={list.company}
                                position={list.position}
                                duration={list.duration}
                                location={list.location}
                            />
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Latest

