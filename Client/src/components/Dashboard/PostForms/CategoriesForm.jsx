import { useEffect, useState } from "react";
import axios from "axios";
import FormInputs from "../formInputs";
import SubmittedBox from "../submittedBox";
import LeftPanel from "../Panels/LeftPanel";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";


const CategoriesForm = () =>{
    const [cForm, setCForm] = useState({categoryname:""});
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("")

    const formValues = (e)=>{
        const {name, value} = e.target;
        setCForm(prev=>({...prev, [name] : value}))
    }

    const submit =  (e) =>{
        e.preventDefault();

        axios.post('http://localhost:4040/category/create', cForm)
        .then(response => setMessage(response.data.message))
        .catch(error => console.error(error))
    
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    }

    useEffect(()=>{
        axios.get('http://localhost:4040/category')
        .then((response)=>{
            setretrievedCat(response.data.data)
        })
        .catch(error=>console.error(error))
    }, []);

    return(
        
        <main>
            {/* Left Panel */}
            <LeftPanel />

            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={message} /> }

                <FormsDashboardHead title='Categories Form' />

                <form className=' p-3 flex flex-col gap-4' onSubmit={submit}>

                    <FormInputs 
                    label='Name of Job Category' 
                    htmlFor='categoryname'
                    type='text'
                    id='categoryname'
                    name='categoryname'
                    value={cForm.categoryname}
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