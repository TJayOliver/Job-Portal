import axios from "axios";
import FormInputs from "./formInputs";
import FormTextarea from "./formTextarea";
import SubmittedBox from "./submittedBox";
import { useState } from "react";
import LeftPanel from "./LeftPanel";
import FormsDashboardHead from "./FormsDashboardHead";

const ArticleForm = () =>{

    const [aform, setAform] = useState({image:null,title:"",briefinfo:"",post: ""})
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
        
        axios.post('http://localhost:4040/api/articles-post',newformData, {headers :{'Content-Type': 'multipart/form-data'}})
        .then(response =>console.log(response))
        .catch(error =>console.log(error))
        
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);  
    
    }

    return(
        <main className=" bg-white h-full flex flex-col md:flex md:flex-row relative">

            {/* Left Panel */}
            <LeftPanel />

            <section className=" w-full flex flex-col justify-center m-auto lg:justify-normal lg:m-0 max-w-7xl">

                {submitted && <SubmittedBox successMessage={'Categories Successfully Added'} /> }

                <FormsDashboardHead title='Article Form' />
                
                <form className=' p-3 flex flex-col gap-4' onSubmit={submit}>   
                   
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

export default ArticleForm;