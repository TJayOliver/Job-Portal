import CategoryCheck from "../CategoryCheck"
import categories from "../categories"

const filterInternships=()=>{
    return(
        <div className=" hidden lg:block lg:bg-white lg:h-[32rem] lg:w-56 p-2 rounded-md shrink-0">
        <p className=" text-center mb-3 font-bold">Filter Your Search</p>

        <p className=" font-bold">Internships Category</p>
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

        <div className=" flex flex-col gap-2">
            <p className=" font-bold">Internship Duration</p>
            <div>
                <input 
                id="oneMonth" 
                type='checkbox'
                name='oneMonth'
                />
                
                <label 
                for='oneMonth' 
                className=" ml-1">One Month</label>
            </div>

            <div>
                <input 
                id="twothree" 
                type='checkbox'
                name='twothree'
                />

                <label 
                for='twothree' 
                className=" ml-1">Two - Three Months</label>
            </div>

            <div>
                <input 
                id="forfive" 
                type='checkbox'
                name='forfive'
                />

                <label for='forfive' 
                className=" ml-1">Four - Five Months</label>
            </div>

            <div>
                <input 
                id="sixseven" 
                type='checkbox'
                name='sixseven'
                />

                <label 
                for='sixseven' 
                className=" ml-1">Six - Seven Months</label>
            </div>

            <div>
                <input 
                id="sevenMonths" 
                type='checkbox'
                name='sevenMonths'
                />

                <label for='sevenMonths' 
                className=" ml-1">Seven Months+</label>
            </div>
        </div>

        <hr className=" bg-black mt-4"></hr>

        <div className=" flex flex-col gap-2">
            <p className=" font-bold">Continents</p>
            <div>
                <input 
                id="africa" 
                type='checkbox'
                name='africa'
                />

                <label for='africa' 
                className=" ml-1">Africa</label>
            </div>
            <div>
                <input 
                id="america" 
                type='checkbox'
                name='america'
                />

                <label for='america' 
                className=" ml-1">America</label>
            </div>
            <div>
                <input 
                id="asia" 
                type='checkbox'
                name='asia'
                />

                <label for='asia' 
                className=" ml-1">Asia</label>
            </div>
            <div>
                <input 
                id="Europe" 
                type='checkbox'
                name='Europe'
                />

                <label for='Europe' 
                className=" ml-1">Europe</label>
            </div>
        </div>

        <hr className=" text-white mt-4"></hr>

        <button className=" bg-blue-600 w-full p-3 rounded-md mt-3">
            Search
        </button>
        </div>

    )
}

export default filterInternships