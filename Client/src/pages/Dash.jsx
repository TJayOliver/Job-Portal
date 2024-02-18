import ConfirmDelete from "../components/Dashboard/confirmDelete";
import ConfirmEdit from "../components/Dashboard/confirmEdit";
import LeftPanel from "../components/Dashboard/Panels/LeftPanel";
import RightPanel from "../components/Dashboard/Panels/RightPanel";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dash = () =>{
    const navigate = useNavigate();

    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false)
    const [confirmEditBox, setConfirmEditBox] = useState(false)
    const [ID, setID] = useState('')
    const [route, setRoute] = useState('')
    const [title, setTitle] = useState('')

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

    const [authenticated, setAuthenticated] = useState(false);
    const [message, setMessage] = useState('');
    const [username, setUserName] = useState('');

    axios.defaults.withCredentials = true;

    useEffect( () => {
        const check = async () => {
            try {
                const response = await axios.get('http://localhost:4040/admin/dashboard');
                const status = response.data.status;
                if (status === 'Success') {
                    setAuthenticated(true)
                    setUserName(response.data.username);
                    navigate('/dashboard')
                } else {
                    setAuthenticated(false)
                    setMessage('You are not authorized to view this page')
                    navigate('/')
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        check()
    }, [])

    return(
        <>
        {authenticated ? 
            <main className=" h-screen relative flex flex-wrap">
            
            {confirmDeleteBox && <ConfirmDelete ID={ID} title={title} route={route} Cancel={CancelDeleteAlert} className="z-50"/>}

            {confirmEditBox && <ConfirmEdit ID={ID} title={title} route={route} Cancel={CancelConfirmAlert} className="z-50"/>}
            
                {/* Left Panel */}
                <LeftPanel />

                {/* Right Panel */}
                <RightPanel Delete={DisplayDeleteAlert} Edit={DisplayConfirmAlert}/>
                
            </main> :
            <div>
                {message}
                not authorized
            </div>
        } 
        </>
        
    )
}

export default Dash;