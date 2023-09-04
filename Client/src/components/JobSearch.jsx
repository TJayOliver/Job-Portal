import { useState } from "react"
import categories  from "./categories"

const JobSearch=()=>{
    const regionsList = ['Ahafo', 'Ashanti', 'Bono East', 'Eastern', 'Greater Accra', 'Oti', 'Northern', 'Savannah', 'Upper East', 'Upper West', 'Volta', 'Western', 'Western North']

    const [searchData, setSearchData] = useState({
        categories : '', location : ''
    })
    const searchValues = (e)=>{
        const {name, value} = e.target
        setSearchData(
            prevData => ({
                ...prevData, 
                [name] : value
            })
        )
    }
    
    const submitSearch=(e)=>{
        e.preventDefault()
        
    }

    return(
        <div className=" bg-gradient-to-l from-[#0D3747] to-[#6a1e4e] h-34">
            <form onSubmit={submitSearch} className=" flex p-4 gap-3">
                <input 
                className=" h-14 rounded-md outline-none w-full px-4"
                list="cat" 
                name="categories"   
                placeholder="Category"
                value={searchData.categories}
                onChange={searchValues}
                />
                <datalist id='cat'>
                    { categories.map((cat, id)=> <option key={id}>{cat.categoryName}</option>) }
                </datalist>

                <input 
                className=" h-14 rounded-md outline-none w-full px-4"
                list="loc" 
                name="categories"   
                placeholder="Location"
                value={searchData.location}
                onChange={searchValues}
                />
                
                <datalist id='loc'>
                    { regionsList.map((list, id)=> <option key={id}>{list}</option>) }
                </datalist>

                <input 
                type='submit' 
                value='Search' 
                className=" bg-gradient-to-tr from-[#09AE79] to-[#0d7e5a] p-3 rounded-md text-white w-2/4 cursor-pointer" 
                />
                
            </form>
        </div>
    )
}

export default JobSearch