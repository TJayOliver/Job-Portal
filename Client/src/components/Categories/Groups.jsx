import GroupBox from "./groupsBox"
import categories from "../categories"
import {RiComputerFill, RiHome2Fill} from 'react-icons/ri'

const Groups = () =>{
    return(
        <div className="  h-[40rem] md:h-[24rem]
        bg-gradient-to-tr from-[#1B263C] to-[#203869] relative 
        ">
            <div className=" text-center text-2xl text-white p-2">Browse Job Categories</div>

            <div className="  m-auto grid grid-cols-2 md:flex md:flex-wrap justify-center px-4 gap-4">
                {
                categories.map((cat, id)=>
                    <GroupBox key={id}
                    name={cat.categoryName}
                    jobnumber={100} 
                    image={ 
                        cat.categoryName === 'Administration' ? <RiComputerFill className=" text-2xl mt-2"/> : <RiHome2Fill className=" text-2xl mt-2" />                    
                        }  
                    />
                )
                }
            </div>
            
        </div>
    )
}


export default Groups