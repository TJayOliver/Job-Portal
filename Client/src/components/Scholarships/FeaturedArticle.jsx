import two from '../../assets/Two.jpg'
import three from '../../assets/Three.jpg'


const FeaturedArticle = () =>{
    return(
        <div className=" h-[33rem] md:h-96 p-1">

            <p className=" text-white text-center text-2xl mb-0 md:mb-4">Featured Articles</p>

            <div className=" flex flex-col md:justify-evenly justify-center py-4 md:flex-row md:flex px-4 md:p-0 gap-4">

                <div className=" h-56 w-full md:h-80  bg-red-600 rounded-lg flex relative">
                    <img src={two} alt='Personal Statement' className=' h-56 w-full md:h-80 object-cover rounded-lg'/>

                    <div className=' h-24 absolute w-full flex top-[57.3%] md:top-[14rem] rounded-lg bg-gradient-to-t 
                    from-[rgb(0,0,0,.8)]'>
                        <p className=' text-2xl md:text-3xl text-white p-2 hover:underline shadow-xl cursor-pointer'>Learn how to write a personal statement</p>
                    </div>
                </div>

                <div className=" h-56 w-full md:h-80 md:w-[35rem] bg-red-600 rounded-lg flex relative">
                    <img src={three} alt='Personal Statement' className=' h-56 w-full md:h-80 object-cover rounded-lg'/>

                    <div className=' h-24 absolute w-full flex top-[57.3%] md:top-[14rem] rounded-lg bg-gradient-to-t 
                    from-[rgb(0,0,0,.8)]'>
                        <p className=' text-2xl md:text-3xl text-white p-2 hover:underline shadow-xl cursor-pointer'>Learn how to write a personal statement</p>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default FeaturedArticle