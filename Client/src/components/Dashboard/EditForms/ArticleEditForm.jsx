import axios from "axios";
import FormInputs from "../formInputs";
import FormTextarea from "../formTextarea";
import SubmittedBox from "../submittedBox";
import { useState } from "react";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ArticleEditForm = () =>{
    const id = useParams(), ID = id.id;

    const [aform, setAform] = useState({image:null,title:"",mainfeatured:"",briefinfo:"",featured:"",mustread:"",post: ""})
    const [submitted, setSubmitted] = useState(false);

    const formValues = (e) =>{
        const {name, value} = e.target;
        setAform(prev=>({...prev, [name] : value}))
    }

    const formFiles = (e) =>{
        setAform({...aform, image : e.target.files[0]})
    }

    const submit = (e) =>{
        e.preventDefault();

        const newformData = new FormData();
        for(const key in aform){
            newformData.append(key, aform[key])
        }
        
        axios.put(`http://localhost:4040/api/articles-update/${ID}`,newformData, {headers :{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.error(error.message))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);  
    
    }

    useEffect(()=>{
        axios.get(`http://localhost:4040/api/articles-edit/${ID}`)
        .then(response => {
            const retrievedData = response.data[0];
            setAform({image:retrievedData.image, title:retrievedData.title,mainfeatured:retrievedData.mainfeatured,featured:retrievedData.featured, briefinfo:retrievedData.briefinfo,mustread:retrievedData.mustread, post:retrievedData.post})
        }).catch(error => console.error(error.message))
    },[])

    return(
        <main>

            {/* Left Panel */}
            <LeftPanel />

            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={'Categories Successfully Added'} /> }

                <FormsDashboardHead title='Article Form' />
                
                <form className=' w-full p-3 flex flex-col gap-4 ' onSubmit={submit}>   
                   
                    <FormInputs 
                        label='Article Title' 
                        htmlFor='title'
                        type='text'
                        id='title'
                        name='title'
                        value={aform.title}
                        onChange={formValues}
                        placeholder='e.g. How to write a Personal Statement'
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='mainfeatured' className=" text-xl">Must Featured</label>
                        <select 
                        id='mainfeatured' 
                        name='mainfeatured' 
                        value={aform.mainfeatured}
                        onChange={formValues}
                        className="bg-transparent border-[1px] p-2 w-full border-black outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Main Featured -- </option>
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>                 
                    </div>

                    <FormTextarea 
                        label='Article Brief Info' 
                        htmlFor='briefinfo'
                        id='briefinfo'
                        name='briefinfo'
                        value={aform.briefinfo}
                        onChange={formValues}
                        placeholder='e.g. Brief Info about the Article'
                    />

                    <FormTextarea
                        label='Article Text'
                        htmlFor='post'
                        id='post'
                        name='post'
                        value={aform.post}
                        onChange={formValues}
                        placeholder='Type Article Here'
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='featured' className=" text-xl">Featured</label>
                        <select 
                        id='featured' 
                        name='featured' 
                        value={aform.featured}
                        onChange={formValues}
                        className="bg-transparent border-[1px] p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Featured -- </option>
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>                 
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='mustread' className=" text-xl">Must Read</label>
                        <select 
                        id='mustread' 
                        name='mustread' 
                        value={aform.mustread}
                        onChange={formValues}
                        className="bg-transparent border-[1px] p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Must Read -- </option>
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>                 
                    </div>

                    <FormInputs 
                        label='Upload Article Flyer' 
                        htmlFor='image'
                        type='file'
                        id='image'
                        name='image'
                        onChange={formFiles}
                        accept='.jpg, .jpeg, .png, .JPG'
                    />

                    <button className=" text-xl p-2 bg-teal-600 rounded-md text-white hover:bg-teal-500 w-full">POST</button>
                    
                </form>
                
                
            </section>
        
        </main>
    )
}

export default ArticleEditForm;