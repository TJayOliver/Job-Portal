import CategoryCheck from "../CategoryCheck"
import categories from "../categories"
import regions from "../regions"

const FilterJobs=()=>{
    return(
        <div className=" hidden lg:block lg:bg-white lg:h-[52rem] lg:w-56 p-2 rounded-md shrink-0">
            <p className=" text-center mb-3 font-bold">Filter Your Search</p>

            <p className=" font-bold">Job Category</p>
            <div className=" flex flex-col gap-2 overflow-y-scroll h-[12rem] mt-1">
                {
                    categories.map((cat, id)=>(
                        <CategoryCheck key={id}
                            id={cat.id}
                            For={cat.id}
                            label={cat.categoryName}
                        />
                    ))
                }
            </div>

            <hr className=" bg-black mt-4"></hr>

            <div className=" flex flex-col gap-2 mt-1">
                <p className=" font-bold">Salary Range</p>
                <select className=" p-2 border border-zinc-200">
                    <option disabled>- Select Range -</option>
                    <option>GHC100 - GHC500</option>
                    <option>GHC500 - GHC1000</option>
                    <option>GHC1000 - GHC1500</option>
                    <option>GHC1500 - GHC2000</option>
                    <option>GHC2000 +</option>
                </select>
            </div>

            <hr className=" text-white mt-4"></hr>

            <p className=" font-bold mt-1">Job Type</p>
            <div className=" flex flex-col gap-2 mt-1">
                <div>
                    <input 
                        type='checkbox'
                        name="Contract"
                        id="Contract"
                    />
                    <label For='Contract' className="ml-1">
                        Contract
                    </label>
                </div>
                <div>
                    <input 
                        type='checkbox'
                        name="Full Time"
                        id="Full Time"
                    />
                    <label For='Full Time' className="ml-1">
                        Full Time
                    </label>
                </div>
                <div>
                    <input 
                        type='checkbox'
                        name="Part Time"
                        id="Part Time"
                    />
                    <label For='Part Time' className="ml-1">
                        Part Time
                    </label>
                </div>
            </div>

            <hr className=" text-white mt-4"></hr>
            
            <p className=" font-bold mt-1">Job Location</p>
            <div className="mt-1 h-[12rem] flex flex-col gap-2 overflow-y-scroll">
                {
                    regions.map((region, id)=>(
                        <CategoryCheck key={id}
                            id={region.id}
                            For={region.id}
                            label={region.region}
                        />
                    ))
                }
            </div>

            <hr className=" text-white mt-4"></hr>

            <button className=" bg-teal-600 w-full p-3 rounded-md mt-3">
                Search
            </button>
        </div>
    )
}

export default FilterJobs