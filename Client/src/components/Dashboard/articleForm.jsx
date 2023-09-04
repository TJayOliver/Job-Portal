import axios from "axios";
import { useState } from "react";
import FormInputs from "./formInputs";
import FormTextarea from "./formTextarea";
import SubmittedBox from "./submittedBox";

const ArticleForm = ({className}) =>{
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
        <>
            {submitted && <SubmittedBox successMessage={'Article Successfully Added'} /> }
            <form className={className} onSubmit={submit}>   
                <div className=" font-semibold text-2xl text-center md:sticky md:top-0 p-3 bg-white">Articles Panel</div>

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

                <button className=" text-xl bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500">POST</button>
                
            </form>
        
        </>
    )
}

export default ArticleForm;