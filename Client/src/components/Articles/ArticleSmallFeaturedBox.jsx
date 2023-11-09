const ArticleSmallFeaturedBox = ({image, title, author, date, to}) =>{
    return(
        <a href={to} className=" h-24 gap-3 flex">
            <img src={image} className='rounded-lg h-20 w-20 object-cover'/>
            <div>
                <small>{date}</small>
                <p className="font-medium">{title}</p>
                <small>{author}</small>
            </div>
            
        </a>
    )
}

export default ArticleSmallFeaturedBox;