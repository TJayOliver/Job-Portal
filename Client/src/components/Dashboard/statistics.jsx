import {Link} from 'react-dom';

const Statistics = ({name, data, logo, onClick,href}) =>{
    return(
        <a href={href} className=" p-3 mt-2" onClick={onClick}>
            <div className=" w-96 h-24 rounded-lg bg-blue-600 flex justify-center items-center gap-4 cursor-pointer hover:bg-blue-500 hover:duration-100 hover:ease-in stats">
                <div className=" rounded-full bg-white h-14 w-14 flex items-center justify-center ">
                    {logo}
                </div>
                <div className=" text-white flex flex-col">
                    <p className=" text-2xl font-bold">{data}</p>
                    <p>{name}</p>
                </div>
            </div>
        </a>
    )
}

export default Statistics;