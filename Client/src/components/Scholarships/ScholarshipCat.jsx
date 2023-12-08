const ScholarshipCategoryBox = ({image, category,text}) =>{
    return(
        <div className="rounded-2xl group hover:bg-gray-50 h-[17rem] md:h-[22rem] md:w-[23%] shrink-0 p-4 flex flex-col justify-around duration-150 ease-out hover:drop-shadow-md relative">
            <img src={image} className='rounded-xl h-[8.5rem] md:h-48 md:w-82 object-cover'/>
            <div className=" flex flex-col items-center text-center">
                <p className="font-medium text-2xl">{category}</p>
                <p>{text}</p>
            </div>
            <div className="hidden text-center bg-red-500 p-2 rounded-lg absolute -bottom-2 w-full left-0 group-hover:block text-white duration-100 ease-out hover:bg-red-600">View More</div>
        </div>
    )
}

export default ScholarshipCategoryBox;