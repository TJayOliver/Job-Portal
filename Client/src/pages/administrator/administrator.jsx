import logo from '../../assets/logo.png'

const Administrator = () =>{
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

                <form className=" flex flex-col m-auto gap-8 mt-8">
                    <div className=' flex flex-col'>
                        <label htmlFor='username' className=" text-xl">Username</label>
                        <input 
                        type='email'
                        id='username'
                        name='username'
                        placeholder="username"
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
                        placeholder="mypassword1234"
                        className=" p-4 bg-slate-100 rounded-sm
                        outline-red-600"
                        />
                    </div>

                    <button 
                    type='submit'
                    name="submit"
                    className=" p-4 bg-red-600 hover:bg-red-700 rounded-sm text-white">Submit
                    </button>
                </form>

            </div>
        </div>
        </>
    )
}

export default Administrator;