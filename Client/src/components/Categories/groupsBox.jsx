import {BsArrowRightCircle} from 'react-icons/bs'

const GroupBox = ({name, image, jobnumber}) =>{
    return(
        <div className=" h-20 w-38 md:h-28 md:w-48 bg-white rounded-md flex justify-center shrink-0" role='button'>
            <div className=' flex m-auto gap-2'>
                {image}
                <div>
                    <p className=' text-xl text-center'>{name}</p>
                    <div className=' flex gap-1'>
                        <p className=' text-md'>{jobnumber} Jobs
                        </p> 
                        <BsArrowRightCircle className=' mt-1 text-red-700'/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default GroupBox