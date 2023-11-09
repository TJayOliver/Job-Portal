const MainFeaturedBox = ({image,author, date, title, brief, to}) =>{
    return(
        <div className="h-96 p-2 md:w-2/4 relative rounded-2xl">
            <img src={image} className='object-cover h-full w-full rounded-2xl' alt="main featured" />

            <div className="bg-gray-200 h-64 w-2/4 absolute rounded-sm md:-left-20 top-2/4 -translate-y-2/4 p-3">
                <div className="flex justify-between">
                    <small>{author}</small>
                </div>
                <p className="text-3xl font-bold">{title}</p>
                <div className="flex flex-col gap-4 mt-1">
                    <small>{brief}.... 
                    <a href={to} className="font-bold"> Read More</a>
                    </small>
                    <small>{date}</small>
                </div>
            </div>
        </div>
    )
}

export default MainFeaturedBox;