import axios from 'axios';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Administrator = () =>{
    const [credentials, setCredentials] = useState({username:"", password:""});
    const [message, setMessage] = useState('')

    const handleCredentials =(e)=>{
        const {name, value} = e.target
        setCredentials(prev =>({...prev, [name] :value}))
    }

    const submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/api/login', credentials)
        .then(response => setMessage(response.data.message))
        .catch(error => console.error(error.message))
    }

    return(
        <>
        <div className="flex bg-red-600 h-screen justify-center p-2 ">
            <div className=" bg-white h-[28rem] w-[30rem] m-auto rounded-md p-4">
                <div className=" flex justify-between">
                    <div>
                    <p className=" text-2xl">Administrator</p>
                    <p className=" text-sm">@Jobsportal</p>
                    </div>

                    <div className=' h-5 w-24'>
                        <img src={logo} alt='site logo'  />
                    </div>
                </div>

                <form onSubmit={submit} className=" flex flex-col m-auto gap-8 mt-8">
                    <div className=' flex flex-col'>
                        <label htmlFor='username' className=" text-xl">Username</label>
                        <input 
                        type='text'
                        id='username'
                        name='username'
                        value={credentials.username}
                        onChange={handleCredentials}
                        placeholder="username"
                        required
                        className=" p-4 bg-slate-100 rounded-sm
                        outline-red-600
                        "
                        />
                    </div>

                    <div className=' flex flex-col'>
                        <label htmlFor='password' className="text-xl">Password</label>
                        <input 
                        type='password'
                        id='password'
                        name='password'
                        inputMode='password'
                        value={credentials.password}
                        onChange={handleCredentials}
                        placeholder="mypassword1234"
                        required
                        className=" p-4 bg-slate-100 rounded-sm
                        outline-red-600"
                        />
                    </div>
                    <div>{message}</div>
                    <button 
                    type='submit'
                    className=" p-4 bg-red-600 hover:bg-red-700 rounded-sm text-white">Log in
                    </button>
                </form>

            </div>
        </div>
        </>
    )
}

export default Administrator;