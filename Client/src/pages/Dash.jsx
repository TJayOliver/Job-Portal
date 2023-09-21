import ConfirmDelete from "../components/Dashboard/confirmDelete";
import LeftPanel from "../components/Dashboard/LeftPanel";
import RightPanel from "../components/Dashboard/RightPanel";
import { useState } from "react";

const Dash = () =>{
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);
    const [ID, setID] = useState('');
    const [route, setRoute] = useState('');

    const DisplayDeleteAlert = (id, route) =>{
        setRoute(route)
        setID(id);
        setConfirmDeleteBox(true)
    }
    
    const CancelDeleteAlert = () =>{
        setConfirmDeleteBox(false);
    }

    return(
        <main className=" h-screen relative flex flex-wrap">
           
           {confirmDeleteBox && <ConfirmDelete ID={ID} route={route} Cancel={CancelDeleteAlert} className="z-50"/>}
           
            {/* Left Panel */}
            <LeftPanel />

            {/* Right Panel */}
            <RightPanel Delete={DisplayDeleteAlert}/>
            
        </main>
    )
}

export default Dash;