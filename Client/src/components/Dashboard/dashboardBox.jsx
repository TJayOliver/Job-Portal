const DashboardBox = ({Title,icon, onClick}) =>{
    return(
        <div onClick={onClick} className=" flex text-xl text-white hover:bg-blue-500  cursor-pointer  gap-1 p-3">
            {icon}
            <p>{Title}</p>
        </div>
    )
}

export default DashboardBox;

