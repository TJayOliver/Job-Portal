import {TiFlash} from "react-icons/ti"

const ArticleBox = ({image, post}) =>{
    return(
        <div className=" p-2">
            <div className=" h-48 w-full md:w-96 bg-gray-200 rounded-md drop-shadow-sm relative">
                <div className=" z-50 absolute text-white flex">
                    <TiFlash className=" text-xl mt-0.5"/>
                    <p>Featured</p>
                </div>
                <img src={image} className=" w-full md:w-96 h-48 object-cover " />
                <p className=" font-medium text-xl py-2">{post}</p>
            </div>
        </div>
    )
}

export default ArticleBox;