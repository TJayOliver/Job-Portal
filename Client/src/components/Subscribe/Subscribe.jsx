import {HiX} from 'react-icons/hi'

const Subscribe = ({SubscribeState, SetSubscribeState, onChange, value, onClick, checkSubscribeResponse, subscribeResponse}) =>{
    return(
        <aside className={SubscribeState ? " backdrop-blur-sm z-50 absolute h-screen w-full top-0 p-3" : null}>
            <div className={SubscribeState ? 'subscribe p-2' : 'closeSubscribe'}>
                
                {checkSubscribeResponse ? 
                    <div className='p-4 flex justify-between'>
                        <p className='text-2xl'>{subscribeResponse}</p>
                        <HiX className=" text-5xl md:text-3xl cursor-pointer" onClick={()=>SetSubscribeState(false)}/>
                    </div>
                    :
                    <div>
                        <div className="flex justify-between p-4">
                            <div className="flex flex-col">
                                <p className="text-3xl font-medium">Join our Newsletter</p>
                                <small>No spam! Notifications only about new updates. You can always unsubscribe.</small>
                            </div>
                            <HiX className=" text-5xl md:text-3xl cursor-pointer" onClick={()=>SetSubscribeState(false)}/>
                        </div>
                        <input
                            type='text'
                            name='email'
                            value={value}
                            onChange={onChange}
                            inputMode="email"
                            placeholder="Enter e-mail address"
                            className="bg-gray-100 w-full p-3 rounded-sm outline-teal-400"
                        />
                        <div onClick={onClick} role='button' className="bg-gradient-to-tr from-sky-700  to-teal-400 text-white text-center p-3 rounded-lg hover:bg-gray-200 m-auto mt-4 font-medium"  >Notify Me</div>
                        <small className="text-center justify-center flex mt-1">We care about the protection of your data. Read our Privacy Policy.</small>
                    </div>
                }

                </div>
                
        </aside>
    )
}

export default Subscribe;