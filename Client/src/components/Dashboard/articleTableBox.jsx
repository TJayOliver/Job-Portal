import {HiPencilSquare, HiArchiveBoxXMark} from "react-icons/hi2"

const articleTableBox = () =>{
    return(
        <div className=" h-[8rem] w-[18rem] md:w-[20rem] p-2 border border-1 flex flex-col gap-1 shrink-0">
        <div className=" flex justify-between gap-2">
            <span className=" flex cursor-pointer">
                <HiPencilSquare className=" text-xl mt-0.5"/>
                <p>Edit</p>
            </span>
            <span className=" flex cursor-pointer">
                <HiArchiveBoxXMark className=" text-xl mt-0.5"/>
                <p>Delete</p>
            </span>
        </div>
        <p className=" text-xl font-semibold">How to write a better personal statement</p>
        <small>T-Jay Oliver</small>
    </div>
    )
}


export default articleTableBox;