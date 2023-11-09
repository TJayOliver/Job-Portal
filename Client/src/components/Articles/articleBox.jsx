const ArticleBox = ({image, brief, date, title, author, to}) =>{
    return(
        <a href={to} className=" w-72">
            <img src={image} class='object-cover rounded-xl h-52'/>
            <div className="flex gap-3">
                <small>{author}</small>
                <small>{date}</small>
            </div>
            <p className="font-medium">{title}</p>
            <small>{brief}...</small>
        </a>
    )
}

export default ArticleBox;