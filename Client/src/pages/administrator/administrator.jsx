import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Administrator = () =>{
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({username:"", password:""});
    const [message, setMessage] = useState('')

    const handleCredentials =(e)=>{
        const {name, value} = e.target
        setCredentials(prev =>({...prev, [name] :value}))
    }

    axios.defaults.withCredentials = true;

    const submit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4040/admin/signin', credentials);
            setMessage(response.data.message)
            navigate('/dashboard')
        } catch (error) {
            setMessage(error.response.data.message)
            console.error('authentication failed',error.message)
        }
    }

    return(
        <>
        <section className="flex from-blue-600 to-green-500 bg-gradient-to-tr h-screen justify-center">
            <div className=' md:w-2/4 bg-white px-8 flex flex-col'>
                <div className='m-auto w-2/3'>
                    <div className=' md:flex md:flex-row flex flex-col justify-between mb-8 items-center'>
                        <p className=' font-AliandoRocky text-3xl whitespace-nowrap'>Future Forte</p>
                        <small>@Administrator</small>
                    </div>

                    <form onSubmit={ submit } className='flex flex-col gap-8'>
                        <div className=' flex flex-col gap-4'>
                            <label className='font-medium'>Username</label>
                            <input 
                                type='text'
                                name='username'
                                value={credentials.username}
                                onChange={handleCredentials}  
                                className='border-[0.5px] bg-gray-50 focus:bg-white outline-none rounded-md px-2 h-10'
                            />
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <label className='font-medium'>Password</label>
                            <input 
                                type='password'
                                name='password'
                                value={credentials.password}
                                onChange={handleCredentials}  
                                className='border-[0.5px] bg-gray-50 focus:bg-white outline-none rounded-md px-2 h-10'
                            />
                        </div>

                        <small className=' text-red-600'>{ message }</small>

                        <button className='rounded-md h-10 px-2 bg-blue-500 text-white font-medium hover:bg-blue-600'>Sign In</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Administrator;