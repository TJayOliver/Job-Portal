import axios from "axios";
import FormInputs from "../formInputs";
import { useState } from "react";
import SubmittedBox from "../submittedBox";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from "../../reactquillmodules"; 

const ArticleForm = () =>{
    const [content, setContent] = useState('');
    const [aform, setAform] = useState({image:null,title:"",post:"",mainfeatured:false,featured:false,mustread:false, category:""})

    const [submitted, setSubmitted] = useState(false);

    const formValues = (e) =>{
        const {name, value, type, checked} = e.target;
        setAform(prev=>({...prev, [name] : type === 'checkbox' ? checked : value}))
    }

    const formFiles = (e) =>{
        setAform({...aform, image : e.target.files[0], post:content})
    }

    const submit = async(e) =>{
        e.preventDefault();

        const newformData = new FormData();
        for (const key in aform) {
            newformData.append(key, aform[key])
        }
        try {
            const response = await axios.post('http://localhost:4040/article/create',newformData, {headers :{'Content-Type': 'multipart/form-data'}})
            const data = response.data.message;
            setMessage(data)
            setSubmitted(true);

            setTimeout(() => {
                window.location.reload();
            }, 2000); 

        } catch (error) {
            setMessage(error.message)
        }  
    }
    const [message, setMessage] = useState('')
    return(
        <main>
            {/* Left Panel */}
            <LeftPanel />
            
            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={message} /> }

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
                            modules={modules}
                            formats={formats}
                            value={content} 
                            onChange={setContent}
                        />
                    </div>

                    <div className=" flex flex-col gap-1">
                        <label htmlFor='category' className=" text-xl">Category</label>
                        <select 
                        id='category' 
                        name='category' 
                        value={aform.category}
                        onChange={formValues}
                        className="bg-transparent border-[1px] border-blue-600 p-2 w-full outline-teal-600 focus-within:bg-white rounded-md" required>
                            <option value='' disabled>-- Select Category -- </option>
                            <option value='Job' >Job</option>
                            <option value='Scholarship' >Scholarship</option>
                            <option value='Internship' >Internship</option>
                            <option value='Business' >Business</option>
                            <option value='Other' >Other</option>
                        </select>                 
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
                        label='Upload Article Flyer' 
                        htmlFor='image'
                        type='file'
                        id='image'
                        name='image'
                        onChange={formFiles}
                        accept='.jpg, .jpeg, .png, .JPG'
                    />

                    <button className=" text-xl p-2 bg-[#004242] hover:bg-[#1d3d3d] rounded-md text-white w-full">POST</button>
                    
                </form>
                
                
            </section>
        
        </main>
    )
}

export default ArticleForm;