const FilterSchoSearch=()=>{
    return(
        <div className=" hidden lg:block lg:bg-white lg:h-[38rem] lg:w-56 p-2 rounded-md shrink-0">
        <p className=" text-center mb-3 font-bold">Filter Your Search</p>

        <div className=" flex flex-col gap-2">
            <p className=" font-bold"> Scholarship Type</p>
            <div>
                <input 
                id="partial" 
                type='checkbox'
                name='partial'
                />
                
                <label 
                htmlFor='partial' 
                className=" ml-1">Partial</label>
            </div>
            <div>
                <input 
                id="full" 
                type='checkbox'
                name='full'
                />
                
                <label 
                htmlFor='full' 
                className=" ml-1">Full</label>
            </div>
        </div>

        <hr className=" bg-black mt-4"></hr>

        <div className=" flex flex-col gap-2 mt-1">
            <p className=" font-bold"> Scholarship Duration</p>
            <div>
                <input 
                id="one-three" 
                type='checkbox'
                name='one-three-years'
                />
                
                <label 
                htmlFor='one-three' 
                className=" ml-1">One - Three Years</label>
            </div>
            <div>
                <input 
                id="Four-Seven" 
                type='checkbox'
                name='four-seven-years'
                />
                
                <label 
                htmlFor='Four-Seven' 
                className=" ml-1">Four - Seven Years</label>
            </div>
        </div>

        <hr className=" bg-black mt-4"></hr>

        <div className=" flex flex-col gap-2 mt-1">
            <p className=" font-bold">Study Area</p>
            <select className=" p-2 border border-zinc-200">
                <option disabled>- Select Level -</option>
                <option>Bachelors</option>
                <option>Masters (Mphil/MSc)</option>
                <option>Doctorate</option>
            </select>
        </div>

        <hr className=" bg-black mt-4"></hr>

        <div className=" flex flex-col gap-2 mt-1">
            <p className=" font-bold">Scholarship Location</p>
            <div>
                <input 
                id="africa" 
                type='checkbox'
                name='africa'
                />

                <label htmlFor='africa' 
                className=" ml-1">Africa</label>
            </div>
            <div>
                <input 
                id="america" 
                type='checkbox'
                name='america'
                />

                <label htmlFor='america' 
                className=" ml-1">America</label>
            </div>
            <div>
                <input 
                id="asia" 
                type='checkbox'
                name='asia'
                />

                <label htmlFor='asia' 
                className=" ml-1">Asia</label>
            </div>
            <div>
                <input 
                id="Europe" 
                type='checkbox'
                name='Europe'
                />

                <label htmlFor='Europe' 
                className=" ml-1">Europe</label>
            </div>
        </div>

        <hr className=" text-white mt-4"></hr>

        <button className=" bg-teal-600 w-full p-3 rounded-md mt-3">
            Search
        </button>
        </div>
    )
}

export default FilterSchoSearch