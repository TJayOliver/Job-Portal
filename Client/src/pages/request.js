import axios from "axios";

export const fetch = async(link, setState, setLoading, signal)=>{
    try {
        const response = await axios.get(`${link}`, {signal});
        setState(response.data);
        setLoading(false);
    } catch (error) {
        //console.error(error.message)
    }
}

// retrieve all categories and display it on the jobs page
export const allCategories = async(setCategories, signal) =>{
    try{
        const response = await axios.get('http://localhost:4040/api/categories-get', {signal});
        setCategories(response.data)
    }catch(error){
        console.error(error.message)
    }
}

// retrieve jobs description and display it  on jobs description page
export const jobdescription = async(setJobs,setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/jobs-description/${id}`, {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};

// job categories request
export const jobscategory = async(category, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/jobs-category/${category}`, {signal});
        setJobs(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};


// export const allScholarships = async(setScholarship, setloading, signal) =>{
//     try{
//         const response = await axios.get('http://localhost:4040/api/scholarships-get', {signal});
//         setScholarship(response.data)
//         setloading(false);
//     }catch(error){
//         console.error(error.message)
//     }
// }

// retrieve scholarships description and display it  on scholarships description page
export const scholarshipsdescription = async(setScholarship, setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/scholarships-description/${id}`, {signal});
        setScholarship(response.data)
        setloading(false);
    }catch(error){
        console.error(error.message)
    }
};


// articles description page
export const articlesDescription = async(setArticles, setloading, id, signal) =>{
    try{
        const response = await axios.get(`http://localhost:4040/api/articles-description/${id}`, {signal});
        setArticles(response.data)
        setloading(false)
    }catch(error){
        console.error(error.message)
    }
}

