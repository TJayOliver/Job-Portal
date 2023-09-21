import {Link} from 'react-router-dom';
import { FiArrowLeftCircle } from "react-icons/fi";

const FormsDashboardHead = ({title}) =>{
    return(
        <div className=" border-b-2 duration-100 ease-in h-[6rem] w-full p-5 sticky top-0 z-10 bg-white">
            {/* Back */}
            <small className=" flex gap-0.5">
                <Link to="/dashboard" className=" flex gap-1 hover:text-blue-600">
                    <FiArrowLeftCircle className="mt-1"/>
                    <p>Back</p>
                </Link>
            </small>

            <p className=" font-bold text-3xl mb-5">{title}</p>
        </div>
    )
}

export default FormsDashboardHead;