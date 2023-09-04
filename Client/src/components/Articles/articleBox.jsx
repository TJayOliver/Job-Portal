import { BiMessageEdit, BiLogInCircle } from "react-icons/bi";

const ArticleBox = ({Title, BriefInfo, Author}) =>{
    return(
        <div className=" h-[19rem] bg-red-600 w-64 p-3 hover:bg-green-600 m-auto hover:shadow-lg hover:scale-105 duration-75 ease-out cursor-pointer group">

            <h1 className=" text-white font-bold text-3xl tracking-wide">{Title}</h1>

            <p className=" mt-4 font-medium">{BriefInfo}</p>

            <div className=" justify-end mt-2 flex gap-1"> 
                <BiMessageEdit className="mt-1.5"/>
                <p>{Author}</p>
            </div>

            <BiLogInCircle className=" text-2xl mt-2 text-white duration-300 ease-out group-hover:translate-x-48" />
        </div>
    )
}

export default ArticleBox;


ArticleBox.defaultProps = {
    Title : "How To Prepare For a Job Interview",
    BriefInfo : "This Article teaches you how to prepare adequately in order for you to land your dream job",
    Author : "T-Jay Oliver"
}