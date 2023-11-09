const MustReadArticles = ({image, author, title, brief, date, to}) =>{
    return(
        <a href={to} className="w-[30rem]">
            <img src={image} className='object-cover w-[35rem] rounded-lg h-56'/>
            <div className="flex gap-4">
                <small>{author}</small>
                <small>{date}</small>
            </div>
            <p className="text-2xl font-medium">{title}</p>
            <small>{brief}..</small>
        </a>
    )
}

export default MustReadArticles;