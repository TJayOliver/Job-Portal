import { FiAlertTriangle } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import axios from 'axios'

const ConfirmDelete = ({confirmDeleteBox, Cancel, erase}) =>{
    const iD = erase;

    const handleDelete = () =>{
        axios.get(`http://localhost:4040/api/articles-delete/${iD}`)
        .then(response=>response)
        .catch(error => console.error(error));  
        window.location.reload();      
    }
    return(
        <div className=" fixed w-full h-full bg-[#f65a5a33] z-50 grid place-content-center p-2">

            {/* Delete Box */}
            <div className={confirmDeleteBox ? `bg-white drop-shadow-md h-96 md:h-64 md:w-[35rem] rounded-md flex flex-col items-center justify-center p-4 gap-4 relative duration-300 ease-in ` :`bg-white drop-shadow-md h-0 md:h-0 md:w-0 rounded-md flex flex-col items-center justify-center p-4 gap-4 relative duration-300 ease-out` }>

                {/* Close Button */}
                <div onClick={Cancel} className="  h-[2rem] w-8 bg-gray-200 rounded-full items-center flex justify-center text-center absolute right-2 top-2 p-2 cursor-pointer ">

                    <CgClose className="absolute -right-0.5 top-0 p-2 text-4xl text-center text-gray-600 cursor-pointer" /> 

                </div>
               
                {/* Caution */}
                <div className=" h-14 md:h-[20rem] w-14 bg-gray-100 rounded-full items-center flex justify-center text-center">
                    <FiAlertTriangle className="text-4xl text-red-700 text-bold" />
                </div>
            
                <p className=" font-bold text-xl">Delete Article?</p>

                <p className=" text-center">Are you sure you want to delete this Article? It will be permanently deleted from the servers forever. This action cannot be undone.</p>

                {/* buttons */}
                <div className=" w-full flex flex-col md:flex md:flex-row gap-2">
                    <button onClick={Cancel} className=" border border-black h-10 p-2 rounded-md w-full hover:bg-blue-600 hover:text-white hover:border-none hover:duration-300 hover:ease-in">CANCEL</button> 
                    <button onClick={()=>handleDelete()} className=" border border-black h-10 p-2 rounded-md w-full hover:bg-red-600 hover:text-white hover:border-none hover:duration-300 hover:ease-in">DELETE</button> 
                </div>
            </div>

        </div>
    );
};


export default ConfirmDelete;