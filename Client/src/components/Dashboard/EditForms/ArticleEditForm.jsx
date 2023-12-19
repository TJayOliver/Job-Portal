import axios from "axios";
import FormInputs from "../formInputs";
import SubmittedBox from "../submittedBox";
import { useState, useEffect } from "react";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import { useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ArticleEditForm = () =>{
    const id = useParams(), ID = id.id;

    const [content, setContent] = useState('');
    const [aform, setAform] = useState({image:null,title:"",post:'',mainfeatured:false,featured:false,mustread:false})
    const [submitted, setSubmitted] = useState(false);

    const formValues = (e) =>{
        const {name, value, type, checked} = e.target;
        setAform(prev=>({...prev, [name] : type === 'checkbox' ? checked : value}))
    }

    const formFiles = (e) =>{
        setAform({...aform, image : e.target.files[0], post:content})
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
            setAform({image:retrievedData.image, title:retrievedData.title,mainfeatured:retrievedData.mainfeatured,featured:retrievedData.featured, mustread:retrievedData.mustread, post:retrievedData.post})
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
                        label='Title' 
                        htmlFor='title'
                        type='text'
                        id='title'
                        name='title'
                        value={aform.title}
                        onChange={formValues}
                        placeholder='e.g. How to write a Personal Statement'
                    />

                    <div>
                        <p className="text-xl">Content</p>
                        <ReactQuill
                            className="text-xl border-black border-[1px] rounded-lg"
                            theme="snow"
                            value={aform.post} 
                            onChange={formValues}
                        />
                    </div>

                    {/* checkbox */}
                    <div className=" flex gap-4 items-center">
                        {/* main featured */}
                        <div className="flex items-center gap-1">
                            <label htmlFor='mainfeatured' className=" text-lg">Main Featured</label>
                            <input 
                                type='checkbox'
                                id='mainfeatured'
                                name='mainfeatured'
                                onChange={formValues}
                            />
                        </div>

                        {/* featured */}
                        <div className="flex items-center gap-1">
                            <label htmlFor='featured' className=" text-lg">Featured</label>
                            <input 
                                type='checkbox'
                                id='featured'
                                name='featured'
                                onChange={formValues}
                            />
                        </div>

                        {/* must read */}
                        <div className="flex items-center gap-1">
                            <label htmlFor='mustread' className=" text-lg">Must Read</label>
                            <input 
                                type='checkbox'
                                id='mustread'
                                name='mustread'
                                onChange={formValues}
                            />      
                        </div>
                    </div>

                    <FormInputs 
                        label='Upload Flyer' 
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