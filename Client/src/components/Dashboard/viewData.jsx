const ViewData = ({data, logo}) =>{
    return(
        <div className=" p-3 mt-2 ">
            <div className=" w-96 h-24 rounded-lg bg-blue-600 flex justify-evenly items-center gap-4 cursor-pointer hover:bg-blue-500 hover:duration-100 hover:ease-in viewData">
                {logo}
                <p className=" text-white text-2xl font-semibold">{data}</p>
            </div>
        </div>
    )
}

export default ViewData;