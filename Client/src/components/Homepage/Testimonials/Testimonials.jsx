import { useState } from "react";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import {AiFillStar} from 'react-icons/ai';
import One from '../../../assets/Four.jpg';
import Two from '../../../assets/Five.jpg';
import Three from '../../../assets/Four.jpg';
import Four from '../../../assets/Four.jpg';
import Five from '../../../assets/Five.jpg';

const Testimonials = () =>{
    const [initial, setInitial] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);

    const manageInitial = () =>{
        setInitial(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
        setFifth(false)
    }
    const manageSecond = () =>{
        setSecond(true)
        setInitial(false)
        setThird(false)
        setFourth(false)
        setFifth(false)
    }
    const manageThird = () =>{
        setThird(true)
        setInitial(false)
        setSecond(false)
        setFourth(false)
        setFifth(false)
    }
    const manageFourth = () =>{
        setFourth(true)
        setInitial(false)
        setThird(false)
        setSecond(false)
        setFifth(false)
    }
    const manageFifth = () =>{
        setFifth(true)
        setInitial(false)
        setThird(false)
        setFourth(false)
        setSecond(false)
    }


    return(
        <div className=' flex flex-col justify-center text-center text-3xl mt-4 items-center p-2'>
            <p className="p-2 font-bold">Testimonials</p>

            <div className=' p-2 h-64 w-full md:w-[38rem] bg-white shadow-lg rounded-2xl relative after:absolute after:h-8 after:w-8 after:bg-white after:-bottom-2 after:rotate-45 '>
                <div className={initial ? "text-sm p-2 absolute -translate-y-2/4 top-2/4" : 'hidden'}>

                    <div className="relative">
                        <ImQuotesLeft className="text-3xl float-left absolute -top-8"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore nam cum ab aliquid itaque doloribus rem nostrum fugiat exercitationem, optio, explicabo quis laborum ea voluptas earum autem dicta! Iusto?</p>
                        <ImQuotesRight className="text-3xl float-right" />
                    </div>
                    <div className=" translate-y-4 md:translate-y-8 justify-center items-center flex flex-col">
                        {/* Star */}
                        <div className="flex gap-2 justify-center">
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                        </div>
                        <p>Cyril Asiedu Nketia</p>
                        <small>Web Developer</small>
                    </div>

                </div>
                
                <div className={second ? "text-sm p-2 absolute -translate-y-2/4 top-2/4" : 'hidden'}>

                    <div className="relative">
                        <ImQuotesLeft className="text-3xl float-left absolute -top-8"/>
                        <p>Ipsum ipsum dolor sit amet consectetur adipisicing elit. Alias dolore nam cum ab aliquid itaque doloribus rem nostrum fugiat exercitationem, optio, explicabo quis laborum ea voluptas earum autem dicta! Iusto?</p>
                        <ImQuotesRight className="text-3xl float-right" />
                    </div>
                    <div className=" translate-y-4 md:translate-y-8 justify-center items-center flex flex-col">
                        {/* Star */}
                        <div className="flex gap-2 justify-center">
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                        </div>
                        <p>Michael Dapaah</p>
                        <small>Graphic Designer</small>
                    </div>

                </div>

                <div className={third ? "text-sm p-2 absolute -translate-y-2/4 top-2/4" : 'hidden'}>

                    <div className="relative">
                        <ImQuotesLeft className="text-3xl float-left absolute -top-8"/>
                        <p>Dolor ipsum dolor sit amet consectetur adipisicing elit. Alias dolore nam cum ab aliquid itaque doloribus rem nostrum fugiat exercitationem, optio, explicabo quis laborum ea voluptas earum autem dicta! Iusto?</p>
                        <ImQuotesRight className="text-3xl float-right" />
                    </div>
                    <div className=" translate-y-4 md:translate-y-8 justify-center items-center flex flex-col">
                        {/* Star */}
                        <div className="flex gap-2 justify-center">
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                        </div>
                        <p>Dela Amankwaah</p>
                        <small>Blacksmith</small>
                    </div>

                </div>

                <div className={fourth ? "text-sm p-2 absolute -translate-y-2/4 top-2/4" : 'hidden'}>

                    <div className="relative">
                        <ImQuotesLeft className="text-3xl float-left absolute -top-8"/>
                        <p>Sit ipsum dolor sit amet consectetur adipisicing elit. Alias dolore nam cum ab aliquid itaque doloribus rem nostrum fugiat exercitationem, optio, explicabo quis laborum ea voluptas earum autem dicta! Iusto?</p>
                        <ImQuotesRight className="text-3xl float-right" />
                    </div>
                    <div className=" translate-y-4 md:translate-y-8 justify-center items-center flex flex-col">
                        {/* Star */}
                        <div className="flex gap-2 justify-center">
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                        </div>
                        <p>Francis Kofi Antwi</p>
                        <small>Teacher</small>
                    </div>

                </div>

                <div className={fifth ? "text-sm p-2 absolute -translate-y-2/4 top-2/4" : 'hidden'}>

                    <div className="relative">
                        <ImQuotesLeft className="text-3xl float-left absolute -top-8"/>
                        <p>Amet ipsum dolor sit amet consectetur adipisicing elit. Alias dolore nam cum ab aliquid itaque doloribus rem nostrum fugiat exercitationem, optio, explicabo quis laborum ea voluptas earum autem dicta! Iusto?</p>
                        <ImQuotesRight className="text-3xl float-right" />
                    </div>
                    <div className=" translate-y-4 md:translate-y-8 justify-center items-center flex flex-col">
                        {/* Star */}
                        <div className="flex gap-2 justify-center">
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                            <AiFillStar className='text-[#ffd700]' />
                        </div>
                        <p>Ametope Kafe Efo</p>
                        <small>Ritualist</small>
                    </div>

                </div>
            </div>

            <div className='p-2 py-8 flex gap-3 md:gap-4 translate-x-2 md:translate-x-3 relative justify-center items-center'>
                <div onClick={manageSecond} className={second ? ' rounded-full h-12 w-12 scale-125 drop-shadow-md duration-300 ease-out' :'rounded-full h-12 w-12'}>
                    <img src={One} className=' object-cover h-full w-full rounded-full' />
                </div>

                <div onClick={manageThird} className={third ? ' rounded-full h-12 w-12 scale-125 drop-shadow-md duration-300 ease-out' :'rounded-full h-12 w-12'}>
                    <img src={Two} className=' object-cover h-full w-full rounded-full' />
                </div>

                <div onClick={manageInitial} className={initial ? ' rounded-full h-12 w-12 scale-125 drop-shadow-md duration-300 ease-out' :' rounded-full h-12 w-12'}>
                    <img src={Three} className='object-cover h-full w-full rounded-full' />
                </div>
               
                <div onClick={manageFourth} className={fourth ? ' rounded-full h-12 w-12 scale-125 drop-shadow-md duration-300 ease-out' :'rounded-full h-12 w-12'}>
                    <img src={Four} className='object-cover h-full w-full rounded-full' />
                </div>

                <div onClick={manageFifth} className={fifth ? ' rounded-full h-12 w-12 scale-125 drop-shadow-md duration-300 ease-out' :'rounded-full h-12 w-12'}>
                    <img src={Five} className='object-cover h-full w-full rounded-full' />
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials;