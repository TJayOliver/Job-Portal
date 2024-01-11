import main from '../../assets/cyril.jpg'

const ArticleBox = ({image, date, title, author, to, category}) =>{
    return(
        <a href={to} className="h-[23rem] w-64 rounded-md bg-white drop-shadow-md">
            <div className='bg-red-600 h-2/4 rounded-t-md relative'>
                <img src={main} className='w-full h-full object-cover rounded-t-md' />
                <div className={ 
                    category ==='Job' ? 'bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-md h-8  p-3 items-center flex absolute top-2 left-2 font-medium' 
                    : 
                    category === 'Scholarship' ? 'bg-gradient-to-r from-blue-200 to-cyan-200 rounded-md h-8  p-3 items-center flex absolute top-2 left-2 font-medium' 
                    : 
                    category === 'Business' ? 'bg-gradient-to-r from-teal-200 to-teal-500 rounded-md h-8  p-3 items-center flex absolute top-2 left-2 font-medium' 
                    : 
                    category === 'Other' ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-md h-8  p-3 items-center flex absolute top-2 left-2 font-medium' 
                    : null}>{category}</div>
            </div>
            <div className="p-4">
                <small className="p-2">{date}</small>
                <p className="font-bold text-xl mt-2 mb-2">{title}</p>
                <small>{author}</small>
            </div>
        </a>
    )
}

export default ArticleBox;