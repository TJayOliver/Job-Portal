const Hamburger = ({ animate, animation }) =>{
    const line = 'h-1 w-8 rounded-sm bg-white ease-out duration-300'
    const line1 = `h-1 w-8 rounded-sm bg-white rotate-45 translate-y-3`
    const line2 = `h-1 w-8 rounded-sm bg-white translate-x-10 opacity-0`
    const line3 = `h-1 w-8 rounded-sm bg-white -rotate-45 -translate-y-3`

    return(
        <div role='button'
        onClick={animation} 
        className=" md:hidden flex flex-col gap-2 group z-50">
            <div className={`${line} ${animate ? line1 : line}`}>
            </div>

            <div className={`${line} ${animate ? line2 : line}`}>
            </div>

            <div className={`${line} ${animate ? line3 : line}`}>
            </div>
        </div>
    )
}


export default Hamburger