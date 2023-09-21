import FormInputs from "./formInputs";
import FormTextarea from "./formTextarea";
import { countries } from "./countries";
import Axios from "axios";
import { useState } from "react";
import SubmittedBox from "./submittedBox";
import LeftPanel from "./LeftPanel";
import FormsDashboardHead from "./FormsDashboardHead";

const ScholarshipForm = ({className}) =>{
    const [sForm, setSForm] = useState({
        image : null, scholarshipname:"", deadline:"", scholarshiptype:"",
        agent : "", programs:"", applicant:"",hostuniversity:"",
        offeredby:"", aboutscholarship:"", scholarshipbenefits:"", eligibilitycriteria:"",
        documentsrequired:"", country:"", apply:"", duration:""
    });
    const [submitted, setSubmitted] = useState(false);

    const FormValues = (e) =>{
        const {name, value} = e.target;
        setSForm(prevData =>({ ...prevData, [name]:value}))
    }

    const FormFiles = (e)=>{
        setSForm({...sForm, image: e.target.files[0]})
    }

    const Submit = async(e) =>{
        e.preventDefault();

        const newFormData = new FormData();
        for (const key in sForm) {
            newFormData.append(key, sForm[key]);
        }

        Axios.post('http://localhost:4040/api/scholarships-post', newFormData, {headers :{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.log(error))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    }

    return(
        <main className="ml-64 flex flex-col md:flex md:flex-row relative">

            {/* Left Panel */}
            <LeftPanel />

            <section className=" w-full flex flex-col justify-center m-auto lg:justify-normal lg:m-0 max-w-7xl">

                {submitted && <SubmittedBox successMessage={'Scholarship Successfully Added'} /> }

                <FormsDashboardHead title='Scholarship Form' />

                <form onSubmit={Submit} className=' p-3 flex flex-col gap-4'>
                    
                    <FormInputs 
                        label='Scholarship Name' 
                        htmlFor='scholarshipname'
                        type='text'
                        id='scholarshipname'
                        name='scholarshipname'
                        value={sForm.scholarshipname}
                        onChange={FormValues}
                        placeholder='e.g. Afghanistan Government Scholarships'
                    />

                    <FormInputs 
                        label='Scholarship Deadline' 
                        htmlFor='deadline'
                        type='date'
                        id='deadline'
                        name='deadline'
                        value={sForm.deadline}
                        onChange={FormValues}
                    />

                    <FormInputs 
                        label='Who Can Apply' 
                        htmlFor='applicant'
                        type='text'
                        id='applicant'
                        name='applicant'
                        value={sForm.applicant}
                        onChange={FormValues}
                        placeholder='e.g. World Wide Students'
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='scholarshiptype' className=" text-xl">Scholarship Type</label>
                        <select 
                            id='scholarshiptype' 
                            name='scholarshiptype'
                            value={sForm.scholarshiptype}
                            onChange={FormValues} 
                            className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled >-- Select Scholarship Type -- </option>
                            <option value='Fully Funded'>Fully Funded</option>
                            <option value='Partial'>Partial</option>
                        </select>                 
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='agent' className=" text-xl">Agent Needed?</label>
                        <select 
                            id='agent' 
                            name='agent' 
                            value={sForm.agent}
                            onChange={FormValues}
                            className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Agent Option -- </option>
                            <option value='Agent'>Agent</option>
                            <option value='No Agent'>No Agent</option>
                        </select>                 
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='programs' className=" text-xl">Study Area</label>
                        <select 
                            id='programs' 
                            name='programs' 
                            value={sForm.programs}
                            onChange={FormValues}
                            className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Study Area -- </option>
                            <option value='All Levels'>All Levels</option>
                            <option value='Bachelors Degree'>Bachelors Degree</option>
                            <option value='Masters Degree'>Masters Degree</option>
                            <option value='Doctorate Degree'>Doctorate Degree</option>
                            <option value='Post Graduate Diploma'>Post Graduate Diploma</option>
                        </select>                 
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='duration' className=" text-xl">Scholarship Duration</label>
                        <select 
                            id='duration' 
                            name='duration' 
                            value={sForm.duration}
                            onChange={FormValues}
                            className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Scholarship Duration -- </option>
                            <option value='1 Year'>1 Year</option>
                            <option value='2 Years'>2 Years</option>
                            <option value='3 Years'>3 Years</option>
                            <option value='4 Years'>4 Years</option>
                            <option value='5 Years'>5 Years</option>
                            <option value='6 Years'>6 Years</option>
                            <option value='7 Years'>7 Years</option>
                        </select>                 
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='country' className=" text-xl">Select Host Country</label>
                        <select 
                        id='country' 
                        name='country' 
                        value={sForm.country}
                        onChange={FormValues}
                        className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Country -- </option>
                            {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                        </select>                 
                    </div>

                    <FormInputs 
                        label='Host University' 
                        htmlFor='hostuniversity'
                        type='text'
                        id='hostuniversity'
                        name='hostuniversity'
                        value={sForm.hostuniversity}
                        onChange={FormValues}
                        placeholder='e.g. University for Development Studies, Ghana'
                    />

                    <FormInputs 
                        label='Scholarship Offered By' 
                        htmlFor='offeredby'
                        type='text'
                        id='offeredby'
                        name='offeredby'
                        value={sForm.offeredby}
                        onChange={FormValues}
                        placeholder='e.g. University for Development Studies Funded'
                    />
                    
                    <FormTextarea
                        label='Info About Scholarship'
                        htmlFor='aboutscholarship'
                        id='aboutscholarship'
                        name='aboutscholarship'
                        value={sForm.aboutscholarship}
                        onChange={FormValues}
                        placeholder='Brief info about the Scholarship'
                    />

                    <FormTextarea
                        label='Benefits of the Scholarship'
                        htmlFor='scholarshipbenefits'
                        id='scholarshipbenefits'
                        name='scholarshipbenefits'
                        value={sForm.scholarshipbenefits}
                        onChange={FormValues}
                        placeholder='Brief info about the benefits of the Scholarship'
                    />

                    <FormTextarea
                        label='Eligibility Criteria for the Scholarship'
                        htmlFor='eligibilitycriteria'
                        id='eligibilitycriteria'
                        name='eligibilitycriteria'
                        value={sForm.eligibilitycriteria}
                        onChange={FormValues}
                        placeholder='Eligibility Criteria required to meet the Scholarship'
                    />

                    <FormTextarea
                        label='Documents required for the Scholarship'
                        htmlFor='documentsrequired'
                        id='documentsrequired'
                        name='documentsrequired'
                        value={sForm.documentsrequired}
                        onChange={FormValues}
                        placeholder='Documents required to meet the Scholarship'
                    />

                    <FormTextarea
                        label='How to Apply'
                        htmlFor='apply'
                        id='apply'
                        name='apply'
                        value={sForm.apply}
                        onChange={FormValues}
                        placeholder='e.g apply through..'
                    />

                    <FormInputs 
                        label='Upload Scholarship Flyer' 
                        htmlFor='image'
                        type='file'
                        id='image'
                        name='image'
                        onChange={FormFiles}
                        accept='image/*'
                    />

                    <button className=" text-xl bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500">POST</button>
                </form>

            </section>
        </main>
    )
}

export default ScholarshipForm;