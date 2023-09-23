import FormInputs from "../formInputs";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftPanel from "../Panels/LeftPanel";
import SubmittedBox from "../submittedBox";
import FormsDashboardHead from "../DashboardHeaders/FormsDashboardHead";
import { useParams } from "react-router-dom";

const CategoriesEditForm = () =>{
    const id = useParams(), ID = id.id;

    const [cForm, setCForm] = useState({categoriesname:""});
    const [submitted, setSubmitted] = useState(false);
    const [Msg, SetMsg] = useState("")

    const formValues = (e)=>{
        const {name, value} = e.target;
        setCForm(prev=>({...prev, [name] : value}))
    }

    const submit =  (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:4040/api/categories-update/${ID}`, cForm)
        .then(response => SetMsg(response.data))
        .catch(error => console.error(error))
    
        setSubmitted(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
    }

    useEffect(()=>{
        axios.get(`http://localhost:4040/api/categories-edit/${ID}`)
        .then((response)=>{
            const retrievedData = response.data[0];
            setCForm({categoriesname : retrievedData.categoriesname})
        })
        .catch(error=>console.error(error))
    }, []);
    
    return(
        
        <main>
            {/* Left Panel */}
            <LeftPanel />

            <section className=" md:ml-64 relative">

                {submitted && <SubmittedBox successMessage={'Category Successfully Added'} /> }

                <FormsDashboardHead title='Category Edit' />

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

export default CategoriesEditForm;