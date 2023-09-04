import InternBox from "./internBox"
import FilterInternships from "./filterInternships"

const Internship = () =>{
    return(
        <div>
            <div className=" p-4">
                <div className=" bg-white h-64 rounded-md"></div>
            </div>

            <div className=" flex p-4">
                <FilterInternships/>
            
                <div className=" md:max-w-5xl lg:max-w-7xl xl:max-w-none m-auto ">
                    <div className=" flex flex-wrap justify-center md:flex md:flex-wrap gap-3 internshipSize">
                        <InternBox/>
                        <InternBox/>
                        <InternBox/>
                        <InternBox/>
                        <InternBox/>
                        <InternBox/>
                        <InternBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internship