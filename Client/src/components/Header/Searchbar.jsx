import {BiSearch} from 'react-icons/bi'

const SearchBar=()=>{
    return(
        <form className=' hidden relative w-full max-w-4xl md:flex justify-center'> 
            <input 
            type='search' 
            className=" rounded-sm h-10 outline-none w-full relative p-2"/>

            <button>
                <BiSearch
                className=' absolute z-10 right-2 bg-blue-600 h-8 top-1 w-7 rounded-sm text-white' />
            </button>
        </form>
    )
}

export default SearchBar