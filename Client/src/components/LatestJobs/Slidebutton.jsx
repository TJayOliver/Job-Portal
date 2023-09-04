import { useSwiper } from 'swiper/react';
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'

const Slidebutton =()=>{
    const Swiper = useSwiper();

    return(
        <div className=" flex gap-3 relative justify-end p-3">

            <div className=" text-xl text-white absolute left-4 tracking-widest">Latest Jobs</div>
            
            <BsFillArrowLeftSquareFill 
            onClick={()=> Swiper.slidePrev()}
            className=" text-white text-3xl nextBtn"
            role='button'
            />
            <BsFillArrowRightSquareFill 
            onClick={()=>Swiper.slideNext()}
            className=" text-white text-3xl"
            role='button'
            />
        </div>
    )
}


export default Slidebutton