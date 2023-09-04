import { HiArchiveBoxXMark } from "react-icons/hi2";

const CategoriesDisplayBox = ({categoryname, onClick}) =>{
    return(
        <div className=" bg-gray-100 p-1 md:w-[30%] h-16 m-auto rounded-md flex justify-center items-center">
            <p className=" text-left text-xl p-3 font-semibold ">{categoryname}</p>
            <HiArchiveBoxXMark onClick={onClick} className=" text-3xl cursor-pointer hover:text-red-600 hover:duration-75" />
        </div>
    )
};


CategoriesDisplayBox.defaultProps = {
    categoryname : 'Category Name'
}

export default CategoriesDisplayBox;

