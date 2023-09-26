import one from '../../assets/seven.jpg'
import {TiFlash} from "react-icons/ti"

const ArticleBox = () =>{
    return(
        <div className=" mb-24">
            <div className=" h-48 w-full md:w-96 bg-gray-200 rounded-md drop-shadow-sm relative">
                <div className=" z-50 absolute text-white flex">
                    <TiFlash className=" text-xl mt-0.5"/>
                    <p>Featured</p>
                </div>
                <img src={one} className=" w-full md:w-96 h-48 object-cover " />
                <p className=" font-medium text-xl py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laboriosam soluta.</p>
            </div>
        </div>
    )
}

export default ArticleBox;