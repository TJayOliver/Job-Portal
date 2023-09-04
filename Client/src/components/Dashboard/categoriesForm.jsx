import FormInputs from "./formInputs";
import CategoriesDisplayBox from "./categoriesDisplayBox";
import { useEffect, useState } from "react";
import axios from "axios";
import SubmittedBox from "./submittedBox";

const CategoriesForm = ({className}) =>{
    const [cForm, setCForm] = useState({categoriesname:""});
    const [retrievedCat, setretrievedCat] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [Msg, SetMsg] = useState("")

    const formValues = (e)=>{
        const {name, value} = e.target;
        setCForm(prev=>({...prev, [name] : value}))
    }

    const submit =  (e) =>{
        e.preventDefault();

        axios.post('http://localhost:4040/api/categories-post', cForm)
        .then(response => SetMsg(response.data))
        .catch(error => console.error(error))
    
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    }

    const DeleteCategory = (id) =>{
        axios.delete(`http://localhost:4040/api/categories-delete/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
        window.location.reload();
    }

    useEffect(()=>{
        axios.get('http://localhost:4040/api/categories-get')
        .then((response)=>{
            setretrievedCat(response.data)
        })
        .catch(error=>console.error(error))
    }, []);

    return(
        <>
            {submitted && <SubmittedBox successMessage={Msg} />}

            <form className={className} onSubmit={submit}>

                <div className=" font-semibold text-2xl text-center md:sticky md:top-0 p-3 bg-white">Job Categories Panel</div>

                <FormInputs 
                    label='Name of Job Category' 
                    htmlFor='categoriesname'
                    type='text'
                    id='categoriesname'
                    name='categoriesname'
                    value={cForm.categoriesname}
                    onChange={formValues}
                    placeholder='e.g. Name of Job Category'
                />

                <button className=" text-xl bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500">ADD</button>

                {/* Display Categories List */}
                <div className=" max-w-5xl flex flex-wrap gap-2 mt-2">
                {
                    retrievedCat.map((Cat, id)=>(
                        <CategoriesDisplayBox key={id}
                            categoryname={Cat.categoriesname}
                            onClick={e => DeleteCategory(Cat.id)}
                        />
                    ))
                }
                
            </div>

            </form >

        </>
    )
}

export default CategoriesForm;