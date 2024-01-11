import main from '../../assets/cyril.jpg'

const MainArticle =({image, title, post, category})=>{
    return(
        <section className="flex justify-between p-2 ">
            {/* headings */}
            <div className=" h-96 gap-8 w-full flex flex-col justify-center">
                <div className="flex gap-2 md:gap-4 items-center ">
                    <div className="rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 h-8  p-3 items-center flex ">{category}</div>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-bold text-3xl">{title}</p>
                    <small>{post}</small>
                </div>
            </div>

            {/* image */}
            <div className="rounded-lg h-96 w-full">
                <img src={main} className='w-full h-full object-cover rounded-lg' />
            </div>
        </section>
    )
}


export default MainArticle;