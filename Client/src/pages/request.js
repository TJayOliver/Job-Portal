import axios from "axios";

// retrieve all jobs and display it on the jobs page
export const allJobs = (setJobs, setloading) =>{
    axios.get('http://localhost:4040/api/jobs-get')
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve featured jobs and display it on the homepage
export const featuredJobs = (setFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/jobs-featured')
    .then((response) => {
        setFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}

// retrieve all categories and display it on the jobs page
export const allCategories = (setCategories) =>{
    axios.get('http://localhost:4040/api/categories-get')
    .then((response)=>{
        setCategories(response.data)
    }).catch(error => console.error(error.message))
}

// jobdescription request
export const jobdescription = (setJobs, setloading, id) =>{
    axios.get(`http://localhost:4040/api/jobs-description/${id}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};

// job categories request
export const jobscategory = (category) =>{
    axios.get(`http://localhost:4040/api/jobs-category/${category}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};

// retrieve featured scholarships and display it on the homepage
export const featuredScholarships = (setFeatured, setloading) =>{
    axios.get('http://localhost:4040/api/scholarships-featured')
    .then((response) => {
        setFeatured(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
}


