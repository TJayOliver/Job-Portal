import FormInputs from "./formInputs";
import FormTextarea from "./formTextarea";
import { countries } from "./countries";
import { useEffect, useState } from "react";
import axios from "axios";
import SubmittedBox from "./submittedBox";

const GraduateJobForm = ({className}) =>{
    const [cData, setCData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4040/api/categories-get')
        .then((response)=>{
            setCData(response.data)
        })
        .catch(error=>console.error(error))
    }, [])

    const [gform, setGForm] = useState({
        image:null,company:"",salary:"",location:"",duration:"",country:"",minimumqualification:"",experiencelevel:"",experiencelength:"",responsibilities:"",requirements:"",otherinformation:"",apply:"", categoriesname:""
    });
    const [submitted, setSubmitted] = useState(false);

    const formValues = (e) =>{
        const {name, value} = e.target;
        setGForm(prev=>({...prev, [name] : value}))
    }
    const formFiles = (e) =>{
        setGForm({...gform, image : e.target.files[0]})
    }

    const submit = (e) =>{
        e.preventDefault();
        const newFormData = new FormData();
        for(const key in gform){
            newFormData.append(key, gform[key])
        }

        axios.post('http://localhost:4040/api/categories-post',newFormData, {headers:{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.log(error))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    return(
        <>
        {submitted && <SubmittedBox successMessage='Job Opportunity Submitted' />}
        <form className={className} onSubmit={submit}>
            <div className=" font-semibold text-2xl text-center md:sticky md:top-0 p-3 bg-white">Graduate Jobs Panel</div>

            <FormInputs 
                label='Name of Company' 
                htmlFor='company'
                type='text'
                id='company'
                name='company'
                value={gform.company}
                onChange={formValues}
                placeholder='e.g. Kwaata Industries Ltd'
            />

            <FormInputs 
                label='Salary' 
                htmlFor='salary'
                type='text'
                id='salary'
                name='salary'
                value={gform.salary}
                onChange={formValues}
                placeholder='e.g. 500 or Confidential'
            />

            <FormInputs 
                label='Position' 
                htmlFor='position'
                type='text'
                id='position'
                name='position'
                placeholder='e.g. General Manager'
            />

            <FormInputs 
                label='Location' 
                htmlFor='location'
                type='text'
                id='location'
                name='location'
                value={gform.location}
                onChange={formValues}
                placeholder='e.g. New Weija, Accra'
            />

            <div className=" flex flex-col gap-1">
                <label htmlFor='duration' className=" text-xl">Contract Type</label>
                <select 
                id='duration' 
                name='duration' 
                value={gform.duration}
                onChange={formValues}
                className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                    <option value='' disabled >-- Select Job Contract Type -- </option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                </select>                 
            </div>

            <div className=" flex flex-col gap-1">
                <label htmlFor='country' className=" text-xl">Select Host Country</label>
                <select 
                id='country' 
                name='country' 
                value={gform.country}
                onChange={formValues}
                className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                    <option value='' disabled>-- Select Country -- </option>
                    {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                </select>                 
            </div>

            <div className=" flex flex-col gap-1">
                <label htmlFor='categoriesname' className=" text-xl">Select Job Category</label>
                <select 
                id='categoriesname' 
                name='categoriesname' 
                value={gform.categoriesname}
                onChange={formValues}
                className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                    <option value='' disabled>-- Select Job Category -- </option>
                    {cData.map((cat,id)=>(<option key={id} value={cat.categoriesname}>{cat.categoriesname}</option>))}
                </select>                 
            </div>
            
            <FormTextarea
                label='Minimum Qualification'
                htmlFor='minimumqualification'
                id='minimumqualification'
                name='minimumqualification'
                value={gform.minimumqualification}
                onChange={formValues}
                placeholder='e.g. Bachelors Degree in Accounting'
            />
            
            <FormTextarea
                label='Experience Level'
                htmlFor='experiencelevel'
                id='experiencelevel'
                name='experiencelevel'
                value={gform.experiencelevel}
                onChange={formValues}
                placeholder='experience level'
            />
            
            <FormTextarea
                label='Experience Length'
                htmlFor='experiencelength'
                id='experiencelength'
                name='experiencelength'
                value={gform.experiencelength}
                onChange={formValues}
                placeholder='e.g. Three - Five experience'
            />
            
            <FormTextarea
                label='Job Responsibilities'
                htmlFor='responsibilities'
                id='responsibilities'
                name='responsibilities'
                value={gform.responsibilities}
                onChange={formValues}
                placeholder='Job Responsibilies'
            />
            
            <FormTextarea
                label='Job Requirements'
                htmlFor='requirements'
                id='requirements'
                name='requirements'
                value={gform.requirements}
                onChange={formValues}
                placeholder='Job Requirements'
            />

            <FormTextarea
                label='Other Information'
                htmlFor='otherinformation'
                id='otherinformation'
                name='otherinformation'
                value={gform.otherinformation}
                onChange={formValues}
                placeholder='Other Relevant Information'
            />

            <FormTextarea
                label='How to Apply'
                htmlFor='apply'
                id='apply'
                name='apply'
                value={gform.apply}
                onChange={formValues}
                placeholder='e.g. Apply through...'
            />

            <FormInputs 
                label='Upload Job Flyer' 
                htmlFor='image'
                type='file'
                id='image'
                name='image'
                onChange={formFiles}
                accept='image/*'
            />

            <button className=" text-xl bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500">POST</button>

        </form>
        </>
    )
}

export default GraduateJobForm;