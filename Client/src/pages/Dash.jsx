import ConfirmDelete from "../components/Dashboard/confirmDelete";
import ConfirmEdit from "../components/Dashboard/confirmEdit";
import LeftPanel from "../components/Dashboard/LeftPanel";
import RightPanel from "../components/Dashboard/RightPanel";
import { useState } from "react";

const Dash = () =>{
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false),
    [confirmEditBox, setConfirmEditBox] = useState(false),
    [ID, setID] = useState(''), 
    [route, setRoute] = useState(''),
    [title, setTitle] = useState('');

    const DisplayDeleteAlert = (id, route, title) =>{
        setTitle(title)
        setRoute(route)
        setID(id);
        setConfirmDeleteBox(true)
    }
    const DisplayConfirmAlert = (id, route, title) =>{
        setTitle(title)
        setRoute(route)
        setID(id);
        setConfirmEditBox(true)
    }
    
    const CancelDeleteAlert = () =>{setConfirmDeleteBox(false);},
    CancelConfirmAlert = () =>{setConfirmEditBox(false);};

    return(
        <main className=" h-screen relative flex flex-wrap">
           
           {confirmDeleteBox && <ConfirmDelete ID={ID} title={title} route={route} Cancel={CancelDeleteAlert} className="z-50"/>}

           {confirmEditBox && <ConfirmEdit ID={ID} title={title} route={route} Cancel={CancelConfirmAlert} className="z-50"/>}
           
            {/* Left Panel */}
            <LeftPanel />

            {/* Right Panel */}
            <RightPanel Delete={DisplayDeleteAlert} Edit={DisplayConfirmAlert}/>
            
        </main>
    )
}

export default Dash;