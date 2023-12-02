const ScholarshipBox = ({image, scholarshiptype, agent, date, location, about, scholarshipname,to}) =>{
    return(
        <a href={to} className="w-full bg-gray-50 hover:drop-shadow-sm hover:border-[#004242] border-[1px] h-40 rounded-lg p-4 flex flex-col justify-between">
            {/* Heading */}
            <div className='flex justify-between'>
                <div className="flex gap-3">
                    <img src={image} className="h-10 w-10 object-cover rounded-sm bg-white"></img>
                    <div>
                        <p className="font-bold">{scholarshipname}</p>
                        
                        <div className="flex gap-3 ">
                            <p>{scholarshiptype}</p>
                            <p>{agent}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-medium">{location}</p>
                    <p>{date}</p>
                </div>
            </div>

            {/* about scholarships */}
            <div>
                <p>{about}</p>
            </div>
        </a>
    )
}

export default ScholarshipBox;