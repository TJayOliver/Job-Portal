import ConfirmDelete from "../components/Dashboard/confirmDelete";
import LeftPanel from "../components/Dashboard/LeftPanel";
import RightPanel from "../components/Dashboard/RightPanel";
import { useState } from "react";


const Dash = () =>{
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);

    const [iddelete, setidDelete] = useState(null) // holds the id of the site section

    const cancel = () =>{
        setConfirmDeleteBox(prev => !prev)
    }
    return(
        <main className=" bg-white h-full flex flex-col md:flex md:flex-row relative">
           
           {confirmDeleteBox && <ConfirmDelete cancel={cancel}/>}
           
            {/* Left Panel */}
            <LeftPanel />

            {/* Right Panel */}
            <RightPanel />
            
        </main>
    )
}

export default Dash;