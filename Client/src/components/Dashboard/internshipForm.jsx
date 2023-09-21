import FormInputs from "./formInputs";
import FormTextarea from "./formTextarea";
import { countries } from "./countries";
import { useState } from "react";
import axios from "axios";
import SubmittedBox from "./submittedBox";
import LeftPanel from "./LeftPanel";
import FormsDashboardHead from "./FormsDashboardHead";

const InternshipForm = ({className}) =>{
    const [iform, setIform] = useState({
        image:null, internshipname:"", internshipduration:"",info:"",country:"",requirements:"",documents:"", apply:""
    });
    const [submitted, setSubmitted] = useState(false);

    const formValues = (e) =>{
        const {name, value} = e.target;
        setIform(prev =>({
            ...prev, [name] : value
        }))
    };

    const formFiles = (e)=>{
        setIform({...iform, image : e.target.files[0]})
    };

    const submit = (e)=>{
        e.preventDefault();

        const newFormData = new FormData();
        for(const key in iform){
            newFormData.append(key, iform[key])
        };
        
       axios.post('http://localhost:4040/api/internships-post',newFormData, {headers:{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.log(error))
        
        setTimeout(() => {
            setSubmitted(true);
            window.location.reload();
        }, 2000);
    }

    return(
        <main className="ml-64 flex flex-col md:flex md:flex-row relative">

            {/* Left Panel */}
            <LeftPanel />

            <section className=" w-full flex flex-col justify-center m-auto lg:justify-normal lg:m-0 max-w-7xl">

                {submitted && <SubmittedBox successMessage={'Internship Successfully Added'} /> }

                <FormsDashboardHead title='Internship Form' />

                <form className=' p-3 flex flex-col gap-4' onSubmit={submit}>

                    <FormInputs 
                        label='Internship Name' 
                        htmlFor='internshipname'
                        type='text'
                        id='internshipname'
                        name='internshipname'
                        value={iform.internshipname}
                        onChange={formValues}
                        placeholder='e.g. Google Internship for Africans'
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='internshipduration' className=" text-xl">Internship Type</label>
                        <select 
                        id='internshipduration' 
                        name='internshipduration' 
                        value={iform.internshipduration}
                        onChange={formValues}
                        className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled >-- Select Internship Duration -- </option>
                            <option value='One Month'>One Month</option>
                            <option value='Two - Three Months'>Two - Three Months</option>
                            <option value='Four - Six Months'>Four - Six Months</option>
                            <option value='Six - Seven Months'>Six - Seven Months</option>
                            <option value='Seven Months +'>Seven Months +</option>
                        </select>                 
                    </div>

                    <FormTextarea 
                        label='Internship Info' 
                        htmlFor='info'
                        id='info'
                        name='info'
                        value={iform.info}
                        onChange={formValues}
                        placeholder='Details about the Internship Opportunity'
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='country' className=" text-xl">Select Host Country</label>
                        <select id='country' name='country' className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled >-- Select Country -- </option>
                            {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                        </select>                 
                    </div>

                    <FormTextarea 
                        label='Internship Requirements' 
                        htmlFor='requirements'
                        id='requirements'
                        name='requirements'
                        value={iform.requirements}
                        onChange={formValues}
                        placeholder='e.g. Requirements for the Internship opportunity'
                    />

                    <FormTextarea 
                        label='Documents Required' 
                        htmlFor='documents'
                        id='documents'
                        name='documents'
                        value={iform.documents}
                        onChange={formValues}
                        placeholder='e.g. Documents Requirements for the Internship opportunity'
                    />

                    <FormTextarea
                        label='How to Apply'
                        htmlFor='apply'
                        id='apply'
                        name='apply'
                        value={iform.apply}
                        onChange={formValues}
                        placeholder='e.g. Apply through...'
                    />

                    <FormInputs 
                        label='Upload Internships Flyer' 
                        htmlFor='image'
                        type='file'
                        id='image'
                        name='image'
                        onChange={formFiles}
                        accept='.jpg, .jpeg, .png, .JPG'
                    />

                    <button className=" text-xl bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500">POST</button>
                </form>

            </section>
        </main>
    )
};

export default InternshipForm;