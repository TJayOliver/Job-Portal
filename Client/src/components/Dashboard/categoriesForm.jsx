import FormInputs from "./formInputs";
//import CategoriesDisplayBox from "./categoriesDisplayBox";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftPanel from "./LeftPanel";
import SubmittedBox from "./submittedBox";
import FormsDashboardHead from "./FormsDashboardHead";

const CategoriesForm = () =>{
    const [cForm, setCForm] = useState({categoriesname:""});
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

    useEffect(()=>{
        axios.get('http://localhost:4040/api/categories-get')
        .then((response)=>{
            setretrievedCat(response.data)
        })
        .catch(error=>console.error(error))
    }, []);

    return(
        
        <main>
            {/* Left Panel */}
            <LeftPanel />

            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={'Category Successfully Added'} /> }

                <FormsDashboardHead title='Categories Form' />

                <form className=' p-3 flex flex-col gap-4' onSubmit={submit}>

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

                </form>

            </section>

        </main>
    )
}

export default CategoriesForm;