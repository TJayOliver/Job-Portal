import FormInputs from "../formInputs";
import FormTextarea from "../formTextarea";
import { countries } from "../countries";
import { useEffect, useState } from "react";
import axios from "axios";
import SubmittedBox from "../submittedBox";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import { useParams } from "react-router-dom";

const JobEditForm = () =>{
    const id = useParams(), ID = id.id;

    const [cData, setCData] = useState([]);

    const [gform, setGForm] = useState({
        image:null,company:"",salary:"",location:"",website:"",featured:"",position:"",duration:"",responsibilities:"",responsibilitiestwo:"",responsibilitiesthree:"",responsibilitiesfour:"",requirements:"",requirementstwo:"",requirementsthree:"",requirementsfour:"",otherinformation:"",apply:"", categoriesname:""
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

        axios.put(`http://localhost:4040/api/graduatesjobs-update/${ID}`,newFormData, {headers:{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.log(error))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    useEffect(()=>{
        axios.get(`http://localhost:4040/api/graduatesjobs-edit/${ID}`)
        .then(response =>{
            const retrievedData = response.data[0];
            setGForm({ image:retrievedData.image,featured:retrievedData.featured, website:retrievedData.website, salary:retrievedData.salary, location:retrievedData.location, position:retrievedData.position, duration:retrievedData.duration, responsibilities:retrievedData.responsibilities, responsibilitiestwo:retrievedData.responsibilitiestwo,responsibilitiesthree:retrievedData.responsibilitiesthree,requirements:retrievedData.requirements,requirementstwo:retrievedData.responsibilitiestwo, requirementsthree:retrievedData.requirementsthree, requirementsfour:retrievedData.requirementsfour, otherinformation:retrievedData.otherinformation, apply:retrievedData.apply, categoriesname:retrievedData.categoriesname})
        }).catch(error => console.error(error.message))
    },[])

    return(
        <section>
            <form className=' p-3 flex flex-col gap-4 text-md' onSubmit={submit}>
                
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
                    value={gform.position}
                    onChange={formValues}
                    placeholder='e.g. General Manager'
                />

                <FormInputs 
                    label='Company Website' 
                    htmlFor='website'
                    type='text'
                    id='website'
                    name='website'
                    value={gform.website}
                    onChange={formValues}
                    placeholder='e.g. www.cocacola.com'
                />
                
                <div className=" flex flex-col gap-1">
                    <label htmlFor='featured'>Featured</label>
                    <select 
                    id='featured' 
                    name='featured' 
                    value={gform.featured}
                    onChange={formValues}
                    className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                        <option value='' disabled>-- Select Featured -- </option>
                        <option value='true' >Yes</option>
                        <option value='false' >No</option>
                    </select>                 
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor='duration'>Contract Type</label>
                    <select 
                    id='duration' 
                    name='duration' 
                    value={gform.duration}
                    onChange={formValues}
                    className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                        <option value='' disabled >-- Select Job Contract Type -- </option>
                        <option value='Full Time'>Full Time</option>
                        <option value='Part Time'>Part Time</option>
                    </select>                 
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor='location'>Select Location</label>
                    <select 
                    id='location' 
                    name='location' 
                    value={gform.location}
                    onChange={formValues}
                    className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                        <option value='' disabled>-- Select Country -- </option>
                        {countries.map((country, id)=>(<option value={country} key={id}>{country}</option>))}
                    </select>                 
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor='jobcategory'>Select Job Category</label>
                    <select 
                    id='jobcategory' 
                    name='jobcategory' 
                    value={gform.jobcategory}
                    onChange={formValues}
                    className="bg-transparent border-[1px] border-black p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                        <option value='' disabled>-- Select Job Category -- </option>
                        {category.map((cat,id)=>(<option key={id} value={cat.categoriesname}>{cat.categoriesname}</option>))}
                    </select>                 
                </div>

                <div>
                    <p>Responsibility</p>
                    <ReactQuill
                        className=" border-black border-[1px] rounded-lg"
                        theme="snow"
                        value={responsibility}
                        onChange={setResponsibility}
                    />
                </div>

                <div>
                    <p>Requirements</p>
                    <ReactQuill
                        className=" border-black border-[1px] rounded-lg"
                        theme="snow"
                        value={requirements}
                        onChange={setRequirements}
                    />
                </div>

                <div>
                    <p>Other Information</p>
                    <ReactQuill
                        className=" border-black border-[1px] rounded-lg"
                        theme="snow"
                        value={otherinformation}
                        onChange={setOtherinformation}
                    />
                </div>

                <FormInputs 
                    label='Upload Job Flyer' 
                    htmlFor='image'
                    type='file'
                    id='image'
                    name='image'
                    onChange={formFiles}
                    accept='image/*'
                />

                <button className="bg-teal-600 p-2 rounded-md text-white hover:bg-teal-500">POST</button>

            </form>
        </section>
    )
}

export default JobEditForm;