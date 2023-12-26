import FormInputs from "../formInputs";
import { countries } from "../countries";
import { useState, useEffect } from "react";
import SubmittedBox from "../submittedBox";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ScholarshipEditForm = () =>{
    const id = useParams(), ID = id.id;

    const [description, setDescription] = useState('');
    const [eligibility, setEligibility] = useState('');
    const [duration, setDuration] = useState('');
    const [programsoffered, setProgramsoffered] = useState('');
    const [documentsrequired, setDocumentsrequired] = useState('');
    const [benefits, setBenefits] = useState('');
    const [applicationinformation, setApplicationinformation] = useState('');

    const [sForm, setSForm] = useState({
        image : null, scholarshipname:"", deadline:"", scholarshiptype:"",featured:false,
        programs:"", country:"", description:"", scholarshipcategory:"", eligibility:"", duration:"",programsoffered:"", documentsrequired:"", benefits:"", applicationinformation:"", agent:"", hostuniversity:""
    });
    const [submitted, setSubmitted] = useState(false);

    const FormValues = (e) =>{
        const {name, value} = e.target;
        setSForm(prevData =>({ ...prevData, [name]:value}))
    }

    const FormFiles = (e)=>{
        setSForm({...sForm, image: e.target.files[0], description:description, eligibility:eligibility, duration:duration,programsoffered:programsoffered, documentsrequired:documentsrequired, benefits:benefits, applicationinformation:applicationinformation})
    }

    const [message, setMessage] = useState('')

    const Submit = async(e) =>{
        e.preventDefault();

        const newFormData = new FormData();
        for (const key in sForm) {
            newFormData.append(key, sForm[key]);
        }

        axios.put(`http://localhost:4040/api/scholarships-update/${ID}`, newFormData, {headers :{'Content-Type': 'multipart/form-data'}})
        .then(response => response.status !== 200 ? setMessage('Please Try again') : setMessage(response.data))
        .catch(error =>console.error(error.message))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    }

    useEffect(()=>{
        axios.get(`http://localhost:4040/api/scholarships-edit/${ID}`)
        .then(response =>{
            const retrievedData = response.data[0];
            setSForm({image : retrievedData.image, 
                scholarshipname:retrievedData.scholarshipname, 
                deadline:retrievedData.deadline,
                scholarshiptype:retrievedData.scholarshiptype,
                featured:retrievedData.featured,
                programs:retrievedData.programs,
                country:retrievedData.country,
                scholarshipcategory:retrievedData.scholarshipcategory,
                agent:retrievedData.agent,
                hostuniversity:retrievedData.hostuniversity
            })
            setDescription(retrievedData.description)
            setEligibility(retrievedData.eligibility)
            setDuration(retrievedData.duration)
            setProgramsoffered(retrievedData.programsoffered)
            setDocumentsrequired(retrievedData.documentsrequired)
            setBenefits(retrievedData.benefits)
            setApplicationinformation(retrievedData.applicationinformation)
        })
        .catch(error =>console.error(error.message))
    },[])

    return(
        <main>

            {/* Left Panel */}
            <LeftPanel />

            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={message} /> }

                <FormsDashboardHead title='Scholarship Form' />

                <form onSubmit={Submit} className=' p-3 flex flex-col gap-4'>
                    
                    <FormInputs 
                        label='Name' 
                        htmlFor='scholarshipname'
                        type='text'
                        id='scholarshipname'
                        name='scholarshipname'
                        value={sForm.scholarshipname}
                        onChange={FormValues}
                        placeholder='e.g. Afghanistan Government Scholarships'
                    />

                    <FormInputs 
                        label='Host University' 
                        htmlFor='hostuniversity'
                        type='text'
                        id='hostuniversity'
                        name='hostuniversity'
                        value={sForm.hostuniversity}
                        onChange={FormValues}
                        placeholder='e.g. University for Development Studies'
                    />

                    <div className="flex flex-col md:flex md:flex-row gap-4">
                        <FormInputs 
                            label='Deadline' 
                            htmlFor='deadline'
                            type='date'
                            id='deadline'
                            name='deadline'
                            value={sForm.deadline}
                            onChange={FormValues}
                        />

                        <div className=" flex flex-col gap-1">
                            <label htmlFor='scholarshiptype' className=" text-xl">Type</label>
                            <select 
                                id='scholarshiptype' 
                                name='scholarshiptype'
                                value={sForm.scholarshiptype}
                                onChange={FormValues} 
                                className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                                <option value='' disabled >--Scholarship Type --</option>
                                <option value='Fully Funded'>Fully Funded</option>
                                <option value='Partial'>Partial</option>
                            </select>                 
                        </div>

                        <div className=" flex flex-col gap-1">
                            <label htmlFor='scholarshiptype' className=" text-xl">Agent</label>
                            <select 
                                id='agent' 
                                name='agent'
                                value={sForm.agent}
                                onChange={FormValues} 
                                className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                                <option value='' disabled >--Agent --</option>
                                <option value='Agent'>Agent</option>
                                <option value='No agent'>No Agent</option>
                            </select>                 
                        </div>

                        <div className=" flex flex-col gap-1">
                            <label htmlFor='scholarshipcategory' className=" text-xl">Category</label>
                            <select 
                                id='scholarshipcategory' 
                                name='scholarshipcategory'
                                value={sForm.scholarshipcategory}
                                onChange={FormValues} 
                                className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                                <option value='' disabled >-- Category -- </option>
                                <option value='Government'>Government</option>
                                <option value='Organizational'>Organizational</option>
                                <option value='Research'>Research</option>
                                <option value='Private'>Private</option>
                                <option value='International'>International</option>
                            </select>                 
                        </div>

                        <div className=" flex flex-col gap-1">
                            <label htmlFor='programs' className=" text-xl">Study Area</label>
                            <select 
                                id='programs' 
                                name='programs' 
                                value={sForm.programs}
                                onChange={FormValues}
                                className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                                <option value='' disabled>-- Select Study Area -- </option>
                                <option value='All Levels'>All Levels</option>
                                <option value='Bachelors Degree'>Bachelors Degree</option>
                                <option value='Masters Degree'>Masters Degree</option>
                                <option value='Doctorate Degree'>Doctorate Degree</option>
                                <option value='Post Graduate Diploma'>Post Graduate Diploma</option>
                            </select>                 
                        </div>

                        <div className=" flex flex-col gap-1">
                            <label htmlFor='country' className=" text-xl">Select Host Country</label>
                            <select 
                            id='country' 
                            name='country' 
                            value={sForm.country}
                            onChange={FormValues}
                            className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                                <option value='' disabled>-- Select Country -- </option>
                                {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                            </select>                 
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-xl">Description</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={description}
                            onChange={(value)=>setDescription(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Eligibility Criteria</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={eligibility}
                            onChange={(value)=>setEligibility(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Duration</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={duration}
                            onChange={(value)=>setDuration(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Programs Offered</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={programsoffered}
                            onChange={(value)=>setProgramsoffered(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Documents Required</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={documentsrequired}
                            onChange={(value)=>setDocumentsrequired(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Benefits</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={benefits}
                            onChange={(value)=>setBenefits(value)}
                        />
                    </div>

                    <div>
                        <p className="text-xl">Application Information</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={applicationinformation}
                            onChange={(value)=>setApplicationinformation(value)}
                        />
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center gap-1">
                        <label htmlFor='featured' className=" text-lg">Featured</label>
                        <input 
                            type='checkbox'
                            id='featured' 
                            name='featured'
                            onChange={FormValues}
                        />
                    </div>

                    <FormInputs 
                        label='Upload Scholarship Flyer' 
                        htmlFor='image'
                        type='file'
                        id='image'
                        name='image'
                        onChange={FormFiles}
                        accept='image/*'
                    />

                    <button className=" text-xl bg-[#004242] p-2 rounded-md text-white hover:bg-[#004141]">POST</button>
                </form>

            </section>
        </main>
    )
}

export default ScholarshipEditForm;